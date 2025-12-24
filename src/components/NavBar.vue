<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all duration-300" :class="{ 'shadow-lg': scrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="text-2xl font-bold gradient-text">
          Serhii Reva
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
          <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</a>
          <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Experience</a>
          <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</a>
        </div>
        <button @click="toggleMenu" class="md:hidden text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-show="menuOpen" class="md:hidden pb-4 space-y-2 animate-fade-in">
        <a href="#about" @click="closeMenu" class="block text-gray-700 hover:text-blue-600 py-2">About</a>
        <a href="#skills" @click="closeMenu" class="block text-gray-700 hover:text-blue-600 py-2">Skills</a>
        <a href="#experience" @click="closeMenu" class="block text-gray-700 hover:text-blue-600 py-2">Experience</a>
        <a href="#projects" @click="closeMenu" class="block text-gray-700 hover:text-blue-600 py-2">Projects</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

