<template>
  <lsCardBody>
    <div class="tech-stack">
      <lsPageTitle>技术</lsPageTitle>

      <div class="tech-columns">
        <!-- Frontend(前端) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Frontend(前端)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="TypeScript(类型脚本)" :percentage="90" />
            <lsSkillItem name="Vite(前端构建工具)" :percentage="60" />
            <lsSkillItem name="Vue(渐进式框架)" :percentage="90" />
            <lsSkillItem name="JQuery(JavaScript库)" :percentage="60" />
            <lsSkillItem name="JavaScript(脚本语言)" :percentage="90" />
            <lsSkillItem name="CSS(层叠样式表)" :percentage="95" />
            <lsSkillItem name="HTML(超文本标记语言)" :percentage="99" />
          </n-space>
        </section>

        <!-- Backend(后端) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Backend(后端)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Node.js(JavaScript运行时)" :percentage="50" />
            <lsSkillItem name="MySQL(关系型数据库)" :percentage="45" />
          </n-space>
        </section>

        <!-- Testing(测试) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Testing(测试)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Vitest(单元测试框架)" :percentage="40" />
            <lsSkillItem name="Playwright(E2E测试工具)" :percentage="35" />
          </n-space>
        </section>

        <!-- DevOps(运维) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">DevOps(运维)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Git(版本控制)" :percentage="85" />
            <lsSkillItem name="Jenkins(CI/CD)" :percentage="45" />
            <lsSkillItem name="Docker(容器化)" :percentage="40" />
          </n-space>
        </section>

        <!-- Agent(智能体) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Agent(智能体)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Prompt Engineering(提示词工程)" :percentage="75" />
            <lsSkillItem name="MCP(Model Context Protocol)" :percentage="50" />
            <lsSkillItem name="RAG(检索增强生成)" :percentage="45" />
            <lsSkillItem name="LangChain(LangChain框架)" :percentage="40" />
          </n-space>
        </section>
      </div>
    </div>
  </lsCardBody>
</template>

<script setup lang="ts">
import lsCardBody from '@/components/lsCardBody.vue'
import lsPageTitle from '@/components/lsPageTitle.vue'
import lsSectionTitle from '@/components/lsSectionTitle.vue'
import lsSkillItem from '@/components/lsSkillItem.vue'
</script>

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
</style>
