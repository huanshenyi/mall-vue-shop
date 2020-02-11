<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
          <div class="modal-header">
              <span>{{title}}</span>
              <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
          </div>
          <div class="modal-body">
              <slot name="body"></slot>
          </div>
          <div class="modal-footer">
              <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
              <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">キャンセル</a>
              <div class="btn-group" v-if="btnType==3">
                  <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                  <a href="javascript:;" class="btn-default" @click="$emit('cancel')">キャンセル</a>
              </div>
          </div>
      </div>
  </div>
    </transition>
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
        },
    }
</script>

<style lang="scss">
  @import "./../assets/scss/config.scss";
  @import "./../assets/scss/mixin.scss";
  @import "./../assets/scss/modal.scss";
</style>
