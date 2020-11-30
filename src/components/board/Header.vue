<template>
  <div class="board-header-wrapper">
    <div class="content board-header">
      <div class="board-header-title">
        <span>PriceBoard</span>
      </div>
      <div class="board-header-ctrl">
        <div class="btn-header" id="btn-add" @click="handleAddClick">
          <font-awesome-icon :icon="['fas', 'plus']" />添加游戏
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAddClick() {
      this.$emit('add');
    },
  },
};
</script>

<style lang="less">
@header-height: 72px;

.board-header-wrapper {
  width: 100%;
  height: @header-height;
  background: @color-background-top;
  .board-header {
    height: @header-height;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    padding: 0 32px;
    user-select: none;
    &-title {
      flex: 1;
      color: @color-text-white;
      font-weight: 600;
      font-size: 20px;
    }
    &-ctrl {
      justify-self: flex-end;
      #btn-add {
        svg {
          margin-right: 8px;
        }
      }
    }
  }
}

</style>
