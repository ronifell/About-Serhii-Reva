<template>
  <section id="about" class="section-container pt-32 md:pt-40 min-h-screen flex items-center">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
      <!-- Photo and Content -->
      <div class="order-2 lg:order-1 animate-fade-in-up">
        <div class="relative inline-block">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl animate-float"></div>
          <img 
            src="/Serhii Reva.png" 
            alt="Serhii Reva" 
            class="relative w-80 h-80 mx-auto rounded-full object-cover shadow-2xl ring-4 ring-white transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <!-- Text Content -->
      <div class="order-1 lg:order-2 space-y-6 animate-slide-in-right">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">Hello,</span><br>
            <span class="text-gray-900">I'm Serhii Reva</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 font-semibold">
            Full-Stack Developer & AI Developer
          </p>
        </div>
        
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p class="text-lg">
            I am a Full-Stack Developer from Ukraine with <span class="font-semibold text-blue-600">8+ years</span> of hands-on experience building scalable, high-performance web and mobile applications. My expertise covers both front-end and back-end development, delivering complete solutions from concept to deployment.
          </p>
          <p class="text-lg">
            I'm passionate about clean code, modern technologies, and creating products that provide real value to users.
          </p>
          <p class="text-lg">
            I value long-term collaboration, clear communication, and delivering projects on time with high-quality standards.
          </p>
        </div>
        
        <div class="flex flex-wrap gap-4 pt-4">
          <a href="#projects" class="btn-primary">
            View My Work
          </a>
          <a href="#experience" class="btn-secondary">
            My Experience
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

