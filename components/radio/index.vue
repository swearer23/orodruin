<template>
  <section>
    <h2>单选</h2>
    <el-row
      type="flex"
      span='24'
      style="margin-bottom: 20px;"
    >
      <el-radio v-model="radio" :label=1>选项 A</el-radio>
      <el-radio v-model="radio" :label=2>选项 B</el-radio>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-radio-group v-model="radioGroup">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-radio-group v-model="borderedRadioGroup">
        <el-radio border :label=1>上班</el-radio>
        <el-radio border :label=2>下班</el-radio>
      </el-radio-group>
    </el-row>
    <Configuration section="radio" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data: () => {
    return {
      radio: 1,
      radioGroup: '北京',
      borderedRadioGroup: 1
    }
  }
}
</script>
<style></style>