<template>
  <div class="home">
    <!--首页页眉开始-->
    <div class="head">
      <div class="logo"></div>
    </div>
    <!--首页页眉结束-->

    <!--广告图轮播开始-->
    <!--广告图轮播结束/-->
    <div class="carousel">
      <transition-group tag="ul" class="clearfix1 slide" name="image">
        <li v-for="(image, index) in sliderData" :key="index" v-show="index===mark">
          <a><img :src="image.src"></a>
        </li>
      </transition-group>
      <div class="bullet">
        <span v-for='(item,index) in sliderData.length' :class="{'active':index===mark}" @click='change(index)'></span>
      </div>
    </div>

    <!--订餐开始-->
    <div class="dc-box">
      <span class="ksdc btn_loginToMenu">开始订餐</span>
       <router-link class="wd btn_loginToPerCenter" tag="span" to="/login">我的</router-link>
    </div>
    <!--订餐结束/-->

    <!--快捷菜单开始-->
    <div class="kj-menu" id="kj-menu">
      <div class='menuL'>
        <ul>
            <li class="icon-bg01 i1">
              <a href="javascript:void(0);">当季主打</a>
            </li>
            <li class="icon-bg01 i2">
              <a href="javascript:void(0);">天天1元</a>
            </li>
            <li class="icon-bg01 i3">
              <a href="javascript:void(0);">桶</a>
            </li>
            <li class="icon-bg01 i4" >
              <a href="javascript:void(0);">人气明星餐</a>
            </li>
            <li class="icon-bg01 i5" >
              <a href="javascript:void(0);">美味汉堡/卷</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      mark: 0,
      sliderData: [
        {
          src: './../../img/adv/adv1.jpg',
          titleCn: '天天一元（周五）',
          linkedUrl: '#'
        },
        {
          src: './../../img/adv/adv2.jpg',
          titleCn: '早餐',
          linkedUrl: '#'
        },
        {
          src: './../../img/adv/adv3.jpg',
          titleCn: '万圣节',
          linkedUrl: '#'
        },
        {
          src: './../../img/adv/adv4.jpg',
          titleCn: '下午茶(网红茶)',
          linkedUrl: '#'
        },
        {
          src: './../../img/adv/adv5.jpg',
          titleCn: '咖啡本周限定',
          linkedUrl: '#'
        },
        {
          src: './../../img/adv/adv6.jpg',
          titleCn: '咖啡本周限定',
          linkedUrl: '#'
        }
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      this.play()
    })
  },
  methods: {
    change (i) {
      this.mark = i
    },
    autoPlay () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
        return false
      }
    },
    play () {
      setInterval(this.autoPlay, 2000)
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .home
    font-size: 0
    .head
      height: 44px
      position: fixed
      border-1px(#dfdfdf)
      font-size: 16px
      color: #ff6326
      z-index: 2
      background-color: #FFF
      width: 100%
      .logo 
        width: 100px
        height: 100%
        background: url(./../../img/logo.png) center center no-repeat
        background-size: 100%
        margin: 0 0 0 13px
    @media screen and (min-width:370px)
      .carousel
        width: 100%
        height: 142px
        .slide
          width: 326px
          height: 142px
          li
            position: absolute
            img
              width: 326px
              height: 142px
              padding: 0 22px 0 22px
              border-radius: 7%
      .dc-box
        height: 88px
        .ksdc
          line-height: 88px
          font-size: 20px
          background: url(./img-03.png) 15px -172px no-repeat
        .wd
          background: url(./dc-icon02.png) 75% center no-repeat
          background-size: 57px
          text-indent: 10%
          line-height: 88px
          font-size: 20px
    @media screen and (max-width:370px)
      .carousel
        width: 280px
        height: 122px
        .slide
          width: 275px
          height: 117px
          li
            position: absolute
            overflow: hidden;
            img
              padding: 0 10px 0 0
              width: 275px
              height: 117px
      .dc-box
        height: 75px
        .ksdc
          line-height: 75px
          font-size: 18px
          background: url(./img-03.png) 13px -337px no-repeat
        .perCenter, .wd
          line-height: 75px
          font-size: 18px
        .wd
          background: url(./dc-icon02.png) 75% center no-repeat
          background-size: 48px
          text-indent: 8%
        .perCenter
          background: url(./dc-icon02.png) 92% center no-repeat
          background-size: 48px
          text-indent: 2%
    @media screen and (min-width:400px)
      .carousel
        width: 331px
        height: 164px
        .slide
          width: 326px
          height: 159px
          li
            position: absolute
            img
              width: 326px
              height: 159px
              padding: 0 37px 0 0px
      .dc-box
        height: 88px
        .ksdc
          line-height: 88px
          font-size: 20px
          background: url(./img-03.png) 18px -172px no-repeat
        .perCenter, .wd
          line-height: 88px
          font-size: 20px
        .wd
          background: url(./dc-icon02.png) 75% center no-repeat
          background-size: 57px
          text-indent: 10%
        .perCenter
          background: url(./dc-icon02.png) 92% center no-repeat
          background-size: 57px
          text-indent: 4%
    .carousel
      background: #fff
      margin: 5px auto 0 auto
      overflow: hidden
      position: relative
      .clearfix1
        content: ''
        clear: both
        display: block
      .image-enter-active
        transform: translateX(0)
        transition: all 0.5s ease
      .image-leave-active
        transform: translateX(-100%)
        transition: all 0.5s ease
      .image-enter
        transform: translateX(100%)
      .image-leave
        transform: translateX(0)
    .dc-box
      margin-top: 10px
      width: 94%
      border: 2px solid #CCC
      border-radius: 5px
      background-color: #FFF
      margin-left: 2.5%
      .ksdc
        width: 50%
        height: 100%
        float: left
        border-right: 1px solid #d9d9d9
        color: #1a79d9
        font-weight: 700
        text-align: left
        text-indent: 22%
        position: relative
        background-size: 162px auto
      .perCenter, .wd
        width: 49%
        color: #d93035
        font-weight: 700
        text-align: left
        height: 100%
        float: left
    .kj-menu
      width: 100%
      height: 64px
      border-top: 1px solid #e0dede
      border-bottom: 1px solid #e0dede
      background-color: #FFF
      margin: 12px 0 0
      padding: 5px 0
      .menuL
        width: 100%
        height: 100%
        ul
          width: 100%
          height: 100%
          display: flex
          .icon-bg01
            flex: 1
            width: 20%
            height: 100%
            position: relative
            background-size: 50px auto
            overflow: hidden
            background-repeat: no-repeat
            background-position: center -6px
            &.i1
              background-image: url(i1.png)
            &.i2
              background-image: url(i2.png)
            &.i3
              background-image: url(i3.png)
            &.i4
              background-image: url(i4.png)
            &.i5
              background-image: url(i5.png)
            a
              width: 100%
              height: 100%
              font-size: 11px
              color: #404040
              font-weight: 700
              top: 42px
              left: 0
              position: absolute
              text-align: center
              overflow: hidden
              text-decoration: none
              -webkit-tap-highlight-color: rgba(0,0,0,0);
              -webkit-tap-highlight-color: transparent;
</style>
