<template>
  <section>
    <h2>滑块</h2>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-slider class="slider" v-model="value" :format-tooltip="formatTooltip"></el-slider>
    </el-row>
    <Configuration section="slider" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      value: 42
    }
  },
  methods: {
    formatTooltip(val) {
      return `${val}%`;
    }
  }
}
</script>
<style lang="less" scoped>
.el-slider {
  width: 300px;
}
</style>