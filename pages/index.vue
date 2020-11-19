<template>
  <div class="content">
    <div class="activity-box" v-if="scroll > 300">
      <a href="">
        <img src="../assets/new_home/modal.png" alt="" />
      </a>
    </div>
    <home_com1 />
    <btn_play @click.native="modalOpen = true" />
    <model_play v-if="modalOpen" @close="modalOpen = false" />
    <home_com2 />
    <div class="footer">
      <div class="footer_body">
        <div class="footer_wrap">
          <div class="flex items-center">
            <div class="flex-1">
              <div class="image_1 inline">
                <img
                  src="https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/mihoyo_1586770772_9709.png"
                  class="inline"
                />
              </div>
              <div class="image_2 inline">
                <img
                  src="https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/GIEN_1587984203_6764.png"
                  class="inline"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="links mb-5">
                <a
                  class="link"
                  href="https://genshin.mihoyo.com/en/company/privacy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                <a
                  class="link"
                  href="https://genshin.mihoyo.com/en/company/terms"
                  target="_blank"
                >
                  Terms of Service
                </a>
                <a
                  class="link"
                  href="https://genshin.mihoyo.com/en/company/about"
                  target="_blank"
                >
                  About Us
                </a>
                <a
                  class="link"
                  href="mailto:genshin_cs@mihoyo.com"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>

              <div class="copyright">
                Copyright© 2012-2020 miHoYo ALL RIGHTS RESERVED
              </div>
              <div class="extra-info">
                "PlayStation Family Mark" and "PS4 logo" are registered
                trademarks or trademarks of Sony Interactive Entertainment Inc.
              </div>
              <div class="icon_footer flex pt-5">
                <img
                  src="../assets/footer/age.png"
                  style="margin-right: 10px; margin-bottom: 10px"
                />
                <img src="../assets/footer/teen.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
export default {
  components: {
    home_com1: () => import("../components/home_com1"),
    home_com2: () => import("../components/home_com2"),
    btn_play: () => import("../components/btn_play"),
    model_play: () => import("../components/model_play")
  },
  data() {
    return {
      modalOpen: false,
      scroll: 0
    };
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      this.scroll = window.scrollY;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
}
.pv-btn-wrapper {
  position: absolute;
  top: 856px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 388px;
  height: 110px;
  background: url("../assets/new_home/btn_play.png") center/contain no-repeat;
  z-index: 1;
  .pv-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    margin: auto;
    background: #fff;
    font-size: 0;
    outline: none;
    cursor: pointer;
    transition: background 0.2s linear;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 28px;
      height: 28px;
      z-index: 1;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background: url("../assets/new_home/btn_play_click.png") no-repeat;
      background-position-x: 0%;
      background-position-y: 0%;
      background-position: center top;
    }
  }
  &:hover .pv-btn {
    background: transparent;
  }
  &:hover .pv-btn::before {
    background: url("../assets/new_home/btn_play_click.png") no-repeat;
    background-position-x: 0%;
    background-position-y: 0%;
    background-position: center bottom;
  }
}
.activity-box {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 269px;
  height: 341px;
  z-index: 1000;
  a,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.footer {
  position: relative;
  z-index: 998;
  width: 100%;
  min-width: 1280px;
  background-color: #111;
  margin: 0 auto;

  .footer_body {
    background-color: #111;
    padding: 30px 0 50px;

    .footer_wrap {
      width: 1000px;
      margin: 0 auto;
      padding: 0 12px;
      color: #999;
      box-sizing: border-box;

      .links a.link {
        padding: 0 10px;
        border-left: 1px solid #fff;
        line-height: 1;
      }

      .copyright {
        color: #fff;
      }

      .extra-info {
        color: #7d7d7d;
        font-size: 14px;
        line-height: 20px;
        padding: 10px 0;
      }
    }
  }
}
</style>
