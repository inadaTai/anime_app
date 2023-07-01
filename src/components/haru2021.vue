<template>
<div class="anime-section">
  <h1>2021年度　春アニメページ</h1>
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
			<div>
        <input type="checkbox" :value="item.title" v-model="item.isChecked" v-on:change="saveCheck">
        <label>視聴中しているならチェック！</label><br>
        <router-link :to="{ name: 'item', params: { Item_name: item.name }}">{{item.name}}の詳細ページを見る</router-link>
      </div>
    </li>
  </div>
  <h1>今期視聴中アニメリスト一覧{{user}}</h1>
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
export default ({
  name: 'haru2021',
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
            { name: 'iiiあいすくりん', data: '毎週土曜25時', pic: require("@/assets/haru2021/iii-icecrin.jpg"), isChecked: false, url: "https://iii-icecrin.com/" },
            { name: 'イジらないで、長瀞さん', data: '毎週土曜25時', pic: require("@/assets/haru2021/iji.jpg"), isChecked: false, url: "https://www.nagatorosan.jp/" },
            { name: '異世界魔王と召喚少女の奴隷魔術Ω', data: '毎週金曜26時', pic: require("@/assets/haru2021/isekai-dorei.jpg"), isChecked: false, url: "https://isekaimaou-anime.com/" },
            { name: 'いたずらぐまのグル～ミ～', data: '未定', pic: require("@/assets/haru2021/gloomy-anime_S.jpg"), isChecked: false, url: "https://gloomy-official.com/" },
            { name: 'Vivy -Fluorite Eyeʼs Song-', data: '毎週土曜25時', pic: require("@/assets/haru2021/vivy-portal_S.jpg"), isChecked: false, url: "https://vivy-portal.com/" },
            { name: '86-エイティシックス-', data: '毎週土曜25時', pic: require("@/assets/haru2021/anime-86_S.jpg"), isChecked: false, url: "https://anime-86.com/" },
            { name: 'SDガンダムワールド ヒーローズ', data: '毎週土曜25時', pic: require("@/assets/haru2021/sd-gundam-heroes_S.jpg"), isChecked: false, url: "https://sd-gundam-world.net/heroes/" },
            { name: 'EDENS ZERO', data: '毎週土曜25時', pic: require("@/assets/haru2021/edens-zero-anime_S.jpg"), isChecked: false, url: "https://edens-zero.net/anime/" },
            { name: 'えとたま ～猫客万来～', data: '毎週土曜25時', pic: require("@/assets/haru2021/etotama-sp_S.jpg"), isChecked: false, url: "http://etotama.com/nyankyakubanrai/" },
            { name: '幼なじみが絶対に負けないラブコメ', data: '毎週土曜25時', pic: require("@/assets/haru2021/osamake_S.jpg"), isChecked: false, url: "https://osamake.com/" },
            { name: 'オッドタクシー', data: '毎週土曜25時', pic: require("@/assets/haru2021/oddtaxi_S.jpg"), isChecked: false, url: "https://oddtaxi.jp/" },
            { name: 'カードファイト!! ヴァンガード overDress', data: '毎週土曜25時', pic: require("@/assets/haru2021/cf-vanguard-overdress_S.jpg"), isChecked: false, url: "https://anime.cf-vanguard.com/overdress/" },
            { name: '究極進化したフルダイブRPGが現実よりもクソゲーだったら', data: '毎週土曜25時', pic: require("@/assets/haru2021/fulldive-rpg_S.jpg"), isChecked: false, url: "https://fulldive-rpg.com/" },
            { name: '黒ギャルになったから親友としてみた。', data: '毎週土曜25時', pic: require("@/assets/haru2021/kurogal-cfanime_S.jpg"), isChecked: false, url: "https://kurogal.cf-anime.com/" },
            { name: '恋と呼ぶには気持ち悪い', data: '毎週土曜25時', pic: require("@/assets/haru2021/koikimo-anime_S.jpg"), isChecked: false, url: "https://koikimo.jp/" },
            { name: '極主夫道', data: '毎週土曜25時', pic: require("@/assets/haru2021/gokushufudo_S.jpg"), isChecked: false, url: "https://www.netflix.com/jp/title/81261669" },
            { name: 'ゴジラ Ｓ.Ｐ＜シンギュラポイント＞', data: '毎週土曜25時', pic: require("@/assets/haru2021/godzilla-sp_S.jpg"), isChecked: false, url: "https://godzilla-sp.jp/" },
            { name: 'さよなら私のクラマー', data: '毎週土曜25時', pic: require("@/assets/haru2021/sayonara-cramer_S.jpg"), isChecked: false, url: "https://sayonara-cramer.com/tv/" },
            { name: 'SHAMAN KING', data: '毎週土曜25時', pic: require("@/assets/haru2021/shamanking-project_S.jpg"), isChecked: false, url: "https://shamanking-project.com/" },
            { name: '灼熱カバディ', data: '毎週土曜25時', pic: require("@/assets/haru2021/kabaddi.jpg"), isChecked: false, url: "https://www.tv-tokyo.co.jp/anime/kabaddi/" },
            { name: 'シャドーハウス', data: '毎週土曜25時', pic: require("@/assets/haru2021/shadowshouse_S.jpg"), isChecked: false, url: "https://shadowshouse-anime.com/" },
            { name: '擾乱 THE PRINCESS OF SNOW AND BLOOD', data: '毎週土曜25時', pic: require("@/assets/haru2021/joran-anime_S.jpg"), isChecked: false, url: "https://joran.jp/" },
            { name: '新幹線変形ロボ シンカリオンＺ', data: '毎週土曜25時', pic: require("@/assets/haru2021/shinkalion-z_S.jpg"), isChecked: false, url: "https://www.shinkalion.com/" },
            { name: 'スーパーカブ', data: '毎週土曜25時', pic: require("@/assets/haru2021/supercub-anime_S.jpg"), isChecked: false, url: "https://supercub-anime.com/" },
            { name: 'スライム倒して300年、知らないうちにレベルMAXになってました', data: '毎週土曜25時', pic: require("@/assets/haru2021/suraimu.jpg"), isChecked: false, url: "https://slime300-anime.com/" },
            { name: '聖女の魔力は万能です', data: '毎週土曜25時', pic: require("@/assets/haru2021/power-of-saint_S.jpg"), isChecked: false, url: "https://seijyonomaryoku.jp/" },
            { name: 'セスタス -The Roman Fighter-', data: '毎週土曜25時', pic: require("@/assets/haru2021/cestvs-anime_S.jpg"), isChecked: false, url: "https://cestvs-anime.com/" },
            { name: 'セブンナイツレボリューション-英雄の継承者-', data: '毎週土曜25時', pic: require("@/assets/haru2021/sevenknights-anime_S.jpg"), isChecked: false, url: "https://sevenknights-anime.jp/" },
            { name: '戦闘員、派遣します！', data: '毎週土曜25時', pic: require("@/assets/haru2021/kisaragi_S.jpg"), isChecked: false, url: "https://kisaragi-co.jp/" },
            { name: 'ゾンビランドサガ リベンジ', data: '毎週土曜25時', pic: require("@/assets/haru2021/zombielandsaga2_S.jpg"), isChecked: false, url: "https://zombielandsaga.com/" },
            { name: 'SSSS.DYNAZENON', data: '毎週土曜25時', pic: require("@/assets/haru2021/dynazenon_S.jpg"), isChecked: false, url: "https://dynazenon.net/" },
            { name: 'ダイナ荘びより', data: '毎週土曜25時', pic: require("@/assets/haru2021/dinosaur-biyori_S.jpg"), isChecked: false, url: "https://dinosaur-biyori.com/" },
            { name: 'デュエル・マスターズ キング！', data: '毎週土曜25時', pic: require("@/assets/haru2021/duelmasters-2021_S.jpg"), isChecked: false, url: "https://www.tv-tokyo.co.jp/anime/dm_king/" },
            { name: '転スラ日記 転生したらスライムだった件', data: '毎週土曜25時', pic: require("@/assets/haru2021/tensura-nikki_S.jpg"), isChecked: false, url: "https://www.ten-sura.com/anime/tensura-nikki" },
            { name: '東京リベンジャーズ', data: '毎週土曜25時', pic: require("@/assets/haru2021/tokyo-revengers-anime_S.jpg"), isChecked: false, url: "https://tokyo-revengers-anime.com/" },
            { name: 'どすこいすしずもう', data: '毎週土曜25時', pic: require("@/assets/haru2021/sushisumo_S.jpg"), isChecked: false, url: "https://sushisumo.jp/" },
            { name: 'ドラゴン、家を買う。', data: '毎週土曜25時', pic: require("@/assets/haru2021/doraie_S.jpg"), isChecked: false, url: "https://doraie.com/" },
            { name: 'NOMAD メガロボクス２', data: '毎週土曜25時', pic: require("@/assets/haru2021/megalobox2_S.jpg"), isChecked: false, url: "https://megalobox.com/" },
            { name: 'バクテン!!', data: '毎週土曜25時', pic: require("@/assets/haru2021/bakuten-pr_S.jpg"), isChecked: false, url: "https://bakuten-pr.com/" },
            { name: 'バトルアスリーテス大運動会 ReSTART!', data: '毎週土曜25時', pic: require("@/assets/haru2021/daiundoukai-restart_S.jpg"), isChecked: false, url: "https://daiundoukai-restart.jp/" },
            { name: 'ひげを剃る。そして女子高生を拾う。', data: '毎週土曜25時', pic: require("@/assets/haru2021/higewosoru-anime_S.jpg"), isChecked: false, url: "http://higehiro-anime.com/" },
            { name: '美少年探偵団', data: '毎週土曜25時', pic: require("@/assets/haru2021/bishonen-tanteidan_S.jpg"), isChecked: false, url: "https://bishonen-tanteidan.com/" },
            { name: 'Fairy蘭丸～あなたの心お助けします～', data: '毎週土曜25時', pic: require("@/assets/haru2021/f-ran_S.jpg"), isChecked: false, url: "https://f-ran.jp/" },
            { name: '不滅のあなたへ', data: '毎週土曜25時', pic: require("@/assets/haru2021/fumetsunoanatae_S.jpg"), isChecked: false, url: "http://anime-fumetsunoanatae.com/" },
            { name: 'フルーツバスケットThe Final', data: '毎週土曜25時', pic: require("@/assets/haru2021/fruba3_S.jpg"), isChecked: false, url: "https://fruba.jp/#m-final" },
            { name: 'BLUE REFLECTION RAY/澪', data: '毎週土曜25時', pic: require("@/assets/haru2021/bluereflection-ray_S.jpg"), isChecked: false, url: "https://www.bluereflection-ray.com/" },
            { name: 'ヘタリア World★Stars', data: '毎週土曜25時', pic: require("@/assets/haru2021/hetalia-ws_S.jpg"), isChecked: false, url: "https://hetalia-ws.com/" },
            { name: '僕のヒーローアカデミア第５期', data: '毎週土曜25時', pic: require("@/assets/haru2021/heroaca5_S.jpg"), isChecked: false, url: "https://heroaca.com/" },            
            { name: 'MARS RED', data: '毎週土曜25時', pic: require("@/assets/haru2021/marsred_S.jpg"), isChecked: false, url: "https://marsred.tv/" },            
      ],
      done: false,
      msg: '色々',
    }
  },
  methods: {
    saveCheck: function() {
      this.saveData();
    },
    saveData() {
      let parsed = JSON.stringify(this.items);
      localStorage.setItem('items', parsed);
      console.log('保存した。');
    }
  },
  mounted() {
    if(localStorage.getItem('items')) {
      try {
        this.items = JSON.parse(localStorage.getItem('items'));
      } catch(e) {
        localStorage.removeItem('items');
      }
    }
  }
})
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