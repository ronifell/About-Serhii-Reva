<template>
  <div 
    class="card p-6 md:p-8 relative overflow-hidden group"
    :class="index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
    <div class="pl-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 class="text-2xl font-bold text-white mb-1">{{ work.title }}</h3>
          <p class="text-xl text-blue-400 font-semibold">{{ work.company }}</p>
        </div>
        <div class="text-gray-400 font-medium mt-2 md:mt-0">
          {{ work.period }} • {{ work.location }}
        </div>
      </div>
      <p class="text-gray-300 mb-4 text-lg">{{ work.description }}</p>
      <ul class="space-y-2">
        <li v-for="(achievement, idx) in work.achievements" :key="idx" class="flex items-start text-gray-300">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>{{ achievement }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  work: Object,
  index: Number
})
</script>

