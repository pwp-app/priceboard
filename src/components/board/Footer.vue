<template>
  <div class="board-footer-wrapper">
    <div class="content board-footer">
      <span>Made by BackRunner.</span>
      <span class="board-footer-spacer">|</span>
      <span>This site is not associate with Valve Corp.</span>
      <span class="board-footer-spacer">|</span>
      <font-awesome-icon :icon="['fab', 'github']"/>
    </div>
  </div>
</template>

<style lang="less">
@footer-height: 64px;

.board-footer-wrapper {
  height: @footer-height;
  background: @color-background-footer;
  .board-footer {
    height: @footer-height;
    display: flex;
    align-items: center;
    color: @color-text-footer;
    font-size: 12px;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    padding: 0 32px;
    &-spacer {
      margin: 0 12px;
    }
  }
}
</style>
