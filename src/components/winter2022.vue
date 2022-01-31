<template>
<div class="anime-section">
  <h1>2022年度　冬アニメページ</h1>
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
  name: 'winter2022',
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
          {name: '明日ちゃんのセーラー服'} ,
{
    name: 'あたしゃ川尻こだまだよ～デンジャラスライフハッカーのただれた生活～',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
,
{name: 'ありふれた職業で世界最強 2nd season',
    data: '', 
    // // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
},
{name: 'イロドリミドリ',
    data: '', 
    // // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: "",
},
{name: '印西あるある物語',
    data: '', 
    // // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
},
{name: 'ヴァニタスの手記（第2クール）',
    data: '', 
    // // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
},
{name: 'うたわれるもの 偽りの仮面（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: '永遠の８３１',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: '王子の本命は悪役令嬢',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: 'おそ松さん 第3期（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: 'お昼のショッカーさん',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: 'オリエント',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'オンエアできない！',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '怪人開発部の黒井津さん',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: 'からかい上手の高木さん3',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: 'ガル学。Ⅱ～Lucky Stars～',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""
    },
{name: '岸辺露伴は動かない',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '鬼滅の刃 遊郭編',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'CUE!',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '現実主義勇者の王国再建記 第二部',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '賢者の弟子を名乗る賢者',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '幻想三國誌 -天元霊心記-',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '五等分の花嫁∬（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '殺し愛',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '最遊記RELOAD -ZEROIN-',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '佐々木と宮野',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '錆色のアーマ-黎明-',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '錆喰いビスコ',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '時光代理人 -LINK CLICK-',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '失格紋の最強賢者',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '終末のハーレム',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'シュタインズ・ゲート ゼロ（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'ジョジョの奇妙な冒険 ストーンオーシャン',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '進撃の巨人 The Final Season Part 2',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'スローループ',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'その着せ替え人形は恋をする',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '空色ユーティリティ',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'テイコウペンギン',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'デリシャスパーティ♡プリキュア',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: "",},
{name: '天才王子の赤字国家再生術',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '東京24区',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'ドールズフロントライン',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'トライブナイン',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'ニンジャラ',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'ハコヅメ～交番女子の逆襲～',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'バトルスピリッツ -コアの光主たち-',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '薔薇王の葬列',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '範馬刃牙',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '異世界美少女受肉おじさんと',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'PUI PUI モルカー（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'フットサルボーイズ!!!!!',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'プラネテス（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'プリンセスコネクト！Re:Dive Season 2',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '平家物語',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '魔法科高校の劣等生 追憶編',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '名探偵コナン 警察学校編 Wild Police Story',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'モーレツ宇宙海賊（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: '闇芝居（第10期）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'ゆるキャン△（再放送）',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'リアデイルの大地にて',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'リーマンズクラブ',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""},
{name: 'ロード・エルメロイII世の事件簿 -魔眼蒐集列車 Grace note- 特別編',
    data: '', 
    // pic: require("@/assets/winter2022/hogehoge.jpg"), 
    isChecked: false, 
    url: ""}
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