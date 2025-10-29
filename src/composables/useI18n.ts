import { ref, computed } from 'vue'

export type Lang = 'tr' | 'en'

const currentLang = ref<Lang>((localStorage.getItem('lang') as Lang) || 'tr')

const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      experience: 'Deneyim',
      contact: 'İletişim',
      downloadCV: 'CV İndir',
    },
    home: {
      title: 'Modern, hızlı arayüzler',
      subtitle: 'Modern web teknolojileriyle sade, hızlı ve estetik arayüzler geliştiriyorum. Vue 3, TailwindCSS ve AI destekli otomasyon araçları sayesinde projeleri haftalar yerine günler içinde teslim edebilirim.',
      role: 'Frontend Developer — Ankara / Remote',
      techStack: ['Vue 3', 'Tailwind 4', 'TypeScript', 'Vite', 'Erişilebilirlik', 'Performans', 'Animasyonlar'],
    },
    about: {
      title: 'Hakkımda',
      whoami: 'Freelance frontend geliştirici',
      process: {
        title: 'Nasıl çalışırım?',
        items: [
          'Kapsamı netleştirip iteratif teslim',
          'Mobil öncelikli, erişilebilir arayüzler',
          'Ölçülebilir iyileştirme ve sade iletişim',
        ],
      },
      stack: {
        title: 'Stack',
        items: [
          'Vue 3 • TypeScript',
          'TailwindCSS 4.1',
          'Vite • AI Tools',
          'Accessibility-first',
        ],
      },
      location: 'Ankara / Remote',
      showMore: 'Daha fazla göster',
      showLess: 'Daha az göster',
      details: {
        skills: {
          title: 'Beceriler',
          frontend: {
            title: 'Frontend',
            items: ['Vue 3', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Responsive Design'],
          },
          tools: {
            title: 'Araçlar',
            items: ['Vite', 'Git', 'Playwright', 'PostgreSQL', 'AI Tools (ChatGPT, Claude, Gemini)'],
          },
        },
        languages: {
          title: 'Diller',
          items: ['Türkçe (Anadil)', 'İngilizce (İleri)'],
        },
      },
    },
    projects: {
      title: 'Projeler',
      subtitle: 'Seçili çalışmalar. Canlı demo ve kaynak kod bağlantıları aşağıda.',
      soon: 'Projeler yakında eklenecek.',
      items: [
        {
          title: 'Dashboard MVP',
          desc: 'Hızlı prototipleme, komponent mimarisi ve üretime hazır MVP.',
          tag: 'Vue + Tailwind',
          links: { demo: 'Demo', repo: 'Repo' },
        },
        {
          title: 'E‑ticaret Vitrin',
          desc: 'Modern landing, responsive grid ve görsel optimizasyon.',
          tag: 'Landing',
          links: { live: 'Canlı', repo: 'Repo' },
        },
      ],
    },
    experience: {
      title: 'Deneyim',
      subtitle: 'Öne çıkan roller, etki ve kullanılan teknolojiler.',
      items: [
        {
          title: 'Yazılım Mühendisi',
          company: 'Seneka Yazılım',
          period: 'Ağu 2025 – Halen',
          duration: '3 ay',
          location: 'Ankara, Türkiye',
          tags: ['Vue 3', 'TypeScript', 'TailwindCSS'],
        },
        {
          title: 'Yazılım Mühendisliği Stajyeri',
          company: 'Seneka Yazılım',
          period: 'Tem 2025 – Ağu 2025',
          duration: '2 ay',
          desc: '.NET masaüstü aracıyla PDF sayfalarını milimetrik konumda damgaladım; Gemini/ChatGPT/Claude ile hızlı prototip, hata ayıklama ve dokümantasyon ürettim.',
        },
        {
          title: 'Stajyer',
          company: 'Onlayer',
          period: 'Oca 2024 – Tem 2024',
          desc: 'Python + Playwright ile web otomasyon/validasyon yazdım; HTML çıktıları PostgreSQL kayıtlarıyla otomatik karşılaştıran, tekrarlanabilir ve CI\'a uygun testler geliştirdim.',
        },
      ],
    },
    contact: {
      title: 'Birlikte çalışalım',
      subtitle: 'MVP, landing veya dashboard—modern ve hızlı bir şekilde hayata geçirelim.',
      cta: 'E‑posta Gönder',
      response: '24 saat içinde geri dönüş.',
      floatingBtn: 'Hemen Çalışalım',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    home: {
      title: 'Modern, fast interfaces',
      subtitle: 'I develop simple, fast, and aesthetic interfaces with modern web technologies. Thanks to Vue 3, TailwindCSS, and AI-powered automation tools, I can deliver projects in days instead of weeks.',
      role: 'Frontend Developer — Ankara / Remote',
      techStack: ['Vue 3', 'Tailwind 4', 'TypeScript', 'Vite', 'Accessibility', 'Performance', 'Animations'],
    },
    about: {
      title: 'About',
      whoami: 'Freelance frontend developer',
      process: {
        title: 'How I work',
        items: [
          'Scope definition and iterative delivery',
          'Mobile-first, accessible interfaces',
          'Measurable improvement and clear communication',
        ],
      },
      stack: {
        title: 'Stack',
        items: [
          'Vue 3 • TypeScript',
          'TailwindCSS 4.1',
          'Vite • AI Tools',
          'Accessibility-first',
        ],
      },
      location: 'Ankara / Remote',
      showMore: 'Show more',
      showLess: 'Show less',
      details: {
        skills: {
          title: 'Skills',
          frontend: {
            title: 'Frontend',
            items: ['Vue 3', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Responsive Design'],
          },
          tools: {
            title: 'Tools',
            items: ['Vite', 'Git', 'Playwright', 'PostgreSQL', 'AI Tools (ChatGPT, Claude, Gemini)'],
          },
        },
        languages: {
          title: 'Languages',
          items: ['Turkish (Native)', 'English (Advanced)'],
        },
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected work. Live demos and source code links below.',
      soon: 'Projects will be added later.',
      items: [
        {
          title: 'Dashboard MVP',
          desc: 'Rapid prototyping, component architecture, and production-ready MVP.',
          tag: 'Vue + Tailwind',
          links: { demo: 'Demo', repo: 'Repo' },
        },
        {
          title: 'E‑commerce Landing',
          desc: 'Modern landing page, responsive grid, and image optimization.',
          tag: 'Landing',
          links: { live: 'Live', repo: 'Repo' },
        },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'Notable roles, impact, and technologies used.',
      items: [
        {
          title: 'Software Engineer',
          company: 'Seneka Yazılım',
          period: 'Aug 2025 – Present',
          duration: '3 months',
          location: 'Ankara, Turkey',
          tags: ['Vue 3', 'TypeScript', 'TailwindCSS'],
        },
        {
          title: 'Software Engineering Intern',
          company: 'Seneka Yazılım',
          period: 'Jul 2025 – Aug 2025',
          duration: '2 months',
          desc: 'Built a .NET desktop app that stamps PDF pages at precise positions; used Gemini/ChatGPT/Claude for rapid prototyping, debugging, and documentation generation.',
        },
        {
          title: 'Intern',
          company: 'Onlayer',
          period: 'Jan 2024 – Jul 2024',
          desc: 'Developed web automation/validation using Python + Playwright; automated HTML-to-PostgreSQL comparison tests, creating repeatable and CI-ready validation workflows.',
        },
      ],
    },
    contact: {
      title: 'Let\'s work together',
      subtitle: 'MVP, landing page, or dashboard—let\'s bring it to life quickly and modernly.',
      cta: 'Send Email',
      response: 'Response within 24 hours.',
      floatingBtn: 'Let\'s Work Together',
    },
  },
}

export function useI18n() {
  const t = computed(() => translations[currentLang.value])
  
  const setLang = (lang: Lang) => {
    currentLang.value = lang
    localStorage.setItem('lang', lang)
  }

  return { t, lang: computed(() => currentLang.value), setLang }
}

