<template>
  <div class="board">
    <Header
      @add="handleAdd"
      />
    <div class="board-body">
      <GameList
        :games="games"
        @add="handleAdd"
        />
    </div>
    <Footer />
    <Dialog
      class="dialog-add"
      :width="800"
      :show="addDialogShow"
      @close="handleAddClose"
      >
      <span slot="title">添加游戏</span>
      <div slot="body" class="dialog-add-form">
        <span>请在下方输入游戏的商店链接：</span>
        <TextInput
          ref="gameAddInput"
          v-model="storeURL"
          :validator="storeURLValidator"
          invalid="请输入正确的商店链接"
          @submit="handleAddSubmit"
          />
      </div>
      <div slot="footer" class="btn-hoverfade" id="btn-add-submit" @click="submitAdd">
        提交
      </div>
    </Dialog>
  </div>
</template>

<script>
import Header from '../components/board/Header.vue';
import GameList from '../components/board/GameList.vue';
import Footer from '../components/board/Footer.vue';

const URL_TESTER = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&/=]*)/;

export default {
  components: {
    Header,
    GameList,
    Footer,
  },
  data() {
    return {
      games: [],
      // 添加游戏表单
      addDialogShow: false,
      storeURL: '',
    };
  },
  methods: {
    // 添加游戏表单
    handleAdd() {
      this.addDialogShow = true;
    },
    handleAddClose() {
      this.addDialogShow = false;
    },
    storeURLValidator(value) {
      return URL_TESTER.test(value);
    },
    submitAdd() {
      this.$refs.gameAddInput.submit();
    },
    handleAddSubmit() {

    },
  },
};
</script>

<style lang="less">
.board {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &-body {
    flex: 1;
    width: 100%;
    position: relative;
  }
}
</style>
