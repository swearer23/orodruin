<template>
  <section>
    <h2>按钮</h2>
    <el-row
      type="flex"
      span='24'
      v-for="style in BUTTON_STYLES"
      :key="style"
      style="margin-bottom: 20px;"
    >
      <el-button
        v-for="type in BUTTON_TYPES"
        :key="type"
        :type="type"
        :circle='style == "circle"'
        :round="style == 'round'"
        :default='style == "default"'
        :plain='style == "plain"'
        :icon="style == 'circle' ? 'el-icon-edit' : ''"
      >{{style == 'circle' ? '' : type}}</el-button>
    </el-row>
  </section>
</template>
<script>
const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger', 'info']
const BUTTON_STYLES = ['default', 'plain', 'round', 'circle']
const BUTTON_SIZES = ['default', 'medium', 'small', 'mini']
export default {
  data: () => {
    return {
      BUTTON_TYPES,
      BUTTON_STYLES,
      BUTTON_SIZES
    }
  }
}
</script>
<style></style>