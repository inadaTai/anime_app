<template>
  <div class="signup">
    <h2>マイページ</h2>
    <p>{{loginUser.email}}</p>
    
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'mypage',
  
  data () {
    return {
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
    signUp: function () {
      user.updateProfile({
          displayName: this.name,
          photoURL: this.picurl
          }).then(function() {
              // Update successful.
              }).catch(function(error) {
                  // An error happened.
            });
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