<template>
  <div class="content board-list">
    <div class="box box-info board-list-empty" v-if="games.length < 1">
      <span>您好像还没有添加游戏，快添加一款吧！</span>
      <div class="btn-hoverfade" id="btn-empty-add" @click="handleAdd">
        点我添加
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAdd() {
      this.$emit('add');
    },
  },
};
</script>

<style lang="less">
.board-list {
  height: 100%;
  margin: 32px auto;
  width: 100%;
  max-width: 940px;
  margin: 24px auto;
  padding: 0 32px;
  &-empty {
    display: flex;
    align-items: center;
    span {
      color: @color-text-special;
      flex: 1;
      font-size: 15px;
    }
    #btn-empty-add {
      justify-self: flex-end;
    }
  }
}
</style>
