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
        <div class="dialog-add-failed" v-if="addSubmitFailed">
          <span>无法获取游戏信息，请重试。</span>
        </div>
      </div>
      <div
        slot="footer"
        class="btn-hoverfade"
        id="btn-add-submit"
        @click="submitAdd"
        v-if="!addSubmiting"
        >
        提交
      </div>
      <div
        class="spin icon-spinner"
        slot="footer"
        v-else
        >
        <font-awesome-icon :icon="['fas', 'spinner']" />
      </div>
    </Dialog>
  </div>
</template>

<script>
import Header from '../components/board/Header.vue';
import GameList from '../components/board/GameList.vue';
import Footer from '../components/board/Footer.vue';

const URL_TESTER = /^https:\/\/store.steampowered.com\/app\/\d+\/.*/;
const URL_EXTRACTER = /^https:\/\/store.steampowered.com\/app\/(\d+)\//;

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
      addSubmiting: false,
      addSubmitFailed: false,
    };
  },
  methods: {
    // 添加游戏表单
    handleAdd() {
      this.storeURL = '';
      this.addDialogShow = true;
      this.addSubmiting = false;
      this.addSubmitFailed = false;
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
    async handleAddSubmit() {
      // 尝试拉取数据
      const appId = parseInt(URL_EXTRACTER.exec(this.storeURL)[1], 10);
      this.addSubmiting = true;
      try {
        const ret = await this.axios.get(`${this.STORE_API}/appdetails?appids=${appId}`);
        if (ret.status !== 200 || !ret.data) {
          this.addSubmiting = false;
          this.addSubmitFailed = true;
          return;
        }
        console.log(ret.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Fetch game info error: ', err);
        this.addSubmiting = false;
        this.addSubmitFailed = true;
      }
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

.dialog-add {
  &-failed {
    padding: 10px 16px;
    border-radius: 3px;
    border: 1px solid @color-text-red;
    color: @color-text-red;
    font-size: 14px;
    margin-top: 8px;
  }
  .icon-spinner {
    font-size: 24px;
  }
}
</style>
