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
                    img: "https://img0.baidu.com/it/u=2759674557,2572350010&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500",
                    title: '法治的细节',
                    author: '罗翔',
                    spell: '推荐值 93.9%',
                    easy: '神作',
                    people: 9882,
                },
                {
                    xuihao: 2,
                    img: "https://img2.baidu.com/it/u=187196151,3376548914&fm=253&fmt=auto&app=138&f=JPEG?w=367&h=500",
                    title: '快乐上等',
                    people: 3324,
                    author: '上野千鹤子',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 3,
                    img: "https://img2.baidu.com/it/u=717722341,2890397786&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    title: '女性怎样自在地活',
                    people: 4232,
                    author: '汤山玲子',
                    spell: '推荐值 80.6%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 4,
                    img: "https://img2.baidu.com/it/u=2496575045,3238735207&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500",
                    people: 5233,
                    title: '乡土中国',
                    author: '费孝通',
                    spell: '推荐值 85.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 5,
                    img: "https://img1.baidu.com/it/u=4178560941,2325895474&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    people: 6543,
                    title: '始于极限',
                    author: '贾雷德·戴蒙德',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                }, {
                    xuihao: 6,
                    img: "https://img0.baidu.com/it/u=2409364207,431136713&fm=253&fmt=auto&app=120&f=JPEG?w=1199&h=800",
                    title: '女性主义往复',
                    people: 3343,
                    author: '吴毅',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },

                {
                    xuihao: 7,
                    img: "https://img1.baidu.com/it/u=503635991,3509873344&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=596",
                    title: '枪炮',
                    author: '罗翔',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮',
                    people: 4253,
                },
                {
                    xuihao: 8,
                    img: "https://img2.baidu.com/it/u=3661078848,3298403413&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    title: '病菌与钢铁',
                    people: 5323,
                    author: '吴毅',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 9,
                    img: "https://img0.baidu.com/it/u=2195623181,2093020851&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                    title: '小镇喧嚣',
                    people: 8873,
                    author: '贾雷德·戴蒙德',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 10,
                    img: "https://img1.baidu.com/it/u=3365865226,2150509857&fm=253&fmt=auto&app=138&f=JPEG?w=736&h=500",
                    people: 4232,
                    title: '一个乡镇政治',
                    author: '吴毅',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
                {
                    xuihao: 11,
                    img: "https://img0.baidu.com/it/u=4069081227,2613201190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=520",
                    people: 5423,
                    title: '圆圈正义',
                    author: '罗翔',
                    spell: '推荐值 89.1%总',
                    easy: '好评如潮'
                },
            ],
        }
    },
}
</script>
<style lang="less" scoped>
.yy {
    display: block;
    margin-bottom: 50px;
    border: 4px dashed #e0dbdb;
    /* 边框颜色 */
    // border-top: 4px solid #3498db; /* 顶部边框颜色 */
    border-radius: 50%;
    /* 边框圆角 */
    width: 20px;
    /* 宽度 */
    height: 20px;
    /* 高度 */
    animation: spin 2s linear infinite;
    /* 动画样式 */
    margin: auto;
    /* 居中 */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    /* 起始位置旋转度数 */
    100% {
        transform: rotate(360deg);
    }

    /* 结束位置旋转度数 */
}

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
        margin-top: 20px;
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