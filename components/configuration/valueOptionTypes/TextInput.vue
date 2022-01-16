<template>
  <input
    type="text"
    :placeholder="placeholder"
    v-model="selectedValueOption"
    @keyup.enter="onValueChanged"
  />
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
  mixins: [ValueOptionMixin]
}
</script>
<style lang="less" scoped>
input[type="text"] {
  width: 300px;
  height: 40px;
  margin-left: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0;
  background-color: #fff;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>