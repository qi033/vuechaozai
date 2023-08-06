<template>
    <div id="WeChatPagebox">
        <!--这是头部 -->
        <div id="WeChatPage_top_inp_son">
            <h2 style="margin-bottom: 5px;margin-top: 5px;">微信读书</h2>
            <div id="WeChatPage_top_inp">
                <img src="../../assets/bookimg/搜索.png" alt=""> <input type="text" name="" id="" placeholder="搜索">
            </div>
        </div>
        <div class="hezibox"></div>
        <!-- 本地存储一样 -->
        <div id="display_box">
            <div id="display_box_top">
                <div id="display_box_top_son">
                    <img src="https://img1.baidu.com/it/u=1726019237,1891845314&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=06eda80bb9281a6a23731771d23fa60b"
                        alt="">
                    <p>爱就爱了不配后悔</p>
                    <p>体验卡今日到期</p>
                </div>
                <div class="display_box_youbian">
                    <p>反馈</p>
                </div>
            </div>
            <div id="display_box_dibu">
                <div id="display_box_dibu_zuo">
                    <!-- 循环添加 子传夫 -->
                    <div class="display_box_dibu_zuo_son" v-for="(item, index) in dataList" :key="index.id">
                        <img :src="item.img" alt="" @click="details(index)">
                        <!-- <p>{{ item.characters }}</p> -->
                        <!-- <p>{{ item.writing }}</p> -->
                        <!-- <p>{{ item.addition }}</p> -->
                        <!-- <p>{{ item.webook }}</p> -->
                    </div>

                </div>
                <div id="display_box_dibu_you">
                    <p>书架</p><span>></span>
                </div>
            </div>
        </div>
        <!-- Tab切换 -->
        <div id="WeChatPagenav">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" :class="{ 'active': index === activeTab }"
                    @click="activeTab = index"> {{ tab.name }}</li>
            </ul>
        </div>
        <!--这是切换子组件 -->
        <div id="WeChatPage_qiehuan">
            <div v-for="(tab, index) in tabs" :key="index" v-show="index === activeTab">
                <component :is="tab.component" @add-data="addData"></component>
            </div>
        </div>
        <!-- 底部 -->
        <Bookbottom></Bookbottom>
    </div>
</template>
<script>
import BookRecommend from '../../components/BookRecommend.vue'  //推荐子组件面
import BookSort from '../../components/BookSort.vue'            //分类子组件页面
import BookRanking from '../../components/BookRanking.vue'      //排行子组件页面
import bookCharacter from '../../components/bookCharacter.vue'  //文学艺术子组件页面
import BookSocial from '../../components/BookSocial.vue'        //哲学社科子组件页面
import Bookbottom from '../../components/BookBottom'            //底部子组 组件页面   DetailsPage
export default {
    components: {
        BookRecommend,
        BookSort,
        BookRanking,
        bookCharacter,
        BookSocial,
        Bookbottom,
    },
    data() {
        return {
            dataList: [],//xinchuanguolailed
            tabs: [
                { name: '推荐', component: BookRecommend },
                { name: '分类', component: BookSort },
                { name: '排行', component: BookRanking },
                { name: '文学艺术', component: bookCharacter },
                { name: '哲学社科', component: BookSocial },
            ],
            activeTab: 0,
        }
    },
    created() {
        const dataList = localStorage.getItem('dataList');
        if (dataList) {
            this.dataList = JSON.parse(dataList);
        }
    },
    methods: {
        details(index) {
            let data = this.booklink[index];
            this.$router.push({ path: "/DetailsPage", query: data });
            // this.$router.push("/DetailsPage");
            // console.log(index);  点击详情在第一个夫组件里面 把数据像是到另一个夫组件里面 但是数据在子组件里面
        },
        //本地存储添加
        addData(data) {
            this.dataList.push(data);
            localStorage.setItem('dataList', JSON.stringify(this.dataList));
        }
    }
}
</script>

<style lang="less" scoped>
#WeChatPagebox {
    height: 273vh;
    width: 100%;
}

.hezibox {
    width: 100%;
    height: 80px;
}

//本地存储一样
#display_box {
    width: 90%;
    margin: auto;
    margin-top: 10px;
    height: 130px;

    border-radius: 10px;
    background-color: #56585F;

    #display_box_top {
        display: flex;
        justify-content: space-between;

        .display_box_youbian {
            width: 50px;
            text-align: center;
            font-size: 12px;
            margin-top: 15px;
            color: #fff;
            line-height: 25px;
            height: 25px;
            border-radius: 50px 0px 0px 50px;
            background-color: #696B71;
        }

        img {
            width: 30px;
            height: 30px;
            border-radius: 50px;
        }

        #display_box_top_son {
            display: flex;
            font-size: 13px;
            margin-top: 5px;
            margin-left: 10px;

            p:nth-child(2) {
                color: #fff;
            }

            p:nth-child(3) {
                color: #ABACAF;
            }

            p {
                margin-top: 5px;
                margin-left: 10px;
            }


        }
    }

    //底部
    #display_box_dibu {
        width: 100%;
        display: flex;

        #display_box_dibu_zuo {
            width: 87%;
            overflow: auto;
            display: flex;
        }

        #display_box_dibu_you {
            display: flex;
            font-size: 14px;
            margin-top: 20px;
            margin-left: 10px;

            p {
                color: #fff;
                width: 10px;
            }

            span {
                margin-top: 10px;
                color: #838489;
                margin-left: 10px;
            }
        }

        img {
            width: 50px;
            margin-left: 10px;
            height: 70px;
        }
    }

}

ul li {
    list-style: none;
}

#WeChatPagenav {
    background-color: #fff;
    position: sticky;
    top: 80px;

    ul {
        font-weight: 900;
        height: 50px;
        line-height: 50px;
        color: #858C96;
        display: flex;
        justify-content: space-around;
    }
}

#WeChatPage_qiehuan {
    // overflow: auto;
    height: 60vh;
    margin-top: 20px;
}

.active {
    color: #1B88EE;
    flex-wrap: 800;
}

//头部

#WeChatPage_top_inp_son {
    width: 100%;
    background-color: #fff;
    text-align: center;
    height: 85px;
    position: fixed;
}

#WeChatPage_top_inp {
    width: 90%;
    display: flex;
    height: 35px;

    left: 5%;
    margin: auto;
    background-color: #F5F7F9;
    border-radius: 50px;

    img {
        width: 20px;
        height: 20px;
        margin-top: 8px;
        margin-left: 10px;
    }

    input:focus {
        outline: none;
    }

    input {
        border: none;
        background-color: #F5F7F9;
        padding-left: 20px;
        color: #ADB4BE;
        padding-top: 3px;
    }
}
</style>