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
    <el-row type="flex" align="bottom" style="margin-bottom: 20px">
      <el-button
        v-for="size in BUTTON_SIZES"
        :key="size"
        :size="size"
      >{{size}}</el-button>
    </el-row>
    <Configuration section="button" />
  </section>
</template>
<script>
import Configuration from '../configuration'

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger', 'info']
const BUTTON_STYLES = ['default', 'plain', 'round', 'circle']
const BUTTON_SIZES = ['default', 'medium', 'small', 'mini']

export default {
  components: {Configuration},
  data: () => {
    return {
      BUTTON_TYPES,
      BUTTON_STYLES,
      BUTTON_SIZES,
    }
  }
}
</script>
<style></style>