export default {
  data(){
    return{
      whitebook_href:'https://eoskingdom.io/EKD_WhitePaper_KR.pdf',
      //语言图标切换
      language:'',
      ICON_01KO:require('@/assets/images/nav/ICON_01KO.png'),
      ICON_02CN:require('@/assets/images/nav/ICON_02CN.png'),
      ICON_03EN:require('@/assets/images/nav/ICON_03EN.png')
    }
  },
  methods: {
    tabKO () {
      this.type='ko'
      this.$i18n.locale = 'korean'
      this.language = this.ICON_01KO
      this.whitebook_href = 'https://eoskingdom.io/EKD_WhitePaper_KR.pdf'
    },
    tabCn () {
      this.type='cn'
      this.$i18n.locale = 'zh'
      this.language = this.ICON_02CN
      console.log(this.ICO_cn)
      this.whitebook_href = 'https://eoskingdom.io/EKD_WhitePaper_CN.pdf'
    },
    tabEn () {
      this.type='en'
      this.$i18n.locale = 'en'
      this.language = this.ICON_03EN
      this.whitebook_href = 'https://eoskingdom.io/EKD_WhitePaper_EN.pdf'
    },
  },
  mounted() {
    if(this.$i18n.locale === 'korean'){
      this.language = this.ICON_01KO
    }else if(this.$i18n.locale === 'zh') {
      this.language = this.ICON_02CN
    }else if(this.$i18n.locale === 'en') {
      this.language = this.ICON_03EN
    }
  }
}
