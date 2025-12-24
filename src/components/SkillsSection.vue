<template>
  <section id="skills" class="section-container bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Technologies and tools I work with to bring ideas to life
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <SkillCategory 
        title="Front-End"
        :skills="frontEndSkills"
        icon="🎨"
        class="animate-slide-in-left"
      />
      <SkillCategory 
        title="Back-End"
        :skills="backEndSkills"
        icon="⚙️"
        class="animate-slide-in-left"
        :style="{ animationDelay: '0.1s' }"
      />
      <SkillCategory 
        title="Databases"
        :skills="databaseSkills"
        icon="💾"
        class="animate-slide-in-right"
        :style="{ animationDelay: '0.2s' }"
      />
      <SkillCategory 
        title="Cloud & DevOps"
        :skills="devOpsSkills"
        icon="☁️"
        class="animate-slide-in-right"
        :style="{ animationDelay: '0.3s' }"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SkillCategory from './SkillCategory.vue'

const frontEndSkills = ['React', 'Vue.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS', 'PWA']
const backEndSkills = ['Node.js', 'Express', 'NestJS', 'PHP/Laravel', 'Python/Django', 'REST APIs', 'GraphQL']
const databaseSkills = ['PostgreSQL', 'MySQL', 'MongoDB']
const devOpsSkills = ['AWS', 'Docker', 'CI/CD', 'Git', 'Agile/Scrum']
</script>

