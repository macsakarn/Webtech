<template>
  <li class="news_card">
    <a href="#" class="news_recom">
      <div class="news_img">
        <img :src="item.news_img" class="scal" />
      </div>
      <h3 class="news_title">
        {{ item.text_title }}
      </h3>
      <p class="news_brief">
        {{ item.text_brief }}
      </p>
      <div class="news_footer">
        <span class="footer_date inline-block">{{ item.text_date }}</span>
        <span class="footer_info">info</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.news_card {
  position: relative;
  width: 420px;
  height: 450px;
  background-color: rgba(18, 18, 18, 0.8);
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  opacity: 0.9;

  &:hover img {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
.news_recom {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: #393b40;
  text-decoration: none;
  overflow: hidden;

  .news_img {
    width: 380px;
    height: 190px;
    margin: 20px auto;
    overflow: hidden;
    .scal {
      transition: all 0.5s 0s ease;
    }
  }

  .news_title {
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 34px;
    color: #fefefe;
    padding: 0 17px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 70px;
    margin: 10px 0;
  }

  .news_brief {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    padding: 0 17px;
    max-height: 88px;
    overflow: hidden;
    word-wrap: break-word;
    white-space: normal;
  }
  .news_footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .footer_date {
      font-size: 16px;
      line-height: 22px;
      color: #808080;
    }
    .footer_info {
      color: #ffc000;
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
