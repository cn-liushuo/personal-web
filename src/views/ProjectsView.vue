<template>
  <lsCardBody>
    <div class="projects">
      <lsPageTitle>项目</lsPageTitle>
      <div class="projects-grid">
        <lsProjectCard
          v-for="project in sortedProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </lsCardBody>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import lsCardBody from "@/components/lsCardBody.vue";
import lsPageTitle from "@/components/lsPageTitle.vue";
import lsProjectCard from "@/components/lsProjectCard.vue";
import projects from "@/data/projectsData.json";

interface Project {
  id: number
  name: string
  role: string
  time: string
  description: string
  achievements: string[]
  link: string
}

const parseStartDate = (timeStr: string): Date => {
  const startMatch = timeStr.match(/(\d{4})[.](\d{2})/)
  if (startMatch && startMatch[1] && startMatch[2]) {
    return new Date(parseInt(startMatch[1]), parseInt(startMatch[2]) - 1)
  }
  return new Date(0)
}

const sortedProjects = computed<Project[]>(() => {
  return [...projects].sort((a, b) => {
    const dateA = parseStartDate(a.time)
    const dateB = parseStartDate(b.time)
    return dateB.getTime() - dateA.getTime()
  })
})
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