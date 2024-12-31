import { defineConfig } from 'vitepress'
import markdownItContainer from 'markdown-it-container';
import GoogleAnalytics from 'vitepress-plugin-google-analytics';
const pkg = require('../../package.json')

export default defineConfig({
  title: pkg.title,
  description: pkg.description,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // Register custom container
      md.use(markdownItContainer, 'considerit', {
        render(tokens, idx) {
          const token = tokens[idx];
          if (token.nesting === 1) {
            // Extract the title after "::: considerit"
            const keyword = token.info.trim().split(' ')[0];
            const info = token.info.trim().slice(keyword.length).trim(); //remove the container name
            const title = info ? `<p class="custom-title">${info}</p>` : '';
            return `<div class="custom-considerit">\n${title}`;
          } else {
            return '</div>\n';
          }
        },
      });
    }
  },

  plugins: [
    GoogleAnalytics({
      id: 'G-9YS8KK0K1R'
    })
  ],

  themeConfig: {
    logo: '/images/HeroImage.jpg',
    siteTitle: "CS-131 Textbook",

    search: { provider: 'local' },

    outline: 'deep', //page outlines [2,6] https://vitepress.dev/reference/default-theme-config#outline
    aside: true, //show aside/outline https://vitepress.dev/reference/default-theme-config#aside

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
      }
    },

    Outline: 4,

    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MarkKozel/CompOrgEText' }
    ],
    footer: {
      message: 'The contents of this E-Text were developed under an Open Textbooks Pilot grant from the Fund for the Improvement of Postsecondary Education (FIPSE), U.S. Department of Education. However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government.<br>Released under Creative Commons BY NC 4.0 International License',
      copyright: 'Copyright © 2022-present Mark Kozel'
    },

    sidebar: {
      '/Introduction/': { base: '/Introduction/', items: sidebarIntroduction() },
      '/Foundations/': { base: '/Foundations/', items: sidebarFoundations() },
      '/Assembly/': { base: '/Assembly/', items: sidebarAssembly() },
      '/About/': { base: '/About/', items: sidebarAbout() },
      '/AdditionalMaterials/': { base: '/AdditionalMaterials/', items: sidebarAddlInfo() }
    },
  }
})

function nav() {
  return [
    {
      text: 'Introduction',
      link: '/Introduction/',
      activeMatch: '/Introduction/'
    },
    {
      text: 'Foundations',
      link: '/Foundations/',
      activeMatch: '/Foundations/'
    },
    {
      text: 'Assembly',
      link: '/Assembly/GettingStarted/InstallLC3Tools',
      activeMatch: '/Assembly/'
    },
    {
      text: 'Add\'l Info',
      link: '/AdditionalMaterials/Videos',
      activeMatch: '/AdditionalMaterials/'
    },
    {
      text: 'About this Resource',
      items: [
        {
          text: 'CS-131 Info',
          items: [
            { text: 'Class Organization', link: '/CS131/ClassOrganization' },
            { text: 'CS-131 Course Info', link: '/CS131/CourseInformation' },
            { text: 'CS-131 Course Rational', link: '/CS131/CourseRational' }
          ]
        },
        {
          text: 'About this textbook',
          items: [
            { text: 'CS131 Information', link: '/About/CS131Information' },
            { text: 'Funding', link: '/About/Funding' },
            { text: 'Colophon', link: '/About/Colophon' },
            { text: 'Using this project', link: '/About/GettingStarted' },
            { text: 'Git Build Mgmt', link: '/About/GitBuildMgmt' },
            { text: 'Contributors', link: '/About/Contributors' },
            { text: 'Dev log', link: '/About/DevLog' },
          ]
        },
        {
          text: `EText Ver ${pkg.version}`,
          items: [],
        },
      ]
    },
  ]
}

function sidebarAddlInfo() {
  return [
    {
      text: 'Additional Materials',
      collapsed: false,
      base: 'AdditionalMaterials/',
      items: [
        { text: 'Videos', link: 'Videos' },
        { text: 'Links', link: 'Links' },
      ]
    },
    {
      text: 'SW Development',
      collapsed: false,
      base: 'AdditionalMaterials/Development/',
      items: [
        { text: 'Formatting And Commenting', link: 'FormattingAndCommenting' },
        { text: 'Design', link: 'Design' },
        { text: 'Debugging', link: 'Debugging' },
      ]
    },
  ]
};

function sidebarIntroduction() {
  return [
    {
      text: 'Diversity',
      collapsed: false,
      base: 'Introduction/',
      items: [
        { text: 'Diversity in CS', link: 'CSDiversity' },
      ]
    },
    {
      text: 'History',
      collapsed: false,
      base: 'Introduction/History/',
      items: [
        { text: 'Prehistory', link: '01_Prehistory' },
        { text: 'Dawn', link: '02_Dawn' },
        { text: '1st Generation', link: '03_1stGen' },
        { text: '2nd Generation', link: '04_2ndGen' },
        { text: '3rd Generation', link: '05_3rdGen' },
        { text: '4th Generation', link: '06_4thGen' },
        { text: 'Modern Era', link: '07_Modern' },
      ]
    },
    {
      text: 'Concepts',
      collapsed: false,
      base: 'Introduction/Concepts/',
      items: [
        { text: 'Abstraction', link: 'Abstraction' },
        { text: 'Algorithms', link: 'Algorithms' },
        { text: 'Hardware Software', link: 'HardwareSoftware' },
        { text: 'Analog Digital Computers', link: 'AnalogDigitalComputers' },
        { text: 'Specific/General Use Computers', link: 'SpecificGeneralUseComputers' },
      ]
    },
  ]
};

function sidebarFoundations() {
  return [
    {
      text: 'Pioneers',
      collapsed: false,
      base: 'Foundations/Pioneers/',
      items: [
        { text: 'Turing', link: 'Turing' },
        { text: 'vonNeumann', link: 'vonNeumann' },
        { text: 'Shannon', link: 'Shannon' },
      ]
    },
    {
      text: 'Number Systems',
      collapsed: false,
      base: 'Foundations/NumberSystems/',
      items: [
        { text: 'Decimal Values', link: 'DecimalValues' },
        { text: 'Binary Values', link: 'BinaryValues' },
        { text: 'Hexadecimal Values', link: 'HexadecimalValues' },
        { text: 'Representing Numbers', link: 'RepresentingNumbers' },
        { text: 'Representing Non-Numbers', link: 'RepresentingNonNumbers' },
      ]
    },
    {
      text: 'Digital Circuits',
      collapsed: false,
      base: 'Foundations/LogicAndDigitalCircuits/',
      items: [
        { text: 'Introduction', link: 'index' },
        { text: 'Truth Tables', link: 'TruthTables' },
        { text: 'The Transistor', link: 'TheTransistor' },
        { text: 'Basic Logic Circuits', link: 'BasicLogicCircuits' },
        { text: 'Designing Circuits', link: 'DesigningCircuits' },
        { text: 'Control Circuits', link: 'ControlCircuits' },
        { text: 'Arithmetic Circuits', link: 'ArithmeticCircuits' },
        { text: 'Storage Circuits', link: 'StorageCircuits' },
      ]
    },
  ]
};

function sidebarAssembly() {
  return [
    {
      text: 'Quick Start',
      collapsed: false,
      base: 'Assembly/GettingStarted/',
      sidebarDepth: 3,
      items: [
        { text: 'Install LC3Tools', link: 'InstallLC3Tools' },
        { text: 'Using the LC3Tools', link: 'UsingLC3Tools' },
        { text: 'The Assembly Template', link: 'TheAssemblyTemplate' },
        { text: 'Loading Registers', link: 'LC-3_LoadingRegisters' },
        { text: 'ALU Instructions', link: 'LC-3_ALUInstructions' },
        { text: 'Subroutine Instructions', link: 'LC-3_SubroutineInstructions' },
        { text: 'Branch Instructions', link: 'LC-3_BranchInstruction' },
      ]
    },
    {
      text: 'The von Neumann Model',
      collapsed: false,
      link: 'vonNeumann',
    },
    {
      text: 'Instructions',
      collapsed: false,
      base: 'Assembly/Instructions/',
      items: [
        { text: 'Anatomy of an Instruction', link: 'Anatomy' },
        { text: 'Arithmetic & Logic', link: 'ALU' },
        { text: 'Branching', link: 'Branching' },
        { text: 'Memory Access', link: 'MemoryAccess' },
        { text: 'TRAP Routines', link: 'TRAPRoutines' },
        { text: 'Subroutines', link: 'Subroutines' },
      ]
    },
    {
      text: 'Program Flow',
      collapsed: false,
      base: 'Assembly/ProgramFlow/',
      items: [
        { text: 'Sequential', link: 'Sequential' },
        { text: 'Conditional', link: 'Conditional' },
        { text: 'Iterative', link: 'Iterative' },
      ]
    },
    {
      text: 'Input\/Output',
      collapsed: false,
      base: 'Assembly/IO/',
      items: [
        { text: 'General I\/O', link: 'GeneralIO' },
        { text: 'LC-3 I\/O', link: 'LC3IO' },
      ]
    },
    {
      text: 'The Stack',
      collapsed: false,
      base: 'Assembly/Stack/',
      items: [
        { text: 'Stack ADT', link: 'StackADT' },
        { text: 'Stack Implementation', link: 'StackImplementation' },
      ]
    },
  ]
};

function sidebarAbout() {
  return [
    {
      text: 'About This EText',
      collapsable: false,
      items: [
        { text: 'CS131 Information', link: '/CS131Information' },
        { text: 'Funding', link: '/Funding' },
        { text: 'Colophon', link: '/Colophon' },
        { text: 'Getting Started', link: '/GettingStarted' },
        { text: 'Git Build Mgmt', link: '/GitBuildMgmt' },
        { text: 'Contributors', link: '/Contributors' },
      ]
    }
  ]
}