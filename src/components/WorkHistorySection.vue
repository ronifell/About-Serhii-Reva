<template>
  <section id="experience" class="section-container">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        My professional journey over the years
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto space-y-8">
      <WorkItem 
        v-for="(work, index) in workHistory" 
        :key="index"
        :work="work"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import WorkItem from './WorkItem.vue'

const workHistory = ref([
  {
    title: 'Full-Stack Developer',
    company: 'SaaS Platform',
    location: 'Remote',
    period: '2024',
    description: 'Built a SaaS web platform for business analytics using React + Node.js',
    achievements: [
      'Integrated payment system (Stripe) and secure user authentication',
      'Improved performance by 35% through code optimization and database indexing'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'E-commerce Marketplace',
    location: 'Remote',
    period: '2023',
    description: 'Developed dynamic UI with Next.js, TailwindCSS',
    achievements: [
      'Implemented product filtering, cart, and checkout flow',
      'Collaborated with back-end team to integrate RESTful APIs'
    ]
  },
  {
    title: 'Back-End Developer',
    company: 'FinTech App',
    location: 'Remote',
    period: '2022',
    description: 'Designed and deployed scalable microservices using NestJS + PostgreSQL',
    achievements: [
      'Built secure authentication with JWT and role-based access control',
      'Optimized API response time, reducing load latency by 40%'
    ]
  },
  {
    title: 'API Integration Specialist',
    company: 'Logistics Platform',
    location: 'Remote',
    period: '2021',
    description: 'Developed and integrated REST + GraphQL APIs for shipment tracking',
    achievements: [
      'Connected with Google Maps API for real-time geolocation services',
      'Automated data exchange between 3rd-party logistics partners and client dashboard',
      'Reduced manual processes by 60% through API-driven automation'
    ]
  },
  {
    title: 'Android Developer',
    company: 'Fitness Tracking App',
    location: 'Remote',
    period: '2020',
    description: 'Developed a fitness tracking app using Kotlin + Android Studio',
    achievements: [
      'Integrated GPS tracking, workout logging, and Firebase authentication',
      'Published the app to Google Play Store with 10,000+ downloads in the first 6 months'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Startup MVP',
    location: 'Remote',
    period: '2019',
    description: 'Created a minimum viable product (MVP) for a social networking app',
    achievements: [
      'Used Vue.js + Laravel for rapid development',
      'Delivered the project from idea to deployment in 3 months'
    ]
  }
])
</script>

