<template>
  <div class="dialog-wrapper" v-if="show">
    <div class="dialog" :style="{
        width: `${width}px`,
      }">
      <div class="dialog-top-border"></div>
      <div class="dialog-header">
        <div class="dialog-header-title">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="dialog-body">
        <slot name="body"></slot>
        <div class="dialog-footer">
          <slot name="footer"></slot>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="dialog-close" @click="handleClose">
        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
      </div>
    </div>
    <div class="dialog-mask" @click.stop="handleClose"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    width: {
      type: Number,
      default: 600,
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="less">
.dialog-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, .8);
}
.dialog {
  max-width: 900px;
  min-width: 500px;
  z-index: 10;
  position: relative;
  transform: translateY(-50%);
  background: @color-background-dialog;
  &-top-border {
    width: 100%;
    height: 1px;
    background: @color-border-dialog;
  }
  &-header {
    padding: 32px 32px 0px 32px;
    user-select: none;
    &-title {
      font-size: 32px;
      color: @color-text-white;
    }
  }
  &-body {
    padding: 32px;
    font-size: 15px;
    color: @color-text-white;
    .dialog-footer {
      width: max-content;
      float: right;
      margin-top: 8px;
    }
  }
  &-close {
    position: absolute;
    top: 8px;
    right: 12px;
    color: @color-text-white;
    opacity: 0.7;
    cursor: pointer;
  }
  &-close:hover {
    opacity: 1;
  }
}
</style>
