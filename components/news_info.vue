<template>
  <li class="news_item">
    <a href="" class="news_title ellipsis flex">
      <img :src="news_list[random].news_img" alt="" class="coverFit" />
      <div class="news_info">
        <h3>
          {{ news_list[random].text_title }}
        </h3>
        <p class="news_summary">
          {{ news_list[random].text_brief }}
        </p>
      </div>
    </a>
    <div class="news_meta">
      <div class="news_date">{{ news_list[random].text_date }}</div>
      <a href="" class="news_category">Info</a>
    </div>
  </li>
</template>

<script>
import news_img_1 from "../assets/news/news_latest_1.png";
import news_img_2 from "../assets/news/news_latest_2.png";
import news_img_3 from "../assets/news/news_latest_3.png";
import news_img_4 from "../assets/news/news_latest_4.png";
import news_img_5 from "../assets/news/news_latest_5.png";
import news_img_6 from "../assets/news/news_latest_6.png";
import news_img_7 from "../assets/news/news_latest_7.png";
import news_img_8 from "../assets/news/news_latest_8.png";
import news_img_9 from "../assets/news/news_latest_9.jpg";
import news_img_10 from "../assets/news/news_latest_10.png";

export default {
  data() {
    return {
      random: Math.floor(Math.random() * 10),
      news_list: [
        {
          text_title:
            'Collected Miscellany - "Childe: Foul Legacy Transformation" | Genshin Impact',
          text_brief:
            '"A Snezhnayan storm is starting to blow towards the other nations. Brace yourselves, Teyvat is about to get cold."',
          text_date: "Nov 10, 2020",
          news_img: news_img_1
        },
        {
          text_title: '"A New Star Approaches" Version 1.1 Details',
          text_brief: 'Welcome to Version 1.1 — "A New Star Approaches"!',
          text_date: "Nov 10, 2020",
          news_img: news_img_2
        },
        {
          text_title:
            'Character Demo - "Childe: A Letter to Snezhnaya" | Genshin Impact',
          text_brief: `"I've been away for so long, I've almost forgotten the cold of our home..."`,
          text_date: "Nov 10, 2020",
          news_img: news_img_3
        },
        {
          text_title: "Fading Star - Event Details",
          text_brief:
            "Unlock Gnostic Hymn or Gnostic Chorus to further earn Intertwined Fate and a designated 4-star weapon!",
          text_date: "Nov 10, 2020",
          news_img: news_img_4
        },
        {
          text_title:
            'Archon Quest Chapter I: Act III "A New Star Approaches" Coming Soon',
          text_brief: `The mysterious emissary Ganyu appears before you at Third-Round Knockout. Claiming to have come at Ningguang's behest, she invites you to the skyfaring palace known as the Jade Chamber.`,
          text_date: "Nov 10, 2020",
          news_img: news_img_5
        },
        {
          text_title:
            'Collected Miscellany - "Childe: Foul Legacy Transformation" | Genshin Impact',
          text_brief:
            '"A Snezhnayan storm is starting to blow towards the other nations. Brace yourselves, Teyvat is about to get cold."',
          text_date: "Nov 10, 2020",
          news_img: news_img_6
        },
        {
          text_title:
            'Baptism of Song Unlocked - Complete a Quest to Get "Shining Idol" Barbara (Hydro)!',
          text_brief:
            'After the Version 1.1 update,Travelers at Adventure Rank 18 or above that have completed the quest A Long Shot will win"Shining Idol" Barbara (Hydro)!',
          text_date: "Nov 10, 2020",
          news_img: news_img_7
        },
        {
          text_title: "Seize the Day - Daily Login Event",
          text_brief: `The Seize the Day login event is available for a limited time!`,
          text_date: "Nov 10, 2020",
          news_img: news_img_8
        },
        {
          text_title: '"A New Star Approaches" - Version 1.1 Update Notice',
          text_brief:
            "To bring you the best-possible Genshin Impact experience, the developers will soon perform version update maintenance, during which the servers will be down.",
          text_date: "Nov 10, 2020",
          news_img: news_img_9
        },
        {
          text_title: "Genshin Impact EP - Tales Told by the Wind",
          text_brief:
            "The wind carries hope, and the winds of time create faith from that hope.",
          text_date: "Nov 10, 2020",
          news_img: news_img_10
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.news_item {
  position: relative;
  min-height: 170px;
  background-color: #fafafa;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  .news_title {
    position: relative;
    z-index: 1;
    // display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 24px;
    color: #393b40;
    text-decoration: none;
    overflow: hidden;
    img {
      width: 265px;
      height: 140px;
      margin-right: 20px;
    }
    .news_info {
      width: calc(100% - 285px);
      h3 {
        font-size: 24px;
        font-weight: 400;
      }
      .news_summary {
        position: relative;
        margin-top: 11px;
        font-size: 16px;
        line-height: 22px;
        color: #7d7d7d;
        overflow: hidden;
        word-wrap: break-word;
        white-space: normal;
        margin-bottom: 20px;
      }
    }
  }
  .news_meta {
    position: absolute;
    z-index: 1;
    bottom: 16px;
    right: 0;
    display: flex;
    justify-content: flex-end;
    width: 300px;
    padding: 0 20px;
    box-sizing: border-box;
    .news_date {
      color: #999;
      width: 120px;
      text-align: right;
    }
    .news_category {
      width: auto;
      text-decoration: none;
      cursor: pointer;
      margin-left: 56px;
      color: #ffc000;
    }
  }
}
.news_item::before {
  display: block;
  content: "";
  position: absolute;
  z-index: 1;
  top: -3px;
  bottom: -3px;
  left: -3px;
  right: -3px;
  border: 3px solid rgba(57, 59, 64, 0.15);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.2s linear;
}
.news_item:hover::before {
  opacity: 1;
}
.news_item:hover {
  background: #fff;
}
.coverFit {
  -o-object-fit: cover;
  object-fit: cover;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
