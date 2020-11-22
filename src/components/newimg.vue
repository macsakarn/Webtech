<template>
    <div class="carousel">
    <div class="carousel-inner">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item">
            <a href="#"><img src="../../public/img/home/new_1.png"></a>
        </div>

        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
            <a href="#"><img src="../../public/img/home/new_2.png"></a>
        </div>

        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
            <a href="#"><img src="../../public/img/home/new_3.png"></a>
        </div>

        <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
            <a href="#"><img src="../../public/img/home/new_4.png"></a>
        </div>

        <ol class="carousel-indicators">
            <li>
                <label for="carousel-1" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-2" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-3" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-4" class="carousel-bullet">•</label>
            </li>
        </ol>
    </div>
</div>
</template>
<style style scoped lang="scss">

.carousel{
  position: relative;
  width: 640px;
}

.carousel-inner {
  position: relative;
   width: 640px;
  overflow: hidden;
}

.carousel-open:checked + .carousel-item {
  position: relative;
  width: 640px;
  opacity: 100;
}

.carousel-item {
  
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

.carousel-control {
  // background: rgba(0, 0, 0, 0.28);
  // border-radius: 50%;
  // color: #fff;
  cursor: pointer;
  // display: none;
  font-size: 40px;
  // height: 40px;
  // line-height: 35px;
  position: absolute;
  // top: 50%;
  -webkit-transform: translate(0, -50%);
  cursor: pointer;
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  // text-align: center;
  // width: 40px;
  z-index: 10;
}

.carousel-control:hover {
  background: rgba(0, 0, 0, 0.8);
  color: #aaaaaa;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  left: 40%;
  display: block;
  // list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: -3%;
  // text-align: center;
  z-index: 10;
}

.carousel-indicators li {
  display: inline-block;
  margin: 0 5px;
}

.carousel-bullet {
  
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 50px;
}

.carousel-bullet:hover {
  color: #aaaaaa;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #428bca;
}

</style>
