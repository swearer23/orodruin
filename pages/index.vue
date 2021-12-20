<template>
  <el-container>
    <el-header>
      <h4>ElementUI设计语言生成器 Orodruin ElementUI Theme Editor</h4>
    </el-header>
    <el-main>
      <section>
        <h2>颜色</h2>
        <el-col :span="4" class="color-palette">
          <div class="color-palette-card">

          </div>
        </el-col>
      </section>
      <section>
        <h2>按钮</h2>
        <el-button type="danger">danger</el-button>
      </section>
    </el-main>
    <el-aside>
      
    </el-aside>
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
  .color-palette {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    div .color-palette-card {
      background: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 10px;
    }
  }
</style>