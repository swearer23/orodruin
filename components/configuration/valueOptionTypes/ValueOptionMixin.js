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
    }
  },
  data: () => {
    return {
      selectedValueOption: null
    }
  },
  watch: {
    selectedKeyOption (newValue) {
      this.selectedValueOption = null
    }
  },
  methods: {
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