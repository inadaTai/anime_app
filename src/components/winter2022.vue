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
            { name: 'あいすくりん', data: '毎週土曜25時', pic: require("@/assets/haru2021/iii-icecrin.jpg"), isChecked: false, url: "https://iii-icecrin.com/" },
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