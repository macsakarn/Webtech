<template>
  <li class="city_1">
    <div
      class="city_list"
      :style="{ backgroundImage: `url(${item.image_city})` }"
    ></div>
    <nuxt-link to="#">
      <p>{{ item.text }}</p>
    </nuxt-link>
    <div
      class="city_c"
      :style="{ backgroundImage: `url(${item.image_char})` }"
    ></div>
  </li>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped lang="scss">
.city_1 {
  position: relative;
  width: 100%;
  height: 260px;
  background: center no-repeat;
  background-size: 100% auto;
  cursor: pointer;
  overflow: hidden;

  .city_list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .city_c {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: calc(50% + 360px) 50%;
    background-size: 960px 260px;
    opacity: 0;
    transition: all 0.2s 0s ease-in;
    border: #fff solid 6px;
    box-sizing: border-box;
  }

  &:hover .city_list {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  &:hover .city_c {
    opacity: 1;
  }

  a {
    width: 100%;
    height: 260px;
  }

  p {
    display: inline-block;
    position: relative;
    z-index: 3;
    font-size: 36px;
    color: #fff;
    line-height: 260px;
    width: 100%;
    height: 260px;
    background: url("../assets/home/back_text.png") center no-repeat;
    background-size: auto;
    background-size: 132px;
    text-align: center;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
}
</style>
