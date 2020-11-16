<template>
  <div class="header-section">
    <p class="anime-discription-2020">＜今期アニメリスト＞</p>
    <a href="#" class="anime-spring">
      <img src = @/assets/春アニメ.png width="230px" height="140px"> 
    </a>
    <a href="#" class="anime-summer">
      <img src = @/assets/夏アニメ.png width="230px" height="140px"> 
    </a>
    <a href="/#/akianime2020" class="anime-autumn">
      <img src = @/assets/秋アニメ.png width="230px" height="140px"> 
    </a>
    <a href="#" class="anime-winter">
      <img src = @/assets/冬アニメ.png width="230px" height="140px"> 
    </a>
    <a href="/" class="anime-winter">
      <p>TOPページへ戻る</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header-section{
  display: block;
}
.anime-spring:hover {
  background: transparent;
  opacity: 0.7;
}
.anime-summer:hover {
  background: transparent;
  opacity: 0.7;
}
.anime-autumn:hover {
  background: transparent;
  opacity: 0.7;
}
.anime-winter:hover {
  background: transparent;
  opacity: 0.7;
}
.anime-discription-2020{
  font-weight: bold;
  font-size: 22px;
}
</style>
