<template>
  <el-container
    class="main-container"
    v-loading.fullscreen.lock="isLoading"
  >
    <el-header style="height: auto">
      <el-row align="middle" type="flex">
        <el-col :span="16">
          <h4 style="width: auto;">ElementUI设计语言生成器 Orodruin ElementUI Theme Editor</h4>
        </el-col>
        <el-col :span="8">
          <el-button-group style="float: right; ">
            <el-button type='info' icon='el-icon-delete' @click="reset">重置</el-button>
            <el-button type='info' icon='el-icon-upload' @click="confirmUpload">上传已有CSS文件</el-button>
            <el-button type='primary' icon='el-icon-download' @click="download">下载</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-main
        v-if="theme.length"
        class="content-main"
      >
        <Color :colors="colors" />
        <Typography :typography="typography" />
        <Button />
        <Radio />
        <checkbox />
        <Input />
        <Select />
        <Cascader />
        <ElSwitch />
        <Slider />
        <DatePicker />
        <Rate />
        <Transfer />
        <Table />
        <Tag />
        <Progress />
        <Tree />
        <Pagination />
        <Badge />
        <Alert />
        <Loading />
        <Message />
        <MessageBox />
        <Notification />
        <Menu />
        <Tabs />
        <Dialog />
        <Tooltip />
        <Popover />
        <Card />
        <Carousel />
        <Collapse />
        <Avatar />
      </el-main>
    </el-container>
    <Upload
      v-if="confirmVisible"
      @close="confirmVisible = false"
    />
  </el-container>
</template>
<script>
import Color from '@/components/color/section'
import Typography from '@/components/typography/section'
import Button from '@/components/button'
import Radio from '@/components/radio'
import Checkbox from '@/components/checkbox'
import Input from '@/components/input'
import Select from '@/components/select'
import Cascader from '@/components/cascader'
import ElSwitch from '@/components/switch'
import Slider from '@/components/slider'
import DatePicker from '@/components/datepicker'
import Rate from '@/components/rate'
import Transfer from '@/components/transfer'
import Table from '@/components/table'
import Tag from '@/components/tag'
import Progress from '@/components/progress'
import Tree from '@/components/tree'
import Pagination from '@/components/pagination'
import Badge from '@/components/badge'
import Alert from '@/components/alert'
import Loading from '@/components/loading'
import Message from '@/components/message'
import MessageBox from '@/components/messageBox'
import Notification from '@/components/notification'
import Menu from '@/components/menu'
import Tabs from '@/components/tabs'
import Dialog from '@/components/dialog'
import Tooltip from '@/components/tooltip'
import Popover from '@/components/popover'
import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Collapse from '@/components/collapse'
import Avatar from '@/components/avatar'

import Upload from './components/upload.vue'

import { mapActions, mapState } from 'vuex'
export default {
  name: 'editor',
  components: {
    Color,
    Typography,
    Button,
    Radio,
    Checkbox,
    Input,
    Select,
    Cascader,
    ElSwitch,
    Slider,
    DatePicker,
    Rate,
    Transfer,
    Table,
    Tag,
    Progress,
    Tree,
    Pagination,
    Badge,
    Alert,
    Loading,
    Message,
    MessageBox,
    Notification,
    Menu,
    Tabs,
    Dialog,
    Tooltip,
    Popover,
    Card,
    Carousel,
    Collapse,
    Avatar,
    Upload
  },
  data: () => {
    return {
      confirmVisible: false
    }
  },
  computed: mapState({
    theme: state => state.theme,
    isLoading: state => state.isLoading,
    colors: function () {
      return this.findDeclarationByTitle('Color')
    },
    typography: function () {
      return this.findDeclarationByTitle('Typography')
    }
  }),
  async asyncData() {
  },
  created() {
    if (process.client)
      this.getTheme()
  },
  mounted () {
  },
  methods: {
    ...mapActions({
      getTheme: 'get',
      deleteConfig: 'deleteConfig',
      downloadTheme: 'downloadTheme'
    }),
    reset () {
      this.deleteConfig()
    },
    findDeclarationByTitle (title) {
      let ret =this.theme.find(section => {
        return section.title === title
      })
      return ret.declarations
    },
    download () {
      this.downloadTheme()
    },
    confirmUpload () {
      this.confirmVisible = true
    }
  }
}
</script>
<style lang="less">
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  .main-container {
    padding: 20px 100px;
  }
  .content-aside {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .upload-demo {
    width: auto;
    display: inline-block;
  }
</style>