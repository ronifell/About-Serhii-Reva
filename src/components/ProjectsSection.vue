<template>
  <section id="projects" class="section-container">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Portfolio Projects</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        A collection of websites and applications I've contributed to
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref([
  {
    title: 'Quizlet',
    url: 'https://quizlet.com',
    skills: ['React', 'Next.js', 'Html', 'CSS', 'PWA', 'Laravel', 'PostgreSQL'],
    description: 'Help every student confidently learn anything. With free flashcard sets, study modes, and in-class games like Quizlet Live, you can instantly create a more engaged classroom.'
  },
  {
    title: 'Deltek GovWin IQ',
    url: 'https://www.deltek.com/en/government-contracting/govwin',
    skills: ['Bootstrap', 'jQuery', 'Python', 'PostgreSQL', 'TypeScript', 'Html', 'CSS', 'Vue'],
    description: 'Find and Win Government Contracts with Analyst Insights. Stay ahead by targeting best-fit contracts early on with validated insights from government decision-makers and expert analysis.'
  },
  {
    title: 'StrategyFox',
    url: 'https://deyga.strategyfox.in/',
    skills: ['Three.js', 'Unity 3D', 'Game Development', 'Game Programming', 'Game Design'],
    description: 'Great 3D space'
  },
  {
    title: 'Carrd',
    url: 'https://carrd.co/',
    skills: ['Open Graph', 'jQuery', 'Django', 'MySQL', 'React', 'TypeScript'],
    description: "Whether it's a personal profile, a landing page to capture emails, or something a bit more elaborate, Carrd has you covered. Simple, responsive, and yup — totally free."
  },
  {
    title: 'Gardenly',
    url: 'https://gardenly.app/es',
    skills: ['React', 'Next.js', 'stripe', 'TailWind CSS', 'Radix UI', 'NestJS', 'PostgreSQL', 'ios', 'Android'],
    description: 'Three simple steps to the garden of your dreams. No design experience is required. Simply take a photo of your outdoor space and let Gardenly do the rest.'
  },
  {
    title: 'EAU DE LEON',
    url: 'https://eaudeleon.com.br/',
    skills: ['Shopify', 'Vue', 'Html', 'CSS', 'PHP', 'MongoDB', 'TypeScript', 'ios', 'Android'],
    description: ''
  },
  {
    title: 'MarketMan',
    url: 'https://www.marketman.com/',
    skills: ['React', 'Material UI', 'Node.js', 'Django', 'MongoDB', 'Express', 'TypeScript'],
    description: 'Restaurant Inventory Management Software for Cost Control & Efficiency'
  },
  {
    title: 'Tesoro',
    url: 'https://www.tesoroxp.com/',
    skills: ['Vue', 'Open Graph', 'Tailwind CSS', 'MongoDB', 'ios', 'Android'],
    description: 'Our patented system connects brands to gamers like never before. Our patented system works seamlessly with any merchant - local, online, or nationwide. Zero integration required.'
  },
  {
    title: 'HELM',
    url: 'https://www.helm.yt/',
    skills: ['React', 'Next.js', 'PWA', 'Amason Web Services', 'Supabase'],
    description: 'We delivered a dynamic web app integrated via API with external boat providers. The platform was split into two distinct spaces: a user-facing website and a broker-focused web app.'
  },
  {
    title: 'Inversa',
    url: 'https://inversa.com/',
    skills: ['Vue.js', 'Nuxt.js', 'Open Graph', 'CSS', 'Node.js', 'Express', 'MySQL'],
    description: 'Inversa is building the new standard for invasive species management: measurable, transparent, and economically self-reinforcing.'
  },
  {
    title: 'struckd-showdown Game',
    url: 'https://play.unity.com/en/games/79cae162-6dc7-4145-9181-ade2ea833d0d/struckd-showdown',
    skills: ['Unity3D', 'Game Development', 'Game Programming', 'Game Design'],
    description: 'Welcome to My game'
  },
  {
    title: 'PHOPET',
    url: 'https://www.phopet.com/',
    skills: ['PHP', 'Laravel', 'Livewire', 'Swiper', 'Nginx', 'Vue', 'Express', 'Node.js', 'MySQL', 'ios', 'Android'],
    description: "Make your pet the star! Easily turn every photo into a work of art and create unforgettable memories of your furry friend."
  },
  {
    title: 'SlimPathAI',
    url: 'https://sllimpathai.com/',
    skills: ['Next.js', 'TailWind CSS', 'Supabase', 'HTML', 'stripe', 'PayPal', 'PWA', 'ios', 'Android'],
    description: 'Your Personal Al-Powered Weight Loss Journey. Transform your habits with personalized guidance, daily micro-actions, and intelligent coaching tailored to your unique metabolic profile.'
  }
])
</script>

