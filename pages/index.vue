<template>
  <el-container
    class="main-container"
    v-loading="isLoading"
  >
    <el-header>
      <h4>ElementUI设计语言生成器 Orodruin ElementUI Theme Editor</h4>
    </el-header>
    <el-container>
      <el-main
        v-if="theme.length"
        class="content-main"
      >
        <Color :colors="colors" />
        <section>
          <h2>按钮</h2>
          <el-button type="danger">danger</el-button>
        </section>
      </el-main>
      <el-aside class="content-aside">
        颜色 {{runtime}}
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import Color from '@/components/color/section'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'editor',
  components: {
    Color
  },
  data: () => {
    return {
      runtime: null
    }
  },
  computed: mapState({
    theme: state => state.theme,
    isLoading: state => state.isLoading,
    colors: state => {
      return state.theme.find(section => {
        return section.title === "Color"
      }).declarations
    }
  }),
  async asyncData() {
  },
  created() {
    if (process.client)
      this.getTheme()
  },
  mounted () {
  },
  methods: {
    ...mapActions({getTheme: 'get'})
  }
}
</script>
<style lang="less">
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  .main-container {
    padding: 20px 100px;
  }
  .content-aside {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>