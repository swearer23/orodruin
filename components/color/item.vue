<template>
  <div class="color-palette-card">
    <div
      class="primary-color"
      :style="style"
    >
      <input type="color" :value="displayValue" v-on:change="onValueChanged" />
      <p class="color-code">
        {{ displayName }}
        <span>{{ displayValue }}</span>
      </p>
    </div>
    <!-- <div class="sub-colors" v-if="false">
      <div :style="{background: color.light[0].propValue}"></div>
      <div :style="{background: color.light[color.light.length - 1].propValue}"></div>
    </div> -->
  </div>
</template>
<script>
import {mapActions }from 'vuex'
export default {
  props: {
    propName: {
      type: String,
      default: ''
    },
    propValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    displayName () {
      return this.propName.replace('color', '').split('-').join(' ').trim()
    },
    displayValue () {
      return this.propValue.replace('!default', '').trim()
    },
    style () {
      const style = {backgroundColor: this.propValue.replace('!default', '')}
      if (Number(`0x${this.displayValue.replace('#', '').trim()}`) > Number('0xF5F5F5')) {
        style.color = '#909399'
      }
      return style
    }
  },
  methods: {
    onValueChanged (event) {
      this.updateTheme({
        section: 'color',
        propName: this.propName,
        propValue: event.currentTarget.value
      })
      console.log(event.currentTarget.value)
    },
    ...mapActions({updateTheme: 'updateTheme'})
  }
}
</script>
<style lang="less" scoped>
div.color-palette-card {
  position: relative;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  width: 100%;
  input[type='color'] {
    border: none;
    padding: 0;
    margin: 0;
    width: 15px;
    height: 15px;
    position: absolute;
    right: 2px;
    top: 2px;
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    border-radius: 2px;
  }
  .primary-color {
    p.color-code {
      width: calc(100% - 20px);
      padding: 10px;
      font-size: 14px;
      line-height: 24px;
      margin: 0;
      padding-top: 15px;
      span {
        display: block;
        font-size: 12px;
        opacity: 0.69;
      }
    }
    width: 100%;
    aspect-ratio: 2/1;
    color: #FFFFFF;
  }
  .sub-colors {
    width: 100%;
    aspect-ratio: 2/1;
    display: flex;
    div {
      flex: 1;
      height: 100%;
    }
    :first-child {
      background-color: #a0cfff;
    }
    :last-child {
      background-color: #ecf5ff;
    }
  }
}
</style>