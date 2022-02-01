<template>
<div class="top-section">
  <div class="nav-res">
    <img src="@/assets/logo.png" width="740" height="230">
  </div>
  <h1>今期オススメアニメ(2020秋アニメ)</h1>
  <div>【執筆時点10月28日の情報です（最新話で4〜5話くらいです。）】</div>
  <div class="hot-anime">
    <div class="anime-name">魔女の旅々</div>
    <div class="anime-pic">
      <img src="@/assets/akianime2020/tabi1.png" width="450px" height="250px">
    </div>
    <div>
      オススメポイント：ストーリー性が非常によく、時に思いも寄らない展開に行く話があり、オススメとして上げました。
      個人的には3話の「瓶詰めの幸せ」について瓶の中に幸せを集めている少年・エミルと出会い
      「使用人の子」を幸せにする為、その瓶をプレゼントするのだが......
      
      下記をクリックすると観れます。（※アニメ3話を観れていない方はネタバレになります。）
      <button v-on:click="openModal2">ここをクリックしてね！</button>
      <div id="overlay" v-show="showContent2">
        <div id="content">
          <p class="secret-view">
            <div class="anime-pic">
              <img src="@/assets/tabi3.jpg" width="450px" height="250px">
              <div class="anime-pic-discription">(写真1：左の黒髪の子が使用人の「ニノ」と右側の金髪の子「エミル」)</div>
              <img src="@/assets/tabi2.jpg" width="450px" height="250px">
              <div class="anime-pic-discription">(写真2：「エミル」よりプレゼントをもらい「ニノ」が絶望してしまう)</div>
            </div>
            結論としてはプレゼントが逆効果になってしまうという結末で話が終わってしまいます。
            私も衝撃を受けました、プレゼントはもらう人の現在や過去の境遇によって感じ方は違い、どうやら使用人の子には絶望を与えてしまったのかな？と感じました。
            (※「使用人の子」の境遇は奴隷として売られていて、エミルの父にお金で買われている感じです。)
          <button v-on:click="closeModal2">Close</button>
        </div>
      </div>
    </div>
    <div class="anime-name">無能なナナ</div>
    <div class="anime-pic">
      <img src="@/assets/akianime2020/nana1.png" width="450px" height="250px">
    </div>
    <div>
      オススメポイント：最初は学園の能力者が人類の敵とバトルしていくのお話なのかな？と思ってましたが想像と違う展開で回を重ねるごとに
      面白い展開になっていくアニメだと感じました。
      また、転校生の「ナナ」の正体については下記に記載しています。（※アニメ1話を観れていない方はネタバレになります。）
      <button v-on:click="openModal">ここをクリックしてね！</button>
      <div id="overlay" v-show="showContent">
        <div id="content">
          <p class="secret-view">
            <div class="anime-pic">
              <img src="@/assets/nana2.png" width="450px" height="250px">
              <div class="anime-pic-discription">(写真１：1話の終盤で本性を表した「ナナ」)</div>
              <img src="@/assets/nana3.png" width="450px" height="250px">
              <div class="anime-pic-discription">(写真２：「ナナ」から崖に突き落とされた「ナナオ」)</div>
            </div>
            実際は知略サスペンスアニメでした。
            個人的にはアニメ1話に登場した「ナナオ」がクラスのみんなへ能力をカミングアウトしクラスのみんなとも打ち解けることができ
            クラスのリーダーに任命されこの後の学園生活も良い感じにいくのかと思う展開のその日に「ナナ」は崖から「ナナオ」を突き落としてしまうのです。
            実は人類の敵とは「学園の能力者」で「ナナ」は能力者たちを暗殺すべく送り込まれた、無能力者だったのです。
           （※送った組織は学園を総括する「委員会」というところになります。）

          <button v-on:click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <h1>過去のアニメタイトルリスト</h1>
    <div class="anime-link">
       <!-- <button v-on:click="comment">コメントボタン</button> -->
      <p>２０１９年度アニメリスト</p>
      <a href="#">2019年　　春アニメ</a>
      <a href="#">2019年　　夏アニメ</a>
      <a href="#">2019年　　秋アニメ</a>
      <a href="#">2019年　　冬アニメ</a>
  </div>
</div>

</template>

<script>
// import firebase from 'firebase';

export default {
  name: 'TopPages',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      show2: false,
      showContent: false,
      showContent2: false
    }
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    openModal2: function(){
      this.showContent2 = true
    },
    closeModal: function(){
      this.showContent = false
    },
    closeModal2: function(){
      this.showContent2 = false
    },
    // comment: function(){
    //     console.log('発火');
    //     var database = firebase.database();
    //     const name = "anime_name";
    //     database.ref(name).push({
    //       name: "タイトル",
    //       is_checked: true,
    //     });
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top-section{
  white-space: pre-line;
  margin: auto;
  max-width: 1980px;
}
.anime-name{
  font-weight: bold;
  font-size: 24px;
  padding: 18px 0px
}
.penki-section{
  padding-top: 130px;
  display: flex;
  padding-left: 100px;
}
.penki-right{
  justify-content: right;
  padding-top: 100px;
}
.secret-button{
  color: blue;
  font-weight: bold;
}
#content{
  z-index:10;
  width:50%;
  padding: 1em;
  background:#fff;
}
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.anime-pic-discription{
  padding: 5px 0px;
  font-weight: bold;
}
</style>
