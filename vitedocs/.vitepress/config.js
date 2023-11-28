import { defineConfig } from 'vitepress'
const pkg = require('../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS-131 Textbook",
  description: "Computer Organization online textbook",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/images/HeroImage.jpg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Assembly', link: '/Assembly/', activeMatch: 'Assembly/' },
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
      '/Assembly/GettingStarted/': { base: '/Assembly/GettingStarted/', items: sidebarGS() }
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