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
    <div class="pc-ch__swiper game-ad-swiper">
      <div class="pc-ch__container">
        <div class="pc-ch__slide">
          <img src="../assets/new_home/image_s1.png" class="pc-ch__img" />
        </div>
        <div class="pc-ch__slide">
          <img src="../assets/new_home/image_s2.png" class="pc-ch__img" />
        </div>
        <div class="pc-ch__slide">
          <img src="../assets/new_home/image_s3.png" class="pc-ch__img" />
        </div>
        <div class="pc-ch__slide">
          <img src="../assets/new_home/image_s4.png" class="pc-ch__img" />
        </div>
        <div class="pc-ch__slide">
          <img src="../assets/new_home/image_s5.png" class="pc-ch__img" />
        </div>
        <div class="pc-ch__slide">
          <img src="../assets/new_home/image_s6.png" class="pc-ch__img" />
        </div>
      </div>
      <div class="pc-ch__bar">
        <div class="pc-ch__prev">
          <img src="../assets/new_home/image_back.png" />
        </div>
        <div class="pc-ch__pagination">
          <div class="pc-ch__pagination-bullet"></div>
          <div class="pc-ch__pagination-bullet"></div>
          <div class="pc-ch__pagination-bullet"></div>
          <div class="pc-ch__pagination-bullet"></div>
          <div class="pc-ch__pagination-bullet"></div>
          <div class="pc-ch__pagination-bullet"></div>
        </div>
        <div class="pc-ch__next">
          <img src="../assets/new_home/image_next.png" />
        </div>
      </div>
    </div>
    <div class="fab-follow-us">
      <h2 class="follow-us fab-dl-sec-title">
        Follow us
      </h2>
      <ul class="sns-links">
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="fb"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="tw"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="yt"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="ins"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="discord"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="reddit"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Genshinimpact/"
            class="forum"
            target="_blank"
          ></a>
        </li>
      </ul>
    </div>
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
  .game-ad-swiper {
    display: block;
  }
  .fab-follow-us {
    width: 100%;
    height: 1100px;
    padding-top: 360px;
    margin-top: -200px;
    background: url("../assets/new_home/bg_3.png") top center no-repeat;
    background-image: url("../assets/new_home/bg_3.png");
    .sns-links {
      display: flex;
      justify-content: center;
      li {
        opacity: 0.6;
        transition: all 0.3s;
        &:hover {
          opacity: 1;
        }
      }
      li {
        margin-right: 54px;
      }
      a {
        display: block;
        height: 123px;
        background: center/contain no-repeat;
        background-image: none;
      }
      a.fb {
        width: 94px;
        background-image: url("../assets/new_home/follow_facebook.png");
      }
      a.tw {
        width: 89px;
        background-image: url("../assets/new_home/follow_twitter.png");
      }
      a.yt {
        width: 89px;
        background-image: url("../assets/new_home/follow_youtube.png");
      }
      a.ins {
        width: 99px;
        height: 128px;
        background-image: url("../assets/new_home/follow_ig.png");
      }
      a.discord {
        width: 89px;
        background-image: url("../assets/new_home/follow_discord.png");
      }
      a.reddit {
        width: 89px;
        background-image: url("../assets/new_home/follow_reddit.png");
      }
      a.forum {
        width: 89px;
        height: 124px;
        background-image: url("../assets/new_home/follow_forum.png");
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
.pc-ch__container {
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 1192px;
  height: 465px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 11px;
    width: 100%;
    height: 100%;
    background: url("../assets/new_home/image_f.png") center/contain no-repeat;
    z-index: 10;
  }
}
.pc-ch__slide {
  width: 845px;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 185px;
  transition: all 0.3s;
}
.pc-ch__img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 814px;
  height: 426px;
}
.pc-ch__bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
}
.pc-ch__prev,
.pc-ch__next {
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    &:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
}
.pc-ch__pagination {
  margin: 0 25px;
}
.pc-ch__pagination-bullet {
  display: inline-block;
  width: 16px;
  height: 16px;
  outline: none;
  opacity: 1;
  cursor: pointer;
  background: url("../assets/new_home/image_dot1.png") center/cover no-repeat;
  &:hover {
    background: url("../assets/new_home/image_dot2.png") center/cover no-repeat;
  }
}
</style>
