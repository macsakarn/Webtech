<template>
  <div class="character bg-black">
    <div class="one character__bg character__bg1"></div>
    <div class="two character__bg character__bg2"></div>
    <character_side />

    <div class="character__main">
      <div
        class="swiper-container character__swiper--con swiper-container-fade swiper-container-initialized swiper-container-horizontal"
        style="opacity: 1"
      >
        <ul class="swiper-wrapper">
          <!-- ต้องแต่ li ให้เขียนเองเพราะมันใช้ gsap ช่วยในการเขียน  -->
          <li
            class="swiper-slide swiper-slide-active"
            style="
              width: 2114px;
              opacity: 1;
              transform: translate3d(0px, 0px, 0px);
            "
          >
            <img
              src="../../assets/City/mondstad_t/1.png"
              class="character__person animated"
            />

            <img
              src="../../assets/City/mondstad_t/logo_1.png"
              class="character__icon"
            />
            <div
              data-swiper-parallax-opacity=".1"
              data-swiper-parallax-duration=".5"
              class="character__content"
            >
              <img
                src="../../assets/City/mondstad_t/name_1.png"
                draggable="false"
                class="character__name"
              />
              <!-- บรรทัดเสียงพากย์ตัวละคร  -->
              <div class="character__cv">
                <div class="character__cv__name">
                  <div>
                    <p class="character__cv__text">CV: SAITO Chiwa</p>
                  </div>
                </div>
                <div class="character__voice"></div>
                <div
                  class="character__voice character__voice--active"
                  style="display: none"
                ></div>
                <div class="character__switch--wrap">
                  <div class="character__switch">
                    <p
                      class="character__sbtn character__sbtn0 character__sbtn--active"
                    >
                      JP
                    </p>
                    <p class="character__sbtn character__sbtn1">EN</p>
                  </div>
                </div>
              </div>
              <!-- ข้อมูลตัวละคร -->
              <div class="character__intro mCustomScrollbar _mCS_1">
                <div
                  id="mCSB_1"
                  class="mCustomScrollBox mCS-light-thick mCSB_vertical mCSB_inside"
                  style="max-height: 130px"
                  tabindex="0"
                >
                  <div
                    id="mCSB_1_container"
                    class="mCSB_container"
                    style="position: relative; top: 0; left: 0"
                    dir="ltr"
                  >
                    <div class="character__intro-content">
                      <p>
                        As the Acting Grand Master of the Knights, Jean has
                        always been devoted to her duties and maintaining peace
                        in Mondstadt.
                      </p>
                      <p>
                        She had taken precautions long before the onset of
                        Stormterror's assault, and she will guard Mondstadt with
                        her life as always.
                      </p>
                    </div>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical "
                    class="mCSB_scrollTools mCSB_1_scrollbar mCS-light-thick mCSB_scrollTools_vertical"
                    style="display: block"
                  >
                    <div class="mCSB_draggerContainer">
                      <!-- บรรทัดล่าง stylye อยู่ด้านใน บรรทัด  -->
                      <div
                        id="mCSB_1_dragger_vertical"
                        class="mCSB_dragger"
                        style="
                          position: absolute;
                          min-height: 30px;
                          display: block;
                          height: 110px;
                          max-height: 120px;
                          top: 20px;
                        "
                      >
                        <div
                          class="mCSB_dragger_bar"
                          style="line-height: 30px"
                        ></div>
                        <div class="mCSB_draggerRail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "App",
  components: {
    character_side: () => import("../../components/character_side"),
  },
};
</script>

<style scoped>
/* หน้าหลัก */
.character {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  font-size: 12px;
}
@media screen and (max-height: 800px) {
  .character {
    height: 800px;
  }
}
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
  opacity: 1;
}
.character__bg2 {
  -webkit-animation: bg-change 15s infinite linear, breath 80s infinite linear;
  animation: bg-change 15s infinite linear, breath 80s infinite linear;
  opacity: 0;
}
.character__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-size: cover;
  -webkit-transform-origin: center;
  transform-origin: center;
}

.one {
  background-image: url("../../assets/City/mondstad_t/backgroud_1.jpg");
}
.two {
  background-image: url("../../assets/City/mondstad_t/backgroud_2.jpg");
}
/* ตัวเมือง mondstadt */

@media screen and (max-height: 800px) {
  .character__main {
    background-size: auto 800px;
  }
}
.character__main {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/City/mondstad_t/bg_1.png") no-repeat;
  background-position: center bottom;
  background-size: auto 100vh;
}
.character__swiper--con {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.character__swiper--con .swiper-slide-active {
  opacity: 1 !important;
}

.character__swiper--con .swiper-slide {
  position: relative;
  width: 100%;
  height: 100%;
  /* opacity: 0 !important; */
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}

.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-property: transform, -webkit-transform;
}
.character .swiper-slide-active .character__person,
.character .swiper-slide-active .character__content {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

@media screen and (max-width: 1280px) {
  .character__person {
    left: calc(50% - 53vh);
  }
}
@media screen and (max-height: 800px) {
  .character__person {
    left: calc(50% - 504px);
    height: 800px;
  }
}
.character__person {
  position: absolute;
  top: 0;
  left: calc(50% - 63vh);
  width: auto;
  height: 100vh;
  opacity: 0;
  -webkit-transform: translateX(500px);
  transform: translateX(500px);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}

.character__swiper--con {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.character {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 12px;
}
@media screen and (max-height: 800px) {
  .character__icon {
    top: 68px;
    left: calc(50% - 496px) !important;
  }
}

.character__icon {
  position: absolute;
  top: 10vh;
  left: calc(50% - 60vh);
  width: auto;
  height: 378px;
  opacity: 0.1;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.character__content {
  position: absolute;
  z-index: 4;
  top: 18vh;
  left: calc(50% - 53vh);
  width: 550px;
  -webkit-transform: translateX(-300px);
  transform: translateX(-300px);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  text-align: justify;
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}

.character__swiper--con {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.character__content::before {
  display: block;
  content: "";
  width: 180px;
  height: 4px;
  background: #e3bc8c;
}

@media screen and (max-height: 800px) {
  .character__name {
    width: 400px;
  }
}

.character__name {
  width: 50vh;
  height: auto;
  margin-top: 20px;
}

.character__cv {
  position: relative;
  display: flex;
  width: 370px;
  height: 54px;
  font-size: 24px;
  color: #24333c;
  line-height: 54px;
  padding-left: 60px;
  box-sizing: border-box;
  background: #cca574 url("../../assets/City/mondstad_t/pictalk_1.jpeg")
    no-repeat;
  background-position: left top;
  background-size: 54px;
  margin-top: -10px;
  box-shadow: 2px 3px 6px 0 rgba(12, 12, 12, 0.2);
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.character__cv__name {
  position: relative;
  overflow: hidden;
}
.character__cv__name > div {
  display: flex;
  white-space: nowrap;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.character__voice {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 64px;
  height: 64px;
  background-image: url("../../assets/City/mondstad_t/pictalk_2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 64px;
  cursor: pointer;
}
.character__voice--active {
  cursor: auto;
  background-image: url("../../assets/City/mondstad_t/pictalk_3.gif");
}
.character__switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 4px;
  box-sizing: border-box;
  background: rgba(18, 18, 18, 0.6);
  border-radius: 16px;
  cursor: pointer;
}
</style>
