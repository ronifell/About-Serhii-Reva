<template>
  <div class="card p-6 hover:scale-105 transition-transform duration-300" :style="style">
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ title }}</h3>
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
</template>

<script setup>
defineProps({
  title: String,
  skills: Array,
  icon: String,
  style: Object
})
</script>

