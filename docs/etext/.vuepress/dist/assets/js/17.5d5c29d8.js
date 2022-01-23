(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{446:function(e,t,o){"use strict";o.r(t);var r=o(23),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"getting-started-with-this-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-this-project"}},[e._v("#")]),e._v(" Getting Started with this Project")]),e._v(" "),o("h2",{attrs:{id:"development-technologies-used"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-technologies-used"}},[e._v("#")]),e._v(" Development Technologies Used")]),e._v(" "),o("p",[e._v("The project uses "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS (LTS version)"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress 2.x"),o("OutboundLink")],1),e._v(", VueJS 2x (built in to VuePress), Markdown (built in to VuePress) git (latest version), "),o("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub (online service)"),o("OutboundLink")],1),e._v(", and "),o("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify"),o("OutboundLink")],1),e._v(" for basic development/modification workflows")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/MarkKozel/Comp142-EText",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project GitHub site"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://cs131.netlify.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project Netlify Deployment Site"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://cs-131.netlify.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project Prototype Netlify Deployment Site"),o("OutboundLink")],1),e._v(" - For Reference Only")]),e._v(" "),o("p",[e._v("Recommended dev tools are: "),o("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code (Code)"),o("OutboundLink")],1),e._v(", Code extensions (Vetur, Code Spell Check, Microsoft Remote suite (if needed)), Modern Web Browser")]),e._v(" "),o("h2",{attrs:{id:"up-and-developing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#up-and-developing"}},[e._v("#")]),e._v(" Up and Developing")]),e._v(" "),o("p",[e._v("These steps will set up your computer to edit and review changes live locally")]),e._v(" "),o("p",[e._v("Other will not be able to see these updates")]),e._v(" "),o("blockquote",[o("p",[e._v("The following process is how the original project was developed. Other tools may be substituted")])]),e._v(" "),o("ol",[o("li",[e._v("Pull this repo, which you can check off the list since you have this document")]),e._v(" "),o("li",[e._v("Install "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS"),o("OutboundLink")],1),e._v(" on your system")]),e._v(" "),o("li",[e._v("Install "),o("a",{attrs:{href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code"),o("OutboundLink")],1),e._v(" on your system")]),e._v(" "),o("li",[e._v("Start Code and open the project folder (Comp142-EText)")]),e._v(" "),o("li",[e._v("Start a terminal window in Code\n"),o("blockquote",[o("p",[o("em",[e._v("View > Terminal")]),e._v(" -or- "),o("em",[e._v("CTRL + `")])])])]),e._v(" "),o("li",[e._v("Verify Node isn installed and accessible\n"),o("blockquote",[o("p",[o("code",[e._v("node --version")])]),e._v(" "),o("p",[e._v("verify you get a version number and not an error")])])]),e._v(" "),o("li",[e._v("Install Node and VuePress dependencies\n"),o("blockquote",[o("p",[o("code",[e._v("npm install")])]),e._v(" "),o("p",[e._v("This will take a minute ot so to complete")])])]),e._v(" "),o("li",[e._v("Start the development server\n"),o("blockquote",[o("p",[o("code",[e._v("npm run dev")])]),e._v(" "),o("p",[e._v("wait for "),o("em",[e._v("success")]),e._v(" message")]),e._v(" "),o("p",[e._v("Note the web address on this line (something like http://localhost:8080)")])])]),e._v(" "),o("li",[e._v("Open a web browser and enter the web address")]),e._v(" "),o("li",[e._v("You will, if everything worked, the opening page of the project")])]),e._v(" "),o("h2",{attrs:{id:"deploying"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploying"}},[e._v("#")]),e._v(" Deploying")]),e._v(" "),o("p",[e._v("To make the materials available to others, the project source files make be rendered at a static site")]),e._v(" "),o("p",[e._v("The GitHub repo and Netlify site are associated so that a commit to GitHub causes a build to be triggered in Netlify")]),e._v(" "),o("p",[e._v("There is a good setup guide at "),o("a",{attrs:{href:"https://vuepressbook.com/netlify.html#deploying-a-vuepress-site-to-netlify",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePressBooks"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Following the above guide, this project is modified on a PC. Changes are pushed to GitHub. Netlify is notified, and starts a Build. When the build is complete, the updates are deployed")]),e._v(" "),o("p",[e._v("Once this is initially setup and working, the standard update cycle is as follows:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create, modify, remove files")])]),e._v(" "),o("li",[o("p",[e._v("Add changes to local git repo")]),e._v(" "),o("p",[o("code",[e._v("git add .")])])]),e._v(" "),o("li",[o("p",[e._v("Commit changes")]),e._v(" "),o("p",[o("code",[e._v("git commit -m '<your commit comment>'")])])]),e._v(" "),o("li",[o("p",[e._v("Push changes to remote repo")]),e._v(" "),o("p",[o("code",[e._v("git push")])])])]),e._v(" "),o("p",[e._v("This initiates the build and deploy processes on Netlify")])])}),[],!1,null,null,null);t.default=n.exports}}]);