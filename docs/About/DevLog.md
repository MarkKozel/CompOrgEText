# Development Log
20241231 - Updated to vitepress 1.5.0. Fixed table spec non-compliance issues and tweaked T/F and MC question styles

20240818 - Updated to vitepress 1.3.3. Merged ViteConversion branch into master

20240613 - Updated to vitepress 1.2.3. Adder ver info to nav bar. Renamed *vitedocs* to *docs*

20240507 - Added Stack pages in Assembly section

20240407 - Updated to Vitepress 1.0,2, official release. Revamped About and CS131 Nav menu into 1 nested dropdown

20240112 - Committed to VitePress using version 1.0.0-rc.36. Converting all pages to VitePress

20231126 - Building VitePress version in separate *vitedocs* folder. Starting to build a new Getting Started set of pages to improve the first week of assembly

20230825 - Typo fixes

22020501 - Completed first draft. Ready for Peer Review for Grant

20220430 - Completing 80% draft. Coordinating with reviewers as part of grant activities

20220131 - Upgraded to VuePress 1.9.2 to 1.9.7. Removed unneeded plugin installs (since they are built-in) [Out of the Box](https://vuepress.vuejs.org/plugin/#out-of-the-box)

20220130 - Completed overall structure of EText. Finalized page templates got Book, Section, Subsection, and Topic. Applied templates to all (I think) pages in EText section

Re-structures somewhat in Introduction and Foundations, and merged form fragmented content

20220122 - Starting with clean repo to facilitate coordinating with Doc Reviewer and Peer Reviewer. Reverted to VuePress 1.x as 2.x was to *betaish*

Established *master*, *dev*, and *docreview* branches, and created Netlify sites for each. This to establish a simple workflow for collaboration 

20211121 - Continuing to add structure and some content. Fixed issue w/ question components. They were not seeing global styles, so moved styles into *scope* blocks in each component. Will need to figure this out later

20211129 - Adding pages for SW development (Design, Debugging, and Comments) for use in class this semester. Added LC3 Directory for LC3-specific examples

Incorporating code examples with ```:::: code-block``` and ```@[code](./inlinecomments.asm)``` elements to display code from external files

20211003 - Switch to VuePress 2/Next. Was having trouble with sidebar under VP 1. Had to update how Vue components are registered and clean up some issues in Vue templates. Got a successful build on Netlify, so proceeding forward for now

20210927 - Working on creating layouts with Vue components and VuePress [Markdown Slots](https://v1.vuepress.vuejs.org/guide/markdown-slot.html#why-do-i-need-markdown-slot). So for I have not been able to read in .md files for the slots, but I did generate Layout_Unit.vue to create specific sections. Trying different styles, but I don't have an eye for that

20210926 - Re-creating Project from scratch. Abandoning https://github.com/MarkKozel/cs131_textbook.git to create new repo . Parts of cs1-1_textbook will be manually integrated into new project

Reverted to VuePress 1 as the beta is still a problem

Created basic VuePress site with images and styles from prototype site. Created new Netlify site w/ Auto Deploy from Github push

20210901 - CC ECHO Grant awarded for completion of COMP-142/CS 131 OER Course Material. Adding Jest for Vue Component Testing. Will look into Cypress for E2E testing for CI/CD testing

20210804 - Added Download (DL) menu items w/ link to download files from /assets/download dir

20210711 - Adding LC-3 Getting Started Tutorial from Google Drive to here

20210522 - Moved repo to GitHub and deployed to Netlify. Firebase project still setup, but will likely abandon is as Netlify looks simpler for this project

Added *LC-3* dir under *textbook* (same level as *text* folder). The intent is to build all LC3-specific stuff here. If the course changes assembler tools, updating this text will be simpler (make new assembler folder, fill with content, and update links in *text* docs)

Added cool Netlify Badge (above) to show auto Build/Deploy status