<template>
  <section>
    <h2>标签页</h2>
    <el-row style="margin-bottom: 20px; position: relative">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row style="margin-bottom: 20px; position: relative">
      <el-tabs v-model="activeNum" type="card">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-row>
    <Configuration section="tab" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      activeName: 'first',
      activeNum: 'first'
    }
  }
}
</script>
<style lang="less" scoped>
</style>