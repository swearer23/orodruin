<template>
  <el-input
    type="text"
    style="margin-left: 20px; width: 300px"
    :placeholder="placeholder"
    v-model="valueCopy"
    @change="onValueChanged"
  >
    <el-button slot="append" icon="el-icon-check"></el-button>
  </el-input>
</template>
<script>
import ValueOptionMixin from "./ValueOptionMixin"
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {valueCopy: ''}
  },
  mixins: [ValueOptionMixin],
  watch: {
    selectedValueOption () {
      this.valueCopy = this.selectedValueOption
    }
  },
  mounted () {
    this.valueCopy = this.selectedValueOption
  }
}
</script>
<style lang="less" scoped>
</style>