<template>
  <div id="app">
    <aside>
      <router-link to="/button">Button</router-link>
      <router-link to="/icon">Icon</router-link>
      <router-link to="/grid">Grid</router-link>
      <router-link to="/alert">Alert</router-link>
      <router-link to="/breadcrumb">Breadcrumb</router-link>
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
  >div {
    margin: 20px 0;
  }
  br {
    margin: 20px 0;
  }
}

aside {
  a {
    font-size: 15px;
    padding: 5px 20px;
    display: inline-block;
    border: 1px solid #ddd;
    margin: 10px;
    text-decoration: none!important;
  }
}

hr {
  margin: 20px 0;
}
</style>
