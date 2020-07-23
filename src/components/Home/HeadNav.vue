<template>
    <aside id="HeadNav">
        <!-- 横向导航栏 -->
        <el-menu
            class="headnav"
            background-color="#474747"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="this.$router.path"
            :router="true"
            mode="horizontal">
            <template v-for="(item, index) in NavList">
                <!--一级导航项-->
                <el-menu-item 
                    v-if="!item.children.length"
                    :key=index
                    :index="item.router.path">
                    {{item.name}}
                </el-menu-item>
                <!--二级导航-->
                <el-submenu v-else :key=index :index="item.index">
                    <template slot="title">
                        {{item.name}}
                    </template>
                    <nav-item :list="item.children"></nav-item>
                </el-submenu>
            </template>
        </el-menu>
    </aside>
</template>
<script>
import NavItem from '../HeadNav/NavItem.vue'
export default {
    name: 'HeadNav',
    components: {
        NavItem
    },
    data() {
        return {
            NavList: [
                {
                    name: "首页",
                    index: "1",
                    children: [],
                    router: {
                        path: "/home",
                        name: "home"
                    }
                },
                {
                    name: "舰船",
                    index: "2",
                    children: [
                        {
                            name: "舰船图鉴",
                            index: "2-1",
                            children: [],
                            router: {
                                path: "/query/ship/shipbook",
                                name: "shipbook"
                            }
                        },
                        {
                            name: "舰船筛选",
                            index: "2-2",
                            children: [],
                            router: {
                                path: "/query/ship/shipselect",
                                name: "shipselect"
                            }
                        }
                    ]
                },
                {
                    name: "装备",
                    index: "3",
                    children: [
                        {
                            name: "舰炮",
                            index: "3-1",
                            children: [],
                            router: {
                                path: "/query/equipment/artillery",
                                name: "artillery"
                            }
                        },
                        {
                            name: "舰载机",
                            index: "3-2",
                            children: [],
                            router: {
                                path: "path:/query/equipment/plane",
                                name: "plane"
                            }
                        },
                        {
                            name: "防空炮",
                            index: "3-3",
                            children: [],
                            router: {
                                path: "/query/equipment/airdefense",
                                name: "airdefense"
                            }
                        },
                        {
                            name: "鱼雷",
                            index: "3-4",
                            children: [],
                            router: {
                                path: "/query/equipment/torpedo",
                                name: "torpedo"
                            }
                        },
                        {
                            name: "设备",
                            index: "3-4",
                            children: [],
                            router: {
                                path: "/query/equipment/suport",
                                name: "suport"
                            }
                        }
                    ]
                },
                {
                    name: "玩法",
                    index: "4",
                    children: [
                        {
                            name: "出击",
                            index: "4-1",
                            children: [
                                {
                                    name: "章节关卡",
                                    index: "4-1-1",
                                    children: [],
                                    router: {
                                        path: "/gameplay/attack/chapters",
                                        name: "chapters"
                                    }
                                },
                                {
                                    name: "每日副本",
                                    index: "4-1-2",
                                    children: [],
                                    router: {
                                        path: "/gameplay/attack/dailystances",
                                        name: "dailystances"
                                    }
                                }
                            ]
                        },
                        {
                            name: "战斗",
                            index: "4-2",
                            children: [
                                {
                                    name: "各类计算公式",
                                    index: "4-2-1",
                                    children: [],
                                    router: {
                                        path: "/gameplay/battle/fomula",
                                        name: "fomula"
                                    }
                                },
                                {
                                    name: "公式计算器",
                                    index: "4-2-2",
                                    children: [],
                                    router: {
                                        path: "/gameplaybattle/calculator",
                                        name: "calculator"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            activeIndex: '1'
        }
    }
}
</script>
<style lang="less">
    body {
        >.el-menu--horizontal {
            ul, li{
                min-width: 150px !important;
            }
            ul>div>li, ul>div>li>div{
                line-height: 60px !important;
                // display: flex;
                // align-items: center;
                // justify-content: center;
            }
            .el-menu-item, .el-submenu__title{
                height: 60px !important;
                text-align: center;
                font-size: 18px;
                padding: 0 20% !important;
            }
        }
    }
    #HeadNav {
        width: 100%;
        .el-menu {
            width: 100%;
            li {
                width: 25%;
            }
            .el-menu-item, .el-submenu__title {
                font-size: 18px;
            }
        }
    }
</style>