import { defineConfig } from 'vitepress'
const pkg = require('../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS-131 Textbook",
  description: "Computer Organization online textbook",
  lastUpdate: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/images/HeroImage.jpg', width: 24, height: 24 },

    nav: nav(),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/MarkKozel/CompOrgEText' }
    ],
    footer: {
      message: 'The contents of this E-Text were developed under an Open Textbooks Pilot grant from the Fund for the Improvement of Postsecondary Education (FIPSE), U.S. Department of Education. However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government.<br>Released under Creative Commons BY NC 4.0 International License',
      copyright: 'Copyright © 2022-present Mark Kozel'
    },

    sidebar: {
      '/Assembly/': { base: '/Assembly/', items: sidebarAssembly() },
      '/About/': { base: '/About/', items: sidebarAbout() },
      '/AdditionalMaterials/': { base: '/AdditionalMaterials/', items: sidebarAddlInfo() }
    },
  }
})

function nav() {
  return [
    {
      text: 'Assembly',
      link: '/Assembly/GettingStarted/InstallTools',
      activeMatch: '/Assembly/'
    },
    {
      text: 'Add\'l Info',
      link: '/AdditionalMaterials/Videos',
      activeMatch: '/AdditionalMaterials/'
    },
    {
      text: `EText Ver ${pkg.version}`,
      items: [
        { text: 'Class Organization', link: '/CS131/ClassOrganization' },
        { text: 'CS-131 Course Info', link: '/CS131/CourseInformation' },
        { text: 'CS-131 Course Rational', link: '/CS131/CourseRational' },
      ]
    },
    {
      text: 'About',
      link: '/About/',
      activeMatch: '/About/'
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

function sidebarAssembly() {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      base: 'Assembly/GettingStarted/',
      sidebarDepth: 3,
      items: [
        { text: 'Install Tools', link: 'InstallTools' },
        { text: 'Source Code', link: 'SourceCode' },
        { text: 'Running', link: 'Running' },
        { text: 'Hello World Example', link: 'HelloWorld' },
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