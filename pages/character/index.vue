<template>
  <div class="character">
    <div class="character__bg character__bg1">
      <img src="..\..\assets\City\mond\2020021114281584004.jpg" />
    </div>
    <div class="character__bg character__bg2">
      <img src="..\..\assets\City\mond\2020021114281985438.jpg" />
    </div>
    <ul class="character__sidebar">
      <li class="character__city character__city--active">
        <a href="" class="nuxt-link-active"> Mondstadt </a>
      </li>
      <li class="character__city character__city--active">
        <a href="" class="nuxt-link-active"> Liyue Harbor </a>
      </li>
      <li class="character__city character__city--disable">Coming Soon</li>
    </ul>

    <div class="character__main">
      <div
        class="swiper-container character__swiper--con swiper-container-fade swiper-container-initialized swiper-container-horizontal"
      ></div>
      <ul class="swiper-wrapper">
        <li
          class="swiper-slide swiper-slide-active"
          style="
            width: 1280px;
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          "
        >
          <img
            src="..\..\assets\City\mond\character_1.png"
            draggable="false"
            class="character__person animated"
          />
          <img
            src="..\..\assets\City\mond\backgroud_1.png"
            draggable="false"
            class="character__icon"
          />
          <div
            data-swiper-parallax-opacity=".1"
            data-swiper-parallax-duration=".5"
            class="character__content"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px)"
          >
            <img
              src="..\..\assets\City\mond\namechar_1.png"
              draggable="false"
              class="character__name"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.character__bg1 {
  animation: breath 80s infinite linear;
  opacity: 1;
}
.character__bg2 {
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
  transform-origin: center;
}

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
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTgyOUEzQkFBMDQxMUU5QjQ2REMwOUFGODE3Qzc5MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTgyOUEzQ0FBMDQxMUU5QjQ2REMwOUFGODE3Qzc5MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRFODI5QTM5QUEwNDExRTlCNDZEQzA5QUY4MTdDNzkyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFODI5QTNBQUEwNDExRTlCNDZEQzA5QUY4MTdDNzkyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8pIp1gAAAHhJREFUeNrs18EKgCAQRVGNftsJ6sNHW0QuXNUzBroPZiUMB0ZFs7unyFlS8AAECBAgQIAAAQLsY62KtOP5YBXV5neKqu8MnBQ5C3fF3vZX7EF/uPbpHrTIIx4hZYdkFV4IezfWQ9U08y8GCBAgQIAAAQL8NbAKMAD/HXfdYwQY6gAAAABJRU5ErkJggg==);
  background-size: 40px;
}

.character__city--active {
  text-shadow: none;
  padding-left: 70px;
  background: left center no-repeat;
  /* background-image: url(../..); */
  background-size: contain;
}

.character__main {
  background-size: auto 800px;
}

.character__main {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/City/liyue/6c9d197.png") no-repeat;
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-position: center bottom;
  background-size: auto 100vh;
}

.character__swiper--con {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.character .swiper-slide-active .character__person,
.character .swiper-slide-active .character__content {
  opacity: 1;
  transform: translateX(0);
}
.character__person {
  position: absolute;
  top: 0;
  left: calc(50% - 63vh);
  width: auto;
  opacity: 0;
  transform: translateX(500px);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.character__icon {
  position: absolute;
  top: 10vh;
  left: calc(50% - 60vh);
  width: auto;
  height: 378px;
  opacity: 0.1;
}

.character .swiper-slide-active .character__person,
.character .swiper-slide-active .character__content {
  opacity: 1;
}

.character__content {
  position: absolute;
  z-index: 4;
  top: 18vh;
  left: 
