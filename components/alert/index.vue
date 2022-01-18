<template>
  <section>
    <h2>警告</h2>
    <el-row
      style="margin-bottom: 20px;"
    >
      <el-alert
        title="成功提示的文案"
        type="success"
        show-icon>
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        show-icon>
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        show-icon>
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        show-icon>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert
        title="成功提示的文案"
        type="success"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
    </el-row>
    <Configuration section="alert" />
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
<style lang="less" scoped>
.el-alert {
  width: 400px;
  margin-bottom: 20px;
}
</style>