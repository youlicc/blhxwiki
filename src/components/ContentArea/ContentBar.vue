<template>
    <div class="content-bar">
        <h3>
            <span class="bar-headline">{{params.title}}</span>
        </h3>
        <!-- 情报区 -->
        <!-- 碧蓝舰娘志 -->
        <!-- 图鉴 -->
        <template v-if="params.title=='图鉴'">
            <books :itemgroups="params.children"></books>
        </template>
        <!-- 玩法 -->
        <template v-else-if="params.title=='玩法'">
            <game-play :itemgroups="params.children"></game-play>
        </template>
        <!-- 日历 -->
    </div>
</template>
<script>
import Books from './Bars/Books.vue'
import GamePlay from './Bars/GamePlay.vue'
export default {
    name: 'ContentBar',
    components: {
        Books,
        GamePlay
    },
    props: {
        params: Object
    }
}
</script>
<style lang="less">
    .content-bar {
        h3 {
            height: 50px;
            background-image: url("../../assets/content-bar-title-1.png"),
                              url("../../assets/content-bar-title-2.png"),
                              url("../../assets/content-bar-title-3.png");
            background-repeat: no-repeat,no-repeat,repeat-x;
            background-position: left top,right top,center top;
            // background-clip: border-box, border-box, border-box;
            // background-origin: padding-box,padding-box,padding-box;
            // background-size: auto auto,auto auto,auto auto,100% 100%;
            margin: 15px 10px 10px 10px;
            display: flex;
            align-items: center;
            span {
                font-weight: 200;
                font-size: 19px;
                color: white;
                margin-left: 15px;
            }
        }
    }
</style>