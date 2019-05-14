import Eos from 'eosjs'
import config from './scatterconfig'
import ScatterJS from 'scatterjs-core'
import EosTab from './EosTab'
import bgconn from './bgconn'

class Service{
  //EOS初始化网络连接配置
  EosAcc={
    scatter:null,
    eosClient:null,
    transInfo:null,
    accInfo:null,
    //是否退出过
    issignout:false,
    Redemptionamount:0,
    EKDtotal:0,
    Mortgable:0,
    alreadypledged:0,
    //赎回中
    redeemable:0,
    redeemabletime:0
  }
    eosconfig(){
        const network = config
        let chainId = network.chainId;
        let httpEndpoint =network.protocol + "://" + network.host + ":" + network.port;
        return Eos({
          chainId,
          httpEndpoint
        });
    }

    async get_currency_balance(currentAccount){
      return this.eosconfig().getCurrencyBalance(EosTab.EOSIOTOKEN,currentAccount,EosTab.SYMBOL)
    }
   
    async get_currency_balanceEkd(currentAccount){
       return this.eosconfig().getCurrencyBalance(EosTab.ACCBALANCE,currentAccount,EosTab.TOKENNAME)
    }
    //与钱包建立连接授权
    //参数：satter:scatter
     async getIdentity(scatter){
      const requiredFields = { accounts: [config] };
       const result=scatter.getIdentity(requiredFields)
        return result;
    }

       //退出钱包连接
      //参数：satter:scatter
    forgetIdentity(){
      const result =this.EosAcc.scatter.forgetIdentity();
      sessionStorage.removeItem('accountmsg')
      return result;
    }



     //获取数据表信息
    //参数：true：是否以json格式打印信息，scode：合约帐号，code:使用者帐号，table：数据表
    async getTableRows(scode,code,table){
      const readOnlyEos=this.eosconfig();
      const result =readOnlyEos.getTableRows(true,scode,code, table);
      return result;
    }

 
   
    //转账
    //参数：eosClient:eosClient,from:转账者，to:接收者，amount:代币数量，remarks：交易备注
    async transfer(amount){
      return new Promise((resolve,reject)=>{
        this.getIdentity(this.EosAcc.scatter).then(result=>{
          const account = this.EosAcc.scatter.identity.accounts.find(
            x => x.blockchain === "eos"
          );
          this.EosAcc.eosClient=this.EosAcc.scatter.eos(config, Eos);
          const accountinfo=JSON.parse(sessionStorage.getItem('accountmsg'))
          this.EosAcc.eosClient.transfer(account.name,EosTab.ICOACC,amount,EosTab.MEMO).then(rs=>{
         this.pledgerecord();
         resolve("success")
          }).catch(error=>{
           reject("fail")
          })
        })
      }) 
         
   }



  //操作合约相关action
  //参数：satter:scatter ,contractmsg:([{合约部署者账号,合约相关action名称}]),authorization:({调用合约者的账号名称,许可})，parameter([{调用合约相关action所需要的参数}])
  async transaction(contractmsg,parameter) {
      return  new Promise((resolve,reject)=>{
         this.getIdentity(this.EosAcc.scatter).then(result=>{
      const account = this.EosAcc.scatter.identity.accounts.find(
        x => x.blockchain === "eos"
      );
      this.EosAcc.eosClient=this.EosAcc.scatter.eos(config, Eos);
      const accountinfo=JSON.parse(sessionStorage.getItem('accountmsg'))
      var actions = []
      for(var i=0;i<contractmsg.length;i++){
        let transation={
          account:contractmsg[i].account,
          name:contractmsg[i].name,
          authorization:[
            {
              actor:accountinfo.currentAccount,
              permission:accountinfo.currentPermission
            }
          ],
          data: parameter[i]
        }
        actions.push(transation)
      }
      this.EosAcc.transInfo =this.EosAcc.eosClient.transaction({actions}).then(rs=>{
        resolve(rs)
      }).catch(error=>{
        reject(error)
      });
    }) 
    })     
    }

    // 获取账号余额
    // 参数：eosClient:eosClient,currentAccount：当前账号名称,token:代币名称
    async getCurrencyBalance(){
        ScatterJS.scatter.connect("scatter-demo").then(connected => {
        if (!connected) return false;
        this.EosAcc.scatter = ScatterJS.scatter;
        window.scatter = null;
        window.ScatterJS = null;
        this.getIdentity(this.EosAcc.scatter).then(()=>{
        const account = this.EosAcc.scatter.identity.accounts.find(
          x => x.blockchain === "eos"
        );
        this.EosAcc.eosClient=this.EosAcc.scatter.eos(config, Eos);
        this.EosAcc.eosClient.getCurrencyBalance(EosTab.ACCBALANCE,account.name, EosTab.TOKENNAME).then(rs=>{
          this.EosAcc.accInfo=rs
        })
        })
      })
    }
   //精度计算
   AccuracycalculationIn (number) {
     let num=Number(number.valueOf())
      return Math.floor(num*1000000+0.0001)
   }

   AccuracycalculationOut (number) {
    let num=Number(number.valueOf())
    return Math.floor(num+0.0001)/1000000
 }

    async getbalance( currentAccount){
      const rs= this.EosAcc.eosClient.getCurrencyBalance(EosTab.ACCBALANCE,currentAccount, EosTab.TOKENNAME)
       rs.then(rr=>{
         if(rr.length>0){
         this.EosAcc.EKDtotal=this.AccuracycalculationIn(rr[0].substr(0,rr[0].length-4))
         this.EosAcc.Mortgable=this.EosAcc.EKDtotal-this.EosAcc.alreadypledged
         
        }
       })
     }
 
 
        //已经质押EKD
        async pledgerecord() {
        this.getTableRows(EosTab.ABONUSACC, EosTab.ABONUSACC, EosTab.ABONUSSTAKE).then(
         data => {
          
          const accountinfo=JSON.parse(sessionStorage.getItem('accountmsg'))
          this.getbalance(accountinfo.currentAccount);
           for (var i = 0; i < data.rows.length; i++) {
             const accname= JSON.parse(sessionStorage.getItem("accountmsg")).currentAccount
             if (
              accname ==
               data.rows[i].player
             ) {
               var temp = Math.floor(parseFloat(data.rows[i].balance).toFixed(7)*1000000+0.00001);
               this.EosAcc.alreadypledged = this.AccuracycalculationIn(data.rows[i].balance.substr(0,data.rows[i].balance.length-4))
               //已经赎回的记录
               this.getTableRows(
                EosTab.ABONUSACC,
                 EosTab.ABONUSACC,
                 EosTab.ABONUSUNSTAKE
               ).then(data => {
                 for (var i = 0; i < data.rows.length; i++) {
                   if (     
                     JSON.parse(sessionStorage.getItem("accountmsg"))
                       .currentAccount == data.rows[i].player
                   ) {
                     this.EosAcc.Redemptionamount =
                     (this.EosAcc.alreadypledged - 
                     this.AccuracycalculationIn(data.rows[i].amount.substr(0,data.rows[i].amount.length-4)))
                     this.EosAcc.redeemable=this.AccuracycalculationIn(data.rows[i].amount.substr(0,data.rows[i].amount.length-4))
                     this.getbalance(accname)
                     const tm=(new Date().getTime()-new Date(data.rows[i].created_at.replace('T',' ')).getTime())/1000
                    this.EosAcc.redeemabletime= new Date(data.rows[i].created_at.replace('T',' '))
                     return;
                   }
                 }
                 this.EosAcc.Redemptionamount =
                 (this.EosAcc.alreadypledged - 0)
                 this.getbalance(accname)
               });
               return;
             }else{
              this.getbalance(accname)
             }
           }


         }
       );
     }
    

}
export default new Service()