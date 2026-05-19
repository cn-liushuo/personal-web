<template>
  <lsCardBody>
    <div class="tech-stack">
      <lsPageTitle>技术</lsPageTitle>

      <div class="tech-columns">
        <!-- Frontend(前端) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Frontend(前端)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Module Federation(微前端)" :percentage="0" />
            <lsSkillItem name="Qiankun(微前端框架)" :percentage="0" />
            <lsSkillItem name="PWA(渐进式Web应用)" :percentage="0" />
            <lsSkillItem name="GraphQL(数据查询)" :percentage="0" />
            <lsSkillItem name="Electron(桌面应用程序)" :percentage="30" />
            <lsSkillItem name="Vite(前端构建工具)" :percentage="60" />
            <lsSkillItem name="Webpack(模块打包工具)" :percentage="50" />
            <lsSkillItem name="React(UI框架)" :percentage="0" />
            <lsSkillItem name="React Router(路由管理)" :percentage="0" />
            <lsSkillItem name="Redux(状态管理)" :percentage="0" />
            <lsSkillItem name="TypeScript(类型脚本)" :percentage="90" />
            <lsSkillItem name="Vue(渐进式框架)" :percentage="90" />
            <lsSkillItem name="Vue Router(路由管理)" :percentage="85" />
            <lsSkillItem name="Pinia(状态管理)" :percentage="80" />
            <lsSkillItem name="Node.js(JavaScript运行时)" :percentage="60" />
            <lsSkillItem name="JavaScript(脚本语言)" :percentage="90" />
            <lsSkillItem name="CSS(层叠样式表)" :percentage="95" />
            <lsSkillItem name="HTML(超文本标记语言)" :percentage="99" />
          </n-space>
        </section>

        <!-- Backend(后端) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Backend(后端)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="gRPC(远程调用)" :percentage="0" />
            <lsSkillItem name="Elasticsearch(搜索引擎)" :percentage="0" />
            <lsSkillItem name="ZooKeeper(分布式协调)" :percentage="0" />
            <lsSkillItem name="ETCD(分布式键值存储)" :percentage="0" />
            <lsSkillItem name="Kafka(消息队列)" :percentage="0" />
            <lsSkillItem name="Redis(缓存数据库)" :percentage="0" />
            <lsSkillItem name="Nginx(反向代理)" :percentage="20" />
            <lsSkillItem name="Docker(容器化)" :percentage="0" />
            <lsSkillItem name="Spring Security(安全框架)" :percentage="0" />
            <lsSkillItem name="Spring Cloud(微服务框架)" :percentage="0" />
            <lsSkillItem name="Spring Boot(Java框架)" :percentage="20" />
            <lsSkillItem name="Spring Framework(IoC/AOP)" :percentage="0" />
            <lsSkillItem name="MySQL(关系型数据库)" :percentage="40" />
            <lsSkillItem name="Java(编程语言)" :percentage="20" />
          </n-space>
        </section>

        <!-- Testing(测试) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Testing(测试)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Locust(性能测试)" :percentage="0" />
            <lsSkillItem name="JMeter(性能测试)" :percentage="0" />
            <lsSkillItem name="RestAssured(接口测试)" :percentage="0" />
            <lsSkillItem name="Postman(接口测试)" :percentage="40" />
            <lsSkillItem name="Mockito(单元测试Mock)" :percentage="0" />
            <lsSkillItem name="JUnit 5(单元测试)" :percentage="0" />
            <lsSkillItem name="TestNG(测试框架)" :percentage="0" />
            <lsSkillItem name="Playwright(E2E测试工具)" :percentage="0" />
            <lsSkillItem name="Vitest(单元测试框架)" :percentage="0" />
          </n-space>
        </section>

        <!-- DevOps(运维) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">DevOps(运维)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="Kubernetes(容器编排)" :percentage="0" />
            <lsSkillItem name="Helm(K8s包管理)" :percentage="0" />
            <lsSkillItem name="Istio(服务网格)" :percentage="0" />
            <lsSkillItem name="Argo CD(GitOps)" :percentage="0" />
            <lsSkillItem name="Prometheus(监控系统)" :percentage="0" />
            <lsSkillItem name="Grafana(可视化)" :percentage="0" />
            <lsSkillItem name="ELK(日志系统)" :percentage="0" />
            <lsSkillItem name="Terraform(基础设施即代码)" :percentage="0" />
            <lsSkillItem name="Ansible(自动化运维)" :percentage="0" />
            <lsSkillItem name="Docker(容器化)" :percentage="0" />
            <lsSkillItem name="Jenkins(CI/CD)" :percentage="50" />
            <lsSkillItem name="GitLab CI(CI/CD)" :percentage="0" />
            <lsSkillItem name="Git(版本控制)" :percentage="90" />
          </n-space>
        </section>

        <!-- Agent(智能体) -->
        <section class="tech-category">
          <lsSectionTitle tag="h2">Agent(智能体)</lsSectionTitle>
          <n-space vertical :size="12">
            <lsSkillItem name="AutoGPT(自主智能体)" :percentage="0" />
            <lsSkillItem name="BabyAGI(任务驱动智能体)" :percentage="0" />
            <lsSkillItem name="Multi-Agent(多智能体协作)" :percentage="0" />
            <lsSkillItem name="Function Calling(工具调用)" :percentage="0" />
            <lsSkillItem name="Pinecone(向量数据库)" :percentage="0" />
            <lsSkillItem name="Milvus(向量数据库)" :percentage="0" />
            <lsSkillItem name="Chroma(向量数据库)" :percentage="0" />
            <lsSkillItem name="Embedding(嵌入模型)" :percentage="0" />
            <lsSkillItem name="LLM(大语言模型)" :percentage="0" />
            <lsSkillItem name="LangChain(LangChain框架)" :percentage="0" />
            <lsSkillItem name="RAG(检索增强生成)" :percentage="0" />
            <lsSkillItem name="MCP(Model Context Protocol)" :percentage="0" />
            <lsSkillItem name="Prompt Engineering(提示词工程)" :percentage="0" />
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
