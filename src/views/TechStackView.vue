<template>
  <LsCardBody>
    <div class="tech-stack">
    <LsPageTitle>技术</LsPageTitle>

    <div class="tech-columns">
      <!-- Frontend(前端) -->
      <section class="tech-category">
        <h2>Frontend(前端)</h2>
        <n-space vertical :size="12">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Vue(渐进式框架)</span>
              <span class="skill-level">精通</span>
            </div>
            <n-progress type="line" :percentage="90" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">TypeScript(类型脚本)</span>
              <span class="skill-level">熟练</span>
            </div>
            <n-progress type="line" :percentage="85" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Vite(前端构建工具)</span>
              <span class="skill-level">熟练</span>
            </div>
            <n-progress type="line" :percentage="80" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">JavaScript(脚本语言)</span>
              <span class="skill-level">精通</span>
            </div>
            <n-progress type="line" :percentage="90" indicator-placement="inside" />
          </div>
        </n-space>
      </section>

      <!-- Backend(后端) -->
      <section class="tech-category">
        <h2>Backend(后端)</h2>
        <n-space vertical :size="12">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Node.js(JavaScript运行时)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="50" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">MySQL(关系型数据库)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="45" indicator-placement="inside" />
          </div>
        </n-space>
      </section>

      <!-- Testing(测试) -->
      <section class="tech-category">
        <h2>Testing(测试)</h2>
        <n-space vertical :size="12">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Vitest(单元测试框架)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="40" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Playwright(E2E测试工具)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="35" indicator-placement="inside" />
          </div>
        </n-space>
      </section>

      <!-- DevOps(运维) -->
      <section class="tech-category">
        <h2>DevOps(运维)</h2>
        <n-space vertical :size="12">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Git(版本控制)</span>
              <span class="skill-level">熟练</span>
            </div>
            <n-progress type="line" :percentage="85" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Jenkins(CI/CD)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="45" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Docker(容器化)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="40" indicator-placement="inside" />
          </div>
        </n-space>
      </section>

      <!-- Agent(智能体) -->
      <section class="tech-category">
        <h2>Agent(智能体)</h2>
        <n-space vertical :size="12">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Prompt Engineering(提示词工程)</span>
              <span class="skill-level">熟练</span>
            </div>
            <n-progress type="line" :percentage="75" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">MCP(Model Context Protocol)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="50" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">RAG(检索增强生成)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="45" indicator-placement="inside" />
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">LangChain(LangChain框架)</span>
              <span class="skill-level">了解</span>
            </div>
            <n-progress type="line" :percentage="40" indicator-placement="inside" />
          </div>
        </n-space>
      </section>
    </div>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.tech-stack {
  width: 100%;
}

/* 五列：前端 / 后端 / 测试 / 运维 / Agent(智能体) */
.tech-columns {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
}

@media (max-width: 1280px) {
  .tech-columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .tech-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .tech-columns {
    grid-template-columns: 1fr;
  }
}

.tech-category h2 {
  margin: 0 0 16px;
  font-size: 18px;
  color: #000000;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(var(--ls-theme-rgb), 0.35);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 4px;
}

.skill-name {
  font-size: 13px;
  line-height: 1.4;
  color: #000000;
  word-break: break-word;
}

.skill-level {
  flex-shrink: 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
}
</style>
