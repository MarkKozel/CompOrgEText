# Managing Project with Git

*Remote Repo* is the remote GitHub repo
*Local Repo* is the git repo on your computer
*Working Files* is the set of files you view and edit

## Initial Setup of GitHub Repo and Initialization
You will clone the repo from GitHub. Switch to the ```docs``` directory. And install the required node modules

1. ```git clone https://github.com/MarkKozel/CompOrgEText.git```
1. ```cd CompOrgEText/docs```
1. ```npm install```

To run the development server so you can review the site quickly:
```npm run dev```
Once the final ```success``` message appears, open a browser to the address shown in that message (http://localhost:8080)

Editing files in the *working files* and saving will trigger the dev server to restart, and saved changes will appear in the browser

If changes do not appear in the browser, try 1) pressing F5 in the browser or 2) stopping and restarting the dev server (ctrl-c in the terminal should stop it)


## Normal Workflow
1. ```git branch``` to show what branch you are currently on
1. ```git fetch``` to get an new branched from *remote repo* into your *working repo*
1. ```git checkout '<branch name>'``` to switch to *branch name*. If *branch name* has different files, they will be pulled into your *local repo* and *working* files

## Regular update of working files to GitHub
You will select files to **commit** to your *working repo*, then **push** them to *remote repo*

> for Master, Dev, and DocReview branches, a push will trigger a re-deploy of the site on Netlify

1. ```git status``` to display modified files
1. ```git add .``` to stage all files for commit
1. ```git commit -m "commit message"``` to commit stages files to *local repo* with "commit message" attached to each file
1. ```git push``` to push committed files to *remote repo*

> If you are committing several small updates, you can preform several ```add``` and ```commit``` operation, then ```push``` later. The history of commits and commit messages will remain separate

## Pull Request to Merge Other Branches into Master
For official merges that require review prior to pushing to Master branch, we will use the GutHub **Pull Request** mechanism to track major updates. Merging into master can be done via *command line git commands*, **Pull Requests** communicate the need for review

1. Login to (GitHub)[https://github.com/]
1. Open Repository
1. Click **Pull Request** 
1. Click **New Pull Request**
1. Select branches for *base* and *compare*
  - For Dev merge into Master, *base* is Master and *compare* is Dev
1. Review modification that will be made to the *base* branch in this **Pull Request**
1. If everything looks good, click the **Create Pull Request** button
1. On the next screen you can add comments that the admin will review when processing the request
1. Click **Create Pull Request** button

Admin will review request. They may add comments/questions. Eventually, that will pusg

## Forgot to Switch to a Branch Before Committing?
```git switch '<branch name>'``` with switch *local repo* branch w/o updating the *working files*

You can now add, commit, etc


## Merge Updates Between Branches
In a typical workflow, updated will be committed and pushed to a branch other than *master*. Once tested, the other branch will be merged into *master* for deployment

In this example, the user will update *Dev* branch, then merge into *master*

1. Make updates to Dev branch
1. Commit and Push as required
1. Test, check, validate Dev branch updates. This will likely include a **Pull Request** via GitHub
1. ```git checkout master``` to switch to master branch
1. ```git pull``` to ensure your *local repo* has the latest updated from GitHub
1. ```git merge Dev``` to bring changes from *remote repo* Dev branch into *local repo* master branch
1. fix and conflicts (need to figure this out)
1. ```git push``` to push *local repo* master changes to *report repo* master branch

This can be performed in the reverse order if you need to merge updates in master into Dev

An expected use of this would be to merge Dev or Master changes into DocReview branch to review latest changes. In this case, you would checkout DevReview branch, pull, then merge Dev into it