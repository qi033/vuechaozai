<template>
    <!-- 这是听书页面 -->
    <div id="WeChatListeningbox">
        <div id="WeChatListeningbox_boxsom">
            <div id="WeChatPage_top_inp">
                <img src="../../assets/bookimg/搜索.png" alt=""> <input type="text" name="" id="" placeholder="搜索">
            </div>
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
                        <img src="https://img1.baidu.com/it/u=1726019237,1891845314&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=06eda80bb9281a6a23731771d23fa60b"
                            alt="">
                        <img src="https://img2.baidu.com/it/u=3225755762,2769065243&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=8d4ee3b5216de45b225acc066374f741"
                            alt="">
                        <img src="https://img2.baidu.com/it/u=694688470,3234674904&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=afd020ce0784e11c3709e07aaefd62dc"
                            alt="">
                        <img src="https://img0.baidu.com/it/u=3492419314,3636728606&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=ef9becf6df16005ca48277171f71c2e9"
                            alt="">
                    </div>
                    <div id="display_box_dibu_you">
                        <p>书架</p><span>></span>
                    </div>
                </div>
            </div>
            <div class="WeChatListening_like">
                <div class="WeChatListening_like_top">
                    <h2>猜你喜欢</h2>
                </div>
                <div class="WeChatListening_likedata">
                    <div class="WeChatListening_likedata_img">
                        <img src="https://img1.baidu.com/it/u=1726019237,1891845314&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691254800&t=06eda80bb9281a6a23731771d23fa60b"
                            alt="">
                    </div>
                    <div class="WeChatListening_likedata_zit">
                        <p>小女子:中英法对照(彩绘珍藏版)</p>
                        <p>圣埃克絮佩里|讲书人:无限穿越新媒体</p>
                        <p>根据你的收听兴趣推荐</p>
                    </div>
                </div>
            </div>
        </div>
        <Bookbottom></Bookbottom>
    </div>
</template>
<script>
import Bookbottom from '../../components/BookBottom' //底部子组 组件页面
export default {
    components: { Bookbottom },
    data() {
        return {}
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#WeChatListeningbox {
    width: 100%;
}

//喜欢样式
.WeChatListening_like {
    width: 100%;
    margin-top: 15px;
    height: 300px;

    .WeChatListening_likedata {
        display: flex;
        line-height: 25px;
        margin-top: 10px;

        p:nth-child(2) {
            font-size: 13.5px;
        }

        p:nth-child(3) {
            font-size: 12px;
        }

        .WeChatListening_likedata_zit {
            margin-left: 10px;
        }

        img {
            width: 70px;
            height: 90px;
        }
    }
}

#display_box {
    width: 100%;
    margin: auto;
    margin-top: 50px;
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
            margin-left: 5px;
        }

        #display_box_top_son {
            display: flex;
            font-size: 13px;

            margin-top: 5px;

            p:nth-child(2) {
                color: #fff;
            }

            p:nth-child(3) {
                color: #ABACAF;
            }

            p {
                margin-top: 6px;
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

            img {
                margin-left: 10px;
            }
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
            height: 70px;
        }
    }

}

#WeChatListeningbox_boxsom {
    width: 90%;
    margin: auto;
    height: 90vh;
    overflow: auto;

    #WeChatPage_top_inp {
        width: 90%;

        position: fixed;
        top: 0px;
        display: flex;
        height: 35px;
        margin: auto;
        background-color: #F5F7F9;
        border-radius: 50px;

        img {
            width: 20px;
            height: 20px;
            margin-top: 8px;
            margin-left: 10px;
        }

        input {
            border: none;
            background-color: #F5F7F9;
            padding-left: 20px;
            color: #ADB4BE;
            padding-top: 3px;
        }
    }
}
</style>