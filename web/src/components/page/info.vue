<template>
  <div class="info">
    <div class="unified_limit_width">
     <Row  class="break-b " style="padding-top: 6%;width: 100%; margin-left:100px;">
        <Col span="12">
          <div class="titleimg">
           <img :src="$t('ICO_Introduction')" style="width: 100%">
          </div>
          <div class="buy clearfix">
            <div class="left">
             <div style="width: 75%;height: 41px;border-radius: 6px;background:white;        border: 2px solid #b9b9b9;"><input type="number" v-model="Eosamount" @input="CalculationEKD"><span  style="float:right;margin-top:1%;margin-right:10px;font-size:23px;color:#7F7F7F;font-weight:1000;">EOS</span></div> 
              <div style="width: 75%;height: 41px;border-radius: 6px;background:white;margin-top:2%;        border: 2px solid #b9b9b9;"><input type="number" v-model="EKOval" @input="CalculationEOS" readonly=true ><span style="float:right;margin-top:1%;margin-right:10px;font-size:23px;color:#7F7F7F;font-weight:1000;">EKD</span></div>
            </div>
            <div class="right_gray" v-if="buy">{{$t('ekd.buy')}}</div>
            <div class="right" @click="transaction" v-else>{{$t('ekd.buy')}}</div>
          </div>

  
          <div class="downCount">
           <!-- <div class="theCountdown">{{countDownList}}</div>-->
            <ul>
              <li class="time">
                <span class="border"></span>
                <span></span>
                <div class="timeLocation" style="left: 12px">{{countDownList}}</div>
              </li>
              <li class="maohao">:</li>
              <li class="time">
                <span class="border"></span>
                <span></span>
                <div class="timeLocation" style="left: -140px">{{countDownList}}</div>
              </li>
              <li class="maohao">:</li>
              <li class="time">
                <span class="border"></span>
                <span></span>
                <div class="timeLocation" style="left: -290px">{{countDownList}}</div>
              </li>
              <li class="maohao">: </li>
              <li class="time">
                <span class="border"></span>
                <span></span>
                <div class="timeLocation" style="left: -448px">{{countDownList}}</div>
              </li>
            </ul>
          </div>
          <!-- <theCountdown></theCountdown> -->
        </Col>
        <Col  span="12" style="text-align: center" class="ICO_bg">
          <!--<images src="@/assets/images/info/ICO.png" alt style="width: 70%">-->
        </Col>
        <Col span="24" style="height: 200px;margin-top: -50px;">
          <div class="container proAll">
            <div class="fanren">
              <div class="prograss">
                <div class="progressBar" :style="[progressWidth]">
              <span class="icontop">
                <strong>{{ progressValue }}</strong>
              </span>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span class="noborder"></span>
                <div class="alreadyPross" style="background: url()"></div>
              </div>
              <div class="total">2,000,000,000EKD</div>
            </div>
            <div class="proTextL">1:5000</div>
            <div class="proTextR">1:4500</div>
          </div>
        </Col>
      </Row>
    </div>
    <!--<div class="container">
      <div class="col-sm-12 col-md-6">
        <div class="titleimg">
          <images src="@/assets/images/info/ico_info.png" alt>
        </div>
        <div class="text">
          EOSKingDom(EKD) is a multifaceted game platform developing EOS-based blockchain. The user is
          provided with a safe, verifiable game platform through a blockchain system. The key game of the EKD
          is to launch games encompassing different genres including role-playing games, arcade games,
          board games and casino games and to foster entertaining environment for its users. The aim of EKD
          is to utilize the strengths of the EOS-based blockchain platform to provide an environment in which
          the game developers and the players are able to have confidence in each other, and to develop
          games for mutual growth and development
          <p>TOTAL ICO FUNDING : 2,000,000,000 EKD</p>
        </div>
        <div class="buy clearfix">
          <div class="left">
            <input type="number" v-model="Eosamount" @input="CalculationEKD">
            <input type="number" v-model="EKOval" @input="CalculationEOS">
          </div>
          <div class="right_gray" v-if="buy">购买</div>
          <div class="right" @click="transaction" v-else>购买</div>
        </div>
      &lt;!&ndash;  <count-down  :currentTime="1481450106" :startTime="1481450110" :endTime="1491450115" :tipText="开始文字提示" :tipTextEnd="结束文字提示" ></count-down>&ndash;&gt;

        <div class="downCount">
          <div class="theCountdown">{{countDownList}}</div>
          <ul>
            <li class="time">
              <span class="border"></span>
              <span></span>
            </li>
            <li class="maohao">&nbsp; </li>
            <li class="time">
              <span class="border"></span>
              <span></span>
            </li>
            <li class="maohao"> &nbsp; </li>
            <li class="time">
              <span class="border"></span>
              <span></span>
            </li>
            <li class="maohao"> &nbsp; </li>
            <li class="time">
              <span class="border"></span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 iconimg">
        <images src="@/assets/images/info/ICO.png" alt>
      </div>
    </div>
    <div>
      <div class="container proAll">
        <div class="fanren">
          <div class="prograss">
            <div class="progressBar" :style="[progressWidth]">
              <span class="icontop">
                <strong>{{ progressValue }}</strong>
              </span>
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span class="noborder"></span>
            &lt;!&ndash; 所走进度 &ndash;&gt;
            <div class="alreadyPross" style="background: url()"></div>
          </div>
          <div class="total">2,000,000,000EKD</div>
        </div>
        <div class="proTextL">1:5000</div>
        <div class="proTextR">1:4500</div>
      </div>
    </div>-->
      
  </div>
</template>

<script>
import Eos from "eosjs";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs";
import Service from "@/assets/js/scatterservice.js";
import config from "@/assets/js/scatterconfig.js";
import EosTab from '@/assets/js/EosTab'
import mixins from '@/components/mixins/mixins'
import Button from "iview/src/components/button/button";
import bgconn from '@/assets/js/bgconn'
export default {
  components: {Button},
  mixins: [mixins],
  data() {
    return {
      buy: true,
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      EKOval: 5000,
      secondStatus: false,
      eosClient: null,
      scatter: null,
      readOnlyEos: null,
      acc: null,
      Eosamount: 1,
      //剩余的EKD
      surplusEKD: null,
      //eos->ekd 兑换比例
      scale: null,
      //进度条赋值
      progressValue:'40%', //  进度条上方文字显示
      progressWidth:{'width':`40%`}, //进度条
      countDownList: '00:00:00:00',
      actStartTime: '2019-5-10 8:00:00',//开始时间
      actEndTime: '2019-5-19 18:00:00',//结束时间
    };
  },
  created() {
    this.icoInfo();
    this.icotime();
  },
  methods: {
    open(pd) {
      if(pd){
      this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong></strong>',
          duration:2000,
          iconClass:null
        });
      } else{
      this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong></strong>',
          duration:2000,
          customClass:"bgc2",
          iconClass:null
        });
      }
      $('.hidebginfo').css('display','block')
      $('.hidebginfo').css('height',`${document.body.clientHeight}px`)
      setTimeout(function(){ 
      $('.hidebginfo').css('display','none')
      }, 2100);
      },
    timeFormat(param) {
      return param < 10 ? '0' + param : param;
    },
    countDown(it) {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime();
        // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null;
        // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000;
          // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt(time % (60 * 60 * 24) / 3600);
          let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
          let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else { // 活动已结束，全部设置为'00'
          obj = {
            day: '00',
            hou: '00',
            min: '00',
            sec: '00'
          };
          clearInterval(interval);
        }
        this.countDownList = obj.day + ':' + obj.hou + ':' + obj.min + ':' + obj.sec ;
      }, 1000);
    },
    scattalert(content) {
        this.$alert(`<strong>${content}</strong><br/><a href="https://chrome.google.com/webstore/detail/scatter/ammjpmhgckkpcamddpolhchgomcojkle?utm_source=chrome-ntp-icon">下载scatter</a>`, '', {
          dangerouslyUseHTMLString: true,
          confirmButtonText:'OK',
           showClose:false
        });
      },
    scattalert2(content) {
        this.$alert(`<strong>${content}</strong>`, '', {
          dangerouslyUseHTMLString: true,
          confirmButtonText:'OK',
           showClose:false
        });
      },
    transaction() {
      if (sessionStorage.getItem("accountmsg") == null) {
        this.scattalert2(this.$t('ekd.scatterlogin'));
      } else {
        var reg = /^d+$/;
        if(this.Eosamount%1==0 && Math.floor(this.Eosamount*10+0.0001)/10>=1){
        this.acc = JSON.parse(sessionStorage.getItem("accountmsg"));
        Service.transfer(`${(parseFloat(this.Eosamount)).toFixed(4)} EOS`).then().then(rs=>{
          this.open(true)
        }).catch(error=>{
        this.open(false)
        })
      }else{
        this.scattalert2(this.$t('ekd.scatterbuy'));
      }
      }
    },
    //计算EKD数量
    CalculationEKD() {
      if(this.Eosamount<0){
        this.Eosamount=0
      }else{
      this.EKOval = this.Eosamount * this.scale;
      }
    },
    CalculationEOS() {
       if(this.EKOval<0){
         this.EKOval=0
      }else{
       this.Eosamount = this.EKOval / this.scale;
      }
    },
    //判断开始时间
    getStartTime() {
    var nowTime = new Date().getTime();
      var startTime = new Date(this.actStartTime).getTime();
      if( nowTime > startTime){
        this.buy = false
        this.countDown()
      }
    },
     icoInfo() {
       Service.getTableRows(EosTab.ICOACC, EosTab.ICOACC, EosTab.GLOBAL).then(
        data => {
          this.surplusEKD = data.rows[0].total;
          this.progressValue=`${(((2000000000-parseFloat(this.surplusEKD))/2000000000)*100).toFixed(2)}%`
          this.progressWidth={'width':`${this.progressValue}`}
        }
      );
   Service.getTableRows(EosTab.ICOACC, EosTab.ICOACC, EosTab. ICOCONTENT).then(
        data => {
          this.surplusEKD = data.rows[0].total;
          this.scale = data.rows[0].scale;
        }
      );
    },
    async icotime(){
         const result=await this.$http.get(bgconn.ICOTIME)
           this.actStartTime=(result.data.startTime.replace(/\//g, "-").substr(0,10)+' '+result.data.startTime.replace(/\//g, "-").substr(12,result.data.startTime.length))
           //this.actEndTime=(result.data.endTime.replace(/\//g, "-").substr(0,10)+' '+result.data.endTime.replace(/\//g, "-").substr(12,result.data.endTime.length))
    }
  },
  mounted() {
    this.getStartTime()
  }
};
</script>

<style>
  .progressBar{
    border-radius: 10px;
    width: 37%;
    height: 22px;
    z-index: -1;
    position: absolute;
    background: linear-gradient(to right, #cc5345 35%, #ff7f36 68%);
  }
  .theCountdown{
    letter-spacing: 30px;
    color: #fff;
    font-size: 2em;
    text-align: center;
    position: absolute;
    top: 6px;
    width: 513px;
  }
   .el-message--info{
    background: url("../../assets/images/info/success.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width:407px;
    height:216px;
    border-width:0px;
  }
  .bgc2{
    background: url("../../assets/images/info/fail.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width:407px;
    height:216px;
    border-width:0px; 
  }
  .el-icon-info{
      display: none;
  }
  .hidebginfo { 
    position:absolute;left:0px;top:0px;
    background-color:rgb(26, 19, 19);
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    display:none; /* http://www.jb51.net */
    z-Index:2;
}
 .hidebox { 
     position:absolute;
     width:400px;
     height:300px;
     top:200px;
     left:30%;
     background-color:#fff;
     display:none;
     cursor:pointer;
     z-Index:3;
    }
 .el-button{ 
     text-align:center;
     cursor:pointer;
     z-Index:1;
    }
  .timeLocation{
    position: absolute;
    color: #fff;
    font-size: 4em;
    width: 300px;
    letter-spacing: 29px;
    top: -1px;
    left: 10px;
  }
  .ICO_bg{
    background: url('../../assets/images/info/ICO.png') no-repeat center center;
    min-height: 555px;
    height: auto;
    background-size: 95% 100%;
  }
</style>
