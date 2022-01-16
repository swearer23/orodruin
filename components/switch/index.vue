<template>
  <section>
    <h2>开关</h2>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-switch
        v-model="switch1"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <el-switch
        style="margin-left: 20px"
        v-model="switch2"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
    </el-row>
    <Configuration section="switch" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      switch1: false,
      switch2: true
    }
  }
}
</script>
<style></style>