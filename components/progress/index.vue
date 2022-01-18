<template>
  <section>
    <h2>进度条</h2>
    <el-row
      type="flex"
      style="margin-bottom: 20px;"
    >
      <el-col :span="24" class="line-group">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="80" status="warning"></el-progress>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      style="margin-bottom: 20px;"
      justify="space-between"
    >
      <el-col :span="4"><el-progress type="circle" :percentage="0"></el-progress></el-col>
      <el-col :span="4"><el-progress type="circle" :percentage="25"></el-progress></el-col>
      <el-col :span="4"><el-progress type="circle" :percentage="100" status="success"></el-progress></el-col>
      <el-col :span="4"><el-progress type="circle" :percentage="70" status="warning"></el-progress></el-col>
      <el-col :span="4"><el-progress type="circle" :percentage="50" status="exception"></el-progress></el-col>
      <el-col :span="4">
        <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </el-col>
    </el-row>
    <Configuration />
  </section>
</template>
<script>
import Configuration from '../configuration'
export default {
  components: {Configuration},
  data() {
    return {
      percentage: 10,
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ]
    }
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
}
</script>
<style lang="less" scoped>
.line-group .el-progress {
  width: 80%;
  margin-bottom: 20px;
}
</style>