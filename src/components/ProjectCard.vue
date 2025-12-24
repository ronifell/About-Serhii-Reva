<template>
  <div 
    class="card p-6 h-full flex flex-col group"
    :class="getAnimationClass(index)"
    :style="{ animationDelay: `${(index % 6) * 0.1}s` }"
  >
    <div class="flex-1">
      <div class="flex items-start justify-between mb-4">
        <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {{ project.title }}
        </h3>
        <a 
          :href="project.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-blue-800 transform hover:scale-110 transition-transform duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
      
      <p class="text-gray-600 mb-4 leading-relaxed flex-grow">
        {{ project.description || 'A professional web application built with modern technologies.' }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="skill in project.skills" 
          :key="skill"
          class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
        >
          {{ skill }}
        </span>
      </div>
    </div>
    
    <a 
      :href="project.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800 flex items-center group-hover:translate-x-2 transition-transform duration-200"
    >
      Visit Website
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
  index: Number
})

const getAnimationClass = (index) => {
  const animations = ['animate-fade-in-up', 'animate-slide-in-left', 'animate-slide-in-right', 'animate-scale-in']
  return animations[index % animations.length]
}
</script>

