<template>
    <!-- 这是排行页面 -->
    <div id="BookRankingbox">
        <div id="BookRankingbox_top">
            <div class="BookRankingbox_top_son" v-for="(item, index) in BookRanking" :key="index">
                <div class="BookRankingbox_top_sonimg">
                    <img :src="item.img" alt="">
                </div>
                <div class="BookRankingbox_top_sonyou">
                    <p><span>{{ item.xiyao }}&nbsp;&nbsp;</span>{{ item.bookming }}</p>
                    <p style="color: #878E97;"> &nbsp;&nbsp;&nbsp;{{ item.zuozhe }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            BookRanking: [
                {
                    img: 'https://img1.baidu.com/it/u=2125879712,1566849873&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=bad6da767712eae63cdcafb8ec764096',
                    xiyao: 1,
                    bookming: '剑来',
                    zuozhe: '赫尔南多·德·索托'
                },
                {
                    img: 'https://img2.baidu.com/it/u=1480807786,3291899629&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=e81fad3323679ee6ca254fd5d74fd0be',
                    xiyao: 2,
                    bookming: '三体(全集)',
                    zuozhe: '挣脱(独家首发一个律师的女性辩护和内涵据此恶女卡纳克i九年记)'
                },
                {
                    img: 'https://img1.baidu.com/it/u=3191135188,3512418780&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=49f95ecd4067cda35799445f01996242',
                    xiyao: 3,
                    bookming: '资本的秘密',
                    zuozhe: '上野干鹤子 汤山玲子'
                },
                {
                    img: 'https://t15.baidu.com/it/u=912671453,1633559247&fm=224&app=112&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=567fc123fc50ba4441157dc6219720cc',
                    xiyao: 4,
                    bookming: '快乐上等:女性怎样自',
                    zuozhe: '刘任侠'
                },
                {
                    img: 'https://img1.baidu.com/it/u=3190152553,2198818293&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=3952e5192d3cb94e861e33b228e2b1e5',
                    xiyao: 5,
                    bookming: '地活 (独家首发)',
                    zuozhe: '宋应星'
                },
                // 
                {
                    img: 'https://img1.baidu.com/it/u=3186578161,324516915&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=977870be03ba29b58d685ac8e3fab91d',
                    xiyao: 6,
                    bookming: '天工开物',
                    zuozhe: '林帝浣'
                },
                {
                    img: 'https://t13.baidu.com/it/u=2695818881,1776710004&fm=224&app=112&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=ade19f4b3606046d718a4046069c299c',
                    xiyao: 7,
                    bookming: '生活即禅，笑看平凡',
                    zuozhe: '挣脱(独家首发一个律师的女性辩护和内涵据此恶女卡纳克i九年记)'
                },
                {
                    img: 'https://www.lamaying.com/uploads/allimg/210306/0_0306232R05194.jpg',
                    xiyao: 8,
                    bookming: '女记者亲历的边境生死',
                    zuozhe: '渤海小吏'
                },
                {
                    img: 'https://img2.baidu.com/it/u=2790131870,1538253523&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=348',
                    xiyao: 9,
                    bookming: '可是我不快乐',
                    zuozhe: '洪放'
                },
                {
                    img: 'https://img0.baidu.com/it/u=1152143443,1350630887&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
                    xiyao: 10,
                    bookming: '我很好',
                    zuozhe: '杨美味'
                },
                {
                    img: 'https://img2.baidu.com/it/u=1208771062,4102856497&fm=253&fmt=auto&app=120&f=JPEG?w=741&h=494',
                    xiyao: 11,
                    bookming: '少年灿若繁星',
                    zuozhe: '玛格丽特'
                },
                {
                    img: 'https://img2.baidu.com/it/u=2807788951,726527508&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
                    xiyao: 12,
                    bookming: '离情野人山',
                    zuozhe: '鲁宾逊·拉瑟福德'
                },
                {
                    img: 'https://img1.baidu.com/it/u=2025506072,2467827269&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
                    xiyao: 13,
                    bookming: '秘书长 (大结局)',
                    zuozhe: '洪放'
                },
                {
                    img: 'https://img0.baidu.com/it/u=201314844,1124504985&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=760',
                    xiyao: 14,
                    bookming: '长相思',
                    zuozhe: '刘骁骞'
                },
                {
                    img: 'https://img0.baidu.com/it/u=2195623181,2093020851&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
                    xiyao: 15,
                    bookming: '青华大学荐读书目',
                    zuozhe: '桐华'
                },

            ]
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#BookRankingbox {
    width: 100%;
    height: 100vh !important;
}

#BookRankingbox_top {
    width: 90%;
    margin: auto;
    height: 76vh;
    line-height: 25px;

    .BookRankingbox_top_sonyou {
        margin-top: 10px;

        p:nth-child(2) {
            -webkit-line-clamp: 1;
            /* 设置几行  */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .BookRankingbox_top_son {
        display: flex;
        margin-bottom: 10px;
        width: 100%;
        height: 90px;

        img {
            width: 60px;
            height: 80px;
        }
    }
}
</style>