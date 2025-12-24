import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
        entry.target.style.opacity = '1'
      }
    })
  }, observerOptions)

  const observeElement = (element) => {
    if (element) {
      element.style.opacity = '0'
      observer.observe(element)
    }
  }

  onUnmounted(() => {
    observer.disconnect()
  })

  return {
    observeElement
  }
}

