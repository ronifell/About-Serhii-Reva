<template>
  <footer class="bg-black/50 border-t border-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h3 class="text-3xl font-bold mb-4">Serhii Reva</h3>
        <p class="text-gray-400 mb-6">Full-Stack Developer & AI Developer</p>
        <div class="flex justify-center space-x-6 mb-8">
          <a href="#about" class="text-gray-400 hover:text-white transition-colors duration-200">About</a>
          <a href="#skills" class="text-gray-400 hover:text-white transition-colors duration-200">Skills</a>
          <a href="#experience" class="text-gray-400 hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" class="text-gray-400 hover:text-white transition-colors duration-200">Projects</a>
        </div>
        <div class="border-t border-gray-800 pt-8">
          <p class="text-gray-500 text-sm">
            © {{ new Date().getFullYear() }} Serhii Reva. All rights reserved.
          </p>
          <p class="text-gray-500 text-sm mt-2">
            Built with Vue.js, TailwindCSS, and ❤️
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

