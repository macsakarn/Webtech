<template>
  <li class="news_item">
    <a href="" class="news_item_title flex">
      <img src="../assets/news/news_1.png" class="img_item_list" />
      <div class="news_item_info"></div>
    </a>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.news_item {
  position: relative;
  min-height: 170px;
  background-color: #fafafa;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  &::before {
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

  .news_item_title {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 24px;
    color: #393b40;
    text-decoration: none;
    overflow: hidden;
  }
  img {
    width: 265px;
    height: 140px;
    margin-right: 20px;
  }
}
</style>
