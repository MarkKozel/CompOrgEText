const { description } = require('../../package')

module.exports = {
  title: 'CS 131 - Computer Organization',
  description: description,

  markdown: {
    linkify: true,
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
      md.use(require('markdown-it-include'), 'etext//');
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

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
        text: 'Assembly',
        link: '/Assembly/',
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
      '/Assembly/': [
        {
          title: 'Getting Started',
          path: '/Assembly/GettingStarted',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'GettingStarted/DownloadAndInstall',
            'GettingStarted/LC3Edit',
            'GettingStarted/LC3Simulate',
            'GettingStarted/HelloWorld',
          ],
        },

        {
          title: 'Commands',
          path: '/Assembly/Commands',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'Commands/CommandAnatomy',
            'Commands/ALUCommands',
          ],
        },
      ],
      '/EText/': [
        {
          title: 'Introduction',
          path: '/EText/Introduction',
          collapsable: true,
          children: [
            'Introduction/Abstraction',
            'Introduction/Algorithms',
            'Introduction/HardwareSoftware',
            'Introduction/Programming',
          ],
        },
        {
          title: 'Foundations',
          path: '/EText/Foundations',
          collapsable: true,
          children: [
            'Foundations/History',
            'Foundations/AnalogDigitalComputers',
            'Foundations/SpecificGeneralUseComputers',
            'Foundations/Turing',
            'Foundations/Shannon',
            'Foundations/vonNeumann',
          ],
        },
        {
          title: 'Number Systems',
          path: '/EText/NumberSystems',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            'NumberSystems/DecimalValues',
            'NumberSystems/BinaryValues',
            'NumberSystems/HexadecimalValues',
            'NumberSystems/Others',
            'NumberSystems/RepresentingNumbers',
            'NumberSystems/RepresentingNonNumbers',
          ],
        },
        {
          title: 'Logic/Digital Circuits',
          path: '/EText/LogicAndDigitalCircuits',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            'LogicAndDigitalCircuits/TruthTables',
            'LogicAndDigitalCircuits/TheTransistor',
            'LogicAndDigitalCircuits/BasicLogicCircuits',
            'LogicAndDigitalCircuits/DesigningCircuits',
            'LogicAndDigitalCircuits/ControlCircuits',
            'LogicAndDigitalCircuits/ArithmeticCircuits',
            'LogicAndDigitalCircuits/StorageCircuits',
          ],
        },
        // {
        //   title: 'Assembly Programming',
        //   path: '/EText/AssemblyProgramming',
        //   collapsable: true,
        //   sidebarDepth: 4,
        //   children: [
        //     'AssemblyProgramming/GettingStarted/',
        //     'AssemblyProgramming/Commands/',
        //     'AssemblyProgramming/ProgramFlow/',
        //     'AssemblyProgramming/BasicIO/',
        //     'AssemblyProgramming/Development/',
        //   ],
        // },

        // 'DownloadAndInstall/',
        // 'LC3Edit/',
        // 'LC3Simulate/',
        // 'HelloWorld/',

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
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        // 'ga': 'UA-219120655-1' // Main
        'ga': 'UA-219120655-2' // Dev
      }
    ],

    '@vuepress/search', {
      searchMaxSuggestions: 10
    },

    ['@vuepress/active-header-links'],

    ['@vuepress/plugin-back-to-top'],

    '@vuepress/medium-zoom', {},

    ['@vuepress/nprogress'],

    ['vuepress-plugin-smooth-scroll'],

    [
      '@vuepress/last-updated', {
        dateOptions: {
          timeZone: 'PST',
          timeZoneName: 'short'
        }
      }
    ],

    [
      'copyright', {
        noCopy: false, // the selected text will be non-copyable
        minLength: 40, // if its length is greater than 100
        authorName: "Mark F Kozel. Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)",
        // clipboardComponent: "./components/Clipboard.vue",
      },
    ],

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
    ["vuepress-plugin-container", {
      type: "note",
      defaultTitle: "Note:",
    }],
  ]
}
