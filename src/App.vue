<template>
  <div id="app">
    <div class="music fixed">
      <button>
        <img class="w-8" src="../public/img/nav/music.png" />
      </button>
    </div>
    <div class="nav-bar bg-gray-900 bg-opacity-50">
      <div class="logo inline ">
        <img
          class="inline move"
          src="../public/img/nav/logo_3.png"
          alt="LOGO"
        />
      </div>

      <div id="nav" class="inline">
        <!-- <div style="position: absolute; z-index: 1; transition: all 0.2s ease-in-out 0s; background-color: rgb(105, 224, 255); height: 5px; left: 55px; width: 42px; top: 0px;"></div> -->
        <router-link to="/" class="mx-4">HOME</router-link>
        <router-link to="/news" class="mx-4">NEWS</router-link>
        <router-link to="/character" class="mx-4">CHARACTERS</router-link>
        <div class="dropdown inline-block py-8">
          <a class="mx-4 my-5">EXPLORE</a>
          <ul class="drop bg-opacity-75">
            <router-link to="#" class="block my-8 ml-4">ABOUT GAME</router-link>
            <router-link to="#" class="block my-8 ml-4">TEYVAT</router-link>
            <router-link to="#" class="block my-8 ml-4">ITINERARY</router-link>
            <router-link to="#" class="block my-8 ml-4">MAMGA</router-link>
          </ul>
        </div>
        <a
          href="https://forums.mihoyo.com/genshin/"
          class="mx-4"
          target="_blank"
          >FORUMS</a
        >
        <router-link to="/#" class="mx-4">TOP-UP</router-link>
        <router-link to="/#" class="mx-4">REDEEM CODE</router-link>
        <div class="nav__login inline">
          <button class="btn_login">
            <span>Log In</span>
            <img class="inline" src="../public/img/nav/login.png" alt="login" />
          </button>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style scoped lang="scss">
.music {
  top: 18px;
  left: 50px;
  z-index: 100000000;
}

.nav-bar {
  position: fixed;
  width: 100%;
  height: 66px;
  font-size: 14px;
  z-index: 999;
}

.nav__login {
  position: relative;
  left: 400px;
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

#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

#nav {
  position: absolute;

  margin-left: -35px;
  top: -10px;
  a {
    color: #cccccc;

    &:hover {
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      color: #fff;
    }
    &.router-link-exact-active {
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      color: #fff;
    }
  }

  p {
    color: #cccccc;
  }
}
</style>
