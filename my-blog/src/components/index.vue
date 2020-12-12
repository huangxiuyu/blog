<template>
<div class="main">
  <div class="head">
    <span class="title">首页</span>
    <span class="title">留言板</span>
    <span class="login" @click="$router.push('/login')">登录</span>
    <span class="login">注册</span>
    <Input class="login" v-model="value" placeholder="请输入..." style="width: 300px"/>
  </div>
  <div class="body">
    <div class="left-nav">
      <Card :bordered="false">
        <p slot="title">最新</p>
        <p></p>
      </Card>
  </div>
  <div class="right-nav">
    内容
  </div>
  </div>
</div>
</template>
<script>
export default {
  name:'index',
  data(){
    return{
      value:''
    }
  },
  methods: {
  },
}
</script>
<style scoped>
.head{
  height: 50px;
  background: darkgrey;
  display: flex;
  justify-content: center;
  color:black;
  font-size: 20px;
}
.title{
  line-height: 50px;
  height: 30px;
  margin-left: 10px;
  /* background: firebrick */
}
.login{
  line-height: 50px;
  height: 30px;
  margin-left: 10px;
}
.main{
/* display: flex */
}
.body{
  display: flex
}
.left-nav{
  width: 400px;
}
.right-nav{

}
.body{

}
</style>