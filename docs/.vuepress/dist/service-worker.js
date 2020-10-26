/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "a6c95480d3a8941dd673515045afd562"
  },
  {
    "url": "assets/css/0.styles.262f1967.css",
    "revision": "9bbdbec95c098b6fc8d1273eca1acead"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c176f64a.js",
    "revision": "05509f05ee9f7b84a449c3ae91f43c6f"
  },
  {
    "url": "assets/js/10.b0a3cbc3.js",
    "revision": "dd127a05cf34efc1ef790e496d73b284"
  },
  {
    "url": "assets/js/11.d71f8262.js",
    "revision": "65c0e5e992e0a09ebcfd75b753918fe5"
  },
  {
    "url": "assets/js/12.886352c2.js",
    "revision": "c96e85d66129c4e715fc9b9fe87c1def"
  },
  {
    "url": "assets/js/13.e1df1076.js",
    "revision": "439f8d15028abf3b17513cef9e50d932"
  },
  {
    "url": "assets/js/14.65e667f4.js",
    "revision": "6af38a16303079e471cf7ecdb53f4036"
  },
  {
    "url": "assets/js/15.7f2d43cf.js",
    "revision": "60fda4625825cba058577f33f20f1a0a"
  },
  {
    "url": "assets/js/16.0705f6c5.js",
    "revision": "cdd74511d8470085cf4654efc458c293"
  },
  {
    "url": "assets/js/17.3d23e1d9.js",
    "revision": "b456c7917e1712a88f26100c9dc7f4a8"
  },
  {
    "url": "assets/js/18.f61d54a8.js",
    "revision": "5e892ddd44608d53b189ac728d3639e3"
  },
  {
    "url": "assets/js/19.13afc82a.js",
    "revision": "b940c3197e0dab354400e6a08c25ec68"
  },
  {
    "url": "assets/js/2.5fc025de.js",
    "revision": "efac61703ff986175b94f7db39737112"
  },
  {
    "url": "assets/js/20.c3375912.js",
    "revision": "1dca90d77d29a85afd26ac4f3533134a"
  },
  {
    "url": "assets/js/21.0f7d7f49.js",
    "revision": "cb8ac9cbba49e524e85b36b1aaa1b6e4"
  },
  {
    "url": "assets/js/22.6df4d62a.js",
    "revision": "385fcbc0dba4084a3b21502f7c16b86d"
  },
  {
    "url": "assets/js/23.dd078a22.js",
    "revision": "8da2556cb01cc9614822468fb81cdedb"
  },
  {
    "url": "assets/js/24.7b1cb251.js",
    "revision": "52753ffb3d6eab9ad12fc0a280118e71"
  },
  {
    "url": "assets/js/25.4eb9f207.js",
    "revision": "ecdb593b8f5be24d0a8589aa262f569c"
  },
  {
    "url": "assets/js/26.d18352fb.js",
    "revision": "98421b9cc20cd3b74e297180d1e83340"
  },
  {
    "url": "assets/js/5.2e81eaa4.js",
    "revision": "4dd745a73a5d7d85c3f8da77cb3275cd"
  },
  {
    "url": "assets/js/6.d2c3e3d2.js",
    "revision": "7b9f249ceccb1197beb663d21e82a641"
  },
  {
    "url": "assets/js/7.2172fe9a.js",
    "revision": "c4f55623d328daa69456b6910e1d7d20"
  },
  {
    "url": "assets/js/8.2501b500.js",
    "revision": "a4f8dd1017776320ed81f81dcfde9f07"
  },
  {
    "url": "assets/js/9.673df97e.js",
    "revision": "717dda3bb0d7701abcb969e16714729c"
  },
  {
    "url": "assets/js/app.7fc317f0.js",
    "revision": "b9b276dd0d4862a4ba90a4a330516165"
  },
  {
    "url": "assets/js/vendors~flowchart.00e96170.js",
    "revision": "8a6a545ac5d40703940cf6525ffa5718"
  },
  {
    "url": "categories/index.html",
    "revision": "49d352a1add88d76f27ca602630e2488"
  },
  {
    "url": "categories/WebDevelopment/index.html",
    "revision": "92e03bb8e12b3f2587fd8424c2c8255a"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/ali/app_layout.png",
    "revision": "014d0cfed63df7dee08863aad495507d"
  },
  {
    "url": "img/backEnd/16301aac714a64ae.jpg",
    "revision": "4b9f2b0305ea9628b130cc37fa578ed3"
  },
  {
    "url": "img/backEnd/16301aac716e8f24.jpg",
    "revision": "ab3e61b413226ee4fce4b2907b44be04"
  },
  {
    "url": "img/backEnd/169b3411b74cfff1.jpg",
    "revision": "fc3440da635511133e5f02f7d60d9ffa"
  },
  {
    "url": "img/backEnd/169b3432b128105d.jpg",
    "revision": "2c728d709f7647f7547f70b14eef297c"
  },
  {
    "url": "img/backEnd/CountDownLatch.png",
    "revision": "806db4304c12b0c08ff64a5fa2ce15ac"
  },
  {
    "url": "img/backEnd/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
  },
  {
    "url": "img/docker/搜狗截图20180303145450.png",
    "revision": "b72094f2dc137f642b258d659ba7c5de"
  },
  {
    "url": "img/docker/搜狗截图20180303145531.png",
    "revision": "0192e016514ae6de37acb335483c6365"
  },
  {
    "url": "img/docker/搜狗截图20180303165113.png",
    "revision": "57658a824fedd4daf6c46fb28ddf9a2e"
  },
  {
    "url": "img/EChartsStudy/接入百度地图.png",
    "revision": "6536c736188c9ea30914de1c6f09e68c"
  },
  {
    "url": "img/EChartsStudy/柱+折线图.png",
    "revision": "012d1f48b8e15cf20e763ed5310210b0"
  },
  {
    "url": "img/EChartsStudy/迁徙图.png",
    "revision": "f9079e675926a79a70417595adf6ce6e"
  },
  {
    "url": "img/EChartsStudy/饼图.png",
    "revision": "5394c36784b787fd477693968c133693"
  },
  {
    "url": "img/essay/lmNRgg.png",
    "revision": "fd3cc2df1c32d13e911fc6349b4dc164"
  },
  {
    "url": "img/essay/lmUIQe.png",
    "revision": "b4204c68b6174c07220733dcaf165c3b"
  },
  {
    "url": "img/essay/lmUjW8.png",
    "revision": "1b4e086bec1e1c053c726cd7ba14b480"
  },
  {
    "url": "img/essay/lmUkxe.png",
    "revision": "ee27e01c1867214c85ea23a998707e7c"
  },
  {
    "url": "img/essay/lmUQG8.png",
    "revision": "4551e4806b560715c4910501cd4c756e"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/jvm/gc001.png",
    "revision": "9096a5c1aa708e99e4a0eb011c39f110"
  },
  {
    "url": "img/jvm/gc002.png",
    "revision": "04f03419851adab68f221464d5f236fe"
  },
  {
    "url": "img/jvm/gc003.png",
    "revision": "7c61067e76f98493875fb0318535706f"
  },
  {
    "url": "img/jvm/gc004.png",
    "revision": "fb57425f659c93e108b52848734291a5"
  },
  {
    "url": "img/jvm/gc005.png",
    "revision": "39041532371209775ba5bcf397604011"
  },
  {
    "url": "img/jvm/jvm001.png",
    "revision": "645747e72e6790bb9a70ae6166a61a33"
  },
  {
    "url": "img/jvm/jvm002.png",
    "revision": "f46c1bb2f52ba3826599cf6a5959313e"
  },
  {
    "url": "img/jvm/jvm003.png",
    "revision": "8cfa470daab1e9cde72e91a564182b95"
  },
  {
    "url": "img/jvm/jvm004.png",
    "revision": "53c75a6570d0adf443287266c0fe7efe"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/rabbitmq/mq001.png",
    "revision": "06c224d930a517e0c68f6db2032e4a07"
  },
  {
    "url": "img/rabbitmq/mq002.png",
    "revision": "4dee5cf620627c17c267d1a033d7ca86"
  },
  {
    "url": "img/rabbitmq/mq003.png",
    "revision": "ffb23d11d23ddbd85c04820b3d016cc6"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/redis02.png",
    "revision": "c48e246e53e5d501cd0fcbdf87258d33"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "c3cf8b537217303a4f5fd6f5f8161f3d"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "0428555c515acaa8c9b8320d2b9b0337"
  },
  {
    "url": "other/project.html",
    "revision": "b6cf289e945a903fe1f69062f5a6dcc7"
  },
  {
    "url": "tag/index.html",
    "revision": "0354d192b39cb74297743894c333dceb"
  },
  {
    "url": "tags/Informative/index.html",
    "revision": "329d99a451fe3b30d5d75fbd7cea9043"
  },
  {
    "url": "tags/Web Dev/index.html",
    "revision": "c38c2bdae94dd557b372006a5c0056aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "8016edb5def5ccfceeec43a68fdbe4e8"
  },
  {
    "url": "view/index.html",
    "revision": "541c247229bc6d71e71f4ffdef74daeb"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "9ff4ba42968d4128ca5cef241ff9ac35"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/essay/20201017.html",
    "revision": "82d4c03b95d841e29b3fa4f65346baa5"
  },
  {
    "url": "vuepress/belikebill.png",
    "revision": "6cbc9075e92ee8acab0d5baaacc4a53d"
  },
  {
    "url": "vuepress/dialup.gif",
    "revision": "7e0dfc0da5349ab3ed136b8b0e653238"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/koala.svg",
    "revision": "b41e221e67acecc590bd6cece18330bc"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "59e46eaf7201a24dcf4fa306c46de4b3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
