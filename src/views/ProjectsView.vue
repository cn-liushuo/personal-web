<template>
  <lsCardBody>
    <div class="projects">
      <lsPageTitle>项目</lsPageTitle>
      <div class="projects-grid">
        <lsProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </lsCardBody>
</template>

<script setup lang="ts">
import lsCardBody from "@/components/lsCardBody.vue";
import lsPageTitle from "@/components/lsPageTitle.vue";
import lsProjectCard from "@/components/lsProjectCard.vue";
import projects from "@/data/projectsData.json";
</script>

<style scoped lang="scss">
.projects {
  width: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 20px;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>