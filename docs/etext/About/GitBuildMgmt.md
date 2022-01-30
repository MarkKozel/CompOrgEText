# Managing Project with Git

*Remote Repo* is the remote GitHub repo
*Local Repo* is the git repo on your computer
*Working Files* is the set of files you view and edit

## Workflows

## Standard Workflow
This is a typical workflow for a work session. It covers getting updated with te\he latest updates from other contributors, making and testing mods, and pushing to GitHub

The examples here are for a Doc Reviewer to get current Dev updates, make modification, and push to DocReview branch

1. Check current branch. Switch to DocReview if needed
1. Pull from GitHub
1. Merge Dev branch changes into DocReview
1. Update files in DocReview branch
1. Commit and Push to GitHub on DocReview Branch
1. Login to GitHub adn create Pull Request for newly pushed DocReview update
  - This will be a request to merge DocReview changes into Dev branch
1. Done

some notes: 

1. ```git branch``` to show what branch you are currently on
1. ```git fetch``` to get an new branched from *remote repo* into your *working repo*
1. ```git checkout '<branch name>'``` to switch to *branch name*. If *branch name* has different files, they will be pulled into your *local repo* and *working* files
1. Modify files
1. Commit and Push modifications...next section

## Regular Update of Working Files to GitHub
You will select files to **commit** to your *working repo*, then **push** them to *remote repo*

> for Master, Dev, and DocReview branches, a push will trigger a re-deploy of the site on Netlify

1. ```git status``` to display modified files
1. ```git add .``` to stage all files for commit
1. ```git commit -m "commit message"``` to commit stages files to *local repo* with "commit message" attached to each file
1. ```git push``` to push committed files to *remote repo*

> If you are committing several small updates, you can preform several ```add``` and ```commit``` operation, then ```push``` later. The history of commits and commit messages will remain separate

### Pull Request to Merge Other Branches into Master
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

## Random GIT CLI commands

```git reset``` Unstage all files after a ```git add``` before a *commit*

```git reset path/to/file/file.ext``` unstage single file after ```git add```  before a *commit*

> Check effect with ```git status```

```git commit -amend``` to modify a mistake in the current *commit* action

> Such as realizing there is a typo in the text
>
>The commit file will open in an editor. Make updates, save, and close. The cli window will show the amend action is complete
>
>Proceed on with ```push``` if desired

