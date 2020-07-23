<template>
    <section id="ContentArea">
        <!-- <h1>内容区</h1> -->
        <el-row :gutter="0">
            <content-col 
                v-for="(item, index) in ContentList"
                :key="index"
                :colData="item">
            </content-col>
        </el-row>
    </section>
</template>
<script>
import ContentCol from '../ContentArea/ContentCol.vue'
export default {
    name: 'ContentArea',
    components: {
        ContentCol
    },
    data() {
        return {
            ContentList: [
                {
                    width: 7,
                    title: "",
                    children: [
                        {
                            title: "情报区"
                        },
                        {
                            title: "碧蓝舰娘志"
                        }
                    ]
                },
                {
                    width: 10,
                    title: "",
                    children: [
                        {
                            title: "图鉴",
                            children: [
                                {
                                    title: "舰船",
                                    list: [
                                        {
                                            title: "舰船图鉴",
                                            focus: false,
                                            path: "/query/ship/shipbook",
                                            name: "shipbook"
                                        },
                                        {
                                            title: "舰船筛选",
                                            focus: true,
                                            path: "/query/ship/shipselect",
                                            name: "shipselect"
                                        }
                                    ]
                                },
                                {
                                    title: "装备",
                                    list: [
                                        {
                                            title: "舰炮",
                                            focus: false,
                                            path: "/query/equipment/artillery",
                                            name: "artillery"
                                        },
                                        {
                                            title: "舰载机",
                                            focus: false,
                                            path: "/query/equipment/plane",
                                            name: "plane"
                                        },
                                        {
                                            title: "防空炮",
                                            focus: false,
                                            path: "/query/equipment/airdefense",
                                            name: "airdefense"
                                        },
                                        {
                                            title: "鱼雷",
                                            focus: false,
                                            path: "/query/equipment/torpedo",
                                            name: "torpedo"
                                        },
                                        {
                                            title: "设备",
                                            focus: true,
                                            path: "/query/equipment/suport",
                                            name: "suport"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "玩法",
                            children: [
                                {
                                    title: "出击",
                                    list: [
                                        {
                                            title: "章节关卡",
                                            focus: false,
                                            path: "/gameplay/attack/chapters",
                                            name: "chapters"
                                        },
                                        {
                                            title: "每日副本",
                                            focus: false,
                                            path: ":/gameplay/attack/dailystances",
                                            name: "dailystances"
                                        }
                                    ]
                                },
                                {
                                    title: "战斗",
                                    list: [
                                        {
                                            title: "各类计算公式",
                                            focus: true,
                                            path: "/gameplay/battle/fomula",
                                            name: "fomula"
                                        },
                                        {
                                            title: "公式计算器",
                                            focus: false,
                                            path: "/gameplay/battle/calculator",
                                            name: "calculator"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    width: 7,
                    title: "",
                    children: [
                        {
                            title: "日历"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less">
    #ContentArea {
        width: 100%;
        .el-col {
            padding-bottom: 10px;
        }
    }
</style>