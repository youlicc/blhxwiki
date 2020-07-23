<template>
    <!-- 图鉴 -->
    <div class="content-items">
        <div 
            v-for="(items, index) in itemgroups"
            :key="index">
            <!-- group标题 -->
            <span>{{items.title}}</span>
            <!-- item-group -->
            <div class="items-group">
                <router-link
                    class="content-item"
                    v-for="(item, index) in items.list" 
                    :key="index"
                    :index="item.name"
                    :to="item.path">
                    <span :class="{focus: item.focus}">{{item.title}}</span>
                </router-link>
            </div>
            <!-- group分割线 -->
            <div 
                class="item-divider"
                v-if="index != itemgroups.length - 1">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Books',
    props: {
        itemgroups: Array
    },
    methods: {
    }
}
</script>
<style lang="less">
    .content-items {
        .items-group {
            display: flex;
            flex-flow: row wrap;
        }
        > div > span {
            display: block;
            text-align: left;
            position: relative;
            font-size: 18px;
            font-weight: 500;
            left: 15px;
        }
        .content-item {
            width: 20%;
            margin-left: 4%;
            margin-top: 2%;
        }
        a {
            text-decoration: none;
            span {
                display: block;
                color: #000000d9;
                border: #0000001a 1px solid;
                padding: 8px;
                font-size: 14px;
                font-weight: 300px;
            }
            .focus{
                color: #00b6ff;
                border: #00b6ff 1px solid;
            }
        }
        a :hover{
            background-color: #00b6ff;
            color: white;
        }
        .item-divider {
            background-color: #0000004d;
            width: 90%;
            height: 1px;
            margin: 15px;
        }
    }
</style>