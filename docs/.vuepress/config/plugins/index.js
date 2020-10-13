const playerConf = require("./player")
module.exports = {
  '@vuepress/medium-zoom': {
    selector: 'img',
    options: {
      margin: 16
    }

  },
  '@vuepress/plugin-active-header-links': {},
  '@vuepress/plugin-nprogress': {},
  'flowchart': {},
  // "vuepress-plugin-auto-sidebar": {
  //     // collapsable: true,
  //     // titleMode: "titlecase",
  // },
  "vuepress-plugin-baidu-autopush": {},
  // 'sitemap': {
  //     hostname: 'https://www.chanx.tech'
  // },
  "dynamic-title": {
    showIcon: "/favicon.ico",
    showText: "(/≧▽≦/)欢迎回来！",
    hideIcon: "/favicon.ico",
    hideText: "(●—●)哦吼,不要走！",
    recoverTime: 2000
  },
  "reading-progress": {
    // 阅读进度条
  },
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: {
      content: "复制成功!"
    }
  },
  // "@vuepress-reco/vuepress-plugin-bgm-player": {
  //   // 简易播放器
  //   audios: playerConf,
  //   autoShrink: true
  // },
  'meting': {  // Github地址：https://github.com/moefyit/vuepress-plugin-meting
    meting: {
      server: "netease", // 音乐平台  可选值： "netease" | "tencent" | "xiami"
      type: "playlist",  // 资源类型（播放列表、单曲、专辑等）  可选值： "song" | "album" | "artist" | "playlist"
      mid: "5261808563"  // 资源 ID
    },
    aplayer: {
      lrcType: 0,  // 歌词解析模式 （0：禁用  1：字符串  3：url）
      volume: 0.4, // 播放器的音量
      //autoplay: true, // 是否开启自动播放
      mini: true,   // 是否开启迷你模式
      listFolded: true, // 是否折叠播放列表
      theme: '#0ae6ec'
    },
    mobile: {
      lrc: true
    }
  },
  "ribbon": {
    size: 90,     // width of the ribbon, default: 90
    opacity: 0.8, // opacity of the ribbon, default: 0.3
    zIndex: -1    // z-index property of the background, default: -1
  },
  "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
    // 看板娘
  }
}
