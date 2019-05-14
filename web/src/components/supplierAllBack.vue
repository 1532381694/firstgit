<template>
</template>
<script>
  //回跳刷新
  export default {
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$router.replace(from.path)
      })
    }
  }
</script>

<style scoped>

</style>
