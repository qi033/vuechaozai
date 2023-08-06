<template>
  <div id="boximg">
    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img
          src="https://img0.baidu.com/it/u=4283523261,3615620844&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691168400&t=e937016b92657a1f22812e4211427e50"
          alt=""></swiper-slide>
      <swiper-slide><img
          src="https://img2.baidu.com/it/u=1444024164,3406292138&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691168400&t=0f16587091c5ba8ab29adc07744daaab"
          alt=""></swiper-slide>
      <swiper-slide><img
          src="https://img2.baidu.com/it/u=1641828114,2749318712&fm=253&jfmt=auto&app=138&f=JPEG?w=889&h=500"
          alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- tab切换 -->
    <div id="boxson">
      <div class="tabs">
        <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }"
          @click="activeTab = index">
          {{ tab.title }}
        </div>
      </div>
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <img :src="tab.content" alt="">
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: 'Tab 1',
          content: 'https://img0.baidu.com/it/u=4283523261,3615620844&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691168400&t=e937016b92657a1f22812e4211427e50'
        },
        {
          title: 'Tab 2',
          content: 'https://img2.baidu.com/it/u=1444024164,3406292138&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691168400&t=0f16587091c5ba8ab29adc07744daaab'
        },
        {
          title: 'Tab 3',
          content: 'https://img2.baidu.com/it/u=1641828114,2749318712&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
        }
      ],
      //轮播图
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true
        },
      }
    }
  }
}
</script>
 
<style lang="less" scoped>
#boximg {
  width: 70%;
  height: 300px;
  background-color: pink;
  margin: auto;

  img {
    width: 100%;
    height: 500px;
    margin: auto;
  }
}

.swiper {
  width: 50%;
  height: 50%;
}

.swiper img {
  width: 600px;
  height: 500px;
  margin: auto;
  display: flex;
  border-radius: 20px;
}

.tab {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
}

.tab.active {
  background-color: #ccc;
}

div[v-show] {
  display: none;
}

#boxson img {
  width: 200px;
  height: 200px;
}
</style>