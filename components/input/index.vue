<template>
  <section>
    <h2>文本域</h2>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-input v-model="input" placeholder="请输入内容" style="width: 300px"></el-input>
    </el-row>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-input-number v-model="inputNumber" placeholder="请输入内容" style="width: 300px"></el-input-number>
    </el-row>
    <Configuration section="input" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data: () => {
    return {
      input: '',
      inputNumber: 2
    }
  }
}
</script>
<style></style>