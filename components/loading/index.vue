<template>
  <section>
    <h2>加载</h2>
    <el-row
      style="margin-bottom: 20px;"
    >
      <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 600px">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-button
        type="primary"
        @click="openFullScreen"
        v-loading.fullscreen.lock="fullscreenLoading">
        点我全屏加载
      </el-button>
    </el-row>
    <Configuration section="loading" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      fullscreenLoading: false,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading: true
    }
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    }
  }
}
</script>
<style lang="less" scoped>
</style>