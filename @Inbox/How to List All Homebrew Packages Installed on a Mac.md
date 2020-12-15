---
Title: [How to List All Homebrew Packages Installed on a Mac](https://osxdaily.com/2018/10/20/how-list-all-homebrew-packages-installed-mac/)
Author: matt says:
Published: October 20th, 2018
Accessed: November 10th, 2020
Tags: #homebrew #command-line #terminal
---

![How to list all Homebrew packages installed on a Mac](https://cdn.osxdaily.com/wp-content/uploads/2018/03/install-homebrew-mac-1-610x338.jpg)

Want to quickly see all Homebrew packages installed on a Mac? You may already know [the path where Homebrew packages are installed to](https://osxdaily.com/2018/07/05/where-homebrew-packages-installed-location-mac/), but you don’t need to list a directory structure to get a list of Homebrew packages that have been installed in Mac OS.

Instead, you can issue a simple command to show a list of all Homebrew packages installed on a particular Mac. Additionally, you can issue a similar command to list all cask packages installed through Homebrew on the Mac too.

To be perfectly clear, we’re focusing on Homebrew packages that have already been installed on a particular Mac, not Homebrew packages that are simply available to install.

How to List All Homebrew Packages Installed on Mac
--------------------------------------------------

Homebrew includes a simple and convenient command to list all packages that have been installed through brew, the syntax is as follows:

`brew list`

Sample output may look something like the following, depending on what packages and their dependencies you have installed:

`$ brew list  
bash-completion gettext libidn2 pcre watch  
cask glib libunistring pcre2 wget htop links python nmap irssi node smartmontools libffi openssl sqlite`

You may have fewer or more brew packages installed, depending on your particular setup.

It can also be helpful to export the list of Homebrew packages that are installed into a text file, that can be done by redirecting the output of brew list into a plain text file like so:

`brew list > homebrewpackages.txt`

The output would be the same, but now its stored in the “homebrewpackages.txt” file which you could share with someone else or document for other purposes.

If you’re looking for some noteworthy packages, [check out this list of some of the best Homebrew packages available](https://osxdaily.com/2018/03/26/best-homebrew-packages-mac/) for Mac users. If you’re a developer you might also be interested in [getting node.js and nom](https://osxdaily.com/2018/06/29/how-install-nodejs-npm-mac/) along with [installing the updated Python 3 package on a Mac](https://osxdaily.com/2018/06/13/how-install-update-python-3x-mac/).

How to List All Cask Homebrew Packages on Mac
---------------------------------------------

The ‘brew list’ command covers just regular Homebrew packages, but you can also show a list of all cask packages too:

`brew cask list`

If you issue that command and nothing comes back, that simply means you have not installed any Mac apps through brew cask, which is not a terribly unusual situation as many Mac users just use Homebrew for command line tools and binaries and not for maintaining other Mac apps. Nonetheless cask remains a very popular method to easily install, maintain, and manage various Mac apps as well. It really just depends on the individual users particular setup.

As hinted in the introduction to this article, another method of finding what Homebrew packages are installed on a Mac by simply using the ls command to [show where Homebrew packages are installed](https://osxdaily.com/2018/07/05/where-homebrew-packages-installed-location-mac/):

`ls /usr/local/Cellar/`

The output of that command will be every package installed through Homebrew, as they always end up in that directory by default.

### How do I find what Homebrew packages are available to install?

Obviously we’re focusing on what Homebrew packages are currently installed on a Mac, but if you want a list of Homebrew packages that are available to install instead then you can use either of the following methods. The first approach uses a simple search command:

`brew search`

The output of ‘brew search’ will be every available Homebrew package that could be installed.

Or you can browse [the brew formula page here](https://formulae.brew.sh/formula/) for a full list of Homebrew packages that could theoretically be installed.

Do you know of other methods to get a list of all Homebrew packages installed on a Mac? Share your thoughts and experiences in the comments below!