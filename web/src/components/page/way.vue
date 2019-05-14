<template>
    <div class="unified_limit_width way" >
      <Row  class="break-b">
        <Col span="10" style="text-align: center">
          <img :src="$t('line_figure')" alt="" class="road">

          <div class="button">
            <a :href="$t('ekd.whitelink')" target="blank"><img :src="$t('anjianko')"></a>
          </div>
        </Col>
        <Col span="14">
          <img :src="$t('line_map')" alt="" style="width: 95%;margin-top:-7%;">
        </Col>
      </Row>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.introduce{
  margin: 20px 0;
  height: 220px;
  text-align: left;
  text-indent:2em;
  padding: 0 65px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;
  line-height: 22px;
  -webkit-line-clamp: 10;
    margin-top: -10%;
}
  .road{
    width: 100%;
    margin-top: -10%;
  }
  .button{
    width: 90%;
    z-index: 1002;
    height: 55px;
    background-size: 100% 100%;
    font-size: 1.4em;
    font-weight: bold;
    letter-spacing: 8px;
    line-height: 48px;
    float: left;
    margin-left: 7%;
    margin-top: -5%;
  }
</style>



