<template>
    <div class="test">
      <div class="">
        <img src="../../public/img/home/mondstadt.jpg"  class="imag_city1">
        <div class="square "></div>
        <img src="../../public/img/home/c_mondstadt.png" class="image_overlay1">
      </div>  
    </div>
</template>
<style lang="scss" scoped>

.imag_city1 {
  display: block;
  width: 100%;
  height: auto;
}

.image_overlay1 {
  position: absolute; 
  top: 0px;
  right: 0px; 
//   background: rgb(0, 0, 0);
//   background: rgba(0, 0, 0, 0.5); /* Black see-through */
  width: 50%;
  transition: .5s ease;
  opacity:0;
  color: white;

}

.test:hover .image_overlay1 {
  opacity: 1;

}
.test:hover .square{
  position: absolute;
  width: 1920;
  height: 260;
  left: 0px;
  top: 0px;
  z-index: 2;
   //ทำกรอบขาว
   
  outline: 5px solid red;
  outline-offset: -4px;
}


</style>
