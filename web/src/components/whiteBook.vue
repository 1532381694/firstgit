<template>
    <div class="whitebook">
        <Nav></Nav>
        <foot></foot>
    </div>
</template>

<script>
import Nav from '@/components/layout/nav'
import foot from '@/components/layout/foot'
import '@/assets/css/nav.css'
import '@/assets/css/foot.css'
export default {
    components:{Nav, foot},
        name: 'whitebook',
}
</script>

<style>

</style>
