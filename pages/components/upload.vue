<template>
  <el-dialog
    :visible="true"
    title="确认"
    width="30%"
    :before-close="handleClose"
  >
    <el-result
      icon="warning"
      title="警告提示"
      subTitle="上传已有主题CSS文件重新编辑将清除当前正在编辑的主题">
      <template slot="extra">
        <el-button @click="handleClose">取 消</el-button>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://localhost:3000/api/upload-theme"
          :show-file-list="false"
          name="cssfile"
          accept=".css"
          :on-error="handleUploadError"
          :auto-upload="true">
          <el-button type="primary" @click="doUpload">确 定</el-button>
        </el-upload>
      </template>
    </el-result>
  </el-dialog>
</template>
<script>
export default {
  methods: {
    handleUploadError (err) {
      this.$message.error(JSON.parse(err.message).errmsg)
    },
    doUpload () {

    },
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>