<template>
  <div class="bg">
    <div class="slogin">
      <Form class="form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="手机" prop="iPhone">
            <Input v-model="formValidate.iPhone" placeholder="请输入手机号码"/>
        </Form-item>
        <Form-item label="验证码" prop="code" inline>
            <Input class="input" v-model="formValidate.code" placeholder="请输入邮箱"/>
            <Button class="btns">{{ !formValidate.code ?'发送验证码':time}}</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>
<script>

export default {
  name:'login',
  data() {
    return {
      formValidate:{
      },
      ruleValidate:{

      }
    }
  },
}
</script>
<style scoped>
.bg{
  width: 100%;
  height: 100vh;
 margin: 0;
  padding: 0;
  background-image: linear-gradient(125deg,#E4FFCD,#6DD5FA,#2980B9,#E4FFCD);  background-size: 400%;
/* background-image: require(url('../../public/bg.png'))  */
 animation: bganimation 15s infinite;
}
@keyframes bganimation {
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}
.slogin{
  position: fixed;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
}
 .input{
  display: inline;
}
.form{
  width: 450px;
  height: 450px;
}
.btns{
  margin-top:10px;
}
</style>