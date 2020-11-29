<template>
  <div class="board">
    <Header />
    <div class="board-body">
      <GameList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/board/Header.vue';
import GameList from '../components/board/GameList.vue';
import Footer from '../components/board/Footer.vue';

export default {
  components: {
    Header,
    GameList,
    Footer,
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
