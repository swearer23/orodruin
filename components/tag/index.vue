<template>
  <section>
    <h2>标签</h2>
    <el-row
      type="flex"
      span='6'
      style="margin-bottom: 20px;"
    >
      <el-tag
        style="margin-right: 10px;"
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
      </el-tag>
    </el-row>
    <Configuration section="tag" />
  </section>
</template>
<script>
import Configuration from '../configuration'

export default {
  components: {Configuration},
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
</style>