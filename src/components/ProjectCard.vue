<template>
  <div 
    class="card-wrapper relative h-full flex flex-col group overflow-hidden rounded-xl"
    :class="getAnimationClass(index)"
    :style="{ animationDelay: `${(index % 6) * 0.1}s` }"
    :data-project="index"
  >
    <!-- Website Background - First page of the website -->
    <div class="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-60 transition-opacity duration-300 overflow-hidden">
      <!-- Use screenshot for sites that block iframes -->
      <img
        v-if="needsScreenshot"
        :src="screenshotUrl"
        :alt="project.title + ' homepage screenshot'"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        @error="handleScreenshotError"
      />
      <!-- Use iframe for sites that allow embedding -->
      <iframe
        v-else
        :src="project.url"
        class="absolute inset-0 w-full h-full border-0 pointer-events-none"
        style="transform: scale(0.33); transform-origin: top left; width: 300%; height: 300%;"
        frameborder="0"
        scrolling="no"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
    
    <!-- Dark Overlay for Readability -->
    <div class="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/40 transition-colors duration-300"></div>
    
    <!-- Card Content -->
    <div class="card p-6 h-full flex flex-col relative z-10 bg-transparent border-0">
      <div class="flex-1">
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
            {{ project.title }}
          </h3>
          <a 
            :href="project.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-transform duration-200 z-20 relative"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
        
        <p class="text-gray-300 mb-4 leading-relaxed flex-grow">
          {{ project.description || 'A professional web application built with modern technologies.' }}
        </p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="skill in project.skills" 
            :key="skill"
            class="text-xs bg-gray-700/70 text-gray-300 border border-gray-600/50 px-3 py-1 rounded-full font-medium backdrop-blur-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      
      <a 
        :href="project.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block mt-4 text-blue-400 font-semibold hover:text-blue-300 flex items-center group-hover:translate-x-2 transition-transform duration-200 z-20 relative"
      >
        Visit Website
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  project: Object,
  index: Number
})

const screenshotServiceIndex = ref(0)

// List of sites that are known to block iframes
const sitesNeedingScreenshot = [
  'quizlet.com',
  'deltek.com',
  'carrd.co',
  'eaudeleon.com.br',
  'phopet.com',
  'slimpathai.com',
  'sllimpathai.com' // Note: URL has double 'l'
]

// Multiple screenshot services for reliability
const screenshotServices = [
  (url) => `https://image.thum.io/get/width/1200/crop/900/${encodeURIComponent(url)}`,
  (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=900`,
  (url) => `https://mini.s-shot.ru/1024x768/PNG/1200/Z100/?${encodeURIComponent(url)}`
]

const getAnimationClass = (index) => {
  const animations = ['animate-fade-in-up', 'animate-slide-in-left', 'animate-slide-in-right', 'animate-scale-in']
  return animations[index % animations.length]
}

// Check if this site needs a screenshot
const needsScreenshot = computed(() => {
  try {
    const urlObj = new URL(props.project.url)
    const hostname = urlObj.hostname.replace('www.', '')
    return sitesNeedingScreenshot.some(site => hostname.includes(site))
  } catch {
    return false
  }
})

// Generate screenshot URL
const screenshotUrl = computed(() => {
  const serviceIndex = screenshotServiceIndex.value % screenshotServices.length
  return screenshotServices[serviceIndex](props.project.url)
})

const handleScreenshotError = () => {
  // Try next screenshot service
  if (screenshotServiceIndex.value < screenshotServices.length - 1) {
    screenshotServiceIndex.value++
  }
}
</script>

