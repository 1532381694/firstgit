<template>
  <div>
    <div class="container-fluid ">
      <Nav></Nav>
      <firstPage></firstPage>
      <div class="gamelist" style="margin-top: 20px">
        <Row  class="break-b">
          <Col span="6" >
            <a :href="'https://eoskingdom.io/webgame/pkIndex.html?master=base&timestamp='+ Date.parse(new Date())" target="_blank"  ><img src="@/assets/images/firstpage/C01-ICON_01_TH.png" alt=""></a>
            <div class="font-style"  >{{$t('ekd.NowPlaying')}}</div>
          </Col>
          <Col span="6">
            <a href="#"><img src="@/assets/images/firstpage/C01-ICON_02_BJ.png" alt="" ></a>
            <div class="font-style"  >{{$t('ekd.ComingSoon')}}</div>
          </Col>
          <Col span="6">
            <a href="#"><img src="@/assets/images/firstpage/C01-ICON_03_BC.png" alt=""  ></a>
            <div class="font-style"  >{{$t('ekd.ComingSoon')}}</div>
          </Col>
          <Col span="6">
            <a href="#"><img src="@/assets/images/firstpage/C01-ICON_04_RL.png" alt=""  ></a>
            <div class="font-style" >{{$t('ekd.ComingSoon')}}</div>
          </Col>
        </Row>
      </div>
      <info></info>
      <server></server>
       <shouyi></shouyi>
      <way></way>
       <team></team>
       <foot></foot>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/layout/nav'
import firstPage from '@/components/page/firstPage'
import info from '@/components/page/info'
import server from '@/components/page/server'
import shouyi from '@/components/page/shouyi'
import way from '@/components/page/way'
import team from '@/components/page/team'
import foot from '@/components/layout/foot'
import '@/assets/css/index.css'
import '@/assets/css/nav.css'
import '@/assets/css/foot.css'
import '@/assets/css/common.css'
import '@/assets/css/font.css'
export default {
    //导出引入组件
    components:{Nav, firstPage,info,server,shouyi,way,team,foot},
    name: 'index',
    data(){
        return{
          screenWidth: document.body.clientWidth,
          showDetails: true
        }
    },
    methods:{
      gamefontshow(a){
        var game=$('.ivu-col-span-6')
          $(game[a]).css('color','#D82156')
      },
      gamefontshow2(a){
              var game=$('.ivu-col-span-6')
          $(game[a]).css('color','#515a6e')
      },
      rolling() {
        var kai = true,i=0;
        var oUl = document.getElementsByTagName("ul")[0];
        document.addEventListener('mousewheel', function(ev) {
          var ev = window.event || ev;
          if (kai) {
            kai = false;
            oUl.style.transition=" 0.5s ease";
            if (ev.wheelDelta < 0&&i<5) {
              i++;
            }
            if (ev.wheelDelta > 0&&i>0) {
              i--;
            }
            setTimeout(function() {
              oUl.style.top = -i*100 + 'vh';
            }, 0);
            // console.log(i)
            setTimeout(function() {
              kai = true;
            }, 1000);
          }
        });
        onresize
        window.onresize=function(){
          oUl.style.transition="none";
        }
      },
      DetermineTheScroll(){
        let oneself = this
        if (this.screenWidth  > '1850'){
          oneself.showDetails = true
        }else {
          oneself.showDetails = false
        }
        window.onresize = function temp() {
          this.screenWidth = document.body.clientWidth
          window.onresize = function temp() {
            this.screenWidth = document.body.clientWidth
            if (this.screenWidth  > '1850'){
              ///  这里有问题
              oneself.$router.replace({
                path: '/supplierAllBack',
              })
            }else {
              oneself.showDetails = false
            }
          }
        }
      }
    },
    mounted() {
     /* this.rolling()
      this.DetermineTheScroll()*/

    }
}
</script>

<style>
  .layout{
    border: 0 !important;
    background-color: white !important;
  }
  .ivu-layout{
    background-color: white !important;
  }
.indexfull{
    padding-top: 50px;
}
.container-fluid{
    height: 60px;
}
.box {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.ul {
  position: relative;
}

.ul > li {
  width: 100%;
  height: 100vh;
  padding-top: 4%;
  position: relative;
  justify-content: center;
  text-align: center;
}
.font-style{
  height: 50px;
  font-weight: bold;
  /*font-weight: bold;*/
  font-size: 1.2em;
  line-height: 40px;
}
  .ivu-modal-footer {
    border-top: 0 !important;
    padding: 0 !important;
    text-align: right;
  }
  .ivu-modal {
    width: auto;
    margin: 0 auto;
    position: relative;
    outline: 0;
    top: 0 !important;
  }
  .ivu-col-span-6:first-child{
 color:#D82156;
  }
         
</style>
