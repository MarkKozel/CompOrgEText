# Getting Started with this Project

## Development Technologies Used

The project uses [NodeJS (LTS version)](https://nodejs.org/en/download/), [VuePress 2.x](https://vuepress.vuejs.org/guide/getting-started.html), VueJS 2x (built in to VuePress), Markdown (built in to VuePress) git (latest version), [GitHub (online service)](https://github.com/), and [Netlify](https://www.netlify.com/) for basic development/modification workflows

[Project GitHub site](https://github.com/MarkKozel/Comp142-EText)

[Project Netlify Deployment Site](https://cs131.netlify.app/)

[Project Prototype Netlify Deployment Site](https://cs-131.netlify.app) - For Reference Only

Recommended dev tools are: [Visual Studio Code (Code)](https://code.visualstudio.com), Code extensions (Vetur, Code Spell Check, Microsoft Remote suite (if needed)), Modern Web Browser

## Up and Developing

These steps will set up your computer to edit and review changes live locally

Other will not be able to see these updates

> The following process is how the original project was developed. Other tools may be substituted

1. Pull this repo, which you can check off the list since you have this document
1. Install [NodeJS](https://nodejs.org/en/download/) on your system
1. Install [Code](https://code.visualstudio.com/Download) on your system
1. Start Code and open the project folder (Comp142-EText)
1. Start a terminal window in Code
    > *View > Terminal* -or- *CTRL + `*
1. Verify Node isn installed and accessible
    > ```node --version```
    >
    > verify you get a version number and not an error
1. Install Node and VuePress dependencies
    > ```npm install```
    >
    >This will take a minute ot so to complete
1. Start the development server
    > ```npm run dev```
    >
    >wait for *success* message
    >
    >Note the web address on this line (something like http://localhost:8080)
1. Open a web browser and enter the web address
1. You will, if everything worked, the opening page of the project

## Deploying

To make the materials available to others, the project source files make be rendered at a static site

The GitHub repo and Netlify site are associated so that a commit to GitHub causes a build to be triggered in Netlify

There is a good setup guide at [VuePressBooks](https://vuepressbook.com/netlify.html#deploying-a-vuepress-site-to-netlify)

Following the above guide, this project is modified on a PC. Changes are pushed to GitHub. Netlify is notified, and starts a Build. When the build is complete, the updates are deployed

Once this is initially setup and working, the standard update cycle is as follows:
1. Create, modify, remove files
1. Add changes to local git repo

    ```git add .```
1. Commit changes

    ```git commit -m '<your commit comment>'```
1. Push changes to remote repo

    ```git push```

This initiates the build and deploy processes on Netlify