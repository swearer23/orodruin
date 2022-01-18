<template>
  <section>
    <h2>消息弹窗</h2>
    <el-row style="margin-bottom: 20px; position: relative">
      <div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title"><span>Warning</span></div><button type="button" aria-label="Close" class="el-message-box__headerbtn"><i class="el-message-box__close el-icon-close"></i></button></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning"></div><div class="el-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="el-message-box__input" style="display: none;"><div class="el-input"><input type="text" autocomplete="off" placeholder="" class="el-input__inner"></div><div class="el-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="el-message-box__btns"><button type="button" class="el-button el-button--default el-button--small"><span>
        Cancel
      </span></button><button type="button" class="el-button el-button--default el-button--small el-button--primary "><span>
        OK
      </span></button></div></div>
    </el-row>
    <Configuration section="messagebox" />
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
</style>