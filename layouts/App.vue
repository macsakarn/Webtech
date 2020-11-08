<template>
  <div class="app">
    <div class="nav_bar_home">
      <div class="music fixed">
        <button @click="music_cansee = !music_cansee" style="outline:none;">
          <img class="w-8" src="../assets/nav/music.png" v-if="music_cansee" />
          <img class="w-8" src="../assets/nav/music_c.png" v-else />
        </button>
      </div>
      <div class="nav-bar">
        <div class="logo inline ">
          <img class="inline move" src="../assets/nav/logo_3.png" alt="LOGO" />
        </div>

        <div class="nav inline">
          <!-- <div style="position: absolute; z-index: 1; transition: all 0.2s ease-in-out 0s; background-color: rgb(105, 224, 255); height: 5px; left: 55px; width: 42px; top: 0px;"></div> -->
          <NuxtLink to="/" class="mx-2">HOME</NuxtLink>
          <NuxtLink to="/news" class="mx-2">NEWS</NuxtLink>
          <NuxtLink to="/character" class="mx-2">CHARACTERS</NuxtLink>
          <div class="dropdown inline-block py-8">
            <a class="mx-2 my-5">EXPLORE</a>
            <ul class="drop bg-opacity-75">
              <NuxtLink to="#" class="block my-8 ml-4">ABOUT GAME</NuxtLink>
              <NuxtLink to="#" class="block my-8 ml-4">TEYVAT</NuxtLink>
              <NuxtLink to="#" class="block my-8 ml-4">ITINERARY</NuxtLink>
              <NuxtLink to="#" class="block my-8 ml-4">MAMGA</NuxtLink>
            </ul>
          </div>
          <a
            href="https://forums.mihoyo.com/genshin/"
            class="mx-2"
            target="_blank"
            >FORUMS</a
          >
          <NuxtLink to="/#" class="mx-2">TOP-UP</NuxtLink>
          <NuxtLink to="/#" class="mx-2">REDEEM CODE</NuxtLink>
        </div>

        <div class="nav__login inline ">
          <button class="btn_login">
            <span>Log In</span>
            <img class="inline" src="../assets/nav/login.png" alt="login" />
          </button>
        </div>
      </div>
    </div>

    <Nuxt />

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
              <div class="icon_footer flex pt-5 ">
                <img
                  src="../assets/footer/age.png"
                  style="margin-right: 10px;
margin-bottom: 10px;"
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
export default {
  data() {
    return {
      music_cansee: true
    };
  }
};
</script>

<style scoped lang="scss">
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

.music {
  top: 18px;
  left: 50px;
  z-index: 100000000;
}

.nav-bar {
  background-color: rgba(17, 17, 17, 0.75);
  position: fixed;
  width: 100%;
  height: 66px;
  font-size: 14px;
  z-index: 999;
}

.nav__login {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 30px;
  height: 100%;
  white-space: nowrap;
  span {
    color: #cccccc;
  }

  img {
    margin-left: 18px;
    width: 27px;
    height: 27px;
    opacity: 0.6;
  }

  &:hover span {
    text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    color: #fff;
  }

  &:hover img {
    opacity: 1;
  }
}

p:hover {
  text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
  color: #fff;
}

.dropdown {
  &:hover .drop {
    display: block;
  }
  .drop {
    background-color: #272626;
    margin-top: 23px;
    display: none;
    position: absolute;
    min-width: 200px;
  }
}

.app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

.nav {
  position: absolute;

  margin-left: -35px;
  top: -10px;
  a {
    color: #cccccc;

    &:hover {
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      color: #fff;
    }
    &.nuxt-link-exact-active {
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      color: #fff;
    }
  }

  p {
    color: #cccccc;
  }
}
</style>
