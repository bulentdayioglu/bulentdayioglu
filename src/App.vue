<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SocialLinks from './components/SocialLinks.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { useI18n } from './composables/useI18n'

const { t } = useI18n()

const isMobileOpen = ref(false)
const activeSection = ref('home')
const scrollProgress = ref(0)

function closeMobile() {
  isMobileOpen.value = false
}

function scrollToSection(hash: string) {
  closeMobile()
  const element = document.querySelector(hash)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

function handleNavClick(e: Event, hash: string) {
  e.preventDefault()
  scrollToSection(hash)
}

function updateActiveSection() {
  const sections: string[] = ['home', 'about', 'projects', 'experience', 'contact']
  const scrollPosition = window.scrollY + 100

  // If near bottom, force contact active
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10
  if (atBottom) {
    activeSection.value = 'contact'
    return
  }

  for (let i = sections.length - 1; i >= 0; i--) {
    const sectionId = sections[i]!
    const section = document.getElementById(sectionId)
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sectionId
      break
    }
  }
}

onMounted(() => {
  function updateProgress() {
    const doc = document.documentElement
    const scrollTop = window.scrollY
    const height = doc.scrollHeight - window.innerHeight
    scrollProgress.value = height > 0 ? (scrollTop / height) * 100 : 0
  }

  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('scroll', updateProgress)
  window.addEventListener('resize', updateProgress)
  updateActiveSection()
  updateProgress()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <!-- Scroll progress bar -->
    <div class="fixed left-0 top-0 h-[3px] z-[60] bg-gradient-to-r from-emerald-400 via-lime-300 to-green-400" :style="{ width: scrollProgress + '%' }"></div>
    <!-- Decorative background layers -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(34,197,94,0.14),transparent_60%)]"></div>
      <div class="absolute -top-20 right-0 h-72 w-72 rounded-full blur-3xl opacity-20 bg-emerald-500/40 glow-float-1"></div>
      <div class="absolute -bottom-24 left-0 h-80 w-80 rounded-full blur-3xl opacity-10 bg-green-500/30 glow-float-2"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent"></div>
    </div>

    <header class="sticky top-0 z-50 bg-zinc-950/95 border-b border-zinc-800/50">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#about" @click.prevent="scrollToSection('#about')" class="font-semibold text-lg text-zinc-100 hover:text-emerald-400 transition-colors">Bulent Dayioglu</a>

        <button class="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
                @click="isMobileOpen = !isMobileOpen" aria-label="Menüyü aç/kapat">
          <span v-if="!isMobileOpen">Menü</span>
          <span v-else>Kapat</span>
        </button>

        <ul class="hidden md:flex items-center gap-1 text-sm">
          <li>
            <a href="#home" @click.prevent="handleNavClick($event, '#home')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'home' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.home }}</a>
          </li>
          <li>
            <a href="#about" @click.prevent="handleNavClick($event, '#about')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'about' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.about }}</a>
          </li>
          <li>
            <a href="#projects" @click.prevent="handleNavClick($event, '#projects')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'projects' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.projects }}</a>
          </li>
          <li>
            <a href="#experience" @click.prevent="handleNavClick($event, '#experience')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'experience' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.experience }}</a>
          </li>
          <li>
            <a href="#contact" @click.prevent="handleNavClick($event, '#contact')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'contact' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.contact }}</a>
          </li>
          <li>
            <a href="/cv.pdf" download class="ml-2 px-4 py-2 rounded-md bg-emerald-400 text-zinc-900 font-medium hover:bg-emerald-300 transition-colors">{{ t.nav.downloadCV }}</a>
          </li>
          <li class="ml-2">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>

      <div v-if="isMobileOpen" class="md:hidden border-t border-zinc-800/50 bg-zinc-950">
        <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
          <div class="flex justify-end"><LanguageSwitcher /></div>
          <ul class="flex flex-col gap-1 text-sm">
            <li><a href="#home" @click.prevent="scrollToSection('#home')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'home' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.home }}</a></li>
            <li><a href="#about" @click.prevent="scrollToSection('#about')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'about' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.about }}</a></li>
            <li><a href="#projects" @click.prevent="scrollToSection('#projects')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'projects' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.projects }}</a></li>
            <li><a href="#experience" @click.prevent="scrollToSection('#experience')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'experience' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.experience }}</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('#contact')" :class="['px-4 py-2 rounded-md transition-colors', activeSection === 'contact' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-300 hover:text-emerald-400']">{{ t.nav.contact }}</a></li>
          <li>
            <a href="/cv.pdf" download class="inline-block px-4 py-2 rounded-md bg-emerald-400 text-zinc-900 font-medium hover:bg-emerald-300 transition-colors">{{ t.nav.downloadCV }}</a>
          </li>
          </ul>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-8">
      <router-view />
    </main>

    <footer class="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-400 border-t border-zinc-800">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <SocialLinks />
        <div>© {{ new Date().getFullYear() }} Bulent Dayioglu</div>
      </div>
    </footer>

    <!-- Floating Hire Me Button -->
    <a href="mailto:bulentdayioglu123123@gmail.com" class="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-emerald-400 text-zinc-900 font-medium shadow-lg hover:-translate-y-0.5 hover:shadow-emerald-400/30 transition">
      {{ t.contact.floatingBtn }}
    </a>
  </div>
  
</template>

<style scoped>
</style>
