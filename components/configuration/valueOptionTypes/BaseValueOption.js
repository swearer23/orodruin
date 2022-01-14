import SelectOption from './SelectOption'
import valueOptionsConfig, {INPUT_OPTION_TYPE} from '../valueOptionsConfig'
import {isFunction} from 'lodash'

export default {
  props: {
    valueOptionType: {
      type: String,
      require: true
    },
    section: {
      type: String,
      require: true
    },
    selectedKeyOption: {
      type: String,
      require: true
    }
  },
  components: {SelectOption},
  computed: {
    valueOptions () {
      const valueOptions = valueOptionsConfig[this.valueOptionType]
      if (isFunction(valueOptions)) {
        return valueOptions()
      } else {
        return valueOptionsConfig[this.valueOptionType]
      }
    }
  },
  render (h) {
    let component = 'p'
    if (Array.isArray(this.valueOptions)) {
      component = SelectOption
    }
    return h(component, {
      props: {
        section: this.section,
        selectedKeyOption: this.selectedKeyOption,
        valueOptions: this.valueOptions
      }
    })
  }
}