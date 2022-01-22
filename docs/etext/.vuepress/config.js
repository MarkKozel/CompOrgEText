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
        text: 'Course Info',
        link: '/CourseInformation/',
      },
      {
        text: 'About',
        link: '/about/',
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
          ]
        }
      ],
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
  ]
}
