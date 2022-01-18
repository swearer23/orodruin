<template>
  <section>
    <h2>日期选择器</h2>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-date-picker
        style="width: 300px"
        v-model="value"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </el-row>
    <Configuration section="datepicker" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less" scoped>
</style>