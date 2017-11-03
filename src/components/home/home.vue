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
      <span id="btn_loginToMenu" class="ksdc btn_loginToMenu">开始订餐</span>
      <span id="btn_loginToPerCenter" class="wd btn_loginToPerCenter">我的</span>
    </div>
    <!--订餐结束/-->
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
        margin: 0 auto;
        overflow: hidden;
        position: relative;
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
          width: 94%
          height: 88px
          float: left
          border: 2px solid #e4e4e4
          -webkit-border-radius: 5px
          -moz-border-radius: 5px
          border-radius: 5px
          background-color: #FFF
          margin-left: 2.5%
          .ksdc
            width: 50%
            height: 100%
            line-height: 88px
            float: left
            border-right: 1px solid #d9d9d9
            font-size: 20px
            color: #1a79d9
            font-weight: 700
            background: url(./img-03.png) 15px -172px no-repeat
            text-align: left
            text-indent: 22%
            position: relative
            background-size: 162px auto
          .wd
            background: url(./dc-icon02.png) 75% center no-repeat
            background-size: 57px
            text-indent: 10%
            width: 49%
            line-height: 88px
            font-size: 20px
            color: #d93035
            font-weight: 700
            text-align: left
            height: 100%
            float: left
    @media screen and (max-width:370px)
      .carousel
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        width: 280px
        height: 122px
        .slide
          width: 275px
          height: 117px
          li
            position: absolute
            overflow: hidden;
            img
              width: 275px
              height: 117px
              border-radius: 5px;
              box-shadow: 4px 4px 5px #e3e3e3
    @media screen and (min-width:400px)
      .carousel
        margin: 0 auto;
        overflow: hidden;
        position: relative;
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
              border-radius: 5px;
              box-shadow: 4px 4px 5px #e3e3e3
    .carousel
      margin-top: 5px
      .clearfix1
        content: ''
        clear: both
        display: block
      .image-enter-active
        transform: translateX(0)
        transition: all 1s ease
      .image-leave-active
        transform: translateX(-100%)
        transition: all 1s ease
      .image-enter
        transform: translateX(100%)
      .image-leave
        transform: translateX(0)
    .dc-box
      margin-top: 10px
</style>
