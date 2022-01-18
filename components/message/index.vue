<template>
  <section>
    <h2>消息提示</h2>
    <el-row style="margin-bottom: 20px; position: relative">
      <div role="alert" class="demo-item el-message el-message--success el-message-fade-leave-active el-message-fade-leave-to" style="top: 0px; left: 0px; width: 100px; opacity: 1; position: relative; transform: none;"><i class="el-message__icon el-icon-success"></i><p class="el-message__content">Congrats, this is a success message.</p></div>
      <div role="alert" class="demo-item el-message el-message--warning el-message-fade-leave-active el-message-fade-leave-to" style="top: 0px; left: 0px; width: 100px; opacity: 1; position: relative; transform: none;"><i class="el-message__icon el-icon-warning"></i><p class="el-message__content">Warning, this is a warning message.</p></div>
      <div role="alert" class="demo-item el-message el-message--info el-message-fade-leave-active el-message-fade-leave-to" style="top: 0px; left: 0px; width: 100px; opacity: 1; position: relative; transform: none;"><i class="el-message__icon el-icon-info"></i><p class="el-message__content">This is a message.</p></div>
      <div role="alert" class="demo-item el-message el-message--error is-closable el-message-fade-leave-active el-message-fade-leave-to" style="top: 0px; left: 0px; width: 100px; opacity: 1; position: relative; transform: none;"><i class="el-message__icon el-icon-error"></i><p class="el-message__content">Oops, this is a error message.</p><i class="el-message__closeBtn el-icon-close"></i></div>
    </el-row>
    <Configuration section="message" />
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
.el-message {
  margin-bottom: 20px;
}
</style>