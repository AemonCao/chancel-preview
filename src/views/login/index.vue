<template>
  <div class="bg">
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item prop="loginName">
              <el-input
                prefix-icon="el-icon-user"
                ref="loginName"
                v-model="loginForm.loginName"
                autocomplete="off"
                placeholder="用户名"
                name="loginName"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item prop="loginPsd">
              <el-input
                prefix-icon="el-icon-lock"
                ref="loginPsd"
                v-model="loginForm.loginPsd"
                placeholder="密码"
                name="loginPsd"
                tabindex="2"
                auto-complete="on"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row :gutter="20">
        <el-col
          :span="12"
          :offset="6"
        >
          <el-button
            type="primary"
            @click="submit()"
          >确定</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: '',
        loginPsd: ''
      },
      loginRules: {
        loginName: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        loginPsd: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      encryptedPsd: this.$md5('123456')
    }
  },
  created() {
    //   alert(this.$md5('dsd'))
  },
  methods: {
    submit: function () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if ((this.loginForm.loginName === 'chancel') && (this.$md5(this.loginForm.loginPsd) === this.encryptedPsd)) {
            this.$router.push('/catalog')
          } else {
            this.loginForm.loginName = ''
            this.loginForm.loginPsd = ''
            this.$message({
              showClose: true,
              message: '用户名或密码错误！',
              type: 'error'
            });
          }
        }
      })

    }
  }
}
</script>


<style scoped>
.el-button {
  width: 100%;
}
.bg{
  height: 100vh;
  width: 100%;
  /* border: 1px solid red; */
  /* background: url('../../assets/images/login_background.svg') 100% 100%; */
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 35%;
  margin: 0 auto;
}
</style>