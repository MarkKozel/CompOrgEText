const { description } = require('../package')

module.exports = {
  title: 'CS 131 - Computer Organization',
  description: description,

  markdown: {
    linkify: true,
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
      md.use(require('markdown-it-include'));
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
    },
  },

  base: '/',
  cache: false,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@InstPath': 'components'
  //     }
  //   }
  // },

  themeConfig: {
    logo: '/images/CourseLogo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Introduction',
        link: '/Introduction/',
      },
      {
        text: 'Foundations',
        link: '/Foundations/',
      },
      {
        text: 'Assembly',
        link: '/Assembly/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Examples',
        link: '/VuePressTests/',
      },
    ],
    sidebar: {
      '/CS131/': [
        {
          title: 'CS-131',
          collapsable: false,
          children: [
            '',
            'CourseInformation',
            'CourseRational'
          ]
        }
      ],
      '/Assembly/': [
        '/Assembly/',
        {
          title: 'The von Neumann Model',
          path: '/Assembly/vonNeumann',
          collapsable: true,
          sidebarDepth: 4,
        },
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
            'GettingStarted/ProgramAnatomy',
          ],
        },
        {
          title: 'Instructions',
          path: '/Assembly/Instructions',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'Instructions/InstructionAnatomy',
            'Instructions/ALUInstructions',
            'Instructions/BranchingInstructions',
            'Instructions/MemoryAccessInstructions',
            'Instructions/TRAPRoutines',
            'Instructions/SubroutineInstructions',
          ],
        },
        {
          title: 'Program Flow',
          path: '/Assembly/ProgramFlow',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'ProgramFlow/Sequential',
            'ProgramFlow/Conditional',
            'ProgramFlow/Iterative',
          ],
        },
        {
          title: 'BasicIO',
          path: '/Assembly/BasicIO',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'BasicIO/StandardIO',
            'BasicIO/LC3IO'
          ],
        },
        {
          title: 'Development',
          path: '/Assembly/Development',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'Development/WhitespaceAndCommenting',
            'Development/Design',
            'Development/Debugging',
          ],
        }
      ],
      '/Introduction/': [
        '/Introduction/',
        {
          title: 'Diversity',
          path: '/Introduction/CSDiversity',
          collapsable: true,
          sidebarDepth: 4,
        },
        {
          title: 'History',
          path: '/Introduction/History',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'History/01_Prehistory',
            'History/02_Dawn',
            'History/03_1stGen',
            'History/04_2ndGen',
            'History/05_3rdGen',
            'History/06_4thGen',
            'History/07_Modern',
          ],
        },
        {
          title: 'Concepts',
          path: '/Introduction/Concepts',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'Concepts/Abstraction',
            'Concepts/Algorithms',
            'Concepts/HardwareSoftware',
            'Concepts/AnalogDigitalComputers',
            'Concepts/SpecificGeneralUseComputers',
          ],
        },
      ],
      '/Foundations/': [
        '/Foundations/',
        {
          title: 'Pioneers',
          path: '/Foundations/Pioneers',
          sidebarDepth: 4,
          collapsable: true,
          children: [
            'Pioneers/Turing',
            'Pioneers/Shannon',
            'Pioneers/vonNeumann',
          ],
        },
        {
          title: 'Number Systems',
          path: '/Foundations/NumberSystems',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'NumberSystems/DecimalValues',
            'NumberSystems/BinaryValues',
            'NumberSystems/HexadecimalValues',
            'NumberSystems/RepresentingNumbers',
            'NumberSystems/RepresentingNonNumbers',
          ],
        },
        {
          title: 'Logic/Digital Circuits',
          path: '/Foundations/LogicAndDigitalCircuits',
          collapsable: true,
          sidebarDepth: 4,
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
      ],
      '/About/': [
        {
          title: 'About This EText',
          collapsable: false,
          children: [
            'CS131Information',
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
