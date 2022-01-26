const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CS 131 - Computer Organization',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/images/CourseLogo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'E-Text',
        link: '/etext/',
      },
      {
        text: 'LC3',
        link: '/LC3/',
      },
      {
        text: 'Course Info',
        link: '/CourseInformation/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Examples',
        link: '/VuePressTests/',
      },
      {
        text: 'VP Guide',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/EText/': [
        {
          title: 'Text',
          collapsable: false,
          children: [
            '',
            'Introduction/',
            'Foundations/',
            'NumberSystems/',
            'LogicAndDigitalCircuits/',
            'AssemblyProgramming/',
          ]
        }
      ],
      '/LC3/': [
        {
          title: 'The LC3',
          path: '/LC3/',
          collapsable: false,
          children: [
            '',
            'GettingStarted',
          ],
        },
        {
          title: 'LC3 Commands',
          path: '/LC3/Commands/',
          collapsable: false,
          children: [
            'Commands/',
            'Commands/ALU',
            'Commands/Branching',
            'Commands/MemoryAccess',
            'Commands/TrapRoutines',
            'Commands/Subroutine',
          ],
        }
      ],
      '/CourseInformation/': [
        {
          title: 'Course Info',
          collapsable: false,
          children: [
            '',
            'CourseOrganization',
            'CourseRational',
          ]
        }
      ],
      '/About/': [
        {
          title: 'About This EText',
          collapsable: false,
          children: [
            '',
            'Funding',
            'Colophon',
            'GettingStarted',
            'GitBuildMgmt',
          ]
        }
      ],
      // '/VuePressTests/': [
      //   {
      //     title: 'Examples',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'Examples',
      //       'Layouts',
      //       "Templates",
      //     ]
      //   }
      // ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    // 'vuepress-plugin-copyright', {
    //   noCopy: true, // the selected text will be non-copyable
    //   minLength: 40, // if its length is greater than 100
    //   authorName:
    //     "Mark Kozel. This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License",
    //   clipboardComponent: "../components/ClipboardComponent.vue",
    // },
    ['vuepress-plugin-container', {
      type: "considerit",
      before: (info) =>
        `<div class="custom-container considerit"> 
          <p class="custom-container-title considerittitle">Consider It: <em>${info}</em></p>`,
      after: () => "</div>\n",
    }],
    ['vuepress-plugin-container', {
      type: "readmore",
      before: (info) =>
        `<div class="readmore">
            <p class="custom-container-title readmoretitle">Read More: <em> ${info}</em></p>`,
      after: () => "</div>\n",
    }],
    ["vuepress-plugin-container", {
      type: "whatsgoingon",
      before: (info) => `<div class="whatsgoingon">
          <p class="custom-container-title whatsgoingontitle">What's Going On: ${info}</p>`,
      after: () => "</div>\n",
    }],
    ["vuepress-plugin-container", {
      type: "bythenumbers",
      before: (info) => `<div class="bythenumbers"><h4>By The Numbers: <u>${info}</u></h4>`,
      after: () => "</div>\n",
    }],
    ["vuepress-plugin-container", {
      type: "left",
      defaultTitle: "",
    }],
    ["vuepress-plugin-container", {
      type: "right",
      defaultTitle: "",
    }],
    ["vuepress-plugin-container", {
      type: "tip",
      defaultTitle: "Tip",
    }],
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }

  ]
}
