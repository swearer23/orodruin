<template>
  <section>
    <h2>评分</h2>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-rate v-model="value1"></el-rate>
    </el-row>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-rate v-model="value2" show-text></el-rate>
    </el-row>
    <Configuration section="rate" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      value1: null,
      value2: null
    }
  }
}
</script>
<style lang="less" scoped>
</style>