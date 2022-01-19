<template>
  <section>
    <h2>文字提示</h2>
    <el-row style="margin-bottom: 20px; position: relative;">
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-dark" style="position: relative; width: 40px; text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div></div>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-light" style="margin-top: 10px; position: relative; width: 40px; text-align: center;">Light<div x-arrow="" class="popper__arrow"></div></div>
    </el-row>
    <Configuration section="tooltip" />
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
</style>