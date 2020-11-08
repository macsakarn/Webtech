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
    news_recommend: () => import("../../components/news_recommend")
  },
  data() {
    return {
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
.news_star {
  display: flex;
  justify-content: space-between;
  padding-top: 146px;
  width: 100%;
  height: 700px;
  list-style-type: none;
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
