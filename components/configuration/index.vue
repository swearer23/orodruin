<template>
  <el-form ref="form" label-width="80px">
    <template v-if="localConfig">
      <el-row type="flex" align="middle">
        <el-select
          v-model="selectedKeyOption"
          placeholder="请选择编辑项"
          @change="onKeyChanged"
          style="width: 300px"
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
        <BaseValueOption
          :valueOptionType="valueOptionType"
          :selected-key-option="selectedKeyOption"
          :section="section"
        />
      </el-row>
    </template>
    <template v-else>
      <i class="el-icon-info"></i>没有专有配置项，仅供展示
    </template>
  </el-form>
</template>
<script>
import config from '../configuration/config'
import {groupBy} from 'lodash'
import BaseValueOption from './valueOptionTypes/BaseValueOption'

export default {
  components: {BaseValueOption},
  props: {
    section: {
      type: String,
      require: true
    } 
  },
  data: () => {
    return {
      localConfig: null,
      keyOptions: [],
      selectedKeyOption: null,
      valueOptionType: null
    }
  },
  mounted() {
    this.localConfig = config[this.section]
    if (this.localConfig) {
      this.keyOptions = Object.entries(groupBy(this.localConfig, item => item.type)).map(([key, value]) => {
        return {
          label: key,
          options: value
        }
      })
      console.log(this.keyOptions, 'configuration key options')
    }
  },
  methods: {
    onKeyChanged () {
      const valueOptionType = this.localConfig.find(item => {
        return item.key === this.selectedKeyOption
      }).type
      if (valueOptionType) {
        this.valueOptionType = valueOptionType
      } else {
        throw new Error(`${valueOptionType} is not supported by unified style configuration panel`)
      }
    }
  }
}
</script>
<style></style>