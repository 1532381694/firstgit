<template>
    <div class="server unified_limit_width">
        <div class="container" style="margin: 0 auto">
            <div class="server-title" style="margin-left:7%;">
                <img :src="$t('server_title')" style="width:100%;">
                <!-- <img src="@/assets/images/server/CN-TITLE-03.png" style="width:100%;"> -->
                <!-- <img src="@/assets/images/server/EN-TITLE-03.png" style="width:100%;"> -->
            </div>
            <div class="server-list">
              <Row  class="break-b">
                <Col span="6">
                  <img src="@/assets/images/server/ICON01.png" alt="">
                  <div class="font_text">{{$t(`service.games`)}}</div>
                </Col>
                <Col span="3">
                  <img src="@/assets/images/server/dot1.png" alt="" class="dot">
                </Col>
                <Col span="6">
                  <img src="@/assets/images/server/ICON02.png" alt="">
                  <div class="font_text">
                    {{$t(`service.token`)}}
                  </div>
                </Col>
                <Col span="3">
                  <img src="@/assets/images/server/dot1.png" alt="" class="dot">
                </Col>
                <Col span="6">
                  <img src="@/assets/images/server/ICON03.png" alt="">
                  <div class="font_text">
                    {{$t(`service.dividends`)}}
                  </div>
                </Col>
              </Row>
              <Row  class="break-b">
                <Col span="6">
                  <img src="@/assets/images/server/ICON04.png" alt="">
                  <div class="font_text">
                    {{$t(`service.wallet`)}}
                  </div>
                </Col>
                <Col span="3">
                  <img src="@/assets/images/server/dot1.png" alt="" class="dot" >
                </Col>
                <Col span="6">
                  <img src="@/assets/images/server/ICON05.png" alt="">
                  <div class="font_text">
                    {{$t(`service.dex`)}}
                  </div>
                </Col>
                <Col span="3">
                  <img src="@/assets/images/server/dot1.png" alt="" class="dot">
                </Col>
                <Col span="6">
                  <img src="@/assets/images/server/ICON06.png" alt="">
                  <div class="font_text">
                    {{$t(`service.community`)}}
                  </div>
                </Col>
              </Row>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .font_text{
    width: 100%;
    height: 112px;
    line-height: 35px;
    font-size: 2em;
    font-weight: bold;
  }
  .ivu-col-span-3{
    width: 9.5%;
  }
  .ivu-row{
    margin-left: 7%;
  }
</style>
