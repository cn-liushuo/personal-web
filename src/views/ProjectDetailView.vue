<template>
  <lsCardBody>
    <div class="project-detail">
      <div class="back-btn" @click="goBack">
        <span class="back-icon">↩</span>
      </div>
      
      <div class="detail-header">
        <div class="project-image">
          <img 
            v-if="!imageError"
            :src="currentImageUrl" 
            :alt="currentProject.name"
            class="project-img"
            @error="handleImageError"
          />
        </div>
        <div class="project-info">
          <h1 class="project-name">{{ currentProject.name }}</h1>
          <div class="project-meta">
            <span class="meta-item">
              <span class="meta-icon">👤</span>
              {{ currentProject.role }}
            </span>
            <span class="meta-item">
              <span class="meta-icon">📅</span>
              {{ currentProject.time }}
            </span>
          </div>
          <a 
            v-if="currentProject.link && currentProject.link !== '#'" 
            :href="currentProject.link" 
            target="_blank" 
            class="project-link"
            rel="noopener noreferrer"
          >
            <span class="link-icon">🔗</span>
            项目链接
          </a>
        </div>
      </div>

      <div class="detail-content">
        <section class="description-section">
          <h2 class="section-title">
            <span class="section-icon">📋</span>
            项目描述
          </h2>
          <p class="description-text">{{ currentProject.description }}</p>
        </section>

        <section class="achievements-section">
          <h2 class="section-title">
            <span class="section-icon">🏆</span>
            项目业绩
          </h2>
          <ul class="achievements-list">
            <li v-for="(achievement, index) in currentProject.achievements" :key="index">
              <span class="achievement-icon">✓</span>
              {{ achievement }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </lsCardBody>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import lsCardBody from '@/components/lsCardBody.vue'
import projects from '@/data/projectsData.json'

const route = useRoute()
const router = useRouter()

const imageError = ref(false)

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

const getProject = (): Project => {
  const id = parseInt(route.params.id as string)
  const found = projects.find((p: Project) => p.id === id)
  return found || (projects[0] as Project)
}

const currentProject = ref<Project>(getProject())
const currentImageUrl = computed(() => `/images/projects/${currentProject.value.image}`)

const handleImageError = () => {
  imageError.value = true
}

const goBack = () => {
  router.push('/projects')
}
</script>

<style scoped lang="scss">
.project-detail {
  width: 100%;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 20px;
  color: #3b82f6;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }

  .back-icon {
    font-size: 20px;
  }
}

.detail-header {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.project-image {
  flex-shrink: 0;
  width: 320px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;

  .project-name {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 16px;
  }

  .project-meta {
    display: flex;
    gap: 24px;
    margin-bottom: 16px;

    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 15px;
      color: #555;

      .meta-icon {
        font-size: 16px;
      }
    }
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    background: #3b82f6;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    width: fit-content;
    transition: background 0.2s;

    &:hover {
      background: #2563eb;
    }

    .link-icon {
      font-size: 16px;
    }
  }
}

.detail-content {
  .section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 16px;

    .section-icon {
      font-size: 20px;
    }
  }

  .description-section {
    margin-bottom: 32px;

    .description-text {
      font-size: 16px;
      line-height: 1.8;
      color: #374151;
      margin: 0;
      white-space: pre-wrap;
    }
  }

  .achievements-section {
    .achievements-list {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 15px;
        line-height: 1.8;
        color: #374151;
        margin-bottom: 12px;
        padding: 12px 16px;
        background: #f9fafb;
        border-radius: 8px;

        &:last-child {
          margin-bottom: 0;
        }

        .achievement-icon {
          flex-shrink: 0;
          color: #22c55e;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
}
</style>