<template>
  <Form
    ref="loginForm"
    :model="form"
    :rules="rules"
    @keydown.enter.native="handleSubmit"
  >
    <FormItem prop="username">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="code">
      <Input class="immoc-input" type="text" v-model="form.password" placeholder="请输入验证码">
        <span slot="prepend">
          <Icon :size="14" type="md-image"></Icon>
        </span>
        <span class="immoc-code" slot="append" v-html="svg" @click="_getCode"></span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import { getcode } from '@/api/login'
import uuid from 'uuid/v4'

export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '账号不能为空', trigger: 'blur' }]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        code: '',
        sid: ''
      },
      svg: ''
    }
  },
  mounted () {
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
      this.form.sid = sid
    }
    this.$store.commit('setSid', sid)
    this._getCode()
  },
  computed: {
    rules () {
      return {
        username: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', { ...this.form })
        }
      })
    },
    _getCode () {
      getcode({
        sid: this.$store.state.sid
      }).then((res) => {
        const { code, data } = res
        if (code === 200) {
          this.svg = data
        }
      })
    }
  }
}
</script>
<style lang="less">
.immoc-input {
  .ivu-input-group-prepend {
    width: 32px;
  }
  .ivu-input-group-append {
    padding: 0;
  }
}
.immoc-code {
  display: inline-block;
  padding: 0;
  height: 28px;
  overflow: hidden;
  svg {
    width: 100px;
    position: relative;
    top: -6px;
  }
}
</style>
