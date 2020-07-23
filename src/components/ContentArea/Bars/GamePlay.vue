<template>
    <!-- 玩法 -->
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
    name: 'GamePlay',
    props: {
        itemgroups: Array
    }
}
</script>