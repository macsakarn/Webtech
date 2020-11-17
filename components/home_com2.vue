<template>
  <div class="fab-body img_1">
    <h2 class="img_2 ver-info-title fab-dl-sec-title">
      Version Information
    </h2>
    <ul class="ver-info-imgs">
      <li>
        <img
          src="../assets/new_home/info_back.png"
          class="ver-info-img-hover-bg"
        />
        <img src="../assets/new_home/info_1.png" class="ver-info-img" />
        <a href="#"></a>
      </li>
      <li>
        <img
          src="../assets/new_home/info_back.png"
          class="ver-info-img-hover-bg"
        />
        <img src="../assets/new_home/info_2.png" class="ver-info-img" />
        <a href="#"></a>
      </li>
      <li>
        <img
          src="../assets/new_home/info_back.png"
          class="ver-info-img-hover-bg"
        />
        <img src="../assets/new_home/info_3.png" class="ver-info-img" />
        <a href="#"></a>
      </li>
      <li>
        <img
          src="../assets/new_home/info_back.png"
          class="ver-info-img-hover-bg"
        />
        <img src="../assets/new_home/info_4.png" class="ver-info-img" />
        <a href="#"></a>
      </li>
      <li>
        <img
          src="../assets/new_home/info_back.png"
          class="ver-info-img-hover-bg"
        />
        <img src="../assets/new_home/info_5.png" class="ver-info-img" />
        <a href="#"></a>
      </li>
      <li>
        <img
          src="../assets/new_home/info_back.png"
          class="ver-info-img-hover-bg"
        />
        <img src="../assets/new_home/info_6.png" class="ver-info-img" />
        <a href="#"></a>
      </li>
    </ul>
    <h2 class="game-ad-banner fab-dl-sec-title">
      Game Features
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img_1 {
  background-image: url("../assets/new_home/bg_2.png");
}
.img_2 {
  background-image: url("../assets/new_home/bg_text.png");
}
.fab-body {
  position: relative;
  width: 100%;
  margin-top: -400px;
  padding-top: 400px;
  background: url("../assets/new_home/bg_2.png") top center no-repeat;
  background-image: url("../assets/new_home/bg_2.png");
  .ver-info-title {
  }
  .fab-dl-sec-title {
    height: 324px;
    line-height: 345px;
    background: url("../assets/new_home/bg_text.png") top center no-repeat;
  }

  .ver-info-imgs {
    margin: 0 auto;
    width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      position: relative;
      margin-right: 10px;
      margin-bottom: 60px;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      transition: transform 0.3s, -webkit-transform 0.3s;
      .ver-info-img-hover-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .ver-info-img {
        position: relative;
        display: block;
        width: 288px;
      }
      img {
        position: relative;
        display: block;
        width: 288px;
      }
      a {
        position: absolute;
        left: 50%;
        bottom: 50px;
        -webkit-transform: translateX(-54%);
        transform: translateX(-54%);
        width: 93px;
        height: 32px;
        background: url("../assets/new_home/go.png") center/cover no-repeat;
      }
      &:hover {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
        .ver-info-img-hover-bg {
          opacity: 1;
        }
      }
    }
  }
}
.fab-dl-sec-title {
  width: 100%;
  text-align: center;
  line-height: 57px;
  height: 57px;
  font-size: 60px;
  font-weight: bold;
  color: #7c77b8;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
