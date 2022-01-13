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
        <Typography :typography="typography" />
        <Button />
      </el-main>
      <el-aside class="content-aside">
        <el-button type='info' icon='el-icon-delete' v-on:click="reset">重置</el-button>
        <el-button type='primary' icon='el-icon-download'>下载</el-button>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import Color from '@/components/color/section'
import Typography from '@/components/typography/section'
import Button from '@/components/button'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'editor',
  components: {
    Color,
    Typography,
    Button
  },
  data: () => {
    return {
      runtime: null
    }
  },
  computed: mapState({
    theme: state => state.theme,
    isLoading: state => state.isLoading,
    colors: function () {
      return this.findDeclarationByTitle('Color')
    },
    typography: function () {
      return this.findDeclarationByTitle('Typography')
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
    ...mapActions({
      getTheme: 'get',
      deleteConfig: 'deleteConfig'
    }),
    reset () {
      this.deleteConfig()
    },
    findDeclarationByTitle (title) {
      let ret =this.theme.find(section => {
        return section.title === title
      })
      return ret.declarations
    }
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