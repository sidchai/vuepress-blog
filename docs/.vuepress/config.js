const themeConfig = require('./config/theme/index.js')
const navConf = require('./config/nav/index')
const sidebarConf = require('./config/sidebar/index')
const pluginsConf = require('./config/plugins/index')
module.exports = {
  title: "sidchai's blog",
  description: '柴星の博客',
  port: '7777',
  locales: {
    '/': {
      lang: 'zh-CN',// 设置语言
    }
  },
  // dest: 'public',
  head: [
    ['link', {rel: 'icon', href: '/img/star.png'}],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "sidchai"}],
    ['meta', {name: 'keywords', content: '柴星の博客,sidchaiblog,vuepress-blog,sidchai'}],
    // ['script', { type: 'text/javascript', src: '/assets/js/baidu.js' }],
    ['link', {rel: 'stylesheet', href: '/assets/css/style.css'}],
    ["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"}],
    ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?a949a9b30eb86ac0159e735ff8670c03";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);

                // 引入谷歌,不需要可删除这段
                var hm1 = document.createElement("script");
                hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-169923503-1";
                var s1 = document.getElementsByTagName("script")[0]; 
                s1.parentNode.insertBefore(hm1, s1);
            })();

            // 谷歌加载,不需要可删除
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-169923503-1');
        `],
    ['script', {
      "data-ad-client": "ca-pub-6661696030972028",
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    }, ``],
    ['script', {src: "/assets/js/jq3.5.1.js"}, ``],
    ['script', {src: "/assets/js/mouse.js"}, ``],

  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    smoothScroll: true,
    locales: {
      '/': {
        recoLocales: {
          mode: {
            dark: '夜间',
            auto: '自动',
            light: '白天'
          }
        }
      }
    },
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    valineConfig: {
      appId: 'vqQqmO9XF3qYGaTmrDvtiqN5-gzGzoHsz',// your appId
      appKey: 'Ix7BVPtio2xmJjakbkQ1k6Sw', // your appKey
      recordIP: true,
      placeholder: '来都来了，玩会儿再走嘛。。。',
      visitor: true,
    },
    authorAvatar: '/img/avatar.jpg',
    // 最后更新时间
    lastUpdated: '上次更新时间', // string | boolean
    //repo: 'Mr-CHANX/mr-chanx.github.io',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    // 作者
    author: 'sidchai',
    // 项目开始时间
    startYear: '2020',
    nav: navConf,
    sidebar: sidebarConf,
    // logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 备案
    record: '鄂ICP备2020018174号-1',
    recordLink: 'http://www.beian.miit.gov.cn/',
    //cyberSecurityRecord: '', // 公安网备案号
    //cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=备案号',
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com/'
      },
      {
        title: 'CHANX\'s Blog',
        desc: '陈小白の博客',
        link: 'https://www.chanx.tech/'
      },
      {
        title: 'Java 全栈知识体系',
        desc: 'A simple and beautiful vuepress Blog & Doc theme',
        link: 'https://www.pdai.tech/'
      },
    ]
  },
  markdown: {
    lineNumbers: true
  },
  plugins: pluginsConf
}
