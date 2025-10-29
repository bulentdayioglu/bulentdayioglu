<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { lang, setLang } = useI18n()
</script>

<template>
  <div class="flex items-center gap-1 border border-zinc-800 rounded-md px-1 py-1 bg-zinc-900/50">
    <button
      @click="setLang('tr')"
      :class="['px-2 py-1 rounded text-xs font-medium transition-colors', lang === 'tr' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-400 hover:text-emerald-400']"
    >
      TR
    </button>
    <button
      @click="setLang('en')"
      :class="['px-2 py-1 rounded text-xs font-medium transition-colors', lang === 'en' ? 'bg-emerald-500/20 text-emerald-300' : 'text-zinc-400 hover:text-emerald-400']"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
</style>

