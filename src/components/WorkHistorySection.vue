<template>
  <section ref="experienceSection" id="experience" class="experience-section">
    <div class="text-center mb-16 animate-fade-in-up sticky top-20 z-10 bg-gray-900/90 backdrop-blur-sm py-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        My professional journey over the years
      </p>
    </div>
    
    <div class="work-experience-container">
      <div ref="workItemsWrapper" class="work-items-wrapper">
        <!-- Original items -->
        <WorkItem 
          v-for="(work, index) in workHistory" 
          :key="`original-${index}`"
          :work="work"
          :index="index"
        />
        <!-- Duplicated items for seamless loop -->
        <WorkItem 
          v-for="(work, index) in workHistory" 
          :key="`duplicate-${index}`"
          :work="work"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import WorkItem from './WorkItem.vue'

// GSAP is loaded via CDN in index.html
const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger

const workItemsWrapper = ref(null)
const experienceSection = ref(null)

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

let resizeHandler = null
let scrollTriggerInstance = null
let animationInstance = null

onMounted(async () => {
  // Wait for GSAP to be available from CDN
  if (!gsap || !ScrollTrigger) {
    console.error('GSAP not loaded. Please check CDN scripts in index.html')
    return
  }
  
  gsap.registerPlugin(ScrollTrigger)
  
  await nextTick()
  
  // Wait for DOM to fully render
  setTimeout(() => {
    if (!workItemsWrapper.value) {
      return
    }
    
    const initAnimation = () => {
      const items = workItemsWrapper.value.children
      if (items.length === 0) {
        return
      }
      
      // Kill existing animations if any
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill()
        scrollTriggerInstance = null
      }
      if (animationInstance) {
        animationInstance.kill()
        animationInstance = null
      }
      
      const gap = 32 // 2rem = 32px
      const itemCount = items.length / 2 // Half are duplicates
      
      // Calculate width of one set of items (original items only)
      let singleSetWidth = 0
      for (let i = 0; i < itemCount; i++) {
        const itemWidth = items[i].offsetWidth || items[i].getBoundingClientRect().width || 700
        singleSetWidth += itemWidth
        if (i < itemCount - 1) {
          singleSetWidth += gap
        }
      }
      
      // Calculate total width (both sets)
      let totalWidth = 0
      Array.from(items).forEach((item, index) => {
        const itemWidth = item.offsetWidth || item.getBoundingClientRect().width || 700
        totalWidth += itemWidth
        if (index < items.length - 1) {
          totalWidth += gap
        }
      })
      
      // Set the wrapper width to accommodate all items
      workItemsWrapper.value.style.width = `${totalWidth}px`
      
      const container = workItemsWrapper.value.parentElement
      const section = experienceSection.value || document.getElementById('experience')
      
      if (!container || !section) {
        return
      }
      
      // Reset transform to start position
      gsap.set(workItemsWrapper.value, { x: 0 })
      
      // Create continuous automatic animation that flows left
      // Animation duration for one complete loop (in seconds)
      const animationDuration = 20 // 20 seconds for one full cycle
      
      // Create infinite looping animation that moves items to the left
      const animation = gsap.to(workItemsWrapper.value, {
        x: -singleSetWidth, // Move exactly one set width to the left
        duration: animationDuration,
        ease: 'none', // Linear movement
        repeat: -1, // Infinite repeat
        onRepeat: () => {
          // When animation repeats, reset position seamlessly
          gsap.set(workItemsWrapper.value, { x: 0 })
        }
      })
      
      // Store animation reference for cleanup
      animationInstance = animation
    }
    
    // Initialize animation
    initAnimation()
    
    // Retry after delays to ensure all elements are fully rendered
    setTimeout(initAnimation, 300)
    setTimeout(initAnimation, 800)
    
    // Store resize handler for cleanup
    resizeHandler = () => {
      ScrollTrigger.refresh()
      setTimeout(initAnimation, 100)
    }
    window.addEventListener('resize', resizeHandler)
  }, 300)
})

onUnmounted(() => {
  // Remove resize listener
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
  
  // Kill animation instance
  if (animationInstance) {
    animationInstance.kill()
    animationInstance = null
  }
  
  // Kill any ScrollTriggers as backup
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

