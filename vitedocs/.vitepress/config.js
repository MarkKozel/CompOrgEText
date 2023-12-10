import { defineConfig } from 'vitepress'
const pkg = require('../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS-131 Textbook",
  description: "Computer Organization online textbook",
  lastUpdate: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/images/HeroImage.jpg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Assembly', link: '/Assembly/', activeMatch: 'Assembly/' },
      { text: 'About', link: '/About/', activeMatch: 'About/' },
      {
        text: 'Add\'l Info',
        link: '/AdditionalMaterials/',
        activeMatch: 'AdditionalMaterials/',
      },
      {
        text: `EText Ver ${pkg.version}`,
        items: [
          { text: 'Class Organization', link: '/CS131/ClassOrganization' },
          { text: 'CS-131 Course Info', link: '/CS131/CourseInformation' },
          { text: 'CS-131 Course Rational', link: '/CS131/CourseRational' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MarkKozel/CompOrgEText' }
    ],
    footer: {
      message: 'The contents of this E-Text were developed under an Open Textbooks Pilot grant from the Fund for the Improvement of Postsecondary Education (FIPSE), U.S. Department of Education. However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government.<br>Released under Creative Commons BY NC 4.0 International License',
      copyright: 'Copyright © 2022-present Mark Kozel'
    },

    sidebar: {
      '/Assembly/GettingStarted/': {
        base: '/Assembly/GettingStarted/', items: sidebarGS()
      },
      '/About/': { base: '/About/', items: sidebarAbout() },
      '/AdditionalMaterials/': [
        {
          text: 'Add\'l Info',
          collapsable: true,
          sidebarDepth: 3,
          base: '/AdditionalMaterials/',
          items: [
            // { text: 'Add\'l Info', link: '.' },
            { text: 'Links', link: 'Links' },
            { text: 'Videos', link: 'Videos' },
            '',
            '',
            'Videos',
          ]
        }
      ],
    },
  }
})

function sidebarGS() {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Install Tools', link: 'InstallTools' },
        { text: 'Source Code', link: 'SourceCode' },
        { text: 'Running', link: 'Running' },
        { text: 'Hello World Example', link: 'HelloWorld' },
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