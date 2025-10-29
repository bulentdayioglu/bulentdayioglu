<template>
  <div>
    <!-- Home Section -->
    <section id="home" class="py-12 md:py-20 scroll-mt-20 relative">
      <!-- Morphing gradient blob -->
      <div aria-hidden="true" class="pointer-events-none absolute -z-10 -top-24 left-1/2 -translate-x-1/2 h-64 w-64 md:h-96 md:w-96 blob bg-gradient-to-tr from-sky-400/30 via-cyan-300/30 to-fuchsia-400/30"></div>

      <div class="max-w-3xl">
        <!-- Intro -->
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="h-14 w-14 rounded-full bg-gradient-to-br from-sky-400 to-fuchsia-500 p-[2px]">
              <div class="h-full w-full rounded-full bg-zinc-950 grid place-items-center text-zinc-300 text-sm">BD</div>
            </div>
            <div class="text-zinc-300 text-sm">{{ t.home.role }}</div>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400" v-matrix-text="matrixTitle">{{ t.home.title }}</span>
          </h1>
          <p class="text-zinc-300 max-w-2xl text-lg">
            {{ t.home.subtitle }}
          </p>
          <div class="flex flex-wrap items-center gap-2 pt-2 text-xs text-zinc-400">
            <span class="px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800">Vue 3</span>
            <span class="px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800">Tailwind 4</span>
            <span class="px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800">TypeScript</span>
            <span class="px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800">Vite</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Marquee (stronger contrast) -->
    <section aria-label="Tech stack" class="py-6">
      <div class="marquee">
        <div class="marquee-track gap-6 items-center text-emerald-300 text-sm">
          <template v-for="tech in t.home.techStack" :key="tech">
            <span class="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_0_1px_rgba(16,185,129,0.12)]">{{ tech }}</span>
          </template>
          <!-- Duplicate for seamless loop -->
          <template v-for="tech in t.home.techStack" :key="`dup-${tech}`">
            <span class="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_0_1px_rgba(16,185,129,0.12)]">{{ tech }}</span>
          </template>
          <!-- Third set for smooth loop -->
          <template v-for="tech in t.home.techStack" :key="`dup2-${tech}`">
            <span class="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_0_1px_rgba(16,185,129,0.12)]">{{ tech }}</span>
          </template>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-12 md:py-20 scroll-mt-20 border-t border-zinc-800/60">
      <div class="space-y-8">
        <header class="space-y-3">
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight">{{ t.about.title }}</h1>
        </header>

        <!-- Terminal/Code block style -->
        <div class="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8 overflow-hidden">
          <div class="relative flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
            <button 
              @click="showMoreDetails = false"
              :disabled="!showMoreDetails"
              :class="[
                'h-3 w-3 rounded-full transition-colors',
                showMoreDetails 
                  ? 'bg-yellow-400 hover:bg-yellow-300 cursor-pointer' 
                  : 'bg-yellow-400/30 cursor-not-allowed opacity-50'
              ]"
              title="Küçült"
            ></button>
            <button 
              @click="showMoreDetails = true"
              :disabled="showMoreDetails"
              :class="[
                'h-3 w-3 rounded-full transition-colors',
                !showMoreDetails 
                  ? 'bg-green-500 hover:bg-green-400 cursor-pointer' 
                  : 'bg-green-500/30 cursor-not-allowed opacity-50'
              ]"
              title="Büyüt"
            ></button>
            <div class="ml-2 text-xs text-zinc-400 code-block">~/about.md</div>
          </div>
          
          <div class="relative code-block text-zinc-300 space-y-3">
            <div class="flex gap-2">
              <span class="text-sky-400">$</span>
              <span class="text-zinc-300">whoami</span>
            </div>
            <div class="text-zinc-400 pl-4">→ {{ t.about.whoami }}</div>
            
            <div class="flex gap-2 mt-4">
              <span class="text-sky-400">$</span>
              <span class="text-zinc-300">cat process.md</span>
            </div>
            <div class="text-zinc-400 pl-4 space-y-1">
              <div v-for="item in t.about.process.items" :key="item">→ {{ item }}</div>
            </div>

            <div class="flex gap-2 mt-4">
              <span class="text-sky-400">$</span>
              <span class="text-zinc-300">ls -la stack/</span>
            </div>
            <div class="text-zinc-400 pl-4 grid md:grid-cols-2 gap-1">
              <div v-for="item in t.about.stack.items" :key="item">→ {{ item }}</div>
            </div>

            <div class="flex gap-2 mt-4">
              <span class="text-sky-400">$</span>
              <span class="text-zinc-300">location</span>
            </div>
            <div class="text-zinc-400 pl-4">→ {{ t.about.location }}</div>

            <!-- Expandable details -->
            <div v-if="showMoreDetails" class="mt-6 pt-4 border-t border-zinc-800 space-y-4">
              <!-- Skills -->
              <div class="flex gap-2 mt-4">
                <span class="text-sky-400">$</span>
                <span class="text-zinc-300">ls skills/</span>
              </div>
              <div class="text-zinc-400 pl-4 space-y-2">
                <div>
                  <span class="text-emerald-400">frontend/</span>
                  <div class="pl-4 mt-1 grid md:grid-cols-2 gap-1">
                    <div v-for="skill in t.about.details.skills.frontend.items" :key="skill">→ {{ skill }}</div>
                  </div>
                </div>
                <div>
                  <span class="text-emerald-400">tools/</span>
                  <div class="pl-4 mt-1 grid md:grid-cols-2 gap-1">
                    <div v-for="tool in t.about.details.skills.tools.items" :key="tool">→ {{ tool }}</div>
                  </div>
                </div>
              </div>

              <!-- Languages -->
              <div class="flex gap-2 mt-4">
                <span class="text-sky-400">$</span>
                <span class="text-zinc-300">cat languages.txt</span>
              </div>
              <div class="text-zinc-400 pl-4 space-y-1">
                <div v-for="lang in t.about.details.languages.items" :key="lang">→ {{ lang }}</div>
              </div>
            </div>

          </div>

          
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-12 md:py-20 scroll-mt-20 border-t border-zinc-800/60">
      <div class="space-y-6">
        <header class="space-y-2">
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight">{{ t.projects.title }}</h1>
          <p class="text-zinc-300">{{ t.projects.subtitle }}</p>
        </header>
        <div class="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 text-center text-zinc-300">
          {{ t.projects.soon }}
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-12 md:py-20 scroll-mt-20 border-t border-zinc-800/60">
      <div class="space-y-8">
        <header class="space-y-2">
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight">{{ t.experience.title }}</h1>
          <p class="text-zinc-300">{{ t.experience.subtitle }}</p>
        </header>

        <!-- Modern timeline -->
        <ol class="relative pl-6 space-y-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-emerald-400/60 before:via-zinc-700/50 before:to-lime-400/60">
          <li v-for="(item, idx) in t.experience.items" :key="idx" class="group">
            <div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full" 
                 :class="idx === 0 ? 'bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.18)]' : idx === 1 ? 'bg-emerald-300 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]' : 'bg-zinc-600 shadow-[0_0_0_4px_rgba(161,161,170,0.18)]'"></div>
            <div class="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 transition group-hover:border-zinc-700 group-hover:-translate-y-0.5">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <h3 class="font-semibold">{{ item.title }} — {{ item.company }}</h3>
                <span class="text-zinc-400 text-sm">
                  {{ item.period }}<template v-if="item.duration"> · {{ item.duration }}</template><template v-if="item.location"> · {{ item.location }}</template>
                </span>
              </div>
              <p v-if="item.desc" class="text-zinc-300 text-sm mt-2">{{ item.desc }}</p>
              <div v-if="item.tags" class="flex flex-wrap gap-2 mt-3 text-xs text-zinc-300">
                <span v-for="tag in item.tags" :key="tag" class="px-2 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">{{ tag }}</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

    

    <!-- Contact Section -->
    <section id="contact" class="py-12 md:py-20 scroll-mt-20 border-t border-zinc-800/60">
      <div class="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 md:p-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">{{ t.contact.title }}</h2>
        <p class="text-zinc-300 mt-3 max-w-2xl mx-auto">{{ t.contact.subtitle }}</p>
        <div class="flex flex-wrap items-center justify-center gap-3 mt-6">
          <a href="mailto:bulentdayioglu123123@gmail.com" class="px-5 py-2 rounded-md bg-emerald-400 text-zinc-900 font-medium shadow-sm hover:shadow-emerald-400/20 hover:-translate-y-0.5 transition">{{ t.contact.cta }}</a>
          <a href="/cv.pdf" download class="px-5 py-2 rounded-md border border-zinc-700 hover:border-zinc-600 transition">{{ t.nav.downloadCV }}</a>
        </div>
        <div class="text-xs text-zinc-400 mt-3">{{ t.contact.response }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { vMatrixText } from '../directives/matrixText'
import { useI18n } from '../composables/useI18n'
import { computed, ref } from 'vue'

const { t } = useI18n()
const matrixTitle = computed(() => t.value.home.title)
const showMoreDetails = ref(false)
</script>

<style scoped>
</style>


