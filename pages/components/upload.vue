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
          accept=".scss"
          :on-error="handleUploadError"
          :on-success="handleUploadSuccess"
          :before-upload="beforeUpload"
          :auto-upload="true">
          <el-button type="primary">确 定</el-button>
        </el-upload>
      </template>
    </el-result>
  </el-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "Upload",
  methods: {
    ...mapActions(['startLoading', 'updateUploadedTheme']),
    beforeUpload () {
      this.$emit('close')
      this.startLoading()
    },
    handleUploadError (err) {
      this.$message.error(JSON.parse(err.message).errmsg)
    },
    handleUploadSuccess (response) {
      this.updateUploadedTheme(response)
      this.$message.success('上传成功')
    },
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>