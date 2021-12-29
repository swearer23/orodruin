<template>
  <section>
    <h2>字体</h2>
    <el-row :gutter="40">
      <el-col :span="8" class="color-palette">
        <div v-for="item in fontsize" :key="item.propName" :style="item.style">
          {{item.displayText}}
        </div>
      </el-col>
      <el-col :span="8" class="color-palette">
      <span :style="fontsize[1].style">Example body text</span>
      <p :style="paragraphStyle" class="primary-text-color">
        With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users. If MySpace layouts are chosen well, then you can enhance your profile a great deal.
      </p>
      </el-col>
      <el-col :span="8" class="color-palette">
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  props: {
    typography: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => {
    return {}
  },
  computed: {
    typographyDict: function () {
      let ret = {}
      this.typography.forEach(item => {
        ret[item.propName.replace('--font-', '')] = {
          propName: item.propName,
          propValue: item.propValue,
          value: item.propValue.trim().replace('!default', '')
        }
      })
      return ret
    },
    paragraphStyle: function () {
      return {
        fontSize: this.typographyDict['size-base'].value,
        padding: '20px 0',
        fontWeight: this.typographyDict['weight-primary'].value,
        lineHeight: this.typographyDict['line-height-primary'].value
      }
    },
    fontsize: function () {
      return this.typography.filter(item => {
        return item.propName.includes('font-size')
      }).map(item => {
        return Object.assign(item, {
          displayText: item.propName.replace('--font-size-', ''),
          style: {
            marginBottom: '15px',
            fontSize: item.propValue.replace('!default', '').trim()
          }
        })
      })
    }
  }
}
</script>