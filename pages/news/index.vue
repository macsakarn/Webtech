<template>
  <div class="body">
    <div class="news">
      <ul class="news_star">
        <news_recommend
          v-for="news_re in news_re"
          :key="news_re.id"
          :item="news_re"
        />
      </ul>
      <ul class="btn_category">
        <li
          class="cat_item"
          @click="set_news(1)"
          :class="{ highlight: selected == 1 }"
        >
          Latest
        </li>
        <li
          class="cat_item"
          @click="set_news(2)"
          :class="{ highlight: selected == 2 }"
        >
          Info
        </li>
        <li
          class="cat_item"
          @click="set_news(3)"
          :class="{ highlight: selected == 3 }"
        >
          Updates
        </li>
        <li
          class="cat_item"
          @click="set_news(4)"
          :class="{ highlight: selected == 4 }"
        >
          Events
        </li>
      </ul>
      <ul v-if="selected === 1" class="news_item_header">
        <news_list v-for="(item, index) in loop" :key="index" />
        <li class="news_more" @click="loop += 5">More</li>
      </ul>
      <ul v-else-if="selected === 2" class="news_item_header">
        <news_info v-for="(item, index) in loop" :key="index" />
        <li class="news_more" @click="loop += 5">More</li>
      </ul>
      <ul v-else-if="selected === 3" class="news_item_header">
        <news_update v-for="(item, index) in loop" :key="index" />
        <li class="news_more" @click="loop += 5">More</li>
      </ul>
      <ul v-else-if="selected === 4" class="news_item_header">
        <news_event v-for="(item, index) in loop" :key="index" />
        <li class="news_more" @click="loop += 5">More</li>
      </ul>
    </div>
  </div>
</template>
<script>
import news_img_1 from "../../assets/news/news_latest_1.png";
import news_img_2 from "../../assets/news/news_latest_2.png";
import news_img_3 from "../../assets/news/news_latest_3.png";

export default {
  layout: "App",
  components: {
    news_recommend: () => import("../../components/news_recommend"),
    news_list: () => import("../../components/news_list"),
    news_info: () => import("../../components/news_info"),
    news_update: () => import("../../components/news_update"),
    news_event: () => import("../../components/news_event")
  },
  data() {
    return {
      loop: 5,
      selected: 1,
      news_re: [
        {
          id: 1,
          text_title: "Genshin Impact EP - Tales Told by the Wind",
          text_brief:
            "The wind carries hope, and the winds of time create faith from that hope.",
          text_date: "Nov 8, 2020",
          news_img: news_img_1
        },
        {
          id: 2,
          text_title:
            'New Character Demo - "Diona: Wine Industry Slayer" | Genshin Impact',
          text_brief:
            '"Hmph. Here, drink this Sea-Salt Lizard, and kiss your life as an alcoholic goodbye..."',
          text_date: "Nov 7, 2020",
          news_img: news_img_2
        },
        {
          id: 3,
          text_title: "Jade Moon Upon a Sea of Clouds",
          text_brief:
            'Genshin Impact\'s Liyue  Chapter OST — "Jade Moon Upon a Sea of Clouds" is out now.',
          text_date: "Nov 6, 2020",
          news_img: news_img_3
        }
      ]
    };
  },
  methods: {
    set_news(chackker) {
      if (chackker == 1) {
        this.selected = 1;
      } else if (chackker == 2) {
        this.selected = 2;
      } else if (chackker == 3) {
        this.selected = 3;
      } else if (chackker == 4) {
        this.selected = 4;
      }
      this.loop = 5;
    }
  }
};
</script>
<style scoped lang="scss">
.body {
  position: relative;
  width: 100%;
  background: #f0f0f0;
  overflow: hidden;
}
.news_item_header {
  margin-top: 38px;
  list-style-type: none;
  height: auto;
  transition: all 0.5s 0s ease;
  .news_more {
    height: 40px;
    line-height: 40px;
    background-color: #393b40;
    border-radius: 4px;
    opacity: 0.8;
    text-align: center;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s linear;
    margin-top: 40px;
    &:hover {
      background-color: #565961;
    }
  }
}

.news_star {
  display: flex;
  justify-content: space-between;
  padding-top: 146px;
  width: 100%;
  height: 700px;
  list-style-type: none;
}

.btn_category {
  margin-top: 38px;
  list-style-type: none;
  .cat_item {
    display: inline-block;
    min-width: 155px;
    height: 36px;
    line-height: 36px;
    background-color: rgba(57, 59, 64, 0.18);
    color: #393b40;
    border-radius: 4px;
    text-align: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s 0s ease;
    &:hover {
      background-color: #393b40;
      color: #f4d8a8;
    }
  }

  .highlight {
    background-color: #393b40;
    color: #f4d8a8;
  }
}

.news {
  position: relative;
  z-index: 2;
  width: 1280px;
  left: 50%;
  margin-left: -640px;
  min-height: 1240px;
  padding-bottom: 208px;
}

.body::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
  background: #f0f0f0 url("../../assets/news/news_bg.jpg") no-repeat center;
  background-size: auto;
  background-size: cover;
}
</style>
