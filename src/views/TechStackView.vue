<template>
  <LsCardBody>
    <div class="tech-stack">
      <LsPageTitle>技术</LsPageTitle>

      <div class="tech-columns">
        <!-- Frontend(前端) -->
        <section class="tech-category">
          <LsSectionTitle tag="h2">Frontend(前端)</LsSectionTitle>
          <n-space vertical :size="12">
            <LsSkillItem name="TypeScript(类型脚本)" :percentage="90" />
            <LsSkillItem name="Vite(前端构建工具)" :percentage="60" />
            <LsSkillItem name="Vue(渐进式框架)" :percentage="90" />
            <LsSkillItem name="JQuery(JavaScript库)" :percentage="60" />
            <LsSkillItem name="JavaScript(脚本语言)" :percentage="90" />
            <LsSkillItem name="CSS(层叠样式表)" :percentage="95" />
            <LsSkillItem name="HTML(超文本标记语言)" :percentage="99" />
          </n-space>
        </section>

        <!-- Backend(后端) -->
        <section class="tech-category">
          <LsSectionTitle tag="h2">Backend(后端)</LsSectionTitle>
          <n-space vertical :size="12">
            <LsSkillItem name="Node.js(JavaScript运行时)" :percentage="50" />
            <LsSkillItem name="MySQL(关系型数据库)" :percentage="45" />
          </n-space>
        </section>

        <!-- Testing(测试) -->
        <section class="tech-category">
          <LsSectionTitle tag="h2">Testing(测试)</LsSectionTitle>
          <n-space vertical :size="12">
            <LsSkillItem name="Vitest(单元测试框架)" :percentage="40" />
            <LsSkillItem name="Playwright(E2E测试工具)" :percentage="35" />
          </n-space>
        </section>

        <!-- DevOps(运维) -->
        <section class="tech-category">
          <LsSectionTitle tag="h2">DevOps(运维)</LsSectionTitle>
          <n-space vertical :size="12">
            <LsSkillItem name="Git(版本控制)" :percentage="85" />
            <LsSkillItem name="Jenkins(CI/CD)" :percentage="45" />
            <LsSkillItem name="Docker(容器化)" :percentage="40" />
          </n-space>
        </section>

        <!-- Agent(智能体) -->
        <section class="tech-category">
          <LsSectionTitle tag="h2">Agent(智能体)</LsSectionTitle>
          <n-space vertical :size="12">
            <LsSkillItem name="Prompt Engineering(提示词工程)" :percentage="75" />
            <LsSkillItem name="MCP(Model Context Protocol)" :percentage="50" />
            <LsSkillItem name="RAG(检索增强生成)" :percentage="45" />
            <LsSkillItem name="LangChain(LangChain框架)" :percentage="40" />
          </n-space>
        </section>
      </div>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts">
import LsSkillItem from '@/components/lsSkillItem.vue'
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
