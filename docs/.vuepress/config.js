const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {

    base: '/vnote/',
    title: "vnote",
    description: ' to feed my enthusiasm for writing ',
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
            // "src": "/js/MouseClickEffect.js"
        }]
    ],

    theme: 'reco',
    themeConfig: {
        nav,
        // sidebar: 'auto',
        sidebar,
        logo: '/vuepress/koala.svg',
        authorAvatar: '/vuepress/koala.svg',
        search: true,
        searchMaxSuggestions: 10,
        sidebarDepth: 2,
        // blogConfig: {
        //     category: {
        //         location: 2, // position in nav bar menu, default 2
        //         text: '分类' // default 'copywriting' category
        //     },
        //     tag: {
        //         location: 3, // The position occupied in the navigation bar menu, default 3
        //         text: '标签' // Default copy "label"
        //     }
        // },
        // Last update time
        lastUpdated: true,
        lastUpdated: 'last updated', // string | boolean
        // Author
        author: 'Anandita Vishnoi',
        // record number

    },
    plugins,
    markdown: {
        lineNumbers: true
    },

}