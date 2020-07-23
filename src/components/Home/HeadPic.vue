<template>
    <div id="HeadPic">
        <img class="head-picture" src="../../assets/headpicture.jpg" alt="碧蓝航线卫星合集">
    </div>
</template>
<script>
export default {
    name: 'HeadPic'
}
</script>
<style lang="less">
    #HeadPic {
        width: 100%;
        height: 6%;
        display: flex;
        align-items: center;
        justify-content: center;
        .head-picture {
            width: 100%;
            height: auto;
            margin-top: 20px;
        }
    }
</style>