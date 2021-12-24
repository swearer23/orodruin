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
export default {
  name: 'ColorDisplay',
  props: {
    colors: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ColorItem
  },
  computed: {
    filteredColors () {
      const ret = []
      this.colors.forEach(color => {
        if (!color.propName.includes('light'))
          ret.push(Object.assign(color, {light: []}))
        else
          ret.find(item => {
            return color.propName.startsWith(item.propName)
          })?.light.push(color)
      })
      return ret
    }
  }
}
</script>
<style lang='less' scoped>
.color-palette {
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>