<template>
  <div 
    class="card p-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-[400px] flex flex-col" 
    :style="computedStyle"
  >
    <div v-if="backgroundImage" class="absolute inset-0 opacity-70 z-0">
      <img :src="backgroundImage" :alt="title" class="w-full h-full object-cover" />
    </div>
    <div class="relative z-10 mt-auto">
      <div class="flex flex-wrap">
        <span 
          v-for="skill in skills" 
          :key="skill"
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  skills: Array,
  icon: String,
  style: Object,
  backgroundImage: String
})

const computedStyle = computed(() => {
  return props.style || {}
})
</script>

