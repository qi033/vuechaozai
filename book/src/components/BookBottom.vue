<template>
    <div id="WeChatPagedibu">
        <div class="WeChatPagedibu_son">
            <img src="../assets/bookimg/福利-节日福利.png" alt="" @click="fuliFun">
            <p @click="fuliFun">福利</p>
        </div>
        <div class="WeChatPagedibu_son">
            <img src="../assets/bookimg/书_.png" alt="" @click="shuchengFun">
            <p @click="shuchengFun">书城</p>
        </div>
        <div class="WeChatPagedibu_son">
            <img src="../assets/bookimg/听书.png" alt="" @click="tingshu">
            <p @click="tingshu">听书</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        //跳转福利页面
        fuliFun() {
            this.$router.push("/WeChatWelfare");
        },
        shuchengFun() {
            this.$router.push("/WeChatPage");
        },
        tingshu() {
            this.$router.push("/WeChatListening");
        }
    }
}
</script>
<style lang="less" scoped>
#WeChatPagedibu {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 45px;
    background-color: #FCFCFC;
    text-align: center;
    font-size: 14px;

    img {
        width: 20px;
        height: 20px;
        margin-top: 3px;
    }
}
</style>