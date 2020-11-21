<template>
  <div class="fab-kv">
    <img class="logo" src="../assets/new_home/logo.png" />
    <a href="/projects/pg46txb/home" class="official-site" target="_blank">
      <div class="img_1 transition-img official-site-img"></div>
    </a>
    <a href="/projects/pg46txb/download" class="download-link" target="_blank">
      <div class="img_2 transition-img download-link-img"></div>
    </a>
    <div class="img_3 transition-img kv-title-wrapper"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fab-kv {
  position: relative;
  width: 100%;
  height: 1106px;
  background: center no-repeat;
  background-image: url("../assets/new_home/bg_1.png");
  .logo {
    position: absolute;
    top: 33px;
    left: 60px;
    width: 168px;
    z-index: 100;
  }
  .transition-img {
    background-size: contain;
  }
  .official-site {
    position: absolute;
    top: 67px;
    width: 160px;
    height: 56px;
    display: block;
    right: 246px;
    .img_1 {
      background-image: url("../assets/new_home/goto_web.png");
    }

    .official-site-img {
      display: block;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      opacity: 0.6;
      transition: all 0.3s;
    }
  }
  .download-link {
    position: absolute;
    top: 67px;
    width: 160px;
    height: 56px;
    display: block;
    right: 59px;
    .download-link-img {
      display: block;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      opacity: 0.6;
      transition: all 0.3s;
    }
    .img_2 {
      background-image: url("../assets/new_home/goto_lord.png");
    }
  }
  .transition-img {
    width: 100%;
    height: 100%;
    background: center/cover no-repeat;
  }
  .kv-title-wrapper {
    position: absolute;
    top: 572px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 751px;
    height: 268px;
    background: center/contain no-repeat;
    background-image: none;
  }
  .img_3 {
    background-image: url("../assets/new_home/logo_center.png");
  }
}
</style>
