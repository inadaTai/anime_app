<template>
<div class="anime-section">
  <h1>2020年度　秋アニメページ</h1>
  <div class="anime-tips">機能用途について
    今期視聴中のアニメはチェックボックスを入れると画像が切り替わって今期視聴中と表示されます。
    たくさん視聴して、視聴中のアニメを増やしていこう！
    (※1)作成主もたくさん視聴してアニメのグッズだったりイベントへ参加し応援します！
    (※2)アニメに関する監督だったり原画を書いている方がコミケで本を出展していることはご存知でしょうか？
    委託販売がなくコミケ会場のみで販売しているアニメーターさんもいますのでそういった情報も更新していこうかなと思っています！
  </div>
  <h1>今期視聴アニメは全{{items.length}}本の中で{{remaining}}本視聴しているよ！！</h1>
  <h1 v-if="remaining <= 4">今期まだまだ見れるものがあるよ！見たことない作品も見てみよう！</h1>
  <h1 v-else-if="remaining >= 4 && remaining <= 8">今期は色々見てるね！無理せず楽しんで視聴しよう！！</h1>
  <h1 v-else-if="remaining >= 8 && remaining <= 12">今期アニメたくさん見れてて、グッドです！</h1>
  <div class="akianime-discription" v-for="(items, index) in groupedArray" :key="index">
    <li v-for="(item, index) in items" :key="index" class="anime-list">
      <div class="anime-title">{{ item.name }}</div>
      <div v-show="item.isChecked === false"><img src="@/assets/nowatch.png" width="120px" height="40px"></div>
      <div v-show="item.isChecked === true"><img src="@/assets/watch.png" width="120px" height="40px"></div>
      <img :src="item.pic" width="300px" height="200px">
			<a :href="item.url"><p>公式サイト</p></a>
			<div>※今後実装予定、Push通知とチェックボックス 機能
        <input type="checkbox" :value="item.title" :v-model="item.isChecked" :change="saveCheck">
        <label>視聴中しているならチェック！</label><br>
        <router-link :to="{ name: 'item', params: { Item_name: item.name }}">{{item.name}}の詳細ページを見る</router-link>
      </div>
    </li>
  </div>
  <h1>今期視聴中アニメリスト一覧</h1>
  <div v-for="(item, id) in items" :key="id">
    <td><router-link :to = item.id></router-link></td>
    <li v-if="item.isChecked === true" class="anime-title-list">
      {{item.name}}
      {{item.data}}
    </li>
  </div>
</div>
</template>

<script>
export default {
  name: 'akianime2020',
  	computed: {
		  remaining: function() {
			  var count = 0;
			  var items = this.items;
			  var length = items.length;
			  for(var i = 0; i < length; i++) {
				if(items[i].isChecked) {
					count++;
				  }
			  }
			  return count;
      },
      groupedArray() {
        const base = this.items.length
        const split_cnt = 3
        const grouped_array = []
        for (let x=0; x<Math.ceil(base/split_cnt); x++) {
        let multiple_cnt = x * split_cnt
        let result = this.items.slice(multiple_cnt, multiple_cnt + split_cnt) 
        grouped_array.push(result)
      }
      return grouped_array
      }
	  },
  data () {
    return {
      newItemTitle: ''.trim(),
      items: [
      { name: '魔女の旅々', data: '毎週金曜22時', pic: require("@/assets/akianime2020/tabi1.png"), isChecked: false, url: "https://majotabi.jp/" },
      { name: 'アサルトリリィ Bouquet',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/asalt1.jpeg"), isChecked: false, url: "https://anime.assaultlily-pj.com/" },
      { name: 'いわかける！',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/iwakake1.png"), isChecked: false, url: "http://iwakakeru-anime.com/" },
      { name: '安達としまむら',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/shima1.jpg"), isChecked: false, url: "https://www.tbs.co.jp/anime/adashima/" },
      { name: '神様になった日',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kami1.jpeg"), isChecked: false, url: "https://kamisama-day.jp/" },
      { name: '神達に拾われた男',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/hiro1.jpeg"), isChecked: false, url: "https://kamihiro-anime.com/" },
      { name: 'キミと僕の最後の戦場、あるいは世界が始まる聖戦',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kimi1.jpeg"), isChecked: false, url: "https://kimisentv.com/" },
      { name: 'ぐらぶるっ！',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/gura1.png"), isChecked: false, url: "https://guraburu.granbluefantasy.jp/" },
      { name: 'キングスレイド 意志を継ぐものたち',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kings1.jpeg"), isChecked: false, url: "https://www.anime-kings-raid.com/" },
      { name: 'アクダマドライブ',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/aku1.png"), isChecked: false, url: "https://akudama-drive.com/" },
      { name: '兄に付ける薬はない！4-快把我哥帯走4-',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/ani1.png"), isChecked: false, url: "https://anitsuke.com/" },
      { name: '池袋ウエストゲートパーク',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/ike1.png"), isChecked: false, url: "https://iwgp-anime.com/" },
      { name: 'ドラゴンクエスト ダイの大冒険',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/dq1.png"), isChecked: false, url: "https://dq-dai.com/" },
      { name: 'トニカクカワイイ',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/toni1.png"), isChecked: false, url: "http://tonikawa.com/" },
      { name: 'NOBLESSE -ノブレス-',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/nob1.png"), isChecked: false, url: "https://iwgp-anime.com/" },
      { name: '無能なナナ',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/nana1.png"), isChecked: false, url: "https://munounanana.com/" },
      { name: 'レヱル・ロマネスク',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/roma1.png"), isChecked: false, url: "https://railromanesque.jp/" },
      { name: '落ちこぼれフルーツタルト',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/oti1.png"), isChecked: false, url: "http://ochifuru-anime.com/" },
      { name: 'くまクマ熊ベアー',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kuma1.png"), isChecked: false, url: "https://kumakumakumabear.com/" },
      { name: 'ストライクウィッチーズ ROAD to BERLIN',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/suto1.png"), isChecked: false, url: "http://w-witch.jp/strike_witches-rtb/" },
      { name: '土下座で頼んでみた',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/doge1.png"), isChecked: false, url: "https://dogeza-anime.com/" },
      { name: 'One Room サードシーズン',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/one1.png"), isChecked: false, url: "https://oneroom-anime.com/" },
      { name: 'D4DJ First Mix',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/d4j1.png"), isChecked: false, url: "https://anime.d4dj-pj.com/" },
      ],
      done: false,
      msg: '色々',
    }
  },
  methods: {
    saveCheck: function() {
      this.saveData();
    },
    saveData: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    loadData: function(){
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = items;
      }
    },
  },
  mounted: function(){
    this.loadData();  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.anime-section{
  display: inline-table;
}
.anime-tips{
  white-space: pre-line;
}
.akianime-discription{
  white-space: pre-line;
  display: flex;
}
@media (max-width: 1000px) {
  .akianime-discription{
    white-space: pre-line;
    display: block;
  }
}
.anime-list{
  list-style: none;
  padding: 10px;
}
.anime-title{
  font-weight: bold;
  font-size: 20px;
}
.anime-title-list{
  list-style: none;
}
</style>