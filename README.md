# Computer Organization E-Textbook
## Online Open Educational Resources (OER) / Zero Cost Textbook (ZCT)

|Link|Build Status|
|-|-|
|[Master Site](https://comp-org-etext.netlify.app/)|[![Netlify Status](https://api.netlify.com/api/v1/badges/f3989d12-377f-4c71-9d7f-9970711129b9/deploy-status)](https://app.netlify.com/sites/comp-org-etext/deploys)|
|[Dev Site](https://comp-org-etext-dev.netlify.app/)|[![Netlify Status](https://api.netlify.com/api/v1/badges/c805c9e1-1cb6-443b-b135-44b21528c680/deploy-status)](https://app.netlify.com/sites/comp-org-etext-dev/deploys)|
|[Doc Review Site](https://comp-org-etext-doc-review.netlify.app/)|[![Netlify Status](https://api.netlify.com/api/v1/badges/924c0833-cb75-495d-b875-f49bcf844bc7/deploy-status)](https://app.netlify.com/sites/comp-org-etext-doc-review/deploys)|

## Project
Create a set of online resources to replace current textbook for CS-131, Computer Organization at Allan Hancock

Use [VuePress](https://vuepress.vuejs.org/) Vue-based static site generator, [Markdown](https://daringfireball.net/projects/markdown/), and [Vue](https://vuejs.org/) interactive element to create an online, interactive, and searchable set of resources for college students pursuing a degree in Computer Science

Additionally, this project will be structures to make integration into other college Computer Science programs simpler and flexible

**Proposal**
## CS-131 Course Info:
Basics of computer Number Systems, Logic Operations, Computer Electronics from transistors to CPUs

Instruction Set Architecture (ISA) and Assembly Language Programming using the Little Computer 3 (LC-3) ISA emulator run on Windows PCs

Current Textbook: Patt & Patel. introduction to computing systems: from bits & gates to C & beyond. Second Edition. McGraw-Hill. ISBN-hardback: 978-0-07-246750-5 2003

Purchase: $150 (new) $112 (used). Rental $97 (new) $60 (used)

The current course structure is tied closely to the organization of the textbook. The textbook is organized such that students do not get to program in assembly language until the 6th week of class. The first 5 weeks are building foundational info, but no connection to programming until later. I feel using programming throughout the course would help reinforce the fundamentals with hands-on programming opportunities

## Proposal:
Create an updated, online textbook with links to OER and Creative Commons materials, include interactive elements, and make textbook and textbook build environment freely available

### Updated, Online Textbook
While the core Computer Organization technology has not changed in the last 20 years, the materials and information available online has grown. The current 2003 textbook lacks any links to online materials. It does not allow for interactive elements other than exercises at the end of each chapter. And, as a printed text, is not easily updatable, not is it searchable for keywords

Given the Internet and computers are now standard tools for modern students, an online textbook also makes the material more readily available

### OER and Creative Commons Materials
While I did not find an OER textbook that fits this course, there are many pieces that can be integrated or linked within an online textbook. This will provide students with different ways of presenting similar material

### Include Interactive Elements
An online textbook can be updated easily and can include elements that require students to stop and think about important concepts and ideas

Pages can include embedded videos to expand on the information being presented. Videos from other creators can provide another way of presenting or exploring a topic

### Make Textbook and Textbook Build Environment Freely Available
The online documentation framework I plan to use is VuePress (https://vuepress.vuejs.org/). It is a static website generator that incorporates Vue (dynamic, interactive) web page components. VuePress also supports plug-ins to support various web site capabilities (such as copy/paste elements, navigation options, and analytic data gathering)

A VuePress site is created using Markdown (simplified HTML syntax), style and theme configuration, plugin implementations, and Vue components. This is the Documentation Source

The VuePress site is built into a static web site that can be deployed to various hosting sites for student use

The Documentation Source will be available on GitHub to allow others to instructors to modify and deploy their own version of the documentation. Other instructors couple then deploy their modified documentation to their own web sites for their students to access

## Development Log
20220131 - Upgraded to VuePress 1.9.2 -> 1.9.7. Removed unneeded plugin installs (since they are built-in) [Out of the Box](https://vuepress.vuejs.org/plugin/#out-of-the-box)


20220130 - Completed overall structure of EText. Finalized page templates got Book, Section, Subsection, and Topic. Applied templates to all (I think) pages in EText section

Re-structures somewhat in Introduction and Foundations, and merged form fragmented content

20220122 - Starting with clean repo to facilitate coordinating with Doc Reviewer and Peer Reviewer. Reverted to VuePress 1.x as 2.x was to *betaish*

Established *master*, *dev*, and *docreview* branches, and created Netlify sites for each. This to establish a simple workflow for collaboration 

20211121 - Continuing to add structure and some content. Fixed issue w/ question components. They were not seeing global styles, so moved styles into <scope> blocks in each component. Will need to figure this out later

20211129 - Adding pages for SW development (Design, Debugging, and Comments) for use in class this semester. Added LC3 Directory for LC3-specific examples

Incorporating code examples with ```:::: code-block``` and ```@[code](./inlinecomments.asm)``` elements to display code from external files

20211003 - Switch to VuePress 2/Next. Was having trouble with sidebar under VP 1. Had to update how Vue components are registered and clean up some issues in Vue templates. Got a successful build on Netlify, so proceeding forward for now

20210927 - Working on creating layouts with Vue components and VuePress [Markdown Slots](https://v1.vuepress.vuejs.org/guide/markdown-slot.html#why-do-i-need-markdown-slot). So for I have not been able to read in .md files for the slots, but I did generate Layout_Unit.vue to create specific sections. Trying different styles, but I don't have an eye for that

20210926 - Re-creating Project from scratch. Abandoning https://github.com/MarkKozel/cs131_textbook.git to create new repo . Parts of cs1-1_textbook will be manually integrated into new project

Reverted to VuePress 1 as the beta is still a problem

Created basic VuePress site with images and styles from prototype site. Created new Netlify site w/ Auto Deploy from Github push

20210901 - CC ECHO Grant awarded for completion of COMP-142/CS-131 OER Course Material

         - Adding Jest fro Vue Component Testing. Will look into Cypress for E2E testing for CI/CD testing

20210804 - Added Download (DL) menu items w/ link to download files from /assets/download dir

20210711 - Adding LC-3 Getting Started Tutorial from Google Drive to here

20210522 - Moved repo to GitHub and deployed to Netlify. Firebase project still setup, but will likely abandon is as Netlify looks simpler for this project

Added *LC-3* dir under *textbook* (same level as *text* folder). The intent is to build all LC3-specific stuff here. If the course changes assembler tools, updating this text will be simpler (make new assembler folder, fill with content, and update links in *text* docs)

Added cool Netlify Badge (above) to show auto Build/Deploy status

## Resources Used:

[create-vuepress-site](https://github.com/vuepress/create-vuepress-site)

[VuePress Tutorial](https://vuepressbook.com/netlify.html#create-and-deploy-your-site-from-netlify)

[Damien Springuel's Vuepress + Firebase deployment](https://www.damien-springuel.ca/blog/posts/vuepress-firebase.html)

[Vuepress + Firebase deployment](https://vuepress.vuejs.org/guide/deploy.html#google-firebase)