const { description } = require('../../package')

module.exports = {
  title: 'CS 131 - Computer Organization',
  description: description,
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
      // '/EText/': [
      //   {
      //     title: 'EText Section',
      //     collapsable: false,
      //     children: [
      //       'Introduction/',
      //       'Foundations/',
      //       'NumberSystems/',
      //       'LogicAndDigitalCircuits/',
      //       'AssemblyProgramming/',
      //     ]
      //   }
      // ],
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
          children: [
            'NumberSystems/DecimalValues',
            'NumberSystems/BinaryValues',
            'NumberSystems/HexadecimalValues',
            'NumberSystems/Others',
          ],
        },
        {
          title: 'Logic/Digital Circuits',
          path: '/EText/LogicAndDigitalCircuits',
          collapsable: true,
          children: [
            'LogicAndDigitalCircuits/BasicLogic',
            'LogicAndDigitalCircuits/BasicCircuits',
            'LogicAndDigitalCircuits/LogicCircuits',
            'LogicAndDigitalCircuits/ControlCircuits',
            'LogicAndDigitalCircuits/DesigningCircuits',
          ],
        },
        {
          title: 'Assembly Programming',
          path: '/EText/AssemblyProgramming',
          collapsable: true,
          children: [
            'AssemblyProgramming/Commands/',
            'AssemblyProgramming/BasicIO/',
            'AssemblyProgramming/Development/',
            'AssemblyProgramming/ProgramFlow/',
          ],
        },
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
    ['@vuepress/plugin-back-to-top'],

    ['@vuepress/medium-zoom'],

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
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }

  ]
}
