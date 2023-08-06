<template>
    <div id="Recommendbox">
        <div class="Recommendbox_xuanran" v-for="(item, index) in booklink" :key="index.id" @click="addItem(item)">
            <div class="Recommendbox_img">
                <img :src="item.img" alt="">
            </div>
            <div class="Recommendbox_you">
                <p>{{ item.characters }}</p>
                <p>{{ item.writing }} <span style="color: #C18B37;">{{ item.addition }}</span></p>
                <p>{{ item.webook }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            booklink: [
                {
                    img: "https://img2.baidu.com/it/u=717722341,2890397786&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691168400&t=53df782a66df6e06b3f649978e4e46bf",
                    characters: "明朝那些事儿 (全集)",
                    writing: "马伯庸|推荐值 95.5%",
                    addition: "【神作】",
                    webook: "大家都在读"
                },
                {
                    img: "https://img0.baidu.com/it/u=1494779584,3251865152&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500",
                    characters: "长安的荔枝",
                    addition: "【神作】",
                    writing: "当年明月|推荐值 92.4%",
                    webook: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=2964169019,1564403770&fm=253&fmt=auto&app=138&f=JPEG?w=594&h=500",
                    characters: "宋慈洗冤笔记(独家首发 1-3册)",
                    writing: "巫童|推荐值 92.9%",
                    webook: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=1498580072,3993502554&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500",
                    characters: "认知觉醒:开启自我改变的原动力",
                    addition: "【神作】",
                    writing: "周岭|推荐值 91.3%",
                    webook: "大家都在读"
                },
                {
                    img: "https://img1.baidu.com/it/u=2070403799,499029011&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
                    characters: "长相思1:如初见 (杨紫 张晚意 邓为)",
                    addition: "【好评如潮】",
                    writing: "桐华 推荐值 88.4%",
                    webook: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=717722341,2890397786&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691168400&t=53df782a66df6e06b3f649978e4e46bf",
                    characters: "明朝那些事儿 (全集)",
                    writing: "马伯庸|推荐值 95.5%",
                    addition: "【神作】",
                    webook: "大家都在读"
                },
                {
                    img: "https://img0.baidu.com/it/u=1707872353,4088682593&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=d64ebc633aa7e7263fd5aac558b13bec",
                    characters: "长安的荔枝",
                    addition: "【神作】",
                    writing: "当年明月|推荐值 92.4%",
                    webook: "大家都在读"
                },
                {
                    img: "https://img1.baidu.com/it/u=3682990066,1452868278&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=1307b90133cfe8139966c7cc228c2adc",
                    characters: "活着",
                    writing: "余华|推荐值 91.9%",
                    webook: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=2201202175,3569862018&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=af6a29f09e1c07e0528d07891a39ce82",
                    characters: "长安十二时辰",
                    addition: "【值得一】",
                    writing: "马伯庸 推荐值 75.1% ",
                    webook: "大家都在读"
                },
                {
                    img: "https://img2.baidu.com/it/u=636923383,2592201727&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=689abad89b0e53bbbb6275230ecb3168",
                    characters: "长相思1:如初见 (杨紫 张晚意 邓为)",
                    addition: "【神作】",
                    writing: "史铁生|推荐值 91.0%",
                    webook: "大家都在读"
                },
            ]
        }
    },
    methods: {
        addItem(item) {
            this.$emit('add-data', item);
        }
    }
}
</script>

<style lang="less" scoped>
#Recommendbox {
    width: 90%;
    height: 300px;
    margin: auto;

    img {
        width: 90px;
        height: 130px;
    }

    .Recommendbox_xuanran {
        display: flex;
        width: 100%;
        height: 150px;
    }

    .Recommendbox_you {
        margin-left: 10px;
        line-height: 30px;
        margin-top: 10px;

        p:nth-child(3) {
            color: #ddd;
            font-size: 13px;
        }

        p:nth-child(1) {
            font-size: 15px;

            -webkit-line-clamp: 1;
            /* 设置几行  */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p:nth-child(2) {
            font-size: 13px;
        }


    }
}
</style>