<template>
  <div class="share_out" >
    <Nav></Nav>
    <div class="content " :style="[content_height]">
      <div class="zoom_width zoom_content" :style="zoom_content">
          <div class="  bottomDistance" >
            <div class="count">
              <div class="title">
                <div class="sum title1_bg" @click="sum_titleF">{{$t('ekd.statistics')}}</div>
                <div class="sort" @click="sort_titleF">{{$t('ekd.rankinglist')}}</div>
              </div>
              <div v-if="sum_title">
                <ul class="clearfix">
                  <li>
                    <div style="float:left;text-align:center;width:100%;margin-top:12px;font-weight:1000;color:#ED5473;"></div>
                    <div class="row">
                      
                      <span class="span1">{{$t('ekd.circulation')}}</span>
                      <span class="press">
                      <!-- <div class="alreadypre"> -->
                        <div v-bind:style="{width:traffic + '%'}" class="alreadypre" ><span style="float:left;background:red;"></span></div>
                        <!-- {{data.dividendsEntity.ekdCirculating}} -->
                        <!-- </div> -->
                        <span style="float:right;font-weight:1000;position: relative;top:2px;left:-60px;color:#ED5473;">{{this.Formatdata(this.data.dividendsEntity.ekdCirculating)}}</span>
                    </span>
                      <span class="total">{{ Math.floor((Number(this.data.dividendsEntity.ekdCirculating)/10000000000)*10000)/100}}%</span>
                    </div>
                    <p style="font-size:13px;font-weight:1000;">Total: 10,&nbsp;000,&nbsp;000,&nbsp;000</p>
                  </li>
                  <li>
                     <div style="float:left;text-align:center;width:100%;margin-top:12px;font-weight:1000;color:#ED5473;"></div>
                    <div class="row">
                      <span class="span1">{{$t('ekd.cmountofpledge')}}</span>
                      <span class="press">
                      <div v-bind:style="{width: pledge + '%'}" class="alreadypre"></div>
                        <span style="float:right;font-weight:1000;position: relative;top:2px; left:-60px;color:#ED5473;">{{this.Formatdata(this.data.dividendsEntity.pledgeTotal)}}</span>
                    </span>
                      <span class="total" >{{ Math.floor((Number(this.data.dividendsEntity.pledgeTotal)/(this.data.dividendsEntity.ekdCirculating))*10000)/100}}%</span>
                    </div>
                    <p style="font-size:13px;font-weight:1000;">Total: {{ this.Formatdata((this.data.dividendsEntity.ekdCirculating))}}</p>
                  </li>
                  <li>
                     <div style="float:left;text-align:center;width:100%;margin-top:12px;color:#515a7c;font-weight:1000;color:#ED5473;"></div>
                    <div class="row">
                      <span class="span1">{{$t('ekd.mining')}}</span>
                      <span class="press">
                      <div v-bind:style="{width: dig + '%'}" class="alreadypre"></div>
                      <span  style="float:right;font-weight:1000;position: relative;top:2px;left:-90px;color:#ED5473;">{{this.Formatdata(this.data.dividendsEntity.minedTotal)}}</span>
                    </span>
                      <span class="total">{{ Math.floor((Number(this.data.dividendsEntity.minedTotal)/5000000000)*10000)/100}}%</span>
                    </div>
                    <p style="font-size:13px;font-weight:1000;">Total: 5,&nbsp;000,&nbsp;000,&nbsp;000</p>
                  </li>
                </ul>
                <div class="jieduan">{{$t('ekd.stageone')}} 1:{{data.dividendsEntity.minedScale}}</div>
              </div>
              <div v-if="sort_title">
                           <div ><div style="width:23%;float:left;padding-left:20px; font-weight:600;padding-top:2%;">{{$t('ekd.number')}}</div>
                <div style="width:25%;text-align:left;float:left;font-weight:600;padding-top:2%;">{{$t('ekd.account')}}</div><div style="width:33%;text-align:left;float:left;padding-left:30px;font-weight:600;padding-top:2%;">{{$t('ekd.amount')}}</div></div>
          <div style="height:300px;padding-top:30px;">
        <vue-scroll :ops="ops" style="width:100%;height:290px;">
                    <ul class='your-content'>
                      <li v-for="(item,i) in list" :key="i" style="border-top:1px solid #d8d8d8;height:30px;">
                        <div style="width:23%;float:left;padding-top:2%;margin-left:5%;font-weight:1000;">{{item.ranking}}</div>
                          <div style="float:left;width:33%;float:left;padding-top:2%;margin-left:-14%;font-weight:1000;">{{item.holding_account}}</div>
                          <div style="width:23%;float:left;padding-top:2%;font-weight:1000;text-align:right;">{{item.amount}}&nbsp;</div><span style="color:#ED5473;float：left;margin-left:10px;text-align:center;position: relative;top:5px;font-weight:1000;">EKD</span>
                           <div style="width:10%;float:right;padding-top:2%;font-weight:1000;  position: relative;left:-17px;">{{ Math.floor((Number(item.amount)/10000000000)*10000)/100}}%</div>
                        </li>
                    </ul>
            </vue-scroll>
          </div>
              </div>
            </div>
          </div>
          <div class="  bottomDistance">
            <div class="fenhong">
              <div class="title">
                <!-- <div class="title1" @click="bonusPool">分红池</div>
                <div class="title2" @click="platformclick">分红记录</div> -->
                <div class="title1 title1_bg"  @click="bonusPool">{{$t('ekd.bonus')}}</div>
                <div class="title2"  @click="platformclick">{{$t('ekd.Distributionrecord')}}</div>
              </div>
              <!-- 点击分红池 -->
              <!-- <div class="fhVContent" v-if="bonusWin"> -->
              <div class="fhVContent"  v-if="bonusWin">
                <div class="con1">
                  <p>{{$t('ekd.BonusPoolAward')}}</p>
                  <div class="total">
                    <span class="span1">{{ data.dividendsEntity.dividendsTotal}}</span>
                  </div>
                  <div class="eos">
                   <img src="@/assets/images/share_out/eoslogo.png" alt>
                      <span style="position: absolute;top: 8px;margin-left: 5px">EOS</span>
                  </div>
                </div>
                <div class="con2">
                  <p>{{$t('ekd.pdekd')}}</p>
                  <h3>
                     {{this.data.dividendsEntity.profit}}
                    <span>EOS&nbsp;&nbsp;</span>
                    <span>
                      <img src="@/assets/images/share_out/ico.png" alt>
                    </span>
                  </h3>
                </div>
                <div class="con3">
                  <p>{{$t('ekd.peeth')}}</p>
                  <h3>
                    {{this.data.dividendsEntity.curretDividend}}
                    <span>EOS&nbsp;&nbsp;</span>
                    <span>
                      <img src="@/assets/images/share_out/ico.png" alt>
                    </span>
                  </h3>
                  
                  <div class="dibu">
                  <span><img src="@/assets/images/share_out/eoslogo.png" alt style=" opacity:0.7;width:10%;heght:10%;float:left;padding-top: 2%;"></span>
                <span class='con6_last' style="text-align:left;">{{this.notEosTotal}}&nbsp;<span style="color:#64a645;"></span></span>
                <span class="rt"></span>
                   <div class="receive" @click="Dividendsreceived">
                  <img style="cursor:pointer;"   :src="$t('lingquko')">
               </div>
                </div>
                   
               <div class="help" style="position: absolute;top:74%;">
                  <img src="@/assets/images/share_out/ico2.png" @mouseenter="enter()" @mouseleave="leave()" style="cursor:help" >
                  <div class="help_introduce" v-if="helpIntroduce === true">

                   <img  style="cursor:pointer;"  :src="$t('fenhongguize')">
                  </div>
                </div>
                </div>
            
              </div>
              <!-- 点击分红记录 -->
              <div class="fhVContent latformBonus" v-if="platformWin">
                  <div class="platformBonus">
                    <div class="tit">

                    </div>
                    <div class="tit2 tit2_bg2">
                      <label>0</label> EOS
                    </div>
                    <div class="tit3" style="font-weight:1000;">{{$t('ekd.dividendrecord')}}</div>
                    <div >
                      <div style="background:rgb(236, 236, 236);width:100%">
                        <div class="platformpage"  style="padding-top:13px;">
                        <img src="@/assets/images/share_out/left.png" style="float:left; cursor:pointer;"  @click="platBackoff">
                        <span style="float:left;margin: 4px 15px 0;font-weight:1000;">{{platformDay}}</span>
                        <img src="@/assets/images/share_out/right.png" style="cursor:pointer;" @click="platForward">
                      </div>
                      </div>
                      <ul class="platformList">
                        <li  v-for="(item,i) in platformList" :key="i" class="clearfix">
                          <span class="left">{{item.dividendsInterval}}</span>
                          <span class="right" style="color:#ED5473;">0</span>
                        </li>
                        <div v-if="platformList.length === 0" style="text-align:center; padding:10px 0;" >暂无数据</div>
                      </ul>
                    </div>
                  </div>
              </div>
                  
        
            </div>
          </div>
          <div class="  bottomDistance">
            <div class="echars">
              <div class="title">{{$t('ekd.quotations')}}</div>
              <div class="echars1">
                <img src="@/assets/images/share_out/img.png" alt="">
              </div>
              <div class="bottom">
                <div class="eosvalue">
                  EKD/EOS
                  <span>0.0001</span>
                </div>
                <div class="usdtvalue">
                  EKD/USDT
                  <span>0.0001</span>
                </div>
              </div>
            </div>
          </div>
        <!-- 质押/赎回 -->
        <div class="zhiya ">
          <div class="ekd ">
            <p class="kingdom">Staked</p>
            <p class="total">
              {{this.alreadypledged}}
              <span>EKD</span>
            </p>
            
          </div>

          <div class="jilu " @click="fenhongClick">
            <div class="sd_button button_jilu" >
              <img :src="$t('jiluko')">
            </div>
          </div>
          <!-- 个人分红记录 -->

          <div class="shu  " @click="shuhuiClick()">
            <div class="sd_button button_shu" style="margin: 0 auto;cursor:pointer;" >
              <img :src="$t('shuhuiko')">
            </div>
          </div>
          <Modal
            :closable='false'
            :width="700"
            class-name="vertical-center-modal"
            v-model="fenhong">
            <div class="participation_window_con">
              <div class="tit">
                <div class="tit2 bg2">
                  <label>{{this.dividends_total}}</label> EOS
                </div>
                <div class="btn" @click="fenhongCancel">
                  <img src="@/assets/images/share_out/cancel.png">
                </div>
              </div>


              <div class="tit3" style="font-weight:1000;color:#515a6e; color:rgba(81, 90, 110, 0.87);">  {{$t('ekd.cumulative')}}</div>

              <div class="lists">
                <div class="select_date">
                  <img src="@/assets/images/share_out/left.png"  style="cursor:pointer;" @click="Backoff">
                  <span style="font-weight:1000; color:#515a6ebd;">{{this.fenhongList[0].createTime}}</span>
                  <img src="@/assets/images/share_out/right.png"  style="cursor:pointer;" @click="Forward">
                </div>
                <ul>
                  <li  v-for="(item,i) in fenhongList" :key="i">
                    <span class="left">{{item.grantTime}}</span>
                    <span class="right" style="color:#ED5473;"></span>
                  </li>
         
                  <li v-if="fenhongList.length === 0" style="text-align:center">暂无数据</li>
                </ul>
              </div>
            </div>

            <div slot="footer">
            </div>
          </Modal>
          <!-- 赎回窗口 -->
         <!-- <div class="pledge_and_redeem_window" id="window_redeem" v-if="shuhui">
            <div class="pledge_and_redeem_con">
              <div class="tit">
                <span>
                  <label data-bind="text:myEkdStaking">{{this.Redemptionamount}}</label> EKD
                </span>
                <div class="btn" @click="shuhuiCancel">
                  <img src="@/assets/images/share_out/cancel.png">
                </div>
              </div>
              <div class="ipt">
                <input type="number" v-model="EKDredeem">
                <div class="btn" onclick>全部</div>
              </div>
              <div class="opt">
                <img src="@/assets/images/share_out/btn2.png" @click="redeem">
              </div>
              <p>*赎回需要24小时完成 ，期间不参与分红</p>
            </div>
          </div>-->
          <Modal
            :closable='false'
            :width="801"
            class-name="vertical-center-modal"
            v-model="shuhui">
            <div class="pledge_and_redeem_con">
              <div class="tit">
                <span>
                  <label data-bind="text:myEkdStaking">{{this.Redemptionamount}}</label>
                   <span style="font-size: 20px;margin-left: 5px;">EKD</span>
                </span>
                <div class="btn" @click="shuhuiCancel">
                  <img src="@/assets/images/share_out/cancel.png">
                </div>
              </div>
              <div class="ipt">
                <div class="input_img">
                  <div class="logo" ><img src="@/assets/images/share_out/ekdlogo.png"></div>
                </div>
                <input type="number" v-model="EKDredeem" @input="checkRedeem">
                <div class="btn" @click="RedeemAll">
                <img :src="$t('quanbuko')">
                </div>
              </div>
              <div class="opt">
                 <div class="sd_button button_shu" style="margin: 0 auto;cursor:pointer;" @click="redeem">
                   <img :src="$t('shuhuiko')">
            </div>
               
              </div>
              <div class="shan">
              
              <span style="margin-top:10px;float:left;padding-left:35%;">
                <time style="color: rgb(238, 79, 107);font-size: 1.2em;font-weight: bold;">{{this.redeemabletime}}</time>
                <span>{{this.redeemable}} EKD {{$t('ekd.Unstaking')}}</span>
                <img src="" alt="">
              </span>
             
                <span style="position: relative;top:-3px;left:-73px;"><img style="cursor:pointer;"  :src="$t('chongxinzhiya')" @click="repledge"></span>
        
            </div>
              <p>{{$t('ekd.Unstakingmsg')}}</p>
              <div>
                </div>
            </div>
            <div slot="footer"></div>
          </Modal>
          <div class="zhi " @click="zhiyaClick()">
            <div class="sd_button button_zhi">
              <img :src="$t('zhiyako')">
            </div>
           
          </div>
          <!--EDK百分比-->
          <div class="baifen">{{Number(parseFloat((this.alreadypledged / this.data.dividendsEntity.pledgeTotal)*100).toFixed(4).slice(0,-2))}}%</div>
          <!-- 质押窗口 -->
          <Modal
            :closable='false'
            :width="801"
            class-name="vertical-center-modal"
            v-model="zhiyawin">
            <div class="pledge_and_redeem_window" id="window_pledge" >
              <div class="pledge_and_redeem_con">
                <div class="tit">
                <span class="title">
                  <label data-bind="text:myEkdBalance">{{this.Mortgable}} </label>
                  <span style="font-size: 20px;margin-left: 5px;">EKD</span>
                </span>
                  <div class="btn" @click="cancelzhiya">
                    <img src="@/assets/images/share_out/cancel.png">
                  </div>
                  
                </div>
                <div class="ipt">
                  <!-- ipt_pledge-->
                  <div class="input_img">
                   <div class="logo" ><img src="@/assets/images/share_out/ekdlogo.png"></div>
                  </div>
                  <input type="number" v-model="EKDamount" @input="checkPledge">
                  <div class="btn" @click="pledgeAll">
                      <img :src="$t('quanbuko')">
                  </div>
                </div>
                <div class="opt">
                 <div class="sd_button button_zhi" style="margin: 0 auto;cursor:pointer;" @click="mortgage">
                   <img :src="$t('zhiyako')">
                  </div>
                </div>
              </div>
              <div class="cxzy">
               <span style="float:left;padding-left:25%;padding-top:11px;"><span style="color:#ED5473;font-size:18px;">{{this.redeemabletime}}</span>  <span style="margin-left:15px;font-size:18px;text-align: left;"> {{this.redeemable}}&nbsp;EKD&nbsp;{{$t('ekd.Unstaking')}}</span></span><div class="Repledge2" @click="repledge">
                 <img style="cursor:pointer;" :src="$t('chongxinzhiya')">
               </div>
               </div>
            </div>
            <div slot="footer">
            </div>
          </Modal>
        </div>
      </div>
    </div>
    <foot></foot>
     <div class="hidebginfo">
     </div>
  </div>
</template>
<script>
import Nav from "@/components/layout/nav";
import foot from "@/components/layout/foot";
import "@/assets/css/common.css";
import "@/assets/css/share_out.css";
import "@/assets/css/nav.css";
import "@/assets/css/foot.css";
import Eos from "eosjs";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs";
import Service from "@/assets/js/scatterservice.js";
import config from "@/assets/js/scatterconfig.js";
import EosTab from '@/assets/js/EosTab'
import bgconn from "@/assets/js/bgconn.js";
export default {
  components: { Nav, foot },
  name: "share_out",
  data() {
    return {
      zhiyawin: false,
      shuhui: false,
      fenhong: false,
      sum_title: true,
      sort_title: false,
      // 分红池窗口
      bonusWin: true,
      platformWin: false,
      personalbonus: [],
      day: null,
      //EKD质押量
      EKDamount: 0,
      //EKD赎回量
      EKDredeem: 0,
      //已经质押的量
      alreadypledged: 0,
      //可赎回量
      Redemptionamount:0,
      //账号EKD总量
      EKDtotal: '0 EOS',
      Ekd_total:0,
      currentAccount: null,
      Mortgable:0,
      surplusEKD:null,
      dividends_total:0,
      //平台分红记录
      platformList:[],
      platformDay: null,
      //个人分红记录
      priviceList:[],
      priviceDay: null,
      content_height: {'height':`820px`},
      traffic:'', //流量
      pledge:'', //质押
      dig:'', //挖矿
      scale:1,
      currenttime:null,
      plattime:null,
      plats_total:0,
      //未领取分红
      notEosTotal:0,
      //当前时间
      nowtime:null,
      //百分比
      Percentage:0,
      count:true,
      helpIntroduce:false, //帮助
       ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {
                        keepShow:true
                    },
                    bar: {
                        hoverStyle: true,
                        onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
                       background: '#ED5473'
                    }
                },
      list:[
      ],
      redeemable:0,
      redeemabletime:0,
      data: {
          'msg': '成功',
          'staking_balance_ekd': '',
          'balance_ekd': '',
          dividendsEntity: {
            'id': 0,
            'dividendsTotal': '',
            'pledgeTotal': '',
            'ekdIssuerTotal': '',
            'ekdCirculating': '',
            'profit': '',
            'curretDividend': '',
            'minedTotal': '',
            'minedCirculating': '',
            'minedStage': '',
            'minedScale': '',
            'updateTime': ''
          },
        },
        fenhongList: [{
        account:"",
        thisEosAmount:'',
        thisEkdAmount:"",
        grantTime:"",
        createTime:new Date().getUTCFullYear()+'-'+(new Date().getMonth()+1)+"-"+new Date().getDate()}]
    }
  },
  created() {
    const timeId=setInterval(()  => {
      if(sessionStorage.getItem("accountmsg")==null){
        $('.zhiya').css('display','none')
         }else{
      this.alreadypledged=Math.floor(Service.AccuracycalculationOut(Service.EosAcc.alreadypledged)*100+0.0000001)/100
      Service.pledgerecord();
        $('.zhiya').css('display','block')
        $('.dibu').css('display','block')
        this.redeemabletime=Service.EosAcc.redeemabletime
        this.redeemabletime=((24*60*60)- parseInt((new Date().getTime()- new Date(Service.EosAcc.redeemabletime).getTime())/1000))
        if(this.redeemabletime<=60){
            this.redeemabletime=`00:00:${parseInt(this.redeemabletime)}`
        }else if(this.redeemabletime>60 && this.redeemabletime<3600){
            this.redeemabletime=`00:${parseInt(this.redeemabletime/60)}:${parseInt(this.redeemabletime%60)}`
        }else if(this.redeemabletime>=3600){
          this.redeemabletime= `${parseInt(this.redeemabletime/3600)}:${parseInt(this.redeemabletime%3600/60)}:${parseInt(this.redeemabletime%60)}`
        }
      }
    },1000);
    setInterval(()  => {
     this.init();
    },10000);
        const timeId2=setInterval(()  => {
           if(sessionStorage.getItem("accountmsg")!=null){
   $('.dibu').css('display','block')
   clearInterval(timeId2)
           }
    },1000);
    this.init();

this.fenhongjulu()
this.platformdata()
this.Redemptionamount = Service.AccuracycalculationOut(Service.EosAcc.Redemptionamount)
this.Mortgable=Service.AccuracycalculationOut(Service.EosAcc.Mortgable)
this.redeemable=Service.AccuracycalculationOut(Service.EosAcc.redeemable)
this.nowtime=new Date()
//this.Mortgable=Service.EosAcc.Mortgable
 this.currenttime=new Date();
 this.plattime=new Date();
this.ranklist()


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
        $('.hidebg').css('display','block')
        $('.hidebg').css('height',`${document.body.clientHeight}px`)
        setTimeout(function(){ 
        $('.hidebg').css('display','none')
        }, 2300);
      },
    // 点击分红池
    bonusPool (){
      this.bonusWin = true
      this.platformWin = false
      $('.title2').removeClass('title1_bg')
      $('.title1').addClass('title1_bg')
    },
    platformclick (){
      this.platformWin = true
      this.bonusWin = false
      $('.title1').removeClass('title1_bg')
      $('.title2').addClass('title1_bg')
      this.platformdata()
    },
    //统计排行榜
    sum_titleF() {
      this.sum_title = true
      this.sort_title = false
      $('.sort').removeClass('title1_bg')
      $('.sum').addClass('title1_bg')
    },
    sort_titleF() {
      this.sort_title = true
      this.sum_title = false
      $('.sum').removeClass('title1_bg')
      $('.sort').addClass('title1_bg')
    },
    // 分红平台数据
    async platformdata (){
      var res = await this.$http.get(
       bgconn.ABONUS
      );
      var { status, data } = res;
      if (status === 200) {
        this.platformList = res.data.page.list;
       
        this.platformDay = res.data.page.list[0].dividendsTime;     
      }
      this.Platformbonus(res)

    },
     //平台分红记录后退
    async platBackoff(){
      //const account= JSON.parse(sessionStorage.getItem('accountmsg')).currentAccount
      const time= this.Timecalculation(0).replace(/\-/g,"\.")
      var res = await this.$http.get(
        bgconn.ABONUS,{params:{dividendsTime:time}}
      );
      var { status, data } = res;
      if (status === 200) {
        this.platformList = res.data.page.list;
        this.platformDay = res.data.page.list[0].dividendsTime;
      }
      this.Platformbonus(res)
    },
    //平台分红记录前进
    async platForward(){
     // const account= JSON.parse(sessionStorage.getItem('accountmsg')).currentAccount
      const time= this.Timecalculation(1).replace(/\-/g,"\.")
      var res = await this.$http.get(
        bgconn.ABONUS,{params:{dividendsTime:time}}
      );
      var { status, data } = res;
      if (status === 200) {
        this.platformList = res.data.page.list;
        this.platformDay = res.data.page.list[0].dividendsTime;
      }
      this.Platformbonus(res)
    },
    //个人分红记录前进
    async Forward(){
      const account= JSON.parse(sessionStorage.getItem('accountmsg')).currentAccount
       const time= this.Timecalculation(1).replace(/\-/g,"\.")
      var res = await this.$http.get(
        bgconn.PERSONALBONUS,{params:{account:account,createTime:time}}
      );
      var { status, data } = res;
     // this.Accumulateddividends(res) 
      if(res.data.page.list.length>0){
          this.fenhongList=[];
         this.fenhongList=res.data.page.list;
      }
    },
     //个人分红记录后退
    async Backoff(){
      const account= JSON.parse(sessionStorage.getItem('accountmsg')).currentAccount
       const time= this.Timecalculation(0).replace(/\-/g,"\.")
      var res = await this.$http.get(
        bgconn.PERSONALBONUS,{params:{account:account,createTime:time}}
      );
      var { status, data } = res;
       if(res.data.page.list.length>0){
          this.fenhongList=[];
         this.fenhongList=res.data.page.list;
      }
    },
        //点击赎回全部
    RedeemAll() {
       this.EKDredeem=this.Redemptionamount
    },
    checkPledge() {
      if (this.EKDamount < 0) {
        this.EKDamount = 0;
        // this.pledgeStatus = true;
      } else if (this.EKDamount > this.Mortgable) {
        this.EKDamount =  this.Mortgable
      }

    },
    checkRedeem(){
      if(this.EKDredeem < 0){
        this.EKDredeem  = 0
        // this.redeemStatus = true
      } else if ( this.EKDredeem > this.Redemptionamount){
        this.EKDredeem = this.Redemptionamount
      }
    },
    //点击质押全部
    pledgeAll() {
      this.EKDamount = this.Mortgable;
      // alert('all')
    },
    scattalert2(content) {
        this.$alert(`<strong>${content}</strong>`, '', {
          dangerouslyUseHTMLString: true,
          confirmButtonText:'OK',
         showClose:false
        });
      },
    zhiyaClick() {
        this.Mortgable = Service.AccuracycalculationOut(Service.EosAcc.Mortgable)
         this.redeemable=Service.AccuracycalculationOut(Service.EosAcc.redeemable)
        if(this.redeemable==0){
         $('.cxzy').css('display','none');
        }else{
           $('.cxzy').css('display','block');
        }
         this.EKDamount=0
        this.zhiyawin = true; 
    },
    cancelzhiya() {
      this.zhiyawin = false;
    },
    shuhuiClick() {
       this.Redemptionamount = Service.AccuracycalculationOut(Service.EosAcc.Redemptionamount)
       this.redeemable=Service.AccuracycalculationOut(Service.EosAcc.redeemable)
        if(this.redeemable==0){
         $('.shan').css('display','none');
        }else{
           $('.shan').css('display','block');
        }
        this.EKDredeem=0;
      this.shuhui = true;
    },
    shuhuiCancel() {
      this.shuhui = false;
    },
    enter(index){
      this.helpIntroduce = true;
    },
    leave() {
      this.helpIntroduce = false;
    },
    fenhongClick() {
   this.fenhong = true;
      if (sessionStorage.getItem("accountmsg") == null) {
        this.scattalert2(this.$t('ekd.scatterlogin'));
      } else {
        Service.getTableRows(EosTab.ABONUSACC, EosTab.ABONUSACC, EosTab.ABONUSSTAKE).then(
          data => {
            this.personalbonus = data;
          }
        );
     this.fenhongjulu();
      }

    },
    fenhongCancel() {
      this.fenhong = false;
    },
    //查询分红池
    async init(){
      var res = await this.$http.get(
        bgconn.BONUSPOOL
      );

      console.log('分红池===='+JSON.stringify(res))
      var { status, data } = res;
      if (status === 200) {
        this.data = data;
        // 此处应为100亿，为了效果暂定一千万
        this.data.dividendsEntity.ekdCirculating = parseInt(
          (data.dividendsEntity.ekdCirculating / 10) * 10
        );
        this.data.dividendsEntity.pledgeTotal = parseInt(
          (data.dividendsEntity.pledgeTotal / 10) * 10
        );
        this.data.dividendsEntity.minedTotal = parseInt(
          (data.dividendsEntity.minedCirculating / 10) * 10
        );
        //计算流量通 长度
        var num = 10000000000; //总数
        var percentage = num / 100;
        this.traffic = this.data.dividendsEntity.ekdCirculating / percentage;
        this.pledge =(this.data.dividendsEntity.pledgeTotal /this.data.dividendsEntity.ekdCirculating)*100;
        this.dig = this.data.dividendsEntity.minedTotal / percentage*2;
      }
      },
    async fenhongjulu () {
      if(sessionStorage.getItem('accountmsg')!=null){
 const account= JSON.parse(sessionStorage.getItem('accountmsg')).currentAccount
      var res = await this.$http.get(
        bgconn.PERSONALBONUS,{params:{account:account}}
      );
      if(res.data.dividendsUserEntity!=null){
      
      var { status, data } = res;
      this.dividends_total=res.data.dividendsUserEntity.dividendEosTotal
      this.notEosTotal=res.data.dividendsUserEntity.notEosTotal
      //this.Accumulateddividends(res)
       if(res.data.page.list.length>0){
          this.fenhongList=[];
         this.fenhongList=res.data.page.list
        this.fenhongList = data.page.list;
        this.priviceDay = data.page.list[0].dividendsTime;
      }
  
      }
      
      }
     
    },
     //计算百分比
    CalculatedPercentage(){
        this.Percentage=Number(parseFloat((this.alreadypledged / this.data.dividendsEntity.pledgeTotal)*100).toFixed(4).slice(0,-2))
    },
    //抵押
    mortgage() {
      if (sessionStorage.getItem("accountmsg") == null) {
        this.scattalert2(this.$t('ekd.scatterlogin'));
      } else {
        this.acc = JSON.parse(sessionStorage.getItem("accountmsg"));
        Service.transaction(
          [{ account: EosTab.ABONUSACC, name: EosTab.ABONUSSTAKES }],
          [
            {
              from: this.acc.currentAccount,
              staked: `${parseFloat(this.EKDamount).toFixed(6)} EKD`
            }
          ]
        ).then(rs => {
          Service.EosAcc.transInfo
            .then(r => {
             let mort=Service.EosAcc.Mortgable-Service.AccuracycalculationIn(this.EKDamount)
             this.Mortgable= Service.AccuracycalculationOut(mort)
             let alrea=Service.AccuracycalculationIn(this.alreadypledged)+Service.AccuracycalculationIn(this.EKDamount) 
             this.alreadypledged=Service.AccuracycalculationOut(alrea).toFixed(2)
             this.data.dividendsEntity.pledgeTotal=Math.floor(Number(this.data.dividendsEntity.pledgeTotal)+Number(this.EKDamount))
             this.data.dividendsEntity.ekdCirculating=Math.floor(Number(this.data.dividendsEntity.ekdCirculating)+Number(this.EKDamount))
             let alrea2=Service.AccuracycalculationIn(this.Redemptionamount)+Service.AccuracycalculationIn(this.EKDamount) 
            
             this.Redemptionamount=Service.AccuracycalculationOut(alrea2)
              Service.pledgerecord()
                this.EKDamount=0;
            this.open(true)
         
            })
            .catch(error => {
              this.open(false)
            });
        }).catch(error => {
              this.open(false)
            });
      } 
    },
    //赎回
    redeem() {
      if (sessionStorage.getItem("accountmsg") == null) {
        this.scattalert2(this.$t('ekd.scatterlogin'));
      } else {
        this.acc = JSON.parse(sessionStorage.getItem("accountmsg"));
        Service.transaction(
          [{ account: EosTab.ABONUSACC, name: EosTab.ABONUSUNSTAKES }],
          [
            {
              from: this.acc.currentAccount,
              staked: `${parseFloat(this.EKDredeem).toFixed(6)} EKD`
            }
          ]
        ).then(rs => {
          Service.EosAcc.transInfo
            .then(r => {
              let red=Service.AccuracycalculationIn(this.Redemptionamount)-Service.AccuracycalculationIn(this.EKDredeem)
              this.Redemptionamount = Service.AccuracycalculationOut(red)
              this.redeemable=Service.AccuracycalculationOut(Service.AccuracycalculationIn(this.redeemable)+Service.AccuracycalculationIn(this.EKDredeem))
              Service.pledgerecord()
              this.open(true)
              this.EKDredeem=0
            })
            .catch(error => {
              this.open(false)
            });
            
        })
         .catch(error => {
              this.open(false)
            });;
      }
    },
     //获取账号余额
    getCurrencyBalance () {
      if (sessionStorage.getItem("accountmsg") != null) {
        Service.getCurrencyBalance().then(rs => {
          setTimeout(() => {
            this.EKDtotal = Service.EosAcc.accInfo;
            this.Mortgable =
              parseFloat(this.EKDtotal) - parseFloat(this.alreadypledged);
          }, 1500);
        });
      }
    },
     //时间计算
    Timecalculation(q){
       var date = new Date(this.currenttime);
       if(q==1){
      date=new Date(date.getTime()+24*60*60*1000)
      if(date>new Date()){
        date=new Date()
      }
       }else{
          date=new Date(date.getTime()-24*60*60*1000)
          if(date<(new Date('2019-05-14 00:00:00').getTime())){
            date=new Date(date.getTime()+24*60*60*1000)
          }
       }
      this.currenttime=date
      if((date.getMonth()+1)>9){
        if(date.getUTCDate()<10){
        this.fenhongList[0].createTime=date.getUTCFullYear()+'-'+(date.getMonth()+1)+'-0'+(date.getUTCDate())
        }else{
           this.fenhongList[0].createTime=date.getUTCFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getUTCDate())
        }
      }else{
         if(date.getUTCDate()<10){
        this.fenhongList[0].createTime=date.getUTCFullYear()+'-0'+(date.getMonth()+1)+'-0'+(date.getUTCDate())
        }else{
           this.fenhongList[0].createTime=date.getUTCFullYear()+'-0'+(date.getMonth()+1)+'-'+(date.getUTCDate())
        }
      }
      return this.fenhongList[0].createTime;
    },
     //个人累计分红
    Accumulateddividends(res){
      this.dividends_total=res.data.dividendsUserEntity.dividendEosTotal
      this.notEosTotal=res.data.dividendsUserEntity.notEosTotal
      // for(var i=0;i<res.data.page.list.length;i++){
      //    let eos=res.data.page.list[i].thisEosAmount.substr(0,res.data.page.list[i].thisEosAmount.length-4)
      //    let ekd=res.data.page.list[i].thisEkdAmount.substr(0,res.data.page.list[i].thisEkdAmount.length-4)
      // }
    },
    //平台累计分红
    Platformbonus(res){
    this.plats_total=res.data.dividends_total.eosTotal
    // for(var i=0;i<res.data.page.list.length;i++){
    //      let eos=res.data.page.list[i].dividendsEosTotal.substr(0,res.data.page.list[i].dividendsEosTotal.length-4)
    //      let ekd=res.data.page.list[i].dividendsEkdTotal.substr(0,res.data.page.list[i].dividendsEkdTotal.length-4)
    //   }
    },
    //领取个人分红
    async Dividendsreceived(){
       this.acc = JSON.parse(sessionStorage.getItem("accountmsg"));
      Service.transaction([{ account: EosTab.ABONUSACC, name: EosTab.DIVIDENDS }],
          [
            {
              from: this.acc.currentAccount,
            }
          ]).then(rs=>{
             Service.EosAcc.transInfo.then(r => {
                var res = this.$http.get(
                  bgconn.DIVIDENDSRECEIVED,{params:{account:account,eos_balance:this.notEosTotal}}
                );
                 var { status, data } = res;
                  // this.dividends_total= (Number(this.dividends_total)+Number(this.notEosTotal))
                  this.notEosTotal =0;
                 if (status === 200) { 
                  // this.dividends_total= (Number(this.dividends_total)+Number(this.notEosTotal))
                  // this.notEosTotal =0;
                  this.fenhongjulu()
                }
                this.open(true)
            })
            .catch(error => {
              this.open(false)
            });
      }).catch(error=>{
         this.open(false)
      })
      const account =JSON.parse(sessionStorage.getItem('accountmsg')).currentAccount
    },
    //排行榜
    async ranklist(){
  
        const result=await this.$http.get(bgconn.EKDPAIHANG)
        this.list=result.data.ekdRankingList;
    },
    repledge(){
       this.acc = JSON.parse(sessionStorage.getItem("accountmsg"));
      Service.transaction([{ account: EosTab.ABONUSACC, name: EosTab.RESTAKE }],
          [
            {
              from: this.acc.currentAccount
            }
          ]).then(rs=>{
            this.Redemptionamount=Math.floor(Service.AccuracycalculationOut(Service.EosAcc.alreadypledged)*100+0.0000001)/100
            this.redeemable=0
            Service.EosAcc.redeemable=0;
            this.open(true)
          }).catch(error=>{
            this.open(false)
          })
    },
    helpisshow(){
    },
    Formatdata(number){
    var num = number.toString() 
    var numArr = num.split('.')
    var [num, dotNum] = numArr


    var operateNum = num.split('').reverse()
    var result = [], len = operateNum.length
    for(var i = 0; i< len; i++){
         result.push(operateNum[i])
         if(((i+1) % 3 === 0) && (i !== len-1)){
              result.push(', ')
        }
    }

    if(dotNum){
         result.reverse().push('.', ...dotNum)
         return result.join('')
    }else{
         return result.reverse().join('')
    }

}

  },
  mounted() {
    let this_ =this
    if (document.body.clientWidth  < '1200'){
      this_.scale = document.body.clientWidth / 1170
      var height = this_.scale * 1000
      //问题未解决
      this_.content_height = {'height':`${height}px`}
    }else {
      this_.scale = 1
      this_.content_height = {'height':`820px`}
    }
    window.onresize = function temp() {

      if (document.body.clientWidth  < '1200'){
        if(document.body.clientWidth  < 980){
          this_.scale = 0.8213
          return
        }
        this_.scale = document.body.clientWidth / 1170
        var height = this_.scale * 1000
        //问题未解决
        this_.content_height = {'height':`${height}px`}
      }else {
        this_.scale = 1
        this_.content_height = {'height':`820px`}
      }
    }
  },
  computed:{
    zoom_content:function () {
      var scale = this.scale;
      return `transform:scale(${scale})`
    }
  }
};
</script>

<style>
  .ivu-modal-footer {
     border-top: 0 !important;
     padding: 0 !important;
     text-align: right;
  }
  .ivu-modal-content {
    border-radius: 50px !important;
  }
.nav .navbar-brand img {
  margin-top: 25px;
}
  .bottomDistance{
    margin-bottom: 50px;
    width: 33.3333%;
    float: left;
  }
  .zoom_content{
    -webkit-transform-origin: top left;
  }
  .zoom_width{
    width: 1170px;
    margin: 0 auto;
    overflow: hidden;
    margin-left: 21%;
  }
  .input_img{
    width: 35px;
    height: 35px;
    position: absolute;
    left: 22px;
    top: 6px;
    background-color: #ea6856;
  }
  .input_img img{
    width: 100%;
    height: 100%;
  }
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vertical-center-modal.ivu-modal{
    top: 0;
  }
  .sd_button{
    width: 146px;
    height: 70px;
    color: white;
    text-align: center;
    line-height: 70px;
    font-size: 24px;
    font-weight: bold;
  }
  .button_zhi{

    background-size: 100% 100%;
  }
  .button_shu{
    background-size: 100% 100%;
  }
  .button_jilu{
    background:url('../../src/assets/images/share_out/lansejiluko.png')no-repeat;
    background-size: 100% 100%;
  }
  .Repledge{
    background-size: 100% 100%;
    width: 111px;
    height: 50px;
    margin-left:50%;
    position: relative;
    top: -20%;
  }
  
  .Repledge2{
    background-size: 100% 100%;
    width: 111px;
    height: 43px;
    margin-left:60%;

  }
   .help_introduce{
    width: 315px;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    left: 28px;
    bottom: -10px;
    color: #fff;

  }
  .receive{
    width:91px;
    height:50px;
    float: left;
    position: relative;
    top: -30px;
    left: 7px;

  }
  .logo{
      width:35px;
      height:35px;
      background-color: #fff;

  }

</style>
