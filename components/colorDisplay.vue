<template>
  <section>
    <h2>颜色</h2>
    <el-row :gutter="20">
      <el-col :span="4" class="color-palette" v-for="(color, index) in color" :key="index">
        <div class="color-palette-card">
          <div
            class="primary-color"
            :style="color.style"
          >
            <p class="color-code">
              {{ color.displayName }}
              <span>{{ color.displayValue }}</span>
            </p>
          </div>
          <div class="sub-colors" v-if="false">
            <div :style="{background: color.light[0].propValue}"></div>
            <div :style="{background: color.light[color.light.length - 1].propValue}"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  name: 'ColorDisplay',
  props: {
    rawColor: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    color () {
      const ret = []
      this.rawColor.forEach(color => {
        color = {
          displayName: color.propName.replace('color', '').split('-').join(' '),
          displayValue: color.propValue.replace('!default', ''),
          style: {
            backgroundColor: color.propValue.replace('!default', '')
          },
          ...color
        }
        if (Number(`0x${color.displayValue.replace('#', '').trim()}`) > Number('0xF5F5F5')) {
          color.style.color = '#909399'
        }
        if (!color.propName.includes('light'))
          ret.push(Object.assign(color, {light: []}))
        else
          ret.find(item => {
            return color.propName.startsWith(item.propName)
          })?.light.push(color)
      })
      return ret
    }
  }
}
</script>
<style lang='less' scoped>
.color-palette {
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  div.color-palette-card {
    position: relative;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    width: 100%;
    .primary-color {
      p.color-code {
        width: calc(100% - 20px);
        padding: 10px;
        font-size: 14px;
        line-height: 24px;
        margin: 0;
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
}
</style>