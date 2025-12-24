<template>
  <div 
    class="work-item card relative overflow-visible group flex-shrink-0 rotating-border-light"
  >
    <div class="rotating-border-inner h-full flex flex-col justify-end p-5 md:p-6" :style="backgroundStyle">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 class="text-2xl font-bold text-white mb-1">{{ work.title }}</h3>
          <p class="text-xl text-blue-400 font-semibold">{{ work.company }}</p>
        </div>
        <div class="text-gray-400 font-medium mt-2 md:mt-0">
          {{ work.period }} • {{ work.location }}
        </div>
      </div>
      <ul class="space-y-2 mb-4">
        <li v-for="(achievement, idx) in work.achievements" :key="idx" class="flex items-start text-gray-300">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>{{ achievement }}</span>
        </li>
      </ul>
      <p class="text-gray-300 text-lg">{{ work.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  work: Object,
  index: Number
})

const backgroundStyle = computed(() => {
  const imageNumber = props.index + 1
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/work_${imageNumber}.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
})
</script>

