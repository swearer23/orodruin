<template>
  <el-form ref="form" label-width="80px">
    <el-select
      v-model="selectedKeyOption"
      placeholder="请选择编辑项"
      @change="onKeyChanged"
    >
      <el-option-group
        v-for="group in keyOptions"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.key"
          :label="item.key"
          :value="item.key"
        >
        </el-option>
      </el-option-group>
    </el-select>
    <el-select
      v-model="selectedValueOption"
      placeholder="请选择设定值"
      style="margin-left: 20px"
      @change="onValueChanged"
    >
      <el-option
        v-for="item in valueOptions"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </el-form>
</template>
<script>
import { mapActions } from 'vuex'
import config from '../configuration/config'
import {groupBy} from 'lodash'
import valueOptions from './valueOptionsConfig'
import valueOptionsConfig from './valueOptionsConfig'

export default {
  props: {
    section: {
      type: String,
      require: true
    } 
  },
  data: () => {
    return {
      localConfig: {},
      keyOptions: [],
      valueOptions: [],
      selectedKeyOption: null,
      selectedValueOption: null
    }
  },
  mounted() {
    this.localConfig = config[this.section]
    this.keyOptions = Object.entries(groupBy(this.localConfig, item => item.type)).map(([key, value]) => {
      return {
        label: key,
        options: value
      }
    })
    console.log(this.keyOptions)
  },
  methods: {
    onKeyChanged () {
      this.selectedValueOption = null
      this.valueOptions = valueOptionsConfig[this.localConfig.find(item => {
        return item.key === this.selectedKeyOption
      }).type] || []
    },
    onValueChanged () {
      this.updateTheme({
        section: this.section,
        propName: `--${this.selectedKeyOption}`,
        propValue: this.selectedValueOption
      })
    },
    ...mapActions({updateTheme: 'updateTheme'})
  }
}
</script>
<style></style>