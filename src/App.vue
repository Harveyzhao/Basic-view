<template>
  <div id="app">
    <aside>
      <router-link to="/button">button</router-link>
      <router-link to="/icon">icon</router-link>
    </aside>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style lang="less">
.view {
  padding: 50px;
  div {
    margin: 20px 0;
  }
  br {
    margin: 20px 0;
  }
}

hr {
  margin: 20px 0;
}
</style>
