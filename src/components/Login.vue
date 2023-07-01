<template>
  <div class="signup">
    <h2>ログイン</h2>
    <input type="text" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="signIn">ログイン</button>
    <p>
      <router-link to="/login">アカウントをお持ち出ない方はこちら！</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
    components: {
      
  },
  data () {
    return {
      email: '',
      password: '',
      isLogin: false,
      loginUser: null
    };
  },
  mounted() {
      // ユーザー情報取得
      firebase.auth().onAuthStateChanged(user => {
      this.isLogin = true;
      this.loginUser = user;
      });
    },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          alert('ログインしました。')
          this.$router.push('/')
        },
        err => {
          alert('ログインに失敗しました。')
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>