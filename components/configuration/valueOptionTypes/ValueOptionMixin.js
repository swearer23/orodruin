import { mapActions } from 'vuex'

export default {
  props: {
    section: {
      type: String,
      require: true
    },
    selectedKeyOption: {
      type: String,
      require: true
    },
    selectedValueOption: {
      type: String,
      default: ''
    }
  },
  methods: {
    onValueChanged (value) {
      this.updateTheme({
        section: this.section,
        propName: `--${this.selectedKeyOption}`,
        propValue: value
      })
    },
    ...mapActions({updateTheme: 'updateTheme'})
  }
}