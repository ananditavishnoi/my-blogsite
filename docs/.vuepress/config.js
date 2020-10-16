const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
    // dest: 'gb-pages',//打包目录
    base: '/Aana blog/',
    title: "aana's blogs",
    description: '荷尽已无擎雨盖，菊残犹有傲霜枝。',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://infinitypro-img.infinitynewtab.com/custom-icon/8001de1jd3n68lbfnxxt564xvb0vl5.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }]
    ],

    //主题配置
    theme: 'reco',
    themeConfig: {
        nav,
        // sidebar: 'auto',
        sidebar,
        // logo: '/vuepress/head-fish.jpg', 
        authorAvatar: '/vuepress/head-fish.jpg',
        search: true,
        searchMaxSuggestions: 10,
        sidebarDepth: 2,
        blogConfig: {
            category: {
                location: 2, // position in nav bar menu, default 2
                text: '分类' // default 'copywriting' category
            },
            tag: {
                location: 3, // The position occupied in the navigation bar menu, default 3
                text: '标签' // Default copy "label"
            }
        },
        // Last update time
        lastUpdated: true,
        lastUpdated: '上次更新', // string | boolean
        // Author
        author: 'zhāngpéngjūn',
        // record number
        record: '京ICP备17067634号-1',
        // project start time
        startYear: '2019',
        //git地址
        repo: 'zpj80231/znote',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'vuepress',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页！',
        //评论
        valineConfig: {
            appId: 'xbT4pPXCWQju5T7GXC5fUFlF-gzGzoHsz',
            appKey: 'bofA5chNQ60p37Ih9sMffSI0',
            placeholder: '填写邮箱可以收到回复哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        },
    },
    plugins,
    markdown: {
        lineNumbers: true
    },

}