<template>
  <div class="home">
    <div class="poster">
      <div class="video-bg" style="width: 1536px; height: 760px;">
        <video
          loop
          muted
          autoplay
          poster="https://genshin.mihoyo.com/_nuxt/img/47f71d4.jpg"
          style="opacity: 1; width: 1536px; height: 864px;"
        >
          <source src="../assets/video/3e78e80.mp4" type="audio/mp4" />
        </video>
      </div>
      <div class="sign flex">
        <div class="btn-play">
          <button class="play-vdo"></button>
        </div>
        <p
          style="font-size: 30px;
color: #fff;
text-align: center;
text-shadow: 0 0 10px rgba(114, 71, 21, 0.68), 0 0 10px rgba(114, 71, 21, 0.68);
margin: 32px auto 27px;"
        >
          Released on Multiple Platforms - Download Now!
        </p>
        <ul class="downlond-game flex">
          <li>
            <a href="" target="_blank"><img src="../assets/home/ps4.png"/></a>
          </li>
          <li>
            <a href="" target="_blank"><img src="../assets/home/ios.png"/></a>
          </li>
          <li>
            <a href="" target="_blank"
              ><img src="../assets/home/android.png"
            /></a>
          </li>
          <li>
            <a href="" target="_blank"
              ><img src="../assets/home/windows.png"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <section class="new ">
      <h3>NEW</h3>
      <div class="content flex mx-auto">
        <newimg class="flex " />
        <div class="new_content">
          <ul class="new_topic block">
            <li class="new_latest">Latest</li>
          </ul>
          <ul class="new_item block">
            <li>
              <a href="">
                <p class="new_title">Marvelous Merchandise Event Details</p>
                <p class="new_date">Oct 23, 2020</p>
              </a>
            </li>
            <li>
              <a href="">
                <p class="new_title">
                  How to Unlock the Astrolabos Chapter Quest
                </p>
                <p class="new_date">Oct 23, 2020</p>
              </a>
            </li>
            <li>
              <a href="">
                <p
                  class="new_title"
                  style="overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;"
                >
                  Genshin Impact Collected Miscellany - "Qiqi:
                  Fortune-Preserving Talisman"
                </p>
                <p class="new_date">Oct 23, 2020</p>
              </a>
            </li>
            <li>
              <a href="">
                <p class="new_title">Developers Discussion</p>
                <p class="new_date">Oct 22, 2020</p>
              </a>
            </li>
            <li>
              <a href="">
                <p class="new_title">
                  Genshin Impact Photos at the Famous Huanglong National Park
                </p>
                <p class="new_date">Oct 22, 2020</p>
              </a>
            </li>
          </ul>

          <router-link to="/news" class="go_new">More</router-link>
        </div>
      </div>
    </section>

    <section class="city">
      <ul>
        <city_1 v-for="city in city" :key="city.id" :item="city" />
      </ul>
    </section>
  </div>
</template>

<script>
import backgroundUrl_1_1 from "~/assets/home/mondstadt.jpg";
import backgroundUrl_1_2 from "~/assets/home/c_mondstadt.png";
import backgroundUrl_2_1 from "~/assets/home/liyue.jpg";
import backgroundUrl_2_2 from "~/assets/home/c_liyue.png";
export default {
  layout: "App",
  components: {
    newimg: () => import("../components/newimg"),
    city_1: () => import("../components/city_1")
  },
  data() {
    return {
      city: [
        {
          id: 1,
          text: "Mondstadt",
          image_city: backgroundUrl_1_1,
          image_char: backgroundUrl_1_2
        },
        {
          id: 2,
          text: "Liyue Harbor",
          image_city: backgroundUrl_2_1,
          image_char: backgroundUrl_2_2
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.go_new {
  position: absolute;
  right: 33px;
  bottom: 30px;
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  padding-left: 38px;
}
.new_item {
  width: 592px;
  margin: 0 auto;
  li {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.08);
    box-sizing: content-box;
    font-size: 16px;
    color: #fff;
    &:hover {
      cursor: pointer;
      background: rgba(255, 212, 159, 0.06);
    }
  }
  .new_date {
    position: absolute;
    top: 0;
    right: 11px;
    color: rgba(255, 255, 255, 0.35);
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
  .new_title {
    width: 480px;
    height: 20px;
    line-height: 20px;
    padding-left: 11px;
  }
}

.new_topic {
  display: flex;
  align-items: flex-start;
  width: 592px;
  height: 35.8px;
  margin: 35px auto 0;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
}

.new_latest {
  color: #ffd49f;
  position: relative;
  padding: 0 19px 12px;
  font-size: 18px;
  text-align: center;
}

.new_content {
  position: relative;
  width: 640px;
  margin: 0;
  background: rgba(38, 18, 12, 0.62);
}

.poster {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .video-bg {
    display: flex;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    background: #fcf9fe;
  }

  .sign {
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100vh;
    left: 50%;
    width: 100%;
    min-height: 280px;
    -webkit-transform: translate(-50%, -340px);
    transform: translate(-50%, -340px);
  }

  li {
    width: 207px;
    height: 61px;
    background: url(data:image/png;base64,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)
      no-repeat center/cover;
  }
}

.btn-play {
  width: 356px;
  height: 76px;
  background: url("../assets/home/btn_play.png");

  .play-vdo {
    position: relative;
    display: block;
    margin: 14px auto 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: #fff;
    font-size: 0;
    cursor: pointer;
    outline: none;
    transition: background 0.2s linear;
  }
}

.new {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background: url("../assets/home/bg.jpg") no-repeat center/cover;
  color: #fff;

  h3 {
    position: relative;
    margin: 183px auto 60px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
  }
}
</style>
