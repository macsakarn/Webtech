<template>
  <ul class="character__sidebar">
    <li class="character__city character__city--active">
      <NuxtLink to="/character/mondstadt" class="nuxt-link-active">
        Mondstadt
      </NuxtLink>
    </li>
    <li class="character__city">
      <NuxtLink to="/character/liyue"> Liyue Harbor </NuxtLink>
    </li>
    <li class="character__city character__city--disable">Coming Soon</li>
  </ul>
</template>

<style lang="scss" scoped>
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
  background-image: url("../assets/City/liyue/line.png");
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
  background-image: url("../assets/City/liyue/bottom_city.png");
  background-size: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.character__city--disable {
  pointer-events: none;
}
</style>