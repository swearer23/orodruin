<template>
  <section>
    <h2>字体</h2>
    <el-row :gutter="40">
      <el-col :span="6" class="color-palette">
        <div v-for="item in fontsize" :key="item.propName" :style="item.style">
          {{item.displayText}}
        </div>
      </el-col>
      <el-col :span="8" class="color-palette">
        <span :style="fontsize[1].style">Example primary text</span>
        <p :style="primaryParagraphStyle">
          With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users. If MySpace layouts are chosen well, then you can enhance your profile a great deal.
        </p>
      </el-col>
      <el-col :span="8" class="color-palette">
        <span :style="fontsize[1].style">Example secondary text</span>
        <p :style="secondaryParagraphStyle">
          With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users. If MySpace layouts are chosen well, then you can enhance your profile a great deal.
        </p>
      </el-col>
    </el-row>
    <Configuration section='typography' />
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import Configuration from '@/components/configuration/index.vue'

export default {
  props: {
    typography: {
      type: Array,
      default: () => ([])
    }
  },
  components: {Configuration},
  computed: ({
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
    primaryParagraphStyle: function () {return this.paragraphStyle('text-primary', 'weight-primary', 'line-height-primary')},
    secondaryParagraphStyle: function () {return this.paragraphStyle('text-secondary', 'weight-secondary', 'line-height-secondary')},
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
    },
    ...mapGetters([
      'getColorByPropName'
    ])
  }),
  methods: {
    paragraphStyle: function (textStyle, fontWeight, lineHeight) {
      return {
        color: this.getColorByPropName(textStyle).replace('!default', ''),
        fontSize: this.typographyDict['size-base'].value,
        padding: '20px 0',
        fontWeight: this.typographyDict[fontWeight].value,
        lineHeight: this.typographyDict[lineHeight].value
      }
    }
  }
}
</script>