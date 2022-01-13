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
    <el-form ref="form" label-width="80px">
      <el-select
        v-model="selectedConfigKeyOption"
        placeholder="请选择编辑项"
        @change="onConfigKeyChanged"
      >
        <el-option-group
          v-for="group in configKeyOptions"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
      </el-select>
      <el-select
        v-model="selectedConfigValueOption"
        placeholder="请选择设定值"
        style="margin-left: 20px"
        @change="onConfigValueChanged"
      >
        <el-option
          v-for="item in configValueOptions"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </el-form>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

const FONT_SIZE_OPTIONS = ['12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '30px', '31px', '32px', '33px', '34px', '35px', '36px', '37px', '38px', '39px', '40px', '41px', '42px', '43px', '44px', '45px', '46px', '47px', '48px']
const FONT_WEIGHT_OPTIONS = ['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']
const FONT_LINE_HEIGHT_OPTIONS = [1, 1.3, 1.5, 1.7, '12px', '16px', '20px', '24px', '28px']

export default {
  props: {
    typography: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => {
    return {
      selectedConfigKeyOption: null,
      selectedConfigValueOption: null,
      configKeyOptions: [{
          label: '字体大小',
          options: [
            {value: 'font-size-extra-large', label: '主标题文字大小'},
            {value: 'font-size-large', label: '标题文字大小'},
            {value: 'font-size-medium', label: '小标题文字大小'},
            {value: 'font-size-base', label: '正文文字大小'},
            {value: 'font-size-small', label: '正文（小）文字大小'},
            {value: 'font-size-extra-small', label: '辅助文字大小'},
          ]
        }, {
          label: '字体粗细',
          options: [
            {value: 'font-weight-primary', label: '主要文字粗细'},
            {value: 'font-weight-secondary', label: '次要文字粗细'},
          ]
        }, {
          label: '字体行高',
          options: [
            {value: 'font-line-height-primary', label: '主要文字行高'},
            {value: 'font-line-height-secondary', label: '次要文字行高'}
          ]
        }
      ],
      configValueOptionsMap: {
        'font-size-extra-large': FONT_SIZE_OPTIONS,
        'font-size-large': FONT_SIZE_OPTIONS,
        'font-size-medium': FONT_SIZE_OPTIONS,
        'font-size-base': FONT_SIZE_OPTIONS,
        'font-size-small': FONT_SIZE_OPTIONS,
        'font-size-extra-small': FONT_SIZE_OPTIONS,
        'font-weight-primary': FONT_WEIGHT_OPTIONS,
        'font-weight-secondary': FONT_WEIGHT_OPTIONS,
        'font-line-height-primary': FONT_LINE_HEIGHT_OPTIONS,
        'font-line-height-secondary': FONT_LINE_HEIGHT_OPTIONS

      }
    }
  },
  computed: ({
    configValueOptions: function () {
      return this.configValueOptionsMap[this.selectedConfigKeyOption]
    },
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
    },
    onConfigKeyChanged () {
      this.selectedConfigValueOption = null
    },
    onConfigValueChanged () {
      this.updateTheme({
        section: 'typography',
        propName: `--${this.selectedConfigKeyOption}`,
        propValue: this.selectedConfigValueOption
      })
    },
    ...mapActions({updateTheme: 'updateTheme'})
  }
}
</script>