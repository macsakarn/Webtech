<template>
  <div class="download-content">
    <div
      class="kv-wrapper"
      :style="{ backgroundImage: 'url(' + image_1 + ')' }"
    >
      <img src="../../assets/download/teen.png" class="esrb-icon" />
      <div class="dl-wrapper">
        <img src="../../assets/download/QRcode.png" class="dl-qrcode" />
        <div class="dl-list">
          <div class="up">
            <a href="" class="dl-btn dl-btn-ps4">
              <img src="../../assets/download/download_ps4.png" alt="" />
            </a>
            <a href="" class="dl-btn dl-btn-windows">
              <img src="../../assets/download/download_windows.png" alt="" />
            </a>
          </div>
          <div class="bottom">
            <a href="" class="dl-btn dl-btn-ios">
              <img src="../../assets/download/download_apple.png" alt="" />
            </a>
            <a href="" class="dl-btn dl-btn-android">
              <img src="../../assets/download/download_google.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="download-body">
      <div class="download-page2">
        <h2 class="fab-dl-sec-title">FAQ</h2>
        <div class="qa-list">
          <div class="qa-list-bg-wrapper">
            <ul>
              <li>
                <a href="">
                  What if I am unable to download/update the game?
                </a>
              </li>
              <li>
                <a href="">
                  While downloading, I get the following message: "Please check
                  your network connection."
                </a>
              </li>
              <li>
                <a href="">
                  After opening the game, the game does not respond/the game
                  does not launch.
                </a>
              </li>
              <li>
                <a href="">
                  Clicking the launcher produces no response.
                </a>
              </li>
              <li>
                <a href="">
                  Why does the game crash for no reason?
                </a>
              </li>
              <li>
                <a href="">
                  What do I do if the game lags?
                </a>
              </li>
              <li>
                <a href="">
                  Does the PC version of Genshin Impact support MacOS systems?
                </a>
              </li>
              <li>
                <a href="">
                  Will Genshin Impact be free-to-play on the PlayStation 4? When
                  will the game be playable?
                </a>
              </li>
              <li>
                <a href="">
                  Which languages will be supported in the PS4 version of
                  Genshin Impact?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="download-page3">
        <h2 class="fab-dl-sec-title">System Requirements</h2>
        <div class="device-list">
          <ul class="tab-header-container">
            <li @click="active = 1" :class="{ active: active == 1 }">
              Windows
            </li>
            <li @click="active = 2" :class="{ active: active == 2 }">
              Android
            </li>
            <li @click="active = 3" :class="{ active: active == 3 }">
              iOS
            </li>
          </ul>
          <div class="device-requirement-content">
            <div class="" v-if="active === 1">
              <p style="">
                <strong>>>>Recommended configuration:</strong>
              </p>
              <p style="">
                Operating system: Windows 7 SP1 64-bit, Windows 8.1 64-bit, or
                Windows 10 64-bit
              </p>
              <p style="">Processor: Intel Core i7 equivalent or higher</p>
              <p style="">Memory: 16 GB RAM</p>
              <p style="">Graphics: NVIDIA GeForce GTX 1060 6 GB and higher</p>
              <p style="">DirectX version: 11</p>
              <p style="">Storage: Please reserve 30 GB of space</p>
              <p style="white-space: pre-wrap; min-height: 1.5em;"></p>
              <p style=""><strong>>>>Minimum configuration:</strong></p>
              <p style="">
                Operating system: Windows 7 SP1 64-bit, Windows 8.1 64-bit or
                Windows 10 64-bit
              </p>
              <p style="">Processor: Intel Core i5 or equivalent</p>
              <p style="">Memory: 8 GB RAM</p>
              <p style="">Graphics card: NVIDIA® GeForce® GT 1030 and higher</p>
              <p style="">DirectX version: 11</p>
              <p style="">Storage: Please reserve 30 GB of space</p>
            </div>
            <div class="" v-else-if="active === 2">
              <p style="">
                <strong>>>>Recommended configuration: </strong>
              </p>
              <p style="">CPU: Qualcomm Snapdragon 845, Kirin 810 and above</p>
              <p style="">RAM: 4 GB and above</p>
              <p style="">Recommended system: Android 8.1 and above</p>
              <p style="white-space: pre-wrap; min-height: 1.5em;"></p>
              <p style="">
                <strong>>>>Supported configuration: </strong>
              </p>
              <p style="">Compatibility requirements: Arm v8a 64-bit device</p>
              <p style="">Memory: 3 GB and above</p>
              <p style="">Supported system: Android 7.0 or above</p>
              <p style="">Storage: Please reserve 8 GB of space</p>
            </div>
            <div v-else-if="active === 3">
              <p style="">Requires iOS 9.0 or later</p>
              <p style="white-space: pre-wrap; min-height: 1.5em;"></p>
              <p style="">
                Compatible with iPhone 8 Plus, iPhone X, iPhone XS, iPhone XS
                Max, iPhone XR, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max,
                iPhone SE (2nd generation), iPhone 12, iPhone 12 mini, iPhone 12
                Pro, iPhone 12 Pro Max, iPad Air (3rd generation), iPad Air (4th
                generation), iPad mini (5th generation), iPad Pro (12.9-inch)
                (2nd generation), iPad Pro (10.5-inch) (2nd generation), iPad
                Pro (11-inch) (3rd generation), iPad Pro (12.9-inch) (3rd
                generation), iPad Pro (11-inch) (4th generation), iPad Pro
                (12.9-inch) (4th generation), and iPad (8th generation).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bg_1 from "../../assets/download/bg_1.png";

export default {
  layout: "App",
  data() {
    return {
      active: 1,
      image_1: bg_1
    };
  }
};
</script>

<style lang="scss" scoped>
.download-content {
  position: relative;
  .kv-wrapper {
    position: relative;
    width: 100%;
    height: 1024px;
    height: 100vh;
    background: center no-repeat;
    background-image: none;
    .dl-wrapper {
      position: absolute;
      bottom: 60px;
      left: 50%;
      width: 100%;
      height: 243px;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/download/back_1.png") top center/cover
        no-repeat;
      .dl-qrcode {
        width: 127px;
        margin-right: 20px;
      }
      .up,
      .bottom {
        display: flex;
      }
      .up {
        margin-bottom: 23px;
      }
      .dl-btn {
        display: block;
        height: 60px;
        margin-right: 15px;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .download-body {
    width: 100%;
    background: url("../../assets/download/bg_2.png") top center no-repeat;
    padding-top: 20px;
    padding-bottom: 223px;
    .download-page2 {
      .fab-dl-sec-title {
        height: 324px;
        line-height: 345px;
        background: url("../../assets/download/text_back.png") top center
          no-repeat;
      }
      .qa-list {
        position: relative;
        height: 412px;
        padding: 30px 0;
        background: url("../../assets/download/back_2.png") top center/cover
          no-repeat;
        .qa-list-bg-wrapper {
          position: relative;
          width: 1280px;
          height: 100%;
          margin: auto;
          padding: 0 40px;
        }
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          li {
            position: relative;
            width: 490px;
            a {
              display: block;
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 20px;
              line-height: 1.4;
              font-weight: 400;
              color: rgba(25, 58, 91, 0.75);
              transition: color 0.3s;
            }
            a::before {
              content: "";
              position: absolute;
              left: -18px;
              top: 4px;
              width: 0;
              transition: all 0.3s;
              border-left: 9px solid rgba(25, 58, 91, 0.75);
              border-top: 9px solid transparent;
              border-bottom: 9px solid transparent;
            }
          }
        }
      }
    }
    .download-page3 {
      .fab-dl-sec-title {
        height: 324px;
        line-height: 345px;
        background: url("../../assets/download/text_back.png") top center
          no-repeat;
      }
      .device-list {
        position: relative;
        width: 1280px;
        margin: 0 auto;
        .tab-header-container {
          display: flex;
          justify-content: center;
          li {
            position: relative;
            width: 200px;
            text-align: center;
            color: #8498c4;
            font-weight: bolder;
            font-size: 30px;
            transition: all 0.3s;
            cursor: pointer;
            &::after {
              content: "";
              position: absolute;
              bottom: -20px;
              left: 0;
              width: 100%;
              height: 2px;
              background: #8498c4;
              transition: all 0.3s;
            }
          }
          li.active {
            color: #193a5b;
            &::after {
              bottom: -21px;
              height: 4px;
              background: #193a5b;
            }
          }
        }
        .device-requirement-content {
          margin: 60px auto;
          font-size: 18px;
        }
      }
    }
  }
}
.esrb-icon {
  position: absolute;
  left: 20px;
  bottom: 60px;
  display: block;
  width: 150px;
  z-index: 1;
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
