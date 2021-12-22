<template>
  <el-container class="main-container">
    <el-header>
      <h4>ElementUI设计语言生成器 Orodruin ElementUI Theme Editor</h4>
    </el-header>
    <el-container>
      <el-main class="content-main">
        <ColorDisplay :rawColor="colorDef" />
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
import axios from 'axios'
import ColorDisplay from '@/components/colorDisplay'
export default {
  name: 'editor',
  components: {
    ColorDisplay
  },
  data: () => {
    return {
      runtime: null,
      theme: null
    }
  },
  computed: {
    colorDef () {
      return this.theme.find(section => {
        return section.title === "Color"
      }).declarations
    }
  },
  async asyncData() {
    try {
      const theme = await axios.get('http://localhost:3000/api/get-theme')
      return {theme: theme.data}
    } catch (err) {
      console.error(err)
    }
  },
  mounted () {
    console.log(this.colorDef)
  },
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