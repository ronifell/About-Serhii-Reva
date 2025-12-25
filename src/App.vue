<template>
  <div class="min-h-screen relative">
    <!-- Custom Cursor -->
    <div 
      v-if="cursorVisible"
      class="custom-cursor"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`
      }"
    >
      <img 
        src="/Serhii Reva.png" 
        alt="Cursor" 
        class="cursor-image" 
        loading="eager"
        fetchpriority="high"
        width="32"
        height="32"
      />
    </div>
    
    <!-- Sparkling Background -->
    <div class="sparkle-background fixed inset-0 pointer-events-none z-0">
      <div 
        v-for="sparkle in sparkles" 
        :key="sparkle.id" 
        class="sparkle"
        :style="{
          left: `${sparkle.left}%`,
          top: `${sparkle.top}%`,
          animationDelay: `${sparkle.delay}s`,
          animationDuration: `${sparkle.duration}s`
        }">
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10">
      <!-- Navigation -->
      <NavBar />
      
      <!-- Hero/About Section -->
      <HeroSection />
      
      <!-- Skills Section -->
      <SkillsSection />
      
      <!-- Work History Section -->
      <WorkHistorySection />
      
      <!-- Education Section -->
      <EducationSection />
      
      <!-- Projects Section -->
      <ProjectsSection />
      
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkHistorySection from './components/WorkHistorySection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'

// Generate sparkle data once
const sparkles = ref([])

// Custom cursor state
const cursorX = ref(0)
const cursorY = ref(0)
const cursorVisible = ref(true)

const updateCursor = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

const showCursor = () => {
  cursorVisible.value = true
}

const hideCursor = () => {
  cursorVisible.value = false
}

onMounted(() => {
  // Generate 50 sparkles with random positions and timings
  sparkles.value = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2
  }))
  
  // Hide default cursor
  document.body.style.cursor = 'none'
  
  // Track mouse movement on entire document
  document.addEventListener('mousemove', updateCursor)
  document.addEventListener('mouseenter', showCursor)
  document.addEventListener('mouseleave', hideCursor)
})

onUnmounted(() => {
  // Restore default cursor
  document.body.style.cursor = 'auto'
  document.removeEventListener('mousemove', updateCursor)
  document.removeEventListener('mouseenter', showCursor)
  document.removeEventListener('mouseleave', hideCursor)
})
</script>

