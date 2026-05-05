<template>
  <n-card
    class="project-card"
    hoverable
    @click="handleCardClick"
  >
    <div class="project-content">
      <div class="project-header">
        <div class="title-wrapper">
          <h3 class="project-name">{{ project.name }}</h3>
          <span v-if="project.link && project.link !== '-'" class="link-icon">🔗</span>
        </div>
      </div>
      <div class="project-meta">
        <span class="meta-item">
          <span class="meta-icon">👤</span>
          {{ project.role }}
        </span>
        <span class="meta-item">
          <span class="meta-icon">📅</span>
          {{ project.time }}
        </span>
      </div>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-achievements">
        <h4 class="achievements-title">
          <span class="meta-icon">🏆</span>
          项目业绩
        </h4>
        <ul class="achievements-list">
          <li v-for="(achievement, index) in project.achievements" :key="index">
            <span class="achievement-icon">✓</span>
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui'

const message = useMessage()

interface Project {
  id: number
  name: string
  role: string
  time: string
  description: string
  achievements: string[]
  link: string
}

const props = defineProps<{
  project: Project
}>()

const handleCardClick = () => {
  if (props.project.link && props.project.link !== '-') {
    window.open(props.project.link, '_blank', 'noopener noreferrer')
  } else {
    message.info('该项目暂未提供项目链接')
  }
}
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);

    .project-name {
      color: #3b82f6;
    }

    .link-icon {
      color: #22c55e;
      transform: scale(1.1);
    }
  }

  :deep(.n-card__content) {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  :deep(.n-card__border) {
    border-width: 1px;
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

  .title-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
  }

  .project-name {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.2s;
  }

  .link-icon {
    flex-shrink: 0;
    font-size: 16px;
    color: #999;
    transition: color 0.2s, transform 0.2s;
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
    flex-wrap: wrap;

    .meta-icon {
      font-size: 14px;
    }
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
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 768px) {
  .project-content {
    padding: 14px;
  }

  .project-header {
    margin-bottom: 10px;

    .project-name {
      font-size: 16px;
    }

    .link-icon {
      font-size: 14px;
    }
  }

  .project-meta {
    gap: 12px;
    margin-bottom: 10px;

    .meta-item {
      font-size: 12px;

      .meta-icon {
        font-size: 13px;
      }
    }
  }

  .project-description {
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .project-achievements {
    .achievements-title {
      font-size: 13px;
      margin-bottom: 6px;
    }

    .achievements-list {
      li {
        font-size: 12px;
        line-height: 1.5;
        gap: 4px;
        margin-bottom: 4px;
      }
    }
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 12px;
  }

  .project-header {
    margin-bottom: 8px;

    .title-wrapper {
      gap: 3px;
    }

    .project-name {
      font-size: 15px;
    }

    .link-icon {
      font-size: 13px;
    }
  }

  .project-meta {
    gap: 10px;
    margin-bottom: 8px;

    .meta-item {
      font-size: 11px;

      .meta-icon {
        font-size: 12px;
      }
    }
  }

  .project-description {
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 8px;
    -webkit-line-clamp: 3;
  }

  .project-achievements {
    .achievements-title {
      font-size: 12px;
      margin-bottom: 4px;
    }

    .achievements-list {
      li {
        font-size: 11px;
        line-height: 1.4;
        gap: 3px;
        margin-bottom: 3px;

        .achievement-icon {
          margin-top: 1px;
        }
      }
    }
  }
}

@media (max-width: 360px) {
  .project-content {
    padding: 10px;
  }

  .project-header {
    margin-bottom: 6px;

    .project-name {
      font-size: 14px;
    }

    .link-icon {
      font-size: 12px;
    }
  }

  .project-meta {
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 6px;

    .meta-item {
      font-size: 11px;
    }
  }

  .project-description {
    font-size: 11px;
    -webkit-line-clamp: 2;
  }

  .project-achievements {
    .achievements-title {
      font-size: 11px;
    }

    .achievements-list {
      li {
        font-size: 10px;
      }
    }
  }
}
</style>