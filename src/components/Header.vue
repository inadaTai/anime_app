<template>
  <div class="header-section">
    <p class="anime-discription-2020">＜今期アニメリスト＞</p>
    <a href="/#/haru2021" class="anime-spring">
    2021年 春アニメ<br>
    </a>
    <a href="#" class="anime-summer">
    2021年 夏アニメ(未設定)<br>
    </a>
    <a href="/#/akianime2020" class="anime-autumn">
    2020年 秋アニメ<br>
    </a>
    <a href="#" class="anime-winter">
    2020年　冬アニメ<br>
    </a>
    <a href="/#/login" class="anime-winter">
      <div id="login" >ログイン</div>
    </a>
    <a href="/#/signup" class="anime-winter">
      <div id="signUp" >新規登録</div>
    </a>
    <a href="/#/mypage" class="anime-winter">
      <p>マイページ</p>
    </a>
    <button id="signOut" @click="signOut">ログアウト</button>
    <a href="/" class="anime-winter">
      <p>TOPページへ戻る</p>
    </a>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Header',
  data () {
    return {
    };
  },
    methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        alert('ログアウトしました。')
        this.$router.push('/login')
      })
    },
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
