---
Title: [Homebrew - Basics Commands and Cheatsheet](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n)
Author: André Maré
Published: November 8th, 2018
Accessed: November 10th, 2020
Tags: #homebrew #command-line #terminal
---

[![HomeBrew](https://res.cloudinary.com/practicaldev/image/fetch/s--0HI0TVhO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.code2bits.com/wp-content/uploads/feature-image/feature-image-homebrew.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--0HI0TVhO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.code2bits.com/wp-content/uploads/feature-image/feature-image-homebrew.png)

Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple’s macOS operating system. It is known as the missing package manager for macOS.

Homebrew is written in the Ruby programming language and targets the version of Ruby that comes installed with the macOS operating system. Homebrew installs packages to their own directory (Cellar) and then symlinks their files into /usr/local.

[](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#install-homebrew-basics)Install Homebrew Basics
--------------------------------------------------------------------------------------------------------------

The best way to understand how to install Homebrew on macOS is to go to the homepage of Homebrew. Please follow the link below:

*   [Install Homebrew](https://brew.sh/)

[](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#homebrew-commands)Homebrew Commands
--------------------------------------------------------------------------------------------------

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#brew-help)Brew Help

It is important to understand how to get help on brew after you have successfully installed it. The following commands intent to provide assistance on how to use the brew command on macOS.  

    # Display the version of Homebrew.
    $ brew --version
    # Print Help Information
    $ brew help
    # Print Help Info for a brew command
    $ brew help <sub-command>
    # Check system for potential problems.
    $ brew doctor
    

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#brew-update)Brew Update

Part of the power of Homebrew is it makes it easy for you to keep your applications up to date, and others on a specific version. These set of commands are used to update Homebrew itself, and also the applications that was installed with it.  

    # Fetch latest version of homebrew and formula
    $ brew update
    # Show formulae with an updated version available
    $ brew outdated
    # Upgrade all outdated and unpinned brews
    $ brew upgrade
    # Upgrade only the specified brew
    $ brew upgrade <formula>
    # Prevent the specified formulae from being upgraded
    $ brew pin <formula>
    # Allow the specified formulae to be upgraded.
    $ brew unpin <formula>
    

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#brew-repositories)Brew Repositories

It is possible to add additional repositories to homebrew by making use of the _brew tap_ command. This allows you to install additional applications that does not form part of the default set of repositories.  

    # List all the current tapped repositories (taps)
    $ brew tap
    # Tap a formula repository from Github using https for tap https://github.com/user/homebrew-repo
    $ brew tap <user/repo>
    # Tap a formula repository from the specified URL
    $ brew tap <user/repo> <URL>
    # Remove the given tap from the repository
    $ brew untap <user/repo>
    

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#brew-cask)Brew Cask

Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.  

    # Tap the Cask repository from Github.
    $ brew tap homebrew/cask
    # List all the installed casks .
    $ brew cask list
    # Search all known casks based on the substring text.
    $ brew search <text>
    # Install the given cask.
    $ brew cask install <cask>
    # Reinstalls the given Cask
    $ brew cask reinstall <cask>
    # Uninstall the given cask.
    $ brew cask uninstall <cask>
    

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#brew-search-install-remove)Brew Search, Install, Remove

The following commands are used to search, list and install the different applications and tools that are available within the Homebrew repository.  

    # List all the installed formulae.
    $ brew list
    # Display all locally available formulae for brewing.
    $ brew search
    # Perform a substring search of formulae names for brewing.
    $ brew search <text>
    # Display information about the formula.
    $ brew info <formula>
    # Install the formula.
    $ brew install <formula>
    # Uninstall the formula.
    $ brew uninstall <formula>
    

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#brew-cleanup)Brew Cleanup

Remove stale lock files and outdated downloads for formulae and casks, and remove old versions of installed formulae.  

    # Remove older versions of installed formulae.
    $ brew cleanup
    # Remove older versions of specified formula.
    $ brew cleanup <formula>
    # Display all formula that will be removed (dry run)
    $ brew cleanup -n
    

[](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#tips-amp-cheatsheets)Tips & Cheatsheets
------------------------------------------------------------------------------------------------------

The Brew Cheatsheet commands can be downloaded from the link below. The PDF document contains a list of the brew commands that are frequently used. This cheatsheet document is not intended as a complete documented list of all commands and for that you should rather visit the official brew documentation page.

Download the PDF version here: [Homebrew Cheatsheet](https://www.code2bits.com/wp-content/uploads/cheatsheet-pdf/cheatsheet-homebrew.pdf)

[![Homebrew Cheatsheet Image](https://res.cloudinary.com/practicaldev/image/fetch/s--s5G3V2SE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.code2bits.com/wp-content/uploads/cheatsheet-image/cheatsheet-homebrew.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--s5G3V2SE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.code2bits.com/wp-content/uploads/cheatsheet-image/cheatsheet-homebrew.png)

[](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#installation-articles)Installation Articles
----------------------------------------------------------------------------------------------------------

This section contains a list of articles that explains how to make use of Homebrew to install the applications and command line tools on a macOS.

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#command-line-tools-and-applications)Command Line Tools and Applications

The list of tools and apps in this section makes use of the _brew install_ command.

*   [How to install ACK on macOS using Homebrew](https://www.code2bits.com/how-to-install-ack-on-macos-using-homebrew)
*   [How to install Apache Ant on macOS using Homebrew](https://www.code2bits.com/how-to-install-ant-on-macos-using-homebrew)
*   [How to install AWS CLI on macOS using Homebrew](https://www.code2bits.com/how-to-install-awscli-on-macos-using-homebrew)
*   [How to install cURL on macOS using Homebrew](https://www.code2bits.com/how-to-install-curl-on-macos-using-homebrew)
*   [How to install Git on macOS using Homebrew](https://www.code2bits.com/how-to-install-git-on-macos-using-homebrew)
*   [How to install Gradle on macOS using Homebrew](https://www.code2bits.com/how-to-install-gradle-on-macos-using-homebrew)
*   [How to install Maven on macOS using Homebrew](https://www.code2bits.com/how-to-install-maven-on-macos-using-homebrew)
*   [How to install Node.js on macOS using Homebrew](https://www.code2bits.com/how-to-install-node-on-macos-using-homebrew)
*   [How to install Vagrant on macOS using Homebrew](https://www.code2bits.com/how-to-install-vagrant-on-macos-using-homebrew)
*   [How to install Wget on macOS using Homebrew](https://www.code2bits.com/how-to-install-wget-on-macos-using-homebrew)

### [](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#development-applications)Development Applications

The list of applications in this section makes use of the _brew cask install_ command.

*   [How to install AppCode on macOS using Homebrew](https://www.code2bits.com/how-to-install-appcode-on-macos-using-homebrew)
*   [How to install Atom on macOS using Homebrew](https://www.code2bits.com/how-to-install-atom-on-macos-using-homebrew)
*   [How to install DBeaver (CE) on macOS using Homebrew](https://www.code2bits.com/how-to-install-dbeaver-community-on-macos-using-homebrew)
*   [How to install DBeaver (EE) on macOS using Homebrew](https://www.code2bits.com/how-to-install-dbeaver-enterprise-on-macos-using-homebrew)
*   [How to install DiffMerge on macOS using Homebrew](https://www.code2bits.com/how-to-install-diffmerge-on-macos-using-homebrew)
*   [How to install Docker on macOS using Homebrew](https://www.code2bits.com/how-to-install-docker-on-macos-using-homebrew)
*   [How to install Eclipse on macOS using Homebrew](https://www.code2bits.com/how-to-install-eclipse-on-macos-using-homebrew)
*   [How to install Firefox on macOS using Homebrew](https://www.code2bits.com/how-to-install-firefox-on-macos-using-homebrew)
*   [How to install Google Chrome on macOS using Homebrew](https://www.code2bits.com/how-to-install-chrome-on-macos-using-homebrew)
*   [How to install Insomnia on macOS using Homebrew](https://www.code2bits.com/how-to-install-insomnia-on-macos-using-homebrew/)
*   [How to install IntelliJ IDEA (CE) on macOS using Homebrew](https://www.code2bits.com/how-to-install-intellij-idea-community-edition-on-macos-using-homebrew/)
*   [How to install IntelliJ IDEA (UE) on macOS using Homebrew](https://www.code2bits.com/how-to-install-intellij-idea-ultimate-edition-on-macos-using-homebrew/)
*   [How to install iTerm2 on macOS using Homebrew](https://www.code2bits.com/how-to-install-iterm2-on-macos-using-homebrew)
*   [How to install Java on macOS using Homebrew](https://www.code2bits.com/how-to-install-java-on-macos-using-homebrew)
*   [How to install Postman on macOS using Homebrew](https://www.code2bits.com/how-to-install-postman-on-macos-using-homebrew)
*   [How to install Slack on macOS using Homebrew](https://www.code2bits.com/how-to-install-slack-on-macos-using-homebrew/)
*   [How to install Spring Tool Suite (STS) on macOS using Homebrew](https://www.code2bits.com/how-to-install-sts-on-macos-using-homebrew)
*   [How to install Sublime Text on macOS using Homebrew](https://www.code2bits.com/how-to-install-sublime-text-on-macos-using-homebrew)
*   [How to install Tower on macOS using Homebrew](https://www.code2bits.com/how-to-install-tower-on-macos-using-homebrew)
*   [How to install Virtualbox on macOS using Homebrew](https://www.code2bits.com/how-to-install-virtualbox-on-macos-using-homebrew)
*   [How to install Visual Studio Code on macOS using Homebrew](https://www.code2bits.com/how-to-install-visual-studio-code-on-macos-using-homebrew)
*   [How to install WebStorm on macOS using Homebrew](https://www.code2bits.com/how-to-install-webstorm-on-macos-using-homebrew/)

[](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n#conclusion)Conclusion
------------------------------------------------------------------------------------

I hope this article will help you to make use of Homebrew to install and manage application on your Mac. Feel free to share the Cheatsheet and comment on any issues you have in using the commands.