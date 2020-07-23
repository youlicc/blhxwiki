<template>
    <div class="Home">
        <!--横向导航栏-->
        <head-nav />
        <!--导航图片-->
        <head-pic />
        <!--内容区-->
        <content-area />
        <!--页脚-->
        <home-foot />
    </div>
</template>
<script>
import HeadNav from '../components/Home/HeadNav.vue'
import HeadPic from '../components/Home/HeadPic.vue'
import ContentArea from '../components/Home/ContentArea.vue'
import HomeFoot from '../components/Home/HomeFoot.vue'

export default {
    name: 'Home',
    components: {
        HeadNav,
        HeadPic,
        ContentArea,
        HomeFoot
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>
<style lang="less">
    body,html {
        margin: 0;
        padding: 0;
    }
    .Home {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        aside, section, footer, >div{
            text-align: center;
        }
    }
</style>