<template>
    <!-- 这是文学艺术页面 -->
    <div id="bookCharacterbox">
        <div class="bookCharacterbox_box" v-for="(item, index) in bookCharacter" :key="index">
            <div class="bookCharacterbox_box_zuo"></div>
            <div class="box_zuo_aracter">
                <h3>{{ item.xuihao }}</h3>
            </div>
            <div class="box_you_aracter">
                <div class="box_you_aracter_img">
                    <img :src="item.img" alt="">
                </div>
                <div class="box_you_aracter_wenzi">
                    <p>{{ item.title }}</p>
                    <p>{{ item.author }}</p>
                    <p>{{ item.spell }}<span>【{{ item.easy }}】</span></p>
                </div>

            </div>
            <div class="bookCharacterbox_box_you">
                <p>{{ item.people }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bookCharacter: [
                {
                    xuihao: 1,
                    img: "https://img2.baidu.com/it/u=4011786230,3729591492&fm=253&fmt=auto&app=120&f=JPEG?w=1139&h=694",
                    title: '置身事内',
                    author: '兰小欢',
                    spell: '推荐值 96.1%总',
                    easy: '神作',
                    people: 9333,
                },
                {
                    xuihao: 2,
                    img: "https://img0.baidu.com/it/u=2725834084,2868842597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    title: '中国政府与经济发展',
                    people: 2435,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 3,
                    img: "https://img2.baidu.com/it/u=2805801495,685842400&fm=253&fmt=auto&app=138&f=JPEG?w=529&h=350",
                    title: '纳瓦尔宝典',
                    people: 3434,
                    author: '埃里克·乔根森',
                    spell: '推荐值 88.1%总',
                    easy: '神作'
                },
                {
                    xuihao: 4,
                    img: "https://img0.baidu.com/it/u=2225147332,1992095955&fm=253&fmt=auto&app=138&f=JPEG?w=746&h=500",
                    people: 1312,
                    title: '20周年修',
                    author: '罗伯特·清崎',
                    spell: '推荐值 69.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 5,
                    img: "https://img0.baidu.com/it/u=1094288116,3779529945&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    people: 8855,
                    title: '富爸爸穷爸爸',
                    author: '兰小欢',
                    spell: '推荐值 84.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 6,
                    img: "https://img0.baidu.com/it/u=3707791320,1175488418&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    title: '厌女(增订本)',
                    people: 6454,
                    author: '罗伯特·清崎',
                    spell: '推荐值 75.1%总',
                    easy: '好评如潮'
                },

                {
                    xuihao: 7,
                    img: "https://img0.baidu.com/it/u=1392364405,2615073654&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=758",
                    title: '芒格之道',
                    author: '兰小欢',
                    spell: '推荐值 79.1%总',
                    easy: '好评如潮',
                    people: 4255,
                },
                {
                    xuihao: 8,
                    img: "https://img2.baidu.com/it/u=374344454,1382038991&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=366",
                    title: '财之道从',
                    people: 7453,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 9,
                    img: "https://img2.baidu.com/it/u=2971819204,945258842&fm=253&fmt=auto&app=138&f=JPEG?w=629&h=500",
                    title: '查理·芒格',
                    people: 9033,
                    author: '兰小欢',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 10,
                    img: "https://img1.baidu.com/it/u=565093769,2752883247&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
                    people: 5223,
                    title: '纳瓦尔宝典',
                    author: '罗伯特·清崎',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 11,
                    img: "https://img1.baidu.com/it/u=1167433625,974275199&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500",
                    people: 883,
                    title: '中国政府与经济发展',
                    author: '罗伯特·清崎',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
            ]
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#bookCharacterbox {
    width: 100%;
}

.bookCharacterbox_box {
    width: 90%;
    margin: auto;
    height: 120px;
    display: flex;
    margin-bottom: 16px;

    .bookCharacterbox_box_you {
        width: 60px;
        text-align: center;
        margin-top: 15px;
        font-size: 13px;
        // margin-left: 50px;
        line-height: 25px;
        border-radius: 50px;
        color: #9DA4AE;
        height: 25px;
        background-color: #F6F6F6;
    }

    .box_zuo_aracter {
        padding: 5px;
        line-height: 90px;
        margin-left: -10px;
    }

    .box_you_aracter_wenzi {

        width: 200px;
        margin-left: 10px;
        margin-top: 10px;
        line-height: 25px;

        span {
            color: #F86E4B;
            font-weight: 900;
        }

        p:nth-child(1) {
            font-weight: 900;
        }

        p:nth-child(3) {
            font-size: 12px;
        }
    }

    .box_you_aracter {
        display: flex;
    }

    img {
        width: 70px;
        height: 100px;
        margin-top: 10px;
    }
}
</style>