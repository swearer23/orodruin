<template>
  <section>
    <h2>头像</h2>
    <el-row style="margin-bottom: 20px; position: relative; width: 800px;" class="demo-avatar">
      <el-col :span="12">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          <div class="block" v-for="size in sizeList" :key="size">
            <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-col>  
      <el-col :span="12">
        <div class="sub-title">square</div>
        <div class="demo-basic--circle">
          <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
          <div class="block" v-for="size in sizeList" :key="size">
            <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
          </div>
        </div>
      </el-col> 
    </el-row>
    <Configuration section="avatar" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    }
  }
}
</script>
<style lang="less" scoped>
.demo-avatar .el-col:not(:last-child) {
  border-right: 1px solid rgba(224,230,237,.5);
}
.demo-avatar .demo-basic--circle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .block {
    flex: 1;
  }
  .block:not(:last-child) {
    border-right: 1px solid rgba(224,230,237,.5);
  }
}
.demo-avatar .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8492a6;
    text-align: center;
}
</style>