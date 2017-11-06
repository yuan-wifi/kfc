<template>
  <div class="login">
    <!--头部工具栏-->
    <div class="page-header_box">
      <div class="page-header">
        <router-link to="/" class="back">fdgfdg</router-link>
      </div>
    </div>

    <!--登录框盒子-->
    <div class="login-box">
      <div class="pic-head">
        <img src="./icon_avatar.png">
      </div>
      <div class="login-intro">
        <img class="star-left star" src="./icon_star.png" >
        <h1 class="title">请登入您的账户</h1>
        <img class="star-right star" src="./icon_star.png" >
      </div>
      <ul class="login-content">
        <li>
          <div class="input-box long">
              <span class="icon01 icon"></span>
              <input name="username" id="telephone" type="tel" placeholder="请输入手机号" class="username inputbox">
          </div>
        </li>
        <li v-if="nextData === true">
          <div class="input-box long">
              <span class="icon02 icon"></span>
              <input can-value="uid1" id="pwd" name="pwd" :type="password" placeholder="请输入密码" class="pwd inputbox">
              <div class="pwd-eye" :class="{'complete-password-notsee': seepwd===false, 'complete-password-see': seepwd===true}" @click="seePwd"></div>
          </div>
        </li>             
        <div class="green">
            <a class="ty ty-js" @click="selectRemember" :class="{on:warninfo===-1}">记住我</a>
        </div>
      </ul>
      <a href="javascript:void(0);" class="login-form-next" @click="nextResult">下一步</a>
      <a class="quick-register">快速注册</a>
    </div>

    <!--勾选提示信息-->
    <transition name="warn-remember">
      <div class="page-comfirm" v-show="warninfo===1">
        <div class="page-comfirmBox">
          <div class="container">
            <div class="title common"></div>
            <div class="content">选择“记住我”，您将在90天内保持登录状态。为避免您的账户产生异常订单，请不要在公用电脑上使用此功能。</div>
            <div class="buttons">
              <div class="page-button" @click="warninfo=-1">确定</div>
              <div class="page-button bright" @click="warninfo=0">取消</div>
            </div>    
          </div>
        </div>
      </div>
    </transition>

    <!--手机号码错误信息提示-->
    <transition name="fade">
      <div class="instantMessage" v-if="errtel===false">
        <span>请输入正确的手机号</span>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        warninfo: 0,
        nextData: false,
        errtel: true,
        seepwd: false,
        password: 'password'
      }
    },
    mounted () {
      let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
      this.$nextTick(() => {
        navigator.geolocation.getCurrentPosition(this.success, this.error, options)
      })
    },
    methods: {
      success (pos) {
        let crd = pos.coords

        console.log('Your current position is:')
        alert('Latitude : ' + crd.latitude)
        console.log('Longitude: ' + crd.longitude)
        console.log('More or less ' + crd.accuracy + ' meters.')
      },
      error (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message)
      },
      selectRemember () {
        // 选择是否记住我
        if (this.warninfo === -1) {
          this.warninfo = 0
        } else if (this.warninfo === 0) {
          this.warninfo = 1
        }
      },
      nextResult () {
        // 下一步验证
        let mobile = parseInt(document.getElementById('telephone').value) || 0
        this.errtel = this.validatemobile(mobile)
        if (this.errtel === false) {
          let timer1 = window.setTimeout(() => {
            this.errtel = true
            window.clearInterval(timer1)
          }, 3000)
        } else {
          this.nextData = true
        }
      },
      validatemobile (mobile) {
        // 验证手机号格式是否正确
        if (mobile.toString().length === 0) {
          return false
        }
        if (mobile.toString().length !== 11) {
          return false
        }

        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
        if (!myreg.test(mobile)) {
          return false
        }
        return true
      },
      seePwd () {
        // 查看隐藏密码
        let pwd = document.getElementById('pwd').value
        if (this.seepwd) {
          this.password = 'password'
        } else {
          this.password = 'text'
        }
        document.getElementById('pwd').value = pwd
        this.seepwd = !this.seepwd
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    .page-header_box
      position: relative
      left: 0
      top: 0
      margin: 0 auto
      width: 100%
      z-index: 2
      .page-header
        height: 44px
        position: relative
        font-size: 16px
        color: #ff6326
        z-index: 2
        background-color: #FFF
        left: 0
        padding: 0 32px
        .back
          width: 32px
          height: 44px
          position: absolute
          left: 0
          top: 0
          background: url(./img-02.png) 11px -685px no-repeat
          text-indent: -999px
          z-index: 999
          background-size: 71px auto
    .login-box
      width: 92%
      margin: 0 0 0 4%
      text-align: center
      .pic-head
        width: 21.3%
        margin: 1% auto 10%
        background: #fff
        border-radius: 50%
        img
          width: 100%
      .login-intro
        width: 48.6%;
        margin: 0 auto;
        position: relative
        .title
          display: inline-block
          line-height: 23px
          margin: 0 16px
          font-size: 16px
          font-weight: 700
          color: grey
        .star
          width: 8px
          position: absolute
          top: 8px
          &.star-left
            left: 0
          &.star-right
             right: 0
      .login-content
        margin: 0
        padding: 0
        list-style: none
        li
          width: 100%
          position: relative
          float: left
          margin: 20px 0 0
          padding: 0
          .input-box
            width: 100%
            height: 50px
            float: left
            background-color: #FFF
            border-radius: 5px
            box-shadow: 2px 2px 10px #e8e8e8, -2px -2px 10px #e8e8e8
            padding: 0
            .icon
              width: 25%
              max-width: 50px
              height: 100%
              float: left
              border-right: 1px solid #e0e0e0
              &.icon01
                background: url(./img-01.png) 17px -689px no-repeat
                background-size: 27px auto
              &.icon02 
                background: url(./img-01.png) 18px -607px no-repeat
                background-size: 27px auto
            .inputbox
              height: 50px
              float: left
              border: 0
              margin-left: 5%
              font-size: 14px
              &.username
                width: 75%
              &.pwd
                width: 55%
            .pwd-eye
              float: right
              height: 50px
              width: 15%
              &.complete-password-notsee
                background: url(./passwordNotSee.png) center center no-repeat
                background-size: 25px 15px 
              &.complete-password-see
                background: url(./passwordSee.png) center center no-repeat
                background-size: 25px 15px 
        .green
          width: 84%
          height: 35px
          line-height: 35px
          float: left
          font-size: 12px
          color: #a5a5a5
          text-align: left
          .ty
            background: url(./img-01.png) 2px 5px no-repeat
            background-size: 27px auto
            height: 35px
            line-height: 35px
            float: left
            font-size: 12px
            color: #a5a5a5
            text-indent: 30px
            text-align: left
            &.on
              background: url(./img-01.png) 0 -34px no-repeat
              background-size: 27px auto;
      .login-form-next
        width: 100%
        height: 40px
        line-height: 40px
        float: left
        background-color: #d93035
        border-radius: 5px
        font-size: 18px
        color: #FFF
        margin: 20px 0 0
      .quick-register
        float: left
        height: 40px
        line-height: 40px
        font-size: 14px
        color: #5c5c5c
        margin: 0
        text-align: right
    .page-comfirm
      width: 100%
      height: 100%
      position: fixed
      left: 0
      top: 0
      background: rgba(0,0,0,.4)
      z-index: 1001
      .page-comfirmBox
        height: 100%
        max-width: 400px
        margin: 0 auto
        position: relative
        .container
          position: absolute
          left: 50%
          top: 50%
          width: 90%
          background: #FFF
          margin: -100px 0 0 -45%
          box-shadow: rgba(0,0,0,.5) 1px 1px 10px
          border-radius: 5px
          overflow: hidden
          .title
            text-align: center
            padding: 0 0 10px
            color: #d93035
            background: url(./dz.png) bottom center no-repeat #FFF
            background-size: 50px 10px
            font-size: 18px
            line-height: 30px
          .content
            line-height: 24px
            font-size: 16px
            padding: 20px
            word-break: break-all
            text-align: center
            font-weight: 700
            color: #404040
          .buttons
            width: 256px
            height: 46px
            line-height: 44px
            float: left
            position: relative
            left: 50%
            margin-left: -128px
            margin-bottom: 20px
            .page-button
              width: 120px
              height: 44px
              float: left
              text-align: center
              border: 1px solid #ccc
              border-radius: 5px
              color: #d93035
              font-size: 16px
              &:last-child
                float: right
                background-color: #d93035
                color: #FFF
                font-size: 16px
      &.warn-remember-enter-active, &.warn-remember-leave-active
        transition: opacity .5s
      &.warn-remember-enter, &.warn-remember-leave-to
        opacity: 0
    .instantMessage
      position: fixed
      bottom: 30px
      width: 100%
      text-align: center
      z-index: 9999
      height: auto!important
      span
        margin: 10px
        background: rgba(0,0,0,.6)
        line-height: 20px
        color: #fff
        padding: 10px
        display: block
    .fade-enter-active, .fade-leave-active
      transition: opacity 1s
    .fade-enter, .fade-leave-to
      opacity: 0
</style>