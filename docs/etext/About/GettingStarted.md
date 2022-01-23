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

### Initial Setup of GitHub Repo and Initialization
You will clone the repo from GitHub. Switch to the ```docs``` directory. And install the required node modules
1. Install git command-line tools from [git-scm](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Install NodeJS [NodeJS Download page](https://nodejs.org/en/download/)
1. Open a command windows and switch to the location you want the project folder to exist
1. ```git clone https://github.com/MarkKozel/CompOrgEText.git``` to pull master branch of repo to your system
1. ```cd CompOrgEText/docs``` to switch to the document root folder
1. ```npm install``` to install required NodeJS modules

### Start Dev Server
The built-in dev server allows you to render and view the entire site on a local web server on your system. This speeds up modification process by allowing you to modify and review without needs to update GitHub. You will start the dev server, the open a browser tab to view the site

1. In the command windows ```cd CompOrgEText/docs``` to switch to the document root folder
1. ```npm run dev``` to start the dev server
1. Once the final ```success``` message appears, open a browser to the address shown in that message (typically http://localhost:8080)

Editing files in the *working files* and saving will trigger the dev server to restart, and saved changes will appear in the browser

If changes do not appear in the browser, try 1) pressing F5 in the browser or 2) stopping and restarting the dev server (ctrl-c in the terminal should stop it)

### Installing VSCode to make Updates
You can use any editing environment to update and push changes. This section covers using VSCode

1. Install [Code](https://code.visualstudio.com/Download) on your system
1. Start Code and open the project folder (CompOrgEText/docs)
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
