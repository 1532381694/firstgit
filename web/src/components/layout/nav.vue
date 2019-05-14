<template>
  <div>
    <div class="layout">
      <Layout style="position: fixed; top: 0; width: 100% ;z-index: 9999">
        <Header
          :style="{ margin: '0 auto' , padding: '0' , width:'70%' , maxWidth:'1920px' , minWidth:'960px'}"
          style="background-color: transparent"
        >
          <Menu
            mode="horizontal"
            theme="dark"
            active-name="1"
            style="background-color: transparent;color: black"
          >
            <router-link to="/index">
              <div class="layout-logo"></div>
            </router-link>
            <div class="layout-nav">
              <router-link to="/share_out">
                <MenuItem
                  name="2"
                  style="font-weight: bold;font-size: 1.2em;color: #515a6e;"
                >{{$t('menu.share_out')}}</MenuItem>
              </router-link>
              <MenuItem name="1" style="font-weight: bold;font-size: 1.2em;color: black">
                <a href="#" @click="shareWin()" style="color:#515a6e">{{$t('menu.share')}}</a>
              </MenuItem>
              <MenuItem name="3" style="font-weight: bold;font-size: 1.2em;color: black">
                <a
                  :href="whitebook_href"
                  target="_blank"
                  style="color: #515a6e"
                >{{$t('menu.whitebook')}}</a>
              </MenuItem>
              <MenuItem name="4" style="font-weight: bold;font-size: 1.2em;color: black">
                <a href="#" @click="announcementShow" style="color: #515a6e">{{$t('menu.notice')}}</a>
              </MenuItem>
              <!--<button class="login-button" @click="loginFN"></button>-->
              <div style="float:left;" @mouseenter="disshow" @mouseleave="disshow2">
                <a class="loginBut" @click="loginFN" @mouseover="disshow">
                  <span
                    v-show="loginSatus"
                    style="width:206px;text-align:center;"
                  >{{this.currentAccount}}</span>
                  <dl class="showInfo" style="display:none;">
                    <dd>
                      <p
                        class="dlzt"
                        style="color:#606060;"
                        @mouseenter="bianlian"
                        @mouseleave="bianan"
                      >{{this.eos_balance}}</p>
                    </dd>
                    <dd>
                      <p
                        class="dlzt2"
                        style="color:#606060;"
                        @mouseenter="bianlian2"
                        @mouseleave="bianan2"
                      >{{this.eos_balanceekd}}</p>
                    </dd>
                    <dd @click="signOut" @click.stop>{{$t('ekd.Signout')}}</dd>
                  </dl>
                  <span v-show="!loginSatus">
                    <img v-if="type==='ko'" src="@/assets/images/nav/denglu02.png" alt>
                    <img v-if="type==='cn'" src="@/assets/images/nav/denglu03.png" alt>
                    <img v-if="type==='en'" src="@/assets/images/nav/denglu.png" alt>
                  </span>
                  <!--<img v-else-if="type==='cn'" src="@/assets/images/nav/Login.png" alt="">-->
                  <!--<img v-else-if="type==='en'" src="@/assets/images/nav/Login.png" alt="">-->
                </a>
              </div>
              <div class="checklanguage">
                <img
                  :src="language"
                  alt
                  @click="checkLanguage"
                  style="width: 40px;height: 40px;margin-top: 6px;"
                >
                <div
                  class="otherLanguage"
                  v-show="languageStatus"
                  @mouseleave="languageStatus = false"
                >
                  <img
                    :src="ICON_01KO"
                    alt
                    @click="tabKO"
                    style="width: 40px;height: 40px;margin-top: 6px;"
                  >
                  <img
                    :src="ICON_02CN"
                    alt
                    @click="tabCn"
                    style="width: 40px;height: 40px;margin-top: 6px;"
                  >
                  <img
                    :src="ICON_03EN"
                    alt
                    @click="tabEn"
                    style="width: 40px;height: 40px;margin-top: 6px;"
                  >
                </div>
              </div>
            </div>
          </Menu>
        </Header>
      </Layout>
      <BackTop></BackTop>
      <Modal :closable="false" :width="801" class-name="vertical-center-modal" v-model="share">
        <div class="referrer_window" id="referrer_window">
          <div class="referrer_window_con">
            <div class="tit">
              <span style="    position: relative;top:-23px;">{{$t('ekd.Recommender')}}</span>
              <div class="btn" @click="cancelShare">
                <img src="@/assets/images/share_out/cancel.png">
              </div>
            </div>
            <div class="ipt">
              <input
                id="referrerUrl"
                readonly="readonly"
                type="text"
                :value="'https://eoskingdom.io/#/?ref='+this.currentAccount"
              >
              <div
                class="btn"
                :data-clipboard-text="'https://eoskingdom.io/#/?ref='+this.currentAccount"
                @click="copy"
                style="font-size:21px;"
              >{{$t('ekd.copy')}}</div>
            </div>

            <p>{{$t('ekd.Invitationstart')}}</p>
          </div>
        </div>
        <div slot="footer"></div>
      </Modal>
    </div>
    <div v-if="announcement" class="announcement">
      <div class="announcement_tab">
        <div class="announcement_top">
          <div class="btn">
            <img
              src="@/assets/images/share_out/return.png"
              style=" position: absolute;left: 6px;width: 60px;top: 7px;cursor: pointer;"
              v-if="tableShow === false"
              @click="returnList"
            >
            <span>NOTICE</span>
            <img
              src="@/assets/images/share_out/cancel.png"
              style=" position: absolute;right: 6px;width: 60px;top: 7px;cursor: pointer;"
              @click="announcementHide"
            >
          </div>
        </div>
        <div v-if="tableShow">
          <Table :columns="columns1" :data="data1" :show-header="false"></Table>
          <Page :total="100" size="small" style="padding-left:40%;width: 300px;width:100%;"/>
        </div>
        <div v-else>
          <h3 style="text-align: center;margin-top: 20px;">{{detailedTitle}}</h3>
          <div class="contentStyle" v-html="detailedContent">{{detailedContent}}</div>
        </div>
      </div>
    </div>
  </div>
  <!--<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed"  data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"  aria-expanded="false" >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <router-link to="/index"><images src="@/assets/images/nav/LOGO.png" alt class="brandlogo"></router-link>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link tag="a" to="/share_out">{{$t('menu.share_out')}}</router-link>
          </li>
          <li>
            <a href="#" @click="shareWin()">{{$t('menu.share')}}</a>
          </li>
          <li>

            <a :href="whitebook_href" target="_blank">{{$t('menu.whitebook')}}</a>
          </li>
          <li>
            <router-link tag="a" to="/notice">{{$t('menu.notice')}}</router-link>
          </li>
          <li class="hidden-sm rightlogin">
            &lt;!&ndash; 登录状态的改变 &ndash;&gt;
            <images src="@/assets/images/nav/Login.png"  alt class="login"  @click="loginFN" v-show="!loginSatus" >
            <div class="loginOk" v-show="loginSatus" @click="enterCenter">{{currentAccount}}</div>
            <div class="exitBox" v-show="exitloginSatus" @mouseleave="leaveCenter">
              <div class="exitLogin" @click="signOut()">退出</div>
            </div>
            &lt;!&ndash; 语言切换 &ndash;&gt;
            <div class="checklanguage">
              <images :src="language" alt class="language hidden-xs visible-md visible-lg" @click="checkLanguage">
              <div class="otherLanguage" v-show="languageStatus" @mouseleave="languageStatus = false">
                <images :src="ICON_01KO" alt="" @click="tabKO">
                <images :src="ICON_02CN" alt="" @click="tabCn">
                <images :src="ICON_03EN" alt="" @click="tabEn">
              </div>
            </div>
          </li>
        </ul>
      </div>
      &lt;!&ndash; /.navbar-collapse &ndash;&gt;
    </div>
    &lt;!&ndash; /.container-fluid &ndash;&gt;
    &lt;!&ndash; 推荐人 &ndash;&gt;
    <div class="referrer_window" id="referrer_window" v-if="share">
      <div class="referrer_window_con">
        <div class="tit">
          <span>推荐人</span>
          <div class="btn" @click="cancelShare">
            <images src="@/assets/images/share_out/cancel.png">
          </div>
        </div>
        <div class="ipt">
          <input
            id="referrerUrl"
            readonly="readonly"
            type="text"
            :value="'https://eoskingdom.io/#/?ref='+this.currentAccount"
          >
          <div class="btn" :data-clipboard-text="'https://eoskingdom.io/#/?ref='+this.currentAccount" @click="copy">复制</div>
        </div>

        <p>
          邀请好友可以获得其投注额的
          <label>0.2%</label>
          实时返还
        </p>
      </div>
    </div>
  </nav>-->
</template>

<script>
// import vconsole from "vconsole";
import Eos from "eosjs";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs";
ScatterJS.plugins(new ScatterEOS());
import Service from "@/assets/js/scatterservice.js";
import config from "@/assets/js/scatterconfig.js";
import bgconn from "@/assets/js/bgconn.js";
import Clipboard from "clipboard";
// var vConsole =new vconsole()
export default {
  data() {
    return {
      type: "ko",
      // language: false
      share: false,
      announcement: false, //公告
      currentAccount: null,
      currentPermission: null,
      scatter: null,
      readOnlyEos: null,
      eosClient: null,
      //检测用户登录状态
      loginSatus: false,
      //邀请人链接
      Inviter: bgconn.INVITERLINK,
      eos_balance: 0,
      eos_balanceekd: 0,
      exitloginSatus: false,
      issignout: false,
      languageStatus: false,
      smallLanguageStatus: false,
      language: "",
      show: false,
      detailedTitle: "", //公告详情标题
      detailedContent: "", //公告详情内容
      tableShow: true, //列表或详情
      whitebook_href: "https://eoskingdom.io/EKD_WhitePaper_KR.pdf",
      ICON_01KO: require("@/assets/images/nav/ICON_01KO.png"),
      ICON_02CN: require("@/assets/images/nav/ICON_02CN.png"),
      ICON_03EN: require("@/assets/images/nav/ICON_03EN.png"),
      NOW: require("@/assets/images/nav/now.png"),
      columns1: [
        {
          title: "标题",
          key: "title",
          render: (h, { row, column, index }) => {
            if (row.state === 1) {
              return h(
                "div",
                {
                  attrs: {
                    style: "font-size: 1.3em;position: relative;"
                  }
                },
                [
                  h(
                    "a",
                    {
                      style: "color:#000;margin-left:80px",
                      on: {
                        click: () => {
                          this.detailedTitle = row.title;
                          this.detailedContent = row.content;
                          this.tableShow = false;
                        }
                      }
                    },
                    row.title
                  ),
                  h("img", {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    attrs: {
                      src: this.NOW,
                      style:
                        "width: 30px;\n" +
                        "    height: 15px;\n" +
                        "    position: absolute;\n" +
                        "    border-radius: 2px;\n" +
                        "    top: 3px;\n" +
                        "    margin-left: 15px;"
                    }
                  })
                ]
              );
            } else {
              return h(
                "div",
                {
                  attrs: {
                    style: "font-size: 1.3em;position: relative;"
                  }
                },
                [
                  h(
                    "a",
                    {
                      style: "color:#A8A8A8;margin-left:80px",
                      on: {
                        click: () => {
                          this.detailedTitle = row.title;
                          this.detailedContent = row.content;
                          this.tableShow = false;
                        }
                      }
                    },
                    row.title
                  )
                ]
              );
            }
          }
        },
        {
          title: "时间",
          key: "date",
          width: 300,
          align: "center"
        }
      ],
      data1: [
        {
          title: "",
          date: "",
          content: "",
          state: 1
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        },
        {
        title: "",
          date: "",
          content: "",
          state:0
        },
        {
         title: "",
          date: "",
          content: "",
          state: 0
        }
      ]
    };
  },
  methods: {
    disshow() {
      if (this.loginSatus) {
        $(".showInfo").css("display", "block");
      }
    },
    disshow2() {
      if (this.loginSatus) {
        $(".showInfo").css("display", "none");
      }
    },
    isshow() {
      this.announcement = false;
    },
    // 切换语言
    checkLanguage() {
      this.languageStatus = true;
      // this.tabkore()
    },
    smallCheckLanguage() {
      this.smallLanguageStatus = true;
    },
    tabKO() {
      this.type = "ko";
      this.$i18n.locale = "korean";
      this.language = this.ICON_01KO;
      this.whitebook_href = "https://eoskingdom.io/EKD_WhitePaper_KR.pdf";
    },
    tabCn() {
      this.type = "cn";
      this.$i18n.locale = "zh";
      this.language = this.ICON_02CN;
      this.whitebook_href = "https://eoskingdom.io/EKD_WhitePaper_CN.pdf";
    },
    tabEn() {
      this.type = "en";
      this.$i18n.locale = "en";
      this.language = this.ICON_03EN;
      this.whitebook_href = "https://eoskingdom.io/EKD_WhitePaper_EN.pdf";
    },
    bianlian() {
      $(".dlzt").css("color", "#3ecad6");
    },
    bianan() {
      $(".dlzt").css("color", "#606060");
    },
    bianlian2() {
      $(".dlzt2").css("color", "#3ecad6");
    },
    bianan2() {
      $(".dlzt2").css("color", "#606060");
    },
    shareWin() {
      this.share = true;
    },
    cancelShare() {
      this.share = false;
    },
    announcementShow() {
      this.announcement = true;
      this.notice();
    },
    announcementHide() {
      this.announcement = false;
    },
    returnList() {
      this.tableShow = true;
    },
    copy() {
      var clipboard = new Clipboard(".btn");
      clipboard.on("success", e => {
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        // 释放内存
        clipboard.destroy();
      });
    },
    //邀请链接发送
    async Inviters() {
      //邀请人
      //window.location.href
      const url = window.location.href;
      const parma = url.substring(url.lastIndexOf("/") + 6);
      if (
        parma.length <= 12 &&
        parma != this.currentAccount &&
        2 <= parma.length
      ) {
        const rs = await Service.eosconfig()
          .getAccount(parma)
          .catch(error => {
            //console.log("无效账号");
          });
        if (rs != undefined) {
          if (rs.account_name == parma) {
            var res = await this.$http.get(bgconn.INVITER, {
              params: { invitatAcc: parma, account: this.currentAccount }
            });
            var { status, data } = res;
            if (res.data.msg == "绑定的账户已存在推荐人") {
            } else {
              if (status === 200) {
                this.fenhongList = data.page.list;
                this.priviceDay = data.page.list[0].dividendsTime;
              }
            }
          } else {
            // console.log("无效账号");
          }
        }
      } else {
        // console.log("邀请失败");
      }
    },
    linkscatter() {
      Service.getIdentity(Service.EosAcc.scatter).then(() => {
        const account = Service.EosAcc.scatter.identity.accounts.find(
          x => x.blockchain === "eos"
        );
        if (account != null) {
          let accountmsg = {
            currentAccount: account.name,
            currentPermission: account.authority
          };
          this.currentAccount = account.name;
          this.uservisit(account.name);
          sessionStorage.setItem("accountmsg", JSON.stringify(accountmsg));
          Service.EosAcc.eosClient = Service.EosAcc.scatter.eos(config, Eos);
          //loginstatus
          this.loginSatus = true;
          //$('.loginBut span').css("display","none");
          Service.pledgerecord();
          Service.get_currency_balance(this.currentAccount).then(rs => {
            this.eos_balance = rs[0].substr(0, rs[0].length - 4);
          });
          Service.get_currency_balanceEkd(this.currentAccount).then(rs => {
            if (rs != "") {
              this.eos_balanceekd =
                Math.floor(rs[0].substr(0, rs[0].length - 4) * 100 + 0.0001) /
                100;
            }
          });
          this.Inviters();
        } else {
          // alert("登录账号失败");
        }
      });
    },
    async Unlinkscatter() {
      ScatterJS.scatter.connect("scatter-demo").then(connected => {
        if (!connected) {
          this.scattalert(this.$t("ekd.scatterlink"));
          return false;
        }
        Service.EosAcc.scatter = ScatterJS.scatter;
        window.scatter = null;
        window.ScatterJS = null;
        Service.getIdentity(Service.EosAcc.scatter)
          .then(() => {
            const account = Service.EosAcc.scatter.identity.accounts.find(
              x => x.blockchain === "eos"
            );
            if (account != null) {
              let accountmsg = {
                currentAccount: account.name,
                currentPermission: account.authority
              };
              this.currentAccount = account.name;
              this.uservisit(account.name);
              sessionStorage.setItem("accountmsg", JSON.stringify(accountmsg));
              Service.EosAcc.eosClient = Service.EosAcc.scatter.eos(
                config,
                Eos
              );
              //loginstatus
              this.loginSatus = true;
              Service.pledgerecord();
              Service.get_currency_balance(this.currentAccount).then(rs => {
                this.eos_balance = rs[0].substr(0, rs[0].length - 4);
              });
              Service.get_currency_balanceEkd(this.currentAccount).then(rs => {
                if (rs != "") {
                  this.eos_balanceekd =
                    Math.floor(
                      rs[0].substr(0, rs[0].length - 4) * 100 + 0.0001
                    ) / 100;
                }
              });
              this.Inviters();
            } else {
              // alert("登录账号失败");
            }
          })
          .catch(error => {
            Service.EosAcc.issignout = true;
            console.log("钱包解锁失败");
          });
      });
    },
    //账号登录
    loginFN() {
      this.linkscatter();
    },
    //退出
    signOut() {
      Service.forgetIdentity().then(rs => {
        sessionStorage.removeItem("accountmsg");
        //推出后按钮状态
        this.exitloginSatus = false;
        this.loginSatus = false;
        this.issignout = true;
        this.currentAccount = null;
        this.currentPermission = null;
        Service.EosAcc.Redemptionamount = 0;
        Service.EosAcc.alreadypledged = 0;
        Service.EosAcc.EKDtotal = 0;
        Service.EosAcc.Mortgable = 0;
        this.eos_balance = 0;
        this.eos_balanceekd = 0;
        $(".showInfo").css("display", "none");
        $(".zhiya").css("display", "none");
        $(".dibu").css("display", "none");
      });
    },
    scattalert(content) {
      this.$alert(
        `<strong>${content}</strong><br/><a href="https://chrome.google.com/webstore/detail/scatter/ammjpmhgckkpcamddpolhchgomcojkle?utm_source=chrome-ntp-icon">Download scatter</a>`,
        "",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "OK",
          showClose: false
        }
      );
    },
    //登录状态 点击该按钮
    enterCenter() {
      this.exitloginSatus = true;
    },
    leaveCenter() {
      this.exitloginSatus = false;
    },
    //公告列表信息获取
    async notice() {
      if (this.type == "cn") {
        const result = await this.$http.get(bgconn.NOTICE,  {params:{
        language: "CN",
        pageNum: 1
        }});
       this.noticemsg(result,'CN')
      } else if (this.type == "ko") {
      const result = await this.$http.get(bgconn.NOTICE, {params:{
        language: "KR",
        pageNum: 1
      }});
       this.noticemsg(result,'KR')
      } else {
      const result = await this.$http.get(bgconn.NOTICE,  {params:{
        language: "EN",
        pageNum: 1
      }});
      this.noticemsg(result,'EN')
      }
    },
    //添加用户访问记录
    uservisit(name) {
      this.$http
        .get(bgconn.USERVISIT, { params: { account: name } })
        .then(rs => {
          console.log('status=='+rs.status)
        });
    },
    //遍历公告信息
    noticemsg(result,lang){
       var ct = 0;
    for (var i = 0; i < result.data.page.list.length; i++) {
          if (result.data.page.list[i].language == lang) {
            this.data1[ct].title = result.data.page.list[i].title;
            this.data1[ct].content = result.data.page.list[i].content;
            this.data1[ct].date = result.data.page.list[i].createTime.substr(
              0,
              10
            );
            if( result.data.page.list[i].isNew==1){
              this.data1[ct].state=1
            }else{
               this.data1[ct].state=0;
            }
            ct++;
          }else{
            this.data1[i].title ='';
            this.data1[i].content ='';
            this.data1[i].date = ''
            this.data1[i].state=0
          }
        }
    }
  },
  async created() {
    //用户登录后没有退出，只进行页面刷新操作与scatter建立链接
    if (sessionStorage.getItem("accountmsg") != null) {
      this.currentAccount = JSON.parse(
        sessionStorage.getItem("accountmsg")
      ).currentAccount;
      Service.get_currency_balance(this.currentAccount).then(rs => {
        this.eos_balance = rs[0].substr(0, rs[0].length - 4);
      });
      Service.get_currency_balanceEkd(this.currentAccount).then(rs => {
        if (rs != "") {
          this.eos_balanceekd =
            Math.floor(rs[0].substr(0, rs[0].length - 4) * 100 + 0.0001) / 100;
        }
      });
      ScatterJS.scatter
        .connect("scatter-demo")
        .then(connected => {
          if (!connected) {
            return false;
          }

          Service.EosAcc.scatter = ScatterJS.scatter;
          window.scatter = null;
          window.ScatterJS = null;
          Service.EosAcc.eosClient = Service.EosAcc.scatter.eos(config, Eos);
          Service.pledgerecord();
          this.Inviters();
        })
        .catch(error => {});
    } else {
      this.Unlinkscatter();
    }
  },
  mounted() {
    if (this.$i18n.locale === "korean") {
      this.language = this.ICON_01KO;
    } else if (this.$i18n.locale === "zh") {
      this.language = this.ICON_02CN;
    } else if (this.$i18n.locale === "en") {
      this.language = this.ICON_03EN;
    }
    if (sessionStorage.getItem("accountmsg") != null) {
      // 用户登录状态
      this.loginSatus = true;
    }
  }
};
</script>

<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
}
.layout-logo {
  width: 190px;
  height: 50px;
  margin-top: 7px;
  border-radius: 3px;
  float: left;
  background: url("../../assets/images/nav/LOGO.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 1px;
}
.layout-nav {
  font-family: fz;
  float: right;
  color: black;
  height: 60px;
  margin-top: 5px;
}
.layout-footer-center {
  text-align: center;
}
.MenuItem {
  font-weight: bold;
}
.checklanguage {
  width: 50px;
  height: 50px;
  float: right;
  margin-top: 5px;
}
.loginBut {
  position: relative;
  margin-left: 30px;
  margin-right: 10px;
  max-width: 206px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 45px;
  margin-top: 7px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  border: #b9b9b9 2px solid;
  border-radius: 10px;
  /*background: -webkit-linear-gradient(to top bottom, red , blue); !* Safari 5.1 - 6.0 *!*/
  /*background: -o-linear-gradient(bottom right, red, blue); !* Opera 11.1 - 12.0 *!*/
  /*background: -moz-linear-gradient(bottom right, red, blue); !* Firefox 3.6 - 15 *!*/
  background: linear-gradient(#f5ab75, #e65e4e); /* 标准的语法 */
}
.loginBut span {
  display: block;
  height: 100%;
  background: url("../../assets/images/nav/touxiang.png") 4px center no-repeat;
  color: #fff;
  font-size: 20px;
  line-height: 41px;
  padding-left: 32px;
  max-width: 206px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding-right: 3px;
}
.loginBut img {
  /*width: 140px;*/
  /*height: 45px;*/
}
.showInfo {
  position: absolute;
  top: 30px;
  left: 0;
  padding-top: 20px;
  background: url("../../assets/images/nav/tm.png") repeat;
  width: -webkit-calc(100% + 4px);
  width: -moz-calc(100% + 4px);
  width: calc(100% + 4px);
  border: #cfcfcf 2px solid;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: -1;
  margin-left: -2px;
}
.showInfo dd {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: #c5c4c2 1px solid;
  color: #606060;
  box-sizing: border-box;
  padding: 0 4px 16px;
}
.showInfo dd:last-child {
  border: 0;
  text-align: center;
  letter-spacing: 6px;
  font-size: 14px;
}
.showInfo dd:nth-child(2) {
  color: #3ecad6;
}
.showInfo dd p {
  padding-left: 37px;
  background: url("../../assets/images/nav/icon01.png") 0px center no-repeat;
  text-align: center;
}
.showInfo dd:nth-child(2) p {
  background: url("../../assets/images/nav/icon02.png") 0px center no-repeat;
}

.cooperation-logo {
  min-height: 100px;
  border-bottom: 1px;
}
.cooperation-logo img {
  width: 115px;
  height: 35px;
  margin: 10px;
}
.disclaimer {
  text-align: left;
}
.ivu-message {
  font-size: 14px;
  position: fixed;
  z-index: 1010;
  width: 100%;
  top: 70px !important;
  left: 0;
  pointer-events: none;
}
.announcement {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.5);
}
.announcement_tab {
  width: 800px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -400px;
  margin-top: -200px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
}
.announcement::-webkit-scrollbar {
  display: none;
}
.announcement_top {
  background-color: #ed5473;
  height: 70px;
  position: relative;
  color: darkorange;
  font-size: 3em;
  font-weight: 600;
  text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0,
    0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.6);
  text-align: center;
  line-height: 70px;
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vertical-center-modal.ivu-modal {
  top: 0;
}
.contentStyle {
  padding: 20px 60px;
  font-size: 16px;
  line-height: 26px;
  text-indent: 2em;
}
.ivu-table-cell {
  text-align: center;
}
</style>
