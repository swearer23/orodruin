<template>
  <section>
    <h2>弹出框</h2>
    <el-row style="margin-bottom: 20px; position: relative;">
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        :value="true"
      >
      </el-popover>
    </el-row>
    <Configuration section="popover" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {}
  }
}
</script>
<style lang="less">
.el-row .el-popover {
  position: relative;
  width: 200px;
}
</style>