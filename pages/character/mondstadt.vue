<template>
  <div class="character">
    <div class="one character__bg character__bg1"></div>
    <div class="two character__bg character__bg2"></div>
    <character_side />

    <div class="character__main"></div>
  </div>
</template>
<script>
export default {
  layout: "App",
  components: {
    character_side: () => import("../../components/character_side"),
  },
};
</script>

<style scoped>
/* หน้าหลัก */
.character {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  font-size: 12px;
}
@media screen and (max-height: 800px) {
  .character {
    height: 800px;
  }
}
/* background */
@keyframes breath {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes bg-change {
  48% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.character__bg1 {
  -webkit-animation: breath 80s infinite linear;
  animation: breath 80s infinite linear;
  opacity: 1;
}
.character__bg2 {
  -webkit-animation: bg-change 15s infinite linear, breath 80s infinite linear;
  animation: bg-change 15s infinite linear, breath 80s infinite linear;
  opacity: 0;
}
.character__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-size: cover;
  -webkit-transform-origin: center;
  transform-origin: center;
}

.one {
  background-image: url("../../assets/City/mond/mond_bg1.jpg");
}
.two {
  background-image: url("../../assets/City/mond/mond_bg2.jpg");
}
/* ตัวเมือง mondstadt */

@media screen and (max-height: 800px) {
  .character__main {
    background-size: auto 800px;
  }
}
.character__main {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/City/mond/slide-01.png") no-repeat;
  background-position: center bottom;
  background-size: auto 100vh;
}
</style>
