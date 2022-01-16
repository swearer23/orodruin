<template>
  <section>
    <h2>多选</h2>
    <el-row
      type="flex"
      span='24'
      style="margin-bottom: 20px;"
    >
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="A">备选项A</el-checkbox>
        <el-checkbox label="B">备选项B</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-checkbox-group v-model="checkboxGroup">
        <el-checkbox-button label="上海"></el-checkbox-button>
        <el-checkbox-button label="北京"></el-checkbox-button>
        <el-checkbox-button label="广州"></el-checkbox-button>
        <el-checkbox-button label="深圳"></el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-checkbox-group v-model="borderedCheckboxGroup">
        <el-checkbox border :label=1>上班</el-checkbox>
        <el-checkbox border :label=2>下班</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <Configuration section="checkbox" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data: () => {
    return {
      checkList: ['A'],
      checkboxGroup: ['上海'],
      borderedCheckboxGroup: [1]
    }
  }
}
</script>
<style></style>