<template>
    <!-- 这是福利页面 -->
    <div id="WeChatWelfarebox">
        <div class="kong"></div>
        <div id="WeChatWelfarebox_top" v-for="(item, index) in WeChatWelfare" :key="index">
            <div class="WeChatWelfarebox_top_img">
                <img :src="item.img" alt="">
            </div>
            <div class="WeChatWelfarebox_top_ziti">
                <div class="WeChatWelfarebox_top_ziti_son">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.wenzi }}</p>
                </div>
                <button>{{ item.btn }}</button>
            </div>
        </div>
        <div id="WeChatWelfarebox_btn">
            <p>你还可以通过“阅读时长积累”获得无限卡</p>
            <p>1.阅读即送无限卡。阅读时间越长，赠送无限卡越多。每周最多可获得4天无限卡。</p>
        </div>
        <Bookbottom></Bookbottom>
    </div>
</template>
<script>
import Bookbottom from '../../components/BookBottom.vue' //底部子组 组件页面
export default {
    components: { Bookbottom },
    data() {
        return {
            WeChatWelfare: [
                {
                    name: '每日一答',
                    img: 'https://thumb12.jfcdns.com/2018-04/bce5addaa71a4235.jpeg',
                    wenzi: '3 人成队·共攒积分兑大奖',
                    btn: '立即组队'
                },
                {
                    name: '读书小队',
                    img: 'https://thumb12.jfcdns.com/2018-04/bce5addaa71a4235.jpeg',
                    wenzi: '挑战连续答对 12 道题',
                    btn: '玩一玩'
                },
                {
                    name: '周五集赞得12天体验卡',
                    img: 'https://thumb12.jfcdns.com/2018-04/bce5addaa71a4235.jpeg',
                    wenzi: '第 195期 08.04 - 08.11',
                    btn: '立即查看'
                },
                {
                    name: '周四免费图书馆',
                    img: 'https://thumb12.jfcdns.com/2018-04/bce5addaa71a4235.jpeg',
                    wenzi: '第316期 08.03 -08.10',
                    btn: '立即查看'
                },
                {
                    name: '周二翻一翻',
                    img: 'https://thumb12.jfcdns.com/2018-04/bce5addaa71a4235.jpeg',
                    wenzi: '第 227期 08.01-08.08',
                    btn: '翻一翻'
                },


            ]
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#WeChatWelfarebox {
    background-color: #F8F8F8;
    height: 225vh;
    width: 100%;
}

#WeChatWelfarebox_btn {
    line-height: 30px;
    width: 90%;
    margin: auto;
    margin-top: 15px;

    p:nth-child(1) {}

    p:nth-child(2) {
        padding-left: 3px;
        font-size: 13px;
        color: #ddd;
    }
}

.kong {
    height: 20px;
}

#WeChatWelfarebox_top {
    height: 240px;
    background-color: #fff;
    width: 90%;
    margin: auto;
    border-radius: 10px;
    // margin-top: 20px;

    .WeChatWelfarebox_top_ziti {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;

        p {
            color: #ADB4BE;
            font-size: 14px;
        }

        button {
            width: 80px;
            height: 30px;
            background-color: #E9BE91;
            border: 1px solid #E9BE91;
            border-radius: 50px;
            color: #9F8058;
            margin-top: 10px;
        }

    }

    .WeChatWelfarebox_top_img {
        margin-top: 20px;

        width: 100%;
        border-radius: 10px 10px 10px 10px;

        img {
            height: 150px;
            border-radius: 10px 10px 0px 0px;
            width: 100%;

        }
    }
}
</style>