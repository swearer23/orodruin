<template>
  <section>
    <h2>文字提示</h2>
    <el-row style="margin-bottom: 20px; position: relative;">
      <el-dialog
        title="提示"
        width="400px"
        :visible="true"
        :fullscreen="false"
        :append-to-body="false"
        :modal="false"
        top="10px"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button>取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>
    <Configuration section="dialog" />
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
.el-row .el-dialog__wrapper {
  position: relative;
  div.el-dialog {
    position: relative;
    margin: 5px;
  }
}

</style>