<template>
  <el-select
    v-model="selectedValueOption"
    placeholder="请选择设定值"
    style="margin-left: 20px; width: 300px"
    @change="onValueChanged"
  >
    <el-option
      v-for="item in valueOptions"
      :key="item.value || item"
      :label="item.label || item"
      :value="item.value || item">
    </el-option>
  </el-select>
</template>
<script>
import ValueOptionMixin from "./ValueOptionMixin"
export default {
  props: {
    valueOptions: {
      type: Array,
      require: true
    }
  },
  mixins: [ValueOptionMixin]
}
</script>