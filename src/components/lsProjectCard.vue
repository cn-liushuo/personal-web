<template>
  <n-card class="project-card" hoverable>
    <div class="project-image">
      <img 
        :src="require(`@/assets/images/projects/${project.image}`)" 
        :alt="project.name"
        class="project-img"
        @error="handleImageError"
      />
      <div v-if="imageError" class="image-placeholder">
        <n-icon :component="FileImage" :size="48" class="placeholder-icon" />
      </div>
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-name">{{ project.name }}</h3>
        <a :href="project.link" target="_blank" class="project-link">
          <n-icon :component="ExternalLink" :size="16" />
        </a>
      </div>
      <div class="project-meta">
        <span class="meta-item">
          <n-icon :component="User" :size="14" />
          {{ project.role }}
        </span>
        <span class="meta-item">
          <n-icon :component="Calendar" :size="14" />
          {{ project.time }}
        </span>
      </div>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-achievements">
        <h4 class="achievements-title">
          <n-icon :component="Award" :size="14" />
          项目业绩
        </h4>
        <ul class="achievements-list">
          <li v-for="(achievement, index) in project.achievements" :key="index">
            <n-icon :component="CheckCircle" :size="12" class="achievement-icon" />
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  ExternalLink, 
  User, 
  Calendar, 
  Award, 
  CheckCircle,
  FileImage 
} from '@vicons/material'

interface Project {
  id: number
  name: string
  role: string
  time: string
  description: string
  achievements: string[]
  link: string
  image: string
}

const props = defineProps<{
  project: Project
}>()

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  :deep(.n-card__content) {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

.project-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);

    .placeholder-icon {
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

.project-content {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .project-name {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .project-link {
    flex-shrink: 0;
    margin-left: 8px;
    color: #666;
    transition: color 0.2s;

    &:hover {
      color: #3b82f6;
    }
  }
}

.project-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: #666;
  }
}

.project-description {
  font-size: 14px;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 12px;
  flex-shrink: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-achievements {
  flex: 1;
  overflow-y: auto;

  .achievements-title {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 8px;
  }

  .achievements-list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      font-size: 13px;
      line-height: 1.6;
      color: #555;
      margin-bottom: 6px;

      &:last-child {
        margin-bottom: 0;
      }

      .achievement-icon {
        flex-shrink: 0;
        color: #22c55e;
        margin-top: 2px;
      }
    }
  }
}
</style>