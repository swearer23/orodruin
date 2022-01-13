<template>
  <section>
    <h2>颜色</h2>
    <el-row :gutter="20">
      <el-col :span="4" class="color-palette" v-for="(color, index) in filteredColors" :key="index">
        <ColorItem
          :propName="color.propName"
          :propValue="color.propValue"
        />
      </el-col>
    </el-row>
  </section>
</template>
<script>
import ColorItem from './item.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ColorDisplay',
  components: {
    ColorItem
  },
  computed: ({
    ...mapGetters([
      'colors',
      'filteredColors'
    ])
  })
}
</script>
<style lang='less' scoped>
.color-palette {
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>