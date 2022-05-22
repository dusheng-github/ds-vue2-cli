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
