<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Hero/About Section -->
    <HeroSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Work History Section -->
    <WorkHistorySection />
    
    <!-- Education Section -->
    <EducationSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkHistorySection from './components/WorkHistorySection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
</script>

