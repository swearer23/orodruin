import SelectOption from './SelectOption'
import ColorInput from './ColorInput'
import TextInput from './TextInput'
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
  components: {SelectOption, ColorInput, TextInput},
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
    if (this.valueOptions === INPUT_OPTION_TYPE.COLOR) {
      component = ColorInput
    }
    if (this.valueOptions === INPUT_OPTION_TYPE.TEXT) {
      component = TextInput
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