<template>
  <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
          <div class="modal-header">
              <span>タイトル</span>
              <a href="javascript:;" class="icon-close"></a>
          </div>
          <div class="modal-body">
              <slot name="body"></slot>
          </div>
          <div class="modal-footer">
              <div class="btn-group">
                  <a href="javascript:;" class="btn">OK</a>
                  <a href="javascript:;" class="btn-default">キャンセル</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "modal",
        props: {
            // ポップアップのタイプ: 小(small)、中(middle)、大(large)、フォーム(form)
            modalType:{
                type:String,
                default:'form'
            },
            // ポップアップのタイトル
            title:String,
            // ボタンのタイプ: 1:okボタン、2:キャンセルボタン 3:ok&キャンセル
            btnType:String,
            sureText:{
                type:String,
                default: 'ok'
            },
            cancelText: {
                type:String,
                default: 'キャンセル'
            },
            showModal:Boolean
        }
    }
</script>

<style lang="scss">
  @import "./../assets/scss/config.scss";
  @import "./../assets/scss/mixin.scss";
  @import "./../assets/scss/modal.scss";
</style>
