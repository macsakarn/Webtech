<template>
  <div class=""></div>
  <!-- <div class="character">
    <div class="character__bg character__bg1">
      <img src="..\..\assets\City\mond\2020021114281584004.jpg" />
    </div>
    <div class="character__bg character__bg2">
      <img src="..\..\assets\City\mond\2020021114281985438.jpg" />
    </div>

    <character_side />
  </div> -->
</template>
<script>
export default {
  // layout: "App",
  components: {
    character_side: () => import("../../components/character_side"),
  },
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
</style>
