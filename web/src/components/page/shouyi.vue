<template>
    <div class="shouyi">
        <div class="container">
            <div class="col-xs-12 shouyiTitle">
                <img :src="$t('earnings_title')" alt="">
            </div>
            <div class="unified_limit_width" style="text-align: center;margin-left:10%;">
              <Row  class="break-b" style="width: 100%;margin-left:100px;">
                <Col span="8">
                  <Row  class="break-b">
                    <Col span="24">
                      <img :src="$t('earnings_issue')" class="shouyiicon" alt="">
                    </Col>
                  </Row>
                </Col>
                <Col span="8">
                  <Row  class="break-b">
                    <Col span="24">
                      <img :src="$t('earnings_Preparations')" class="shouyiicon" alt="">
                    </Col>
                  </Row> 
                </Col>
                <Col span="8">
                  <Row  class="break-b">
                    <Col span="24">
                      <img :src="$t('earnings_distribution')" class="shouyiicon" alt="">
                    </Col>
                  </Row>
                </Col>
                <Col span="24">
                  <div class="sy_details_button">
                    <a :href="$t('ekd.whitelink')" target="blank"><img :src="$t('anjianko')"></a>
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
  .shouyiicon{
    width: 70%;
  }
  .rig{
    width: 90%;
  }
  .sy_details_button {
    background-size: 100% 100%;
    margin: 0 auto;
    color: #515a6e;
    font-size: 2em;
    cursor: pointer;
}
</style>
