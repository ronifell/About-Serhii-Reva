<template>
  <div 
    class="work-item card relative overflow-visible group flex-shrink-0 rotating-border-light"
  >
    <div 
      ref="backgroundElement"
      class="rotating-border-inner h-full flex flex-col justify-end p-5 md:p-6" 
      :style="computedBackgroundStyle"
    >
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
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  work: Object,
  index: Number
})

const backgroundElement = ref(null)
const imageLoaded = ref(false)
const imageNumber = computed(() => props.index + 1)
const imageUrl = computed(() => `/work_${imageNumber.value}.png`)

// Load image when element is near viewport
onMounted(() => {
  if (!backgroundElement.value) return

  // For first 3 images, load immediately (they're likely visible)
  if (props.index < 3) {
    const img = new Image()
    img.onload = () => {
      imageLoaded.value = true
    }
    img.src = imageUrl.value
    return
  }

  // For other images, use Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !imageLoaded.value) {
          const img = new Image()
          img.onload = () => {
            imageLoaded.value = true
          }
          img.src = imageUrl.value
          observer.disconnect()
        }
      })
    },
    {
      rootMargin: '100px', // Start loading 100px before entering viewport
      threshold: 0.01
    }
  )

  observer.observe(backgroundElement.value)
})

const computedBackgroundStyle = computed(() => {
  if (!imageLoaded.value) {
    return {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#1f2937' // Fallback color while loading
    }
  }
  
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${imageUrl.value}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
})
</script>

