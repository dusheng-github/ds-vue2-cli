<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      timer: null
    }
  },

  created() {},
  methods: {}
}
</script>

<style lang="less">
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css"); // 图标全部失效解决办法(多余)
body {
	-webkit-overflow-scrolling: touch;
}

#app {
	height: 100vh;
	overflow: auto;
}
* {
	-webkit-overflow-scrolling: touch;
}
</style>
