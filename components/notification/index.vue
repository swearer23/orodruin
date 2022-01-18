<template>
  <section>
    <h2>通知</h2>
    <el-row style="margin-bottom: 20px;">
      <div role="alert" class="el-notification right"><i class="el-notification__icon el-icon-success"></i><div class="el-notification__group is-with-icon"><h2 class="el-notification__title">成功</h2><div class="el-notification__content"><p>这是一条成功的提示消息</p></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
      <div role="alert" class="el-notification right"><i class="el-notification__icon el-icon-warning"></i><div class="el-notification__group is-with-icon"><h2 class="el-notification__title">警告</h2><div class="el-notification__content"><p>这是一条警告的提示消息</p></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
      <div role="alert" class="el-notification right"><i class="el-notification__icon el-icon-info"></i><div class="el-notification__group is-with-icon"><h2 class="el-notification__title">消息</h2><div class="el-notification__content"><p>这是一条消息的提示消息</p></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
      <div role="alert" class="el-notification right"><i class="el-notification__icon el-icon-error"></i><div class="el-notification__group is-with-icon"><h2 class="el-notification__title">错误</h2><div class="el-notification__content"><p>这是一条错误的提示消息</p></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
    </el-row>
    <Configuration section="notification" />
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
.el-notification {
  position: relative;
  left: 0;
  top: 0;
  margin-bottom: 20px;
}
</style>