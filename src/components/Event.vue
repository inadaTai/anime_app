<template>
<div class="anime-discription-section">
  <div v-for="(item, index) in items" :key="index">
    <li v-if="$route.params.Item_name == item.name" class="anime-discription">
      <h1>{{item.name}}の詳細ページ</h1>
      <div class="anime-discription-1">
      アニメの詳細情報を載せるページとして公開しています。
      声優さんの情報であったり作画さんの情報でわかる範囲で更新していこうと思ってます。
      </div>
      <div class="anime-pic"><img :src="item.pic" width="650px" height="400px"></div>
      <div class="anime-discription-2">
      <div class="anime-introduction">＜アニメの詳細＞</div>
        {{item.discription}}
      </div>
      <div v-if="item.painter !== '' ">
        <div class="anime-introduction">＜アニメ作成者の方の情報＞</div>
        <div class="anime-painter">  {{item.painter}} </div>
        <img :src="item.painterimg" width="650px" height="650px">
      </div>
      <div class="anime-introduction">＜オンエア情報＞</div>
      <div v-for="(onair, index) in item.onairs" :key="index">
      <div class="anime-onair">{{onair.abemaTV}}</div>
      <div class="anime-onair">{{onair.Amazon}}</div>   
      </div>
    <a href="/" class="anime-winter">
      <p>TOPページに戻る</p>
    </a>
    </li>
  </div>
</div>
</template>

<script>
export default {
  name: 'Event',
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  data () {
    return {
      msg: '色々',
      items: [
      { name: '魔女の旅々', pic: require("@/assets/akianime2020/tabi1.png"), url: "https://majotabi.jp/"
      , discription: "あるところに一人の旅人がいました。彼女の名はイレイナ。\n 若くして魔法使いの最上位「魔女」となった才女です。\n 幼いころに読んだ旅の物語に憧れて、\n  流されるように気ままな長い旅を続けています。\n この広大な世界を自由に渡り歩き、わけのわからない可笑しな人や、\n 誰かの美しい日常に触れながら、\n 彼女は旅人として、これといった目的もなく、\n 色々な国や人との出逢いを繰り返します。\n そして同じ数だけの——\n 「構わないでください。私、旅人なものですから。\n 先を急がなければならないのです」\n そんな魔女イレイナが紡ぐ、出逢いと別れの物語…。"
      , onairs: [{abemaTV: "abemaTV毎週金曜22時"}, {Amazon: "Amazonプライム毎週金曜日に配信"}]
      , painter: ''
      , painterimg: '' 
      },
      { name: 'アサルトリリィ Bouquet',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/asalt1.jpeg"), isChecked: false, url: "https://anime.assaultlily-pj.com/"
      , discription: "近未来の地球――\n 人類は「ヒュージ」と呼ばれる謎の生命体の出現で破滅の危機に瀕していた。\n 全世界が対ヒュージという一事に団結し、\n 科学と魔法の力<マギ>を結集した決戦兵器「CHARM（チャーム）」の開発に成功、\n その使用者となる少女たち「リリィ」を養成する機関「ガーデン」を各地に設立した。\n ガーデンの中でも名門と名高い百合ヶ丘女学院に\n 補欠ながらも合格を果たした一柳梨璃は、\n 人類存続のために戦うリリィとしての一歩を踏み出す。\n かつて、自身の窮地を救ってくれた白井夢結を追ってこの学園を受験した梨璃は\n 登校初日に邂逅を果たすも、以前の夢結とはどこか違っていて……"
      , onairs: [{abemaTV: "abemaTV：未確認です"}, {Amazon: "Amazonプライム毎週木曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'いわかける！',　data: '毎週土曜22時', pic: require("@/assets/akianime2020/iwakake1.png"), isChecked: false, url: "http://iwakakeru-anime.com/"
      , discription: "――「スポーツクライミング」。\n それは、頭脳と肉体を駆使し、己の身体一つで壁を登る競技。\n パズルゲームの天才・笠原好（かさはら・このみ）が偶然出会った、校内名物のクライミングウォール！\n まるで、色とりどりの「岩のパズル」のように見えた…\n そんな運命の出会いが、好の人生を一変させる！\n 花宮女子高校クライミング部の仲間と共に頂点を目指して駆け上がれ…\n アツい本格クライミング・ストーリーが、今始まる！"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '安達としまむら',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/shima1.jpg"), isChecked: false, url: "https://www.tbs.co.jp/anime/adashima/"
      , discription: "わたしと安達は体育館の2階で偶然知り合ったサボり仲間だ。\n 一緒にピンポンしたりしなかったり程度の関係で、\n 人付き合いは基本的に面倒だと思っている\n わたしにはちょうど良い距離だった。\n のだが、最近どうも安達の様子がおかしい。\n まるで人に興味のない猫みたいだったのに、\n 犬っぽくなってきている気がする。\n 安達に何かしたっけなあ……。\n ――そんな2人の関係が少しだけ変わっていくお話。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '神様になった日',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kami1.jpeg"), isChecked: false, url: "https://kamisama-day.jp/"
      , discription: "原作・脚本：麻枝 准×制作：P.A.WORKSによる\n 完全新作オリジナルアニメーション企画、待望の3作目が遂に始動！\n ゲームブランド「Key」の立役者として\n 『AIR』『CLANNAD』『リトルバスターズ！』など数々の傑作を生み出し、\n アニメ・音楽とマルチな領域でファンを熱狂させてきたシナリオライター・麻枝 准が原作・脚本を担当！\n 『Charlotte』制作後、長らく現場から離れていた麻枝 准の中に、\n 再び創作へと駆り立てるある想いが浮かんだ。\n ”原点回帰”\n 2020年10月、麻枝 准×P.A.WORKSの贈る、切なくも愛しい物語が新たに誕生する。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: "※2020年度のアニメ「神様になった日」のキャラクターデザイン･総作画監督をやっている「仁井 学」さんはコミケで同人誌を出しておりますよ！(2020年11月のコミティアでも本を出店するそうですよ！)\n ※写真に使用しているのはC94にて出展されていた作品となります。"
      , painterimg: require("@/assets/painterimg/manabu-1.jpeg")
      },
      { name: '神達に拾われた男',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/hiro1.jpeg"), isChecked: false, url: "https://kamihiro-anime.com/"
      , discription: "ブラック企業に勤める竹林竜馬は39歳で早死。しかし、天界で3柱の神の祝福を受け異世界で少年の体に生まれ変わる。\n 森の中に住むことになったリョウマはスライム研究にのめり込み、いつの間にか1000匹以上と暮らすようになっていた。\n ある日、森の中で出会ったラインハルト公爵と護衛たちの一人が大怪我をしているのに気付き治癒薬を差し出し家で休むように招き入れるが、公爵たちはリョウマのスライムとの生活ぶりに驚く…。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'キミと僕の最後の戦場、あるいは世界が始まる聖戦',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kimi1.jpeg"), isChecked: false, url: "https://kimisentv.com/"
      , discription: "科学技術が高度に発達した機械仕掛けの理想郷「帝国」。\n 超常の力を駆使し、“魔女の国”と恐れられる「ネビュリス皇庁」。\n 百年にわたる戦争を続けてきた両国には、二人の英雄がいた。\n 最年少にして帝国の最高戦力となったイスカ。\n ネビュリス皇庁の王女にして“氷禍の魔女”の異名を持つアリスリーゼ。\n 戦場でめぐり逢った二人は、命を賭して戦う宿敵となった。\n 国を、家族を、仲間を守るため、決して譲れない矜持と矜持をぶつけ合う。\n しかし、激闘の中で互いの素顔に触れた二人は、\n その生き方に、その理想に惹かれてしまう。\n ともに歩むことはできず、残酷な運命に翻弄されるとわかっていても。\n ……そんな二人を嘲笑うかのように、世界の緊張はなおも高まり、\n 大国の謀略が交錯しようとしていた。\n 分断された世界、それでも少年と少女は想いを募らせていく――。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'ぐらぶるっ！',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/gura1.png"), isChecked: false, url: "https://guraburu.granbluefantasy.jp/"
      , discription: "サイゲームスが贈る本格スマホRPG「グラブル」\n 公式４コマ漫画「ぐらぶるっ！ 」が\n ついにショートアニメ化！！\n 壮大な蒼の世界を舞台に深い闇、姉、紳士、ビィ君愛好家\n 個性豊かな騎空団メンバーの新たな一面が楽しめる――！？"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'キングスレイド 意志を継ぐものたち',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kings1.jpeg"), isChecked: false, url: "https://www.anime-kings-raid.com/"
      , discription: "運命が導く戦いの旅路へ\n カイル王が魔王アングムンドを葬り去って100年。\n 平和な時代に見習い騎士のカーセルは生きていた。\n だが、魔族が近隣に現れたとの知らせからカーセルの運命が動き始める。\n 大賢者に導かれ、頼れる仲間を得たカーセルは旅立つ。\n 封印されし聖剣を求めて・・・"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'アクダマドライブ',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/aku1.png"), isChecked: false, url: "https://akudama-drive.com/"
      , discription: "全・員・悪・玉\n 犯罪者アクダマたちのクライムアクション開幕！\n 遙か昔、カントウとカンサイの間で戦争が起き、世界は分裂した。\n  カンサイはカントウの属国となり、独自の発展を遂げていった。\n  しかし、政治と警察力は衰退し、犯罪が横行。\n  その犯罪者を アクダマ と呼ぶ ―。\n \n 本作品の舞台となるのは、高度に発達しながらも歪んだ社会。\n  その中で、アクダマたちはいかにして自分らしくあろうとするのか。\n  一堂に会したアクダマたちの美学がぶつかり合う。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '兄に付ける薬はない！4-快把我哥帯走4-',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/ani1.png"), isChecked: false, url: "https://anitsuke.com/"
      , discription: "中国での合計閲覧数が約30億回の人気Web漫画のアニメ化。\n バイオレンスな妹が…おバカな兄を殴る蹴る！？\n 兄弟愛！恋！グルメ…?　全部入りの学園コメディ。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '池袋ウエストゲートパーク',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/ike1.png"), isChecked: false, url: "https://iwgp-anime.com/"
      , discription: "東京、池袋の西口公園。通称“池袋ウエストゲートパーク”近くにある\n 果物屋の息子・真島誠（マコト）は、ヤクザ絡みの犯罪やギャングの縄張り争いなど、警察では手出しできない難事件を次々に解決する\n “池袋のトラブルシューター”と呼ばれていた。\n 有象無象な人間が集まる池袋の中で、組織に属さず、誰にでもフラットに付き合うマコトの元には、常に危険で刺激的な依頼が舞い込む。\n 「誰にでも優しい街、愛と平和の池袋。…そう、池袋は最高だ」\n 今日も池袋の秩序を守っていた彼のもとに、街の平和を揺るがす厄介な事件が持ち込まれる――。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'ドラゴンクエスト ダイの大冒険',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/dq1.png"), isChecked: false, url: "https://dq-dai.com/"
      , discription: "かつて、魔王ハドラーにより苦しめられていた世界は、\n 「勇者」と呼ばれた一人の剣士とその仲間たちの手により平和を取り戻した――\n 時は流れ…。魔王から解放されたモンスターたちが暮らす南海の孤島・デルムリン島。\n 島唯一の人間であり、勇者に憧れる少年「ダイ」は、モンスターたちと平和に暮らしていた。\n だが、その暮らしも、魔王ハドラーの復活により一変する。\n 師との約束、仲間との出会い、逃れられぬ宿命…\n 再び危機が訪れた世界を救うため、勇者を目指す少年・ダイの冒険が始まるー！"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'トニカクカワイイ',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/toni1.png"), isChecked: false, url: "http://tonikawa.com/"
      , discription: "『ハヤテのごとく！』の畑健二郎による\n 愛と幸せの夫婦コメディーがついにアニメ化！！\n 謎の美少女・司に運命の一目惚れをした少年・由崎星空（ナサ）。\n ナサの決死の告白に、\n 彼女の返事は「結婚してくれたら、付き合ってあげる」！？\n ナサと司の愛に満ち溢れた、カワイイ＆尊い新婚生活が始まる！！\n "
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'NOBLESSE -ノブレス-',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/nob1.png"), isChecked: false, url: "https://iwgp-anime.com/"
      , discription: "全世界累計閲覧数46億回突破！\n 約11年間連載され、韓国だけではなく世界を唸らせた、ダークアクションファンタジー！\n 2018年からLINEマンガを通じて配信され、日本でも絶大な人気を得た話題作。\n 820年の眠りから目覚めた、\n 高貴なる血と精神を持つ貴族の守護者「NOBLESSE」のカディス・エトラマ・デ・ライジェル。\n 永き眠りから目覚めたライジェルが手にしたものは、平穏な日常だった―。\n だが、その日常を壊す、恐ろしい魔の手が迫っていた。\n 絶対的な力を持つ「NOBLESSE」×　世界征服を狙う謎の組織「ユニオン」×人間を守り支配する「貴族」\n 魅力的なキャラクターたちによる、時空を超えたダークアクションファンタジー、『ノブレス』。\n LINEマンガにて配信中の超人気作が、\n 2020年10月、NAVER WEBTOONの\n TVアニメシリーズ『NOBLESSE -ノブレス-』として、\n ついにTVアニメ化決定！"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '無能なナナ',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/nana1.png"), isChecked: false, url: "https://munounanana.com/"
      , discription: "「わたし、人の心が読めます！でも、ちょっと空気は読めません！よろしくお願いします！」\n 孤島にある奇妙な学園。生徒、中島ナナオの前にあらわれたのは、転校生の柊ナナ。\n ここは、さまざまな能力を持つ少年少女が集う施設。\n 炎や氷をあやつる者。自在に宙を飛べる者。空気を刃にして攻撃できる者——。\n 生徒たちは、「人類の敵」と呼ばれる怪物と戦うために訓練を受けているのだ。\n だが、島にはいくつもの秘密が隠され、おそるべき罠が牙をむく。\n 続発する怪事件。学園にひそむ殺人鬼。一人、また一人と姿を消してゆく同級生。\n 予想を裏切る展開。知力、能力の限りを尽くした頭脳戦。そして友情。\n 熱いドラマにいろどられた、「人類の敵」との死闘が、いま、始まる！"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'レヱル・ロマネスク',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/roma1.png"), isChecked: false, url: "https://railromanesque.jp/"
      , discription: "正和63年10月。\n 大廃線により鉄路の殆どが失われてしまった国――日ノ本。九洲は隈元県御一夜市。\n 疲弊しきった経済の立て直しを、蒸気機関車8620とそのレイルロオド・ハチロクとを主役に据えた観光振興により\n 見事成功させ鉄道復興の聖地となった同市は、\n さらなる復興への機運や全国の鉄道事業者・まいてつたちの交流を盛り上げるべく、\n 『第一回まいてつ祭』の開催を企画する。\n 鉄道車両の運転制御用人型モジュール「レイルロオド」達もそれぞれのマスター達につれられ全国から集う。\n 人間達の連日の会議に刺激され、「自分たちも何かをしたい」と意気投合した彼女たちは、\n 有名レイルロオド「すずしろ」を中心として「レイルロオドサミット」を主催。\n 駅前の「cafe亜麻色」に集合し、「まいてつ祭」へ更なる彩りを加えるべく知恵を絞っていく。。"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '落ちこぼれフルーツタルト',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/oti1.png"), isChecked: false, url: "http://ochifuru-anime.com/"
      , discription: "アイドルを志して上京してきた\n 高校一年生・「桜衣乃」は、\n ネズミ荘の住民の\n 売れない（元）子役の「ロコ」や\n ミュージシャンの「はゆ」、\n モデルの「仁菜」と共に、\n 新人アイドルユニット「フルーツタルト」\n を結成！\n 取り壊しの危機\n に瀕するネズミ荘を救うため、\n 芸能界の落ちこぼれ達が\n アイドル活動に七転び八起き！？"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'くまクマ熊ベアー',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/kuma1.png"), isChecked: false, url: "https://kumakumakumabear.com/"
      , discription: "悠々自適な引きこもりライフを満喫する美少女ユナは、\n ＶＲＭＭＯＲＰＧ『ワールド・ファンタジー・オンライン』の廃ゲーマー。\n ある日いつものようにログインしてみると、なにか普段と様子が違う。\n もしかして……ここってゲームの中？　それとも異世界？\n そして、その地に降り立ったユナの装備は\n 『クマの服』『クマの手袋』『クマの靴』で固められていて――んん？\n くま……？　クマ……？　熊……？　ベアー……？\n \n 「なんじゃこれはーーーーーーっ!?」\n \n クマっ子、爆誕！\n しかもこのクマ、ただのクマじゃない。\n 世界最強クラスの魔法とスキルを秘めた、\n とんでもなくスーパーなクマだったのだ！\n そんな、世界征服だってできちゃいそうな\n 強大な力を手にしたユナの目的――それは!?\n この世界でも、ひたすら楽しく自由気ままに生きること！\n \n 最強無敵なクマっ子による、クマな冒険とクマな日常の物語、始まります"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'ストライクウィッチーズ ROAD to BERLIN',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/suto1.png"), isChecked: false, url: "http://w-witch.jp/strike_witches-rtb/"
      , discription: "突如出現した人類の敵「ネウロイ」に対抗するべく世界各国が連合軍を組んだ。\n ただし、彼らに対抗できるのは特殊な魔力を持った、少女たちだけだった・・・。\n 遂に連合軍によるベルリン奪還作戦が始動し、\n 再び結成される第501統合戦闘航空団「ストライクウィッチーズ」、\n 新たな501メンバーとして「服部静夏」も加わり\n ネウロイとの死闘を繰り広げてゆく！\n 果たしてベルリンの空を開放する事は出来るのか！？"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: '土下座で頼んでみた',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/doge1.png"), isChecked: false, url: "https://dogeza-anime.com/"
      , discription: "ふなつかずきの大人気同人誌シリーズ「土下座で頼んでみた」が\n まさかのショートアニメ化決定！\n ついつい女の子の色んなものが見たくなっちゃう主人公・土下 座。\n 彼には女の子を口説き落とす最終手段があった。\n ―― そう、「土下座」である。\n 「お願い」を聞いてもらうまでひたすら土下座で押し通す土下 座、\n 突然の行動に驚き、恥じらい、困惑するヒロインたち…\n 果たして土下座に不可能はないのか！？\n 最後に女の子たちはみんな見せてくれるのか！？\n さあみんなで、「レッツ！土下座！！」"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      },
      { name: 'One Room サードシーズン',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/one1.png"), isChecked: false, url: "https://oneroom-anime.com/"
      , discription: "主人公はあなた―――\n 『てーきゅう』シリーズ、『ヤマノススメ』シリーズを手がける\n スマイラル・アニメーションの\n “バーチャルアニメ”最新作。\n あなた（One）の部屋（Room）ではぐくむ\n 女の子たちとの物語。\n 個性あふれる女の子たちとの甘く、楽しい日々が\n あなたの視点から描かれます。待望の「サードシーズン」がいよいよ放送！"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      { name: 'D4DJ First Mix',　data: '毎週金曜22時', pic: require("@/assets/akianime2020/d4j1.png"), isChecked: false, url: "https://anime.d4dj-pj.com/"
      , discription: "あの光景を、私たちは忘れない。\n \n 「ハッピーアラウンド！」が口癖の愛本りんく。\n 日本に帰国した彼女は、DJ活動が盛んな陽葉学園に転校する。\n そこで目にしたDJライブに感動し、明石真秀・大鳴門むに・渡月 麗を次々と巻き込んで、ついにはDJユニットを結成することに。\n Peaky P-keyやPhoton Maidenなど、学内のDJユニットとも交流しながら、\n りんくたちは大きなステージへと駆け上がっていく……！"
      , onairs: [{abemaTV: "abemaTV毎週土曜26時30分"}, {Amazon: "Amazonプライム毎週日曜日に配信"}]
      , painter: ''
      , painterimg: ''
      },
      ]
    }
  },
  methods: {
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.anime-discription-section{
  list-style: none;
  text-align: center;
  align-items: center;
  white-space: pre-line;
  max-width: 1280px;
}
.anime-discription-1{
  margin: 0px 100px;
  padding-bottom: 10px;
}
.anime-introduction{
  font-weight: bold;
  font-size: 20px;
  padding-top: 15px;
}
</style>
