<template>
  <el-container class="main-container">
    <el-header>
      <h4>ElementUI设计语言生成器 Orodruin ElementUI Theme Editor</h4>
    </el-header>
    <el-container>
      <el-main class="content-main">
        <section>
          <h2>颜色</h2>
          <el-row :gutter="20">
            <el-col :span="4" class="color-palette" v-for="(i, index) in 6">
              <div class="color-palette-card">
                <div class="primary-color">
                  <p class="color-code">
                    Primary Color
                    <span>#409EFF</span>
                  </p>
                </div>
                <div class="sub-colors">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </section>
        <section>
          <h2>按钮</h2>
          <el-button type="danger">danger</el-button>
        </section>
      </el-main>
      <el-aside class="content-aside">
        颜色
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'editor',
  data: () => {
    return {}
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
  .color-palette {
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    div.color-palette-card {
      position: relative;
      background: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      width: 100%;
      .primary-color {
        p.color-code {
          width: calc(100% - 20px);
          padding: 10px;
          font-size: 14px;
          line-height: 24px;
          color: #FFFFFF;
          margin: 0;
          span {
            font-size: 12px;
            opacity: 0.69;
          }
        }
        width: 100%;
        aspect-ratio: 2/1;
        background: #409eff;
      }
      .sub-colors {
        width: 100%;
        aspect-ratio: 2/1;
        display: flex;
        div {
          flex: 1;
          height: 100%;
        }
        :first-child {
          background-color: #a0cfff;
        }
        :last-child {
          background-color: #ecf5ff;
        }
      }
    }
  }
  .content-aside {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>