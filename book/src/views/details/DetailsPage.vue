<template>
    <div id="detailsBox">
        这是详情页面
        <p>{{ this.$route.query.characters }}</p>
        <p><img :src="this.$route.query.img" alt=""></p>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {}
}
</script>
<style lang="less" scoped></style>