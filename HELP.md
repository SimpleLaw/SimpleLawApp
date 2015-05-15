# How to Set Up a Workspace for SimpleLaw Development
### By [Matthew Huggins](https://github.com/mdhuggins)

This serves as a tutorial to help members of the SimpleLaw team set up an appropriate development environment. It is not written with anyone else in mind. **Be sure to follow this guide carefully and mindfully.** If you have any questions feel free to ask me.

### Table of Contents

0. [Create a GitHub Account](#0)
1. Set up GitHub on your PC
2. Clone the SimpleLawApp Repository
3. Install Meteor
4. Install a Good IDE/Editor
5. Start the Meteor Server
6. Using GitHub
7. Get Working!
8. Important Things to Know Before Working
  * Tutorials
  * Reference

<a name="0"></a>
## 0. Create a GitHub Account

If you don't have one already, [create a GitHub account](https://github.com/join). You must then tell me your username so that I can grant you access to the SimpleLawApp repository. Be sure to accept the request to join SimpleLaw.

## 1. Set up GitHub on your PC

We will be using [GitHub](https://github.com/) to organize our collaborative work on the new version of SimpleLaw.org. If you are very comfortable using the command line, or work on a Linux machine, you can [install the command line tools](https://help.github.com/articles/set-up-git/). *Be aware that this tutorial will not cover using the command line tools.* If you are using a Windows or Mac machine, **I would highly recommend using either [GitHub for Mac](https://mac.github.com/) or [GitHub for Windows](https://windows.github.com/)**. These are GUI-based clients that make things quite easy.

## 2. Clone the SimpleLawApp Repository

If you have been added to the SimpleLaw team (i.e. you've given me your username and accepted the request to join), you will be able to start working.

First, you will need to clone the SimpleLawApp repository. Either click on the "Clone in Desktop" link on the [repository page](https://github.com/SimpleLaw/SimpleLawApp), or in your GitHub desktop application click on the plus sign in the top left corner, choose clone and then select the SimpleLawApp repository. You will be able to choose where in your machine's filesystem the repository is stored.

## 3. Install Meteor

Meteor is an open-source web application development platform which allows us to quickly and cleanly build the new SimpleLaw. If you are using a Windows machine, [download the installer](https://install.meteor.com/windows). If you use a Mac or Linux machine, open the Terminal and execute the following command:

`curl https://install.meteor.com/ | sh`

## 4. Install a Good IDE/Editor

While you could edit source code in your PC's native text editor, you should use something better. There are many options, but here are a few I would recommend:

* [Atom](http://atom.io/) (My choice)
* [Sublime](http://www.sublimetext.com/)
* [Vim](http://www.vim.org/)
* [Xcode](https://developer.apple.com/xcode/) (Mac Only)

## 5. Start the Meteor Server

Open up the Terminal and navigate to the Simple_Law folder in the SimpleLawApp repository directory. If you don't know how to do this, here are some basic terminal navigation commands:

*Remember that the terms "directory" and "folder" are interchangeable.*

* `pwd` (Mac/Linux) - Display current directory
* `cd` (Windows) - Display current directory
* `cd someSubdirectory` - Move into subdirectory
* `cd ..` - Move up out of subdirectory
* `ls` (Mac/Linux) - List files/subdirectories in current directory
* `dir` (Windows) - List files/subdirectories in current directory

Once you are in the Simple_Law folder in the SimpleLawApp repository directory, execute `meteor`.

## 6. Using GitHub

GitHub allows us to effectively and seamlessly collaborate, and proper usage is essential for smooth development. There are two actions, among others, that you will be performing regularly.

The first is sync, which in the GitHub desktop clients can be found in the upper right corner. GitHub stores the most recent version of our code in the cloud, and in most cases it is imperative that you have the most recent version of the code on your computer. Syncing insures that you have the most recent version of the source code, so **you should sync often**.

The second is commit, which can also be found in the GitHub desktop client. After changes have been made to the code on your computer, committing updates the code in the cloud so that everyone can recieve the changes that you made. GitHub automatically checks for conflicts between your code and the code in the cloud so that things go smoothly. It is important that, **when you have made changes to the source code that are complete and free of bugs, you commit your changes**. Be sure to sync after committing so that your commit is merged with the code in the cloud.

## 7. Get Working!

You are now ready to start working! Make sure to be careful and diligent; being meticulous will save us from many issues in the future.

## 8. Important Things to Know Before Working

**It is of highest importance that you are familiar with the following, lest our beautiful site burn.**

### Tutorials

* [HTML & CSS](http://www.codecademy.com/en/tracks/web)
* [Javascript](http://www.codecademy.com/en/tracks/javascript)
* [jQuery](http://www.codecademy.com/en/tracks/jquery)
* [Meteor](https://www.meteor.com/try)

### Reference

* [HTML, CSS, Javascript, jQuery](http://www.w3schools.com/)
* [Meteor](https://docs.meteor.com/)
* [GitHub](https://help.github.com/)
