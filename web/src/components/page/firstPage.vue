<template>
  <div class="firstpage_bg">
    <div class="firstpage unified_limit_width">
      <!--"@/assets/images/firstpage/banner1.png"-->
      <div id="certify" class="zoom_content" :style="zoom_content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/images/firstpage/banner1.png" style="width: 100%;height: 100%"/></div>
            <div class="swiper-slide"><img src="@/assets/images/firstpage/banner1001.png" style="width: 100%;height: 100%"/></div>
            <div class="swiper-slide"><img src="@/assets/images/firstpage/banner3003.png" style="width: 100%;height: 100%"/></div>
              <div class="swiper-slide"><img src="@/assets/images/firstpage/ENENT.png" style="width: 100%;height: 100%"/></div>
          </div>
        </div>
            <div>
          <img src="@/assets/images/firstpage/yinying.png" style="width: 100%;height: 100%; margin-top: -80px;"/>        </div>
        <div class="swiper-pagination" style="margin-top: -50px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
/*
  import '@/assets/css/swiperStyle.css'
*/
  import '@/assets/css/certify.css'

  export default {
    data() {
      return{
        scale:1,
      }
    },
    methods:{
      certifySwiper(){
        certifySwiper = new Swiper('#certify .swiper-container', {
          watchSlidesProgress: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          loopedSlides: 3,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
          },
          on: {
            progress: function(progress) {
              for ( var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;

                if (Math.abs(slideProgress) > 1) {
                  var modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
                }
                var translate = slideProgress * modify * 584 + 'px';
                var scale = 1 - Math.abs(slideProgress) / 5;
                var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 3) {
                  slide.css('opacity', 0);
                }
              }
            },
            setTransition: function(transition) {
              for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
              }

            }
          }
        })
      }
    },
    mounted(){
      let this_ = this
      if (document.body.clientWidth  < 1000){
        this_.scale = 0.728
        //this_.scale = document.body.clientWidth / 1320
      }else if(document.body.clientWidth > 1890){
        this_.scale = 1
      }else if(1000<document.body.clientWidth && document.body.clientWidth <= 1200){
        this_.scale = 0.73
      }else {
        this_.scale = document.body.clientWidth * 0.7 / 1320
        if(this_.scale < 0.728){
          this_.scale = 0.728
        }
      }
      if(this_.scale > 1){
        this_.scale =1
      }
      window.onresize = function temp() {
        if (document.body.clientWidth  < 1000){
          this_.scale = 0.728
          //this_.scale = document.body.clientWidth / 1320
        }else if(document.body.clientWidth > 1890){
          this_.scale = 1
        }else if(1000<document.body.clientWidth && document.body.clientWidth <= 1500){
          this_.scale = 0.73
        }else {
          this_.scale = document.body.clientWidth * 0.7 / 1320
        }
        if(this_.scale > 1){
          this_.scale =1
        }
      }
      this.certifySwiper()
    },
    computed:{
      zoom_content:function () {
        var scale = this.scale;
        return `transform:scale(${scale})`
      }
    }
  }
</script>

<style>
  .firstpage_bg{
    background: url('../../assets/images/firstpage/background.jpg')no-repeat;
    background-size: 100% 100%;
    height: auto;
    min-height: 650px;
  }
  .firstpage{
    padding-top: 130px;
    height: auto;
    padding-left: 80px;
  }
  .carousel-indicators{
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 100px;
    padding-left: 0;
    margin-left: -60px;
    text-align: center;
    list-style: none;
  }
  .zoom_content{
    -webkit-transform-origin: top left;
  }
  @media screen and (min-width: 0px) and (max-width: 1219px){
    .firstpage_bg{
      height: 500px;
      min-height:520px;
    }
  }
  @media screen and (min-width: 1220px) and (max-width: 1260px){
    .firstpage_bg{
      height: 490px;
      min-height:490px;
    }
  }
  @media screen and (min-width: 1261px) and (max-width: 1345px){
    .firstpage_bg{
      height: 510px;
      min-height:510px;
    }
  }
  @media screen and (min-width: 1346px) and (max-width: 1426px){
    .firstpage_bg{
      height: 540px;
      min-height:540px;
    }
  }
  @media screen and (min-width: 1427px) and (max-width: 1526px){
    .firstpage_bg{
      height: 580px;
      min-height:580px;
    }
  }
  @media screen and (min-width: 1527px) and (max-width: 1627px){
    .firstpage_bg{
      height: 600px;
      min-height:600px;
    }
  }
  @media screen and (min-width: 1627px) and (max-width: 1727px){
    .firstpage_bg{
      height: 610px;
      min-height:610px;
    }
  }
  @media screen and (min-width: 1727px) and (max-width: 1920px){
    .firstpage_bg{
      min-height:680px;
    }
  }

</style>
