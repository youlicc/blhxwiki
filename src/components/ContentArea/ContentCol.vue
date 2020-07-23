<template>
    <el-col :span="colData.width">
        <h2>{{colData.title}}</h2>
        <content-bar
            v-for="(item,index) in colData.children"
            :key="index"
            :params="item">
        </content-bar>
    </el-col>
</template>
<script>
import ContentBar from './ContentBar.vue'
export default {
    name: 'ContentCol',
    components: {
        ContentBar
    },
    props: {
        colData: Object
    },
    data() {
        return {
            
        }
    }
}
</script>