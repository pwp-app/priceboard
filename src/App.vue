<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html, body, #app {
  width: 100%;
  min-height: 100vh;
  background: @color-background-primary;
}
body {
  margin: 0;
}
</style>
