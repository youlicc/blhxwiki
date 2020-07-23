<template>
    <div>
        <template v-for="(item, index) in list">
            <!--子导航-->
            <template v-if="item.children.length"> 
                <el-submenu :key="index" :index="item.index">
                    <template :index="item.index" slot="title">{{item.name}}</template>
                    <el-menu-item-group>
                        <NavItem :list="item.children"></NavItem>
                    </el-menu-item-group>
                </el-submenu>
            </template>
            <!--子项-->
            <template v-else>
                <el-menu-item :key="index" :index="item.router.path">
                    {{item.name}}
                </el-menu-item>
            </template>
        </template>
    </div>
</template>
<script>
export default {
    name: 'NavItem',
    props: {
        list: Array
    }
}
</script>