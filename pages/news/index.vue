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
          @click="selected = 1"
          :class="{ highlight: selected == 1 }"
        >
          Latest
        </li>
        <li
          class="cat_item"
          @click="selected = 2"
          :class="{ highlight: selected == 2 }"
        >
          Info
        </li>
        <li
          class="cat_item"
          @click="selected = 3"
          :class="{ highlight: selected == 3 }"
        >
          Updates
        </li>
        <li
          class="cat_item"
          @click="selected = 4"
          :class="{ highlight: selected == 4 }"
        >
          Events
        </li>
      </ul>
      <ul v-if="selected === 1" class="news_item_header">
        <news_list />
      </ul>
      <ul v-else-if="selected === 2" class="news_item_header"></ul>
      <ul v-else-if="selected == 3" class="news_item_header"></ul>
      <ul v-else-if="selected == 4" class="news_item_header"></ul>
    </div>
  </div>
</template>
<script>
import news_img_1 from "../../assets/news/news_1.png";
import news_img_2 from "../../assets/news/news_2.png";
import news_img_3 from "../../assets/news/news_3.png";

export default {
  layout: "App",
  components: {
    news_recommend: () => import("../../components/news_recommend"),
    news_list: () => import("../../components/news_list")
  },
  data() {
    return {
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
  }
};
</script>
<style scoped lang="scss">
.news_item_header {
  margin-top: 38px;
  list-style-type: none;
  height: auto;
  transition: all 0.5s 0s ease;
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
