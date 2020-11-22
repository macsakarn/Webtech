<template>
  <div class="character">
    <city_1/>
  </div>
</template>
<script>
export default {
  components:{
    city_1: () => import("../components/city_1")
  }
}
</script>
