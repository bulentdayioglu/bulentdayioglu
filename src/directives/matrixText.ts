import type { Directive } from 'vue'

// Matrix-style reveal: characters scramble with green glyphs until they settle to final text
const elementState = new WeakMap<HTMLElement, {
  timer: ReturnType<typeof setInterval> | null
  io: IntersectionObserver | null
}>()

export const vMatrixText: Directive<HTMLElement, string | undefined> = {
  mounted(el, binding) {
    runAnimation(el, binding.value)
  },
  updated(el, binding) {
    // Re-run animation when binding value changes (e.g., language switch)
    const newText = (binding.value ?? el.textContent ?? '').toString()
    const currentText = el.textContent ?? ''
    if (newText && newText !== currentText) {
      runAnimation(el, binding.value)
    }
  },
  unmounted(el) {
    // Cleanup on unmount
    const state = elementState.get(el)
    if (state) {
      if (state.timer) clearInterval(state.timer)
      if (state.io) state.io.disconnect()
      elementState.delete(el)
    }
  },
}

function runAnimation(el: HTMLElement, value: string | undefined) {
  // Get or create state for this element
  let state = elementState.get(el)
  if (!state) {
    state = { timer: null, io: null }
    elementState.set(el, state)
  }

  // Clean up previous animation
  if (state.timer) clearInterval(state.timer)
  if (state.io) state.io.disconnect()
  
  const targetText = (value ?? el.textContent ?? '').toString()
  if (!targetText) return

  // Lock layout to avoid shifting
  const originalDisplay = el.style.display
  const originalFont = el.style.fontFamily
  const originalBG = el.style.backgroundImage
  const originalClip = el.style.backgroundClip
  const originalWebkitClip = (el.style as any).webkitBackgroundClip
  const rect = el.getBoundingClientRect()
  el.style.display = 'inline-block'
  el.style.whiteSpace = 'nowrap'
  el.style.width = `${rect.width}px`
  el.style.willChange = 'contents'
  // enforce green gradient during animation for visibility
  el.style.color = 'transparent'
  // Use same palette as Tailwind classes: green-400, emerald-300, lime-400
  el.style.backgroundImage = 'linear-gradient(90deg,#4ade80,#6ee7b7,#a3e635)'
  el.style.backgroundClip = 'text'
  ;(el.style as any).webkitBackgroundClip = 'text'

  const glyphs = 'アイウエオｱｲｳｴｵカキクケコ01{}[]<>+=-_*#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const durationMs = 1100
  const frameMs = 28

  const reveal = () => {
    const start = performance.now()
    state.timer = setInterval(() => {
      const now = performance.now()
      const t = Math.min(1, (now - start) / durationMs)
      const settledCount = Math.floor(t * targetText.length)
      let out = ''
      for (let i = 0; i < targetText.length; i++) {
        const ch = targetText[i]
        if (ch === ' ') {
          out += ' '
          continue
        }
        if (i < settledCount) {
          out += ch
        } else {
          out += glyphs[Math.floor(Math.random() * glyphs.length)]
        }
      }
      el.textContent = out
      if (t >= 1) {
        if (state.timer) clearInterval(state.timer)
        state.timer = null
        el.textContent = targetText
        // restore styles and unlock width
        el.style.display = originalDisplay
        el.style.whiteSpace = ''
        el.style.width = ''
        el.style.willChange = ''
        el.style.fontFamily = originalFont
        el.style.backgroundImage = originalBG
        el.style.backgroundClip = originalClip
        ;(el.style as any).webkitBackgroundClip = originalWebkitClip
      }
    }, frameMs)
  }

  // Trigger when visible
  state.io = new IntersectionObserver((entries) => {
    const visible = entries.some((e) => e.isIntersecting)
    if (visible) {
      if (state.io) {
        state.io.disconnect()
        state.io = null
      }
      reveal()
    }
  }, { threshold: 0.6 })
  state.io.observe(el)
}


