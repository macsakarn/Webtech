<template>
  <div class="character">
    <div class="character__bg character__bg1">
      <img src="..\..\assets\City\mond\2020021114281584004.jpg" />
    </div>
    <div class="character__bg character__bg2">
      <img src="..\..\assets\City\mond\2020021114281985438.jpg" />
    </div>

    <ul class="character__sidebar">
      <li class="character__city character__city--active">
        <a class="nuxt-link-active"> Mondstadt </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: "App",
};
</script>

<style scoped>
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
  animation-duration: 80s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: breath;
  opacity: 1;
}
.character__bg2 {
  -webkit-animation: bg-change 15s infinite linear, breath 80s infinite linear;
  animation: bg-change 15s infinite linear, breath 80s infinite linear;
  animation-duration: 15s, 80s;
  animation-timing-function: linear, linear;
  animation-delay: 0s, 0s;
  animation-iteration-count: infinite, infinite;
  animation-direction: normal, normal;
  animation-fill-mode: none, none;
  animation-play-state: running, running;
  animation-name: bg-change, breath;
  opacity: 0;
}
.character__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  -webkit-transform-origin: center;
  transform-origin: center;
}
/* สไลด์ชื่อเมืองด้านข้าง */
.character__sidebar {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 370px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 187px;
}
.character__sidebar::before {
  position: absolute;
  top: 0;
  left: 37px;
  display: block;
  content: "";
  width: 2px;
  height: 1280px;
  background: rgba(255, 255, 255, 0.14);
}

.character__city--active {
  text-shadow: none;
  padding-left: 70px;
  background: left center no-repeat;
  background-image: url("../../assets/City/liyue/line.png");
  background-size: contain;
}
.character__city {
  width: 100%;
  height: 54px;
  line-height: 54px;
  font-size: 18px;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding-left: 56px;
  cursor: pointer;
  background: 18px center no-repeat;
  background-image: url("../../assets/City/liyue/bottom_city.png");
  background-size: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
