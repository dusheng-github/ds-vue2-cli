<template>
  <div class="tt">
    hello world
    <el-button
      type="primary"
      @click="request"
    >
      代理请求
    </el-button>
    <el-button
      type="primary"
      @click="mockReq"
    >
      mock请求
    </el-button>
    <tag>标签</tag>
  </div>
</template>

<script>
import {  Tag } from '@components' 
// import { Message } from '@utils'
import { getUserInfo, mockUserType } from '@api'
export default {
  name: 'HelloWorld',
  components: {
    tag: Tag
  },
  data() {
    return {
      value1: true,
    }
  },
  methods: {
    request() {
      this.$success('mixin成功')
      //   Message.success('utils成功')
      getUserInfo()
    },
    mockReq() {
      mockUserType({ id: '123' })
    }
  }
}
</script>

<style lang="less">
.tt {
	display: flex;
	align-items: center;
	color: green;
	div {
		width: 100px;
    background: yellow;
		position: inherit;
	}
}
</style>
