[![Tre Ammatuna](https://miro.medium.com/fit/c/56/56/0*AvF2FSVw0CYoEqZA.jpg)](https://medium.com/@tretuna?source=post_page-----1befd4121ba8--------------------------------)

I get asked all the time about my setup on my MacBook Pro. From how to get things looking the way I have, to what apps I use, to how the hell I have managed to figure out how to go from starting a fresh format of my hard drive to a fully operating dev machine in a matter of hours (and I’m not talking about a simple backup restore either). I guess it’s just something I’ve come to figure out as I’ve done it far more times than I’d like to admit.

I’m a JavaScript-focused full stack web developer, which means I focus on JavaScript and Node tools. This guide is meant to be a step-by-step run through of the process I take to go from reformatting and installing MacOS on a clean drive and reinstalling all the applications I use pretty much on a daily basis. There will be lots of very opinionated parts of this post about different settings and applications. This is my personal setup and process that I have used countless times with great efficiency. You are welcome to deviate however you see fit in your own systems.

**Note: If you just want the software setup guide and don’t care about my ramblings that are about to happen, skip the next section. I promise I won’t be mad.**

**Second note: As of around August 2018, this guide is slightly outdated (imagine that, it was written a year ago). I do plan to update this very soon, however you may find some broken links or files missing from links such as the .zshrc I link to. I’m sorry, but until I have time to properly update this I don’t have a fix for that. For the zshrc I recommend looking at the other links I’ve provided for some insight.**

Before getting my latest 2017 MacBook Pro, I had what some people would say at this point is an old clunker… An early-2008 pre-unibody MacBook Pro. Think what you will about that thing, but after nearly ten years, it’s still sitting on the desk not too far from me now, running better than it did back then. I think the only thing it “needs” is a new battery, which would be about the 5th one I’ve bought for it over the years. Mind you, I’ve replaced the internal hard drive with an SSD, swapped the optical drive with a storage drive, maxed it out on RAM (sweet sweet 4 gigs… ha!), replaced the fans at least four times, logic board was replaced when it was just over three years old (thank you AppleCare for replacing it for free three months AFTER my coverage expired!), the screen has been replaced after my two year old thought it was a Lenovo Yoga, keyboard, trackpad, speakers, the list goes on. However, that was also the best thing about that laptop, “most” of those repairs, I did myself because on those machines, you could! I still have two others sitting around as well just for parts as people gave them to me as the logic boards died on theirs (told them to buy that AppleCare, but did they listen? Of course not).

That being said, it also did come with its fair share of problems that I had to mitigate, which is how I also got so damn good at wiping it clean and starting fresh. Maybe it was a leftover habit from my old days with Windows, but it always just seemed that it ran so much better if I did this process at least every six months. Not to mention when there were major OS updates and such I would always do a clean install (sometimes multiple if something went wrong). This was all before I became a software developer, which probably meant I went even lighter on the thing than before as an audio engineer (that laptop went through hell while on tour and going back and forth to concert venues/festivals/etc…).

When I became a software dev a whole new slew of things came up that I had to deal with. I was running that thing to the max every single day for a year before it finally happened… With MacOS Sierra, Apple stopped supporting it; it became legacy, the technology inside was just old. I couldn’t run Docker or VMs on it due to the age of the processor. Let’s not even get into RAM management while trying to run apps like Slack and Chrome. It was time… I had to upgrade.

I waited it out as long as I could, and finally now have the new 2017 MacBook Pro. I got this machine just as I started a new job at Microsoft (Isn’t it ironic? Don’t you think?) and of course, I was dead set on getting Windows working with it for my setup there as well. That’s a whole ‘nother blog post though which will probably come later on. Just know that due to my fun times with making that work I probably formatted and reinstalled both operating systems more times than I’d like to admit, I even managed to corrupt the hard drive on my MacBook within 10 days (Though the fault really falls with Windows and BitLocker there…), lucky for me Apple has their 14-day no questions asked return/replace period so I got a new one ( and will never use BitLocker on a BootCamp partition of Windows again… Ever…).

Anyway, this set me up for the process that I am now about to tell you all about. How to do a clean wipe of your Mac and reinstall everything you need from scratch to turn it into a Web Developing powerhouse in a matter of hours.

So, what are we looking at here? What kind of things do we have to look forward to? Well… Let’s just give a nice overhead view of this real quick.

1.  Make sure to have an up-to-date backup
2.  Make a bootable MacOS install USB drive
3.  Wipe entire machine clean
4.  Reinstall MacOS
5.  Set all main system preferences
6.  Install all apps needed in a fresh state
7.  Transfer all information needed from old machine
8.  Set up Visual Studio Code
9.  Start building cool shit

That’s it… It’s not that hard once you have the process down. In fact, Once you have the process, it stupid simple to do. The worst part of the whole process is mostly waiting for things to download and install (I’m looking at you XCode!).

So let’s get into it!

This should be the simplest part of the entire thing because you already have this… Right?

In fact, you already have backups of your important data in at least 3 separate locations… Right?

Seriously… If you don’t, then you don’t actually have your data, and you need to read this section, bookmark this page, go buy two backup drives (one portable and one desktop), either [ChronoSync](https://www.econtechnologies.com/chronosync/overview.html)/[Carbon Copy Cloner](https://bombich.com/), sign up for [Backblaze](https://www.backblaze.com/cloud-backup.html)/[Carbonite](https://www.carbonite.com/)/etc, and make backups now!

If you aren’t used to this and have no idea where to start with keeping good backups of your data, here’s a quick rundown of my backup system.

I use exactly what I just explained to you: a portable 2 TB drive (if you can afford a nice SSD drive here, it totally worth it! Just make sure this drive is at least twice the size of your computer’s internal drive), a desktop 4 TB drive, and [Carbonite](http://www.carbonite.com/) for online backups. This means my information is in four places at all times. If my internal drive fails, my portable drive is in my bag, if those both fail my desktop drive is at home, if my house burned down with them all inside all my info still lives in the cloud with Carbonite. I have a very, very slim chance of ever losing all my data and that’s what backups are about right? So here’s the breakdown of how I make those backups.

My 2 TB portable drive is partitioned into three separate drives and stays in my backpack:

1.  1 TB bootable clone of my MacBook Pro drive — Updated weekly
2.  990 GB Time Machine backup drive — Updated daily
3.  10 GB bootable High Sierra install drive — Updated every few months

My 4 TB desktop partition has four partitions:

All of the above (Time Machine may be updated weekly here though), plus a full 2 TB “other data” partition for stuff that doesn’t normally need to live on my MacBook

Carbonite runs in the background (when I want it to) and creates cloud backups of my files.

There, now you have a full-fledged serious backup solution that is regularly updated. Start doing this and after a month you won’t even realize you are doing it, it just becomes automatic! Let’s move on to what you came here for.

I could just forward you to [Apple’s official documents](https://support.apple.com/en-us/HT201372) on this subject, but I’ll copy it here for ease of having a single source of truth. You’re welcome! :)

> Download macOS from the App Store
> 
> 1\. Download macOS from the Mac App Store. It downloads to your Applications folder as a single ”Install” file, such as Install macOS High Sierra.  
> If you’re creating a bootable installer for [macOS High Sierra](https://support.apple.com/kb/HT201475), download from a Mac using High Sierra, Sierra 10.12.5 or later, or El Capitan 10.11.6. Enterprise administrators: Please download from Apple, not a [locally hosted software-update server](https://help.apple.com/serverapp/mac/#/apdA35B7054-9A0B-427B-9B90-8028A1F0A421).
> 
> 2\. When the installer opens, quit it without continuing installation.
> 
> Then use the ‘createinstallmedia’ command in Terminal
> 
> 1\. After [downloading the installer](https://support.apple.com/en-us/HT201372#download), mount the USB flash drive or other volume that you’re using for the bootable installer. Make sure that it has at least 12GB of available storage.
> 
> 2\. Open Terminal, which is in the Utilities folder of your Applications folder.
> 
> 3\. Type one of the following commands in Terminal. These all assume that the installer is in your Applications folder, and the name of the volume that you’re using for the bootable installer is MyVolume. If your volume is named differently, replace MyVolume with the name of your volume.
> 
> High Sierra:
> 
> sudo /Applications/Install\\ macOS\\ High\\ Sierra.app/Contents/Resources/createinstallmedia — volume /Volumes/MyVolume
> 
> Sierra:
> 
> sudo /Applications/Install\\ macOS\\ Sierra.app/Contents/Resources/createinstallmedia — volume /Volumes/MyVolume — applicationpath /Applications/Install\\ macOS\\ Sierra.app
> 
> El Capitan:
> 
> sudo /Applications/Install\\ OS\\ X\\ El\\ Capitan.app/Contents/Resources/createinstallmedia — volume /Volumes/MyVolume — applicationpath /Applications/Install\\ OS\\ X\\ El\\ Capitan.app
> 
> Yosemite:
> 
> sudo /Applications/Install\\ OS\\ X\\ Yosemite.app/Contents/Resources/createinstallmedia — volume /Volumes/MyVolume — applicationpath /Applications/Install\\ OS\\ X\\ Yosemite.app
> 
> Mavericks:
> 
> sudo /Applications/Install\\ OS\\ X\\ Mavericks.app/Contents/Resources/createinstallmedia — volume /Volumes/MyVolume — applicationpath /Applications/Install\\ OS\\ X\\ Mavericks.app
> 
> 4\. Press Return after typing the command.
> 
> 5\. When prompted, type your administrator password and press Return again. Terminal doesn’t show any characters as you type your password
> 
> 6\. When prompted, type `Y` to confirm that you want to erase the volume, then press Return. Terminal shows the progress as the bootable installer is created.
> 
> 7\. Quit Terminal when done. The bootable installer is now ready to use on a compatible Mac. [Learn how to choose it as your startup disk](https://support.apple.com/kb/HT202796).

Alright, now we have our official bootable MacOS install media drives. Let’s continue!

Here it comes, the big dive, from here there’s no turning back. We’re wiping this thing clean!!

1.  Plug in that fresh MacOS install drive, click on the Apple menu, and then restart. When your display goes blank, press and hold the option key until a screen appears with all your drives listed. Pick your new Install macOS High Sierra drive and hit return to begin booting from your external drive.
2.  When it boots up, open Disk Utility. While this step isn’t necessarily needed, I like to do it as just an extra measure for my own sake as I’m a control freak with this stuff.
3.  Click on your internal drive and then click on “erase”
4.  Set the name you’d like and the format. For High Sierra, I recommend APFS, for all others HFS+. I do NOT recommend selected encrypted formats here. We will set up encryption after the install. I have had strange bugs that Apple wasn’t able to explain when I encrypted before my install, so just to be safe, I never encrypt at this stage anymore.
5.  Close Disk Utility

Your hard drive is now clean and has nothing on it… Congratulations! There’s no turning back now!

Simple enough, click on “Install MacOS High Sierra” and go through the process. Grab yourself a fresh cup of coffee/tea, a snack, maybe even lunch if you wanted. This will take a little while, but it’s not too bad.

After the install, on the fresh initial boot, go through all the settings, but I will recommend that you do NOT restore your information from a previous backup/other machine/Time Machine when it asks. You are here for a clean install right? Well, that’s what we’re doing! Of course you can ignore what I’m saying here and do whatever you want, but honestly, I’ve had more hassle than it’s ever been worth doing all of this. I can set all of this up faster than the system can do a restore. (Seriously Apple… Why does it take so long to restore even just the system settings? I just don’t understand!)

So this part is highly subjective, but I’m going to go through the main parts you’ll want to look at and explain the way I have my own personal computer set up. This is also the section where we will set up Disk Encryption.

So, to start, click on the Apple menu and go to System Preferences and you’ll see this:

![Image for post](https://miro.medium.com/max/2684/1*Uzfy8JmzUfNPBSMSVDqUfQ.png)

Now, what I’ll normally do is just go through the primary ones here very quickly set my preferences back up. I pretty much know all of these by memory so this takes me all of about 2 minutes to do. I’m going to go over things that I change here. If I don’t list it, I don’t touch it at this point.

**General**: Use Dark menu bar and Dock

**Dock: Size**: Very small, Magnification on: Max, all options at bottom checked

**Mission Control**: All options on except “Group windows by application,” Dashboard Off, Hot corners (I get a lot of flack from other people using my computer for these, but I LOVE them!): Top Left: Mission Control, Top Right: App Windows, Bottom Right: Put Display to Sleep, Bottom Left: Desktop

**Users & Groups:** Turn OFF the “Guest User” account

**Trackpad:** Scroll & Zoom: Scroll Direction: Natural OFF (Here’s another one I get a lot of flack from people using my computer on. My question is when the hell did this become a thing? Moving my fingers up to scroll down on the trackpad? Umm… No, my trackpad is not a touchscreen and this is not “natural” for it. If I want to move down; I move my fingers down! Yes, I get a little annoyed with this debate, but hey, that’s just 25+ years of using computers engrained into my workflow.)

**Security & Privacy**: **BIG ONE HERE! Do NOT forget these!!**
---------------------------------------------------------------

**General**: Set password if you haven’t already and set to require password 5 minutes after sleep or screen saver begins

**FileVault**: This is where you turn on encryption! Do this NOW and make sure you know your password and save the key securely!

**Firewall**: Turn it on

Ok, that’s all the system preferences I usually set up at this point. Next up is Finder! So open up a fresh Finder window and hold Cmd + , to open the preferences.

**General:** I show everything and have New Finder windows open to Recents

**Tags:** I turn them all off here. This doesn’t mean you can’t use them; it just takes them off the Finder sidebar where I find they are more of just clutter than anything else.

**Sidebar:** Maybe this is why I see the tags as clutter, because here I show EVERYTHING else! Turn everything on, except Recent Tags!

That’s all here, close this window. Next up I like to set my desktop up a little. Click a blank space on the desktop and then hit cmd + j to bring up the desktop options.

**Icon Size:** 36 x 36

**Grid Spacing:** Max

**Text Size:** 12

**Label Positioning:** Right

Close that box.

That’s all for the initial OS settings and everything up to this stage. Next thing I will do is open the App Store and download any updates to the system that are there. After that, we’re ready to continue and start the fun part, installing all the software we love!

Alright, so you’ve got a fresh mac, you need all your personal data back! This is EASY! Just plug in that drive that you made the bootable backup on, open two finder windows, use one for your external backup and one for your internal drive, navigate to your user folder on both, then for each of the main data folders you have information in (Desktop, Documents, Downloads, Movies, Music, Pictures), navigate inside of the folder on your backup and it’s a simple select all/copy/paste:

In the backup folder select everything and copy: cmd + a then cmd + c

Click inside the folder in the internal drive and paste: cmd + v

Depending on how much data you have in each of these folders each of them could take a while. What I do is start one folder copying while I move to the next section and start installing all my applications. As each folder finishes, I come back to this, start another folder, then go back to installing all my apps. With this new 2017 MBP’s super fast SSD I can get all ~200gb of data transferred over before I’m finished installing everything!

Alright… So you’ve got your backups and a completely clean install of MacOS. Now you’re ready to start getting all of your apps and stuff back on here again. Well, let’ get to it!

Non-Developer focus apps
------------------------

Now, in my Applications folder, I have 97 items. It’s a decent amount; some are free, many are not. You may use different versions os many of them as well, to each their own. I’m going to list here my most important ones and a little bit of an order of how I install them. I always download all my applications fresh for new installs. This makes sure I have all the latest updated software on my computer.

So, first things first, let’s open up Safari and start downloading and installing! So, what’s first?

1.  Chrome… Yep… Sorry Safari, but I like my Chrome. I have all kinds of extensions and fun things here that are the main reason I love Chrome. Though, just like installing Windows, that could be a whole ‘nother blog post itself as well.
2.  1Password. We are about to start installing lots of software from lots of places, and many of those places and pieces of software require passwords. Well, 1Password is my preferred way of managing all of those. I’ve tried LastPass and FastLane and always end up right back here.

After these two are installed, I will install everything I have purchased from the Apple App Store. So open that up, go to “Purchased” and install everything there you want. Hint: If you ctrl + click (Right Click) on an item you don’t ever use anymore and just don’t want to see, you can hide it! I only show the items here that I want to use, so it’s super fast to just click down the list and install everything.

Here’s everything I have from the App Store:

[Jayson: Visual JSON Editor](https://itunes.apple.com/us/app/jayson-visual-json-editor/id1189824719?mt=12): Free, Exactly what it says

[MonoSnap](https://itunes.apple.com/us/app/monosnap/id540348655?mt=12): Free, Awesome screenshot/screen capture app!

[Gestimer](https://itunes.apple.com/us/app/gestimer/id990588172?mt=12): Paid, Quick menu bar timer app

[Slack](https://itunes.apple.com/us/app/slack/id803453959?mt=12): Free, Business/Team messaging

[Affinity Designer](https://itunes.apple.com/us/app/affinity-designer/id824171161?mt=12): Paid, Awesome vector graphics application, rivals Adobe Illustrator

[Yoink](https://itunes.apple.com/us/app/yoink-improved-drag-and-drop/id457622435?mt=12): Paid, Improved Drag and Drop for MacOS

[DaisyDisk](https://itunes.apple.com/us/app/daisydisk/id411643860?mt=12): Paid, Awesome visual display of what files are taking up all your hard drive space!

[XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12): **Make sure to get XCode installing from here ASAP!** XCode is a very large app, can take a very long time to download depending on your internet connection, and it is required for developing on a Mac!

From here I go pretty much in alphabetical order. Why? Because the list I go from is just screenshots of my applications folder in that order! However, lucky for you (and the future me whenever I do this next time around), I’m going to recreate that same list right here with links!

I’m also going to put an addition to all the apps that can be installed with Homebrew (which we’ll go over later). At the end of the description, I will add the command to use with Homebrew Cask to install the app if that’s the route you would like to go. I recommend looking through the list and then going with the route you prefer for installation.

1.  [Alfred 3](https://www.alfredapp.com/): Free with additional paid features (which I recommend), One of \*the\* pentacle Mac productivity applications. If you have tried this out, then I highly recommend you do that now. Alfred Snippets and Workflows are awesome! \*_alfred_
2.  [Amphetamine](https://github.com/x74353/Amphetamine): Free, App to prevent computer from going to sleep, aka Newer version of classic “Caffeine” Mac app.
3.  [Astro](https://www.helloastro.com/): Free, The best e-mail client I’ve found for Mac. \*_astro_
4.  [Avast Security](https://www.avast.com/en-us/mac): Free, Yes, Macs can get viruses, make sure you have protection. \*_avast-security_
5.  [Bartender](https://www.macbartender.com/): Paid, Awesome app for organizing your Menubar applications. If you are anything like me and have lots of apps up there (especially if you run iStat Menus), you NEED this application! \*_bartender_
6.  [Better Touch Tool](https://www.boastr.net/): Paid, Better gesture controls. \*_bettertouchtool_
7.  [Boom](http://www.globaldelight.com/boom/index.php): Paid, Mac volume booster. I use Boom 2, but there’s also a Boom 3d out now. \*_boom or boom3d_
8.  [Brave](https://brave.com/): Free, Internet browser with privacy in mind. \* _brave_
9.  [CheatSheet](https://www.mediaatelier.com/CheatSheet/): Free, One of my MUST have apps! Hold CMD in any app to see all its hotkeys! \*_cheatsheet_
10.  [ChronoSync](https://www.econtechnologies.com/chronosync/overview.html): Paid, My go to backup/clone utility. \*_chronosync_
11.  [CleanApp](http://www.syniumsoftware.com/cleanapp): Paid, Uninstaller and hard drive cleaning. \*_cleanapp_
12.  [Clean My Mac](https://macpaw.com/cleanmymac): Paid, Mac upkeep task management. \*_cleanmymac_
13.  [Discord](https://discordapp.com/download): Free, Chat application for teams/communities. \*_discord_
14.  [Docker](https://www.docker.com/get-docker): Free, Software containerization for developers. \*_docker_
15.  [Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/): Free, Gotta have all the browsers to test with! Plus Firefox has some great Dev Tools now; you should give it another go! I use the nightly version, or you can try the beta or developer focused ones. \*firefox for the **NON-**dev version. \*_firefox-<beta/developer-edition/nightly>_
16.  [FontForge](https://fontforge.github.io/en-US/): Free, Open source font editor. Note: Look at the instructions for this install, you will need XQuartz for this! \*_fontforge_
17.  [Gimp](https://www.gimp.org/downloads/): Free, Photoshop for cheap asses like myself. \*_gimp_
18.  [GitKraken](https://www.gitkraken.com/): Paid, Simply awesome visual Git client. \*_gitkraken_
19.  [Gitter](https://gitter.im/): Free, Developer chat client. \*_gitter_
20.  [Grammarly](https://app.grammarly.com/): Free and paid versions, Grammar checker. If you write a lot, this is a MUST have. Update — I now just install the browser extensions and not the full app.
21.  [iTerm](https://www.iterm2.com/downloads.html): Free, Best terminal emulator there is for Mac. We’ll go into this more later. \*_iterm2_
22.  [Keyboard Clean Tool](http://download.cnet.com/KeyboardCleanTool/3000-2094_4-75415546.html): Free, Disable the keyboard so you can wipe it down real quick, or if your 2-year-old insists it’s his turn to type… \*_keyboardcleantool_
23.  [Microsoft Office](https://products.office.com/en-US/?ms.url=office365com): Paid, It’s Microsoft Office… Need I say more? \*microsoft-office Note: I use Office 365, and I do not know if this would install that properly for me, I always use the main installer for this one.
24.  [Postgres.app](https://postgresapp.com/): Free, Easiest way to get a PostgreSQL server going.
25.  [Postman](https://www.getpostman.com/apps): Free, Developer tool for interacting with API endpoints. \*_postman_
26.  [Sketch](https://www.sketchapp.com/): Paid, Digital design toolkit for UI elements. \*_sketch_
27.  [Spotify](https://www.spotify.com/): Free and paid, Stream all the music!. \*_spotify_
28.  [Visual Studio](https://www.visualstudio.com/downloads/): Free, developer IDE for .NET applications. \*_visual-studio_
29.  [Visual Studio Code - Insider’s Edition](https://code.visualstudio.com/insiders/): Free, Possibly the best code editor out there. We’ll get into my setup for this later. The Insider’s Edition is the nightly beta build with the latest features. The stable version is released once a month with features that passed the test. I’ve never had problems with the Insider Edition, but if you want you can install it side-by-side with normal version, but I don’t have this done. \*_visual-studio-code<-insiders>_
30.  [VLC](https://www.videolan.org/vlc/download-macosx.html): Free, Media player for most file types, many that iTunes won’t play. \*_vlc_
31.  [Zoom.us](https://zoom.us/): Free and paid, Videoconferencing for businesses. \*_zoomus_

So, if you were to use Homebrew Cask to install these, your quick two stop shop of them would be (one for free apps and one for paid):

Free:

$ brew cask install \\  
    alfred \\  
    astro \\  
    avast-security \\  
    brave \\  
    cheatsheet \\  
    discord \\  
    docker \\  
    fontforge \\  
    gimp \\  
    gitter \\  
    iterm2 \\  
    keyboardcleantool \\  
    postman \\  
    spotify \\  
    visual-studio \\  
    vlc \\  
    zoomus

Paid:

$ brew cask install \\  
    acronis-true-image \\  
    bartender \\  
    bettertouchtool \\  
    boom \\  
    chronosync \\  
    cleanapp \\  
    gitkraken \\  
    sketch

Whew! Alright, we’re almost done here. The next app is a little something different. It’s called SetApp and bills itself as a subscription service for Mac apps, with “An app for every job, already on your Mac.” So, for $10/month you get access to the full versions of some pretty amazing apps. Here the list of things I use from there and how much the full version normally costs:

1.  [CleanMyMac/Gemini/Hider](https://macpaw.com/): $63, Two mac cleaning utilities and a file hiding utility. Now technically I own the full license to these as well. I got them in a bundle before SetApp was even a thing, but that doesn’t mean you don’t get savings here!
2.  [Declutter](https://macappstudio.com/declutter-desktop-organiser-mac-app/): Not available in US App Store, So here’s a cool app that makes “Smart Folders” on your desktop to keep things organized. The kicker with this and SetApp is you can’t even buy this app in the US! I don’t know how much it goes for outside the US, but here you can’t even get it (legally) without SetApp.
3.  [Dropshare](https://getdropsha.re/): $25, Utility that makes it easy to upload and share files online securely. You can drag and drop to it, it uploads to your service of choice (Their own, Google Drive, AWS S3, Backblaze and more), you get a password protected link to the file, and you can even fully customize the look of the splash page the other person sees with full HTML/CSS/JS control!
4.  [Expressions](http://apptorium.com/expressions): $5, Cool little app to play and test RegEx
5.  [iStat Menus](https://bjango.com/mac/istatmenus/): $10, Awesome app to display system information in the Mac menubar
6.  [Paste](https://pasteapp.me/): $10, Pretty amazing clipboard manager
7.  [PhotoBulk](https://photobulkeditor.com/): $10, Bulk resizing, optimizing, watermark, converting pictures, and more
8.  [Shimo](https://www.shimovpn.com/): $55, Good VPN client
9.  [Sip](http://sipapp.io/): $10, Awesome little app to get color codes from any color on your screen and manage color palettes
10.  [XMind](https://www.ulyssesapp.com/): $99, Best mind mapping app for the Mac
11.  [Yummy FTP Pro](https://www.yummysoftware.com/): $29, One of the best FTP clients for Mac

And that’s just what I use atm; there is a HUGE amount of other apps on here that all look great, I just don’t use them/haven’t had the chance to try them. However, what I already **do** use is software that would cost me $310 to purchase separately! At $10/mo, that’s 31 months, or near three years it would take me to pay for those apps. I think that’s worth it.

Developer-Focused Installs
--------------------------

Ok, that’s it for the apps we install like this… Now, we’re not done yet… Next is the truly developer-centric apps we need. Things like Git, Node, Zsh/Oh-my-zsh, and much more… Some of these will be installers you can download; some will be from the terminal (or iTerm since you’ve already downloaded that!).

First off, and most extensively, Sourabh Bajaj’s Mac Setup guide saved my skin when I found it last year, and it’s been getting even better. He’s an engineer at Google Brain with Tensorflow and Tensor Processing Units (TPU), aka a lot smarter and more advanced engineer than I am. He simply goes into a lot of things I don’t need, and he installs some things in a way I don’t prefer. However, he goes a little bit deeper with many of the developer environments. He goes into Sublime Text ( I use Visual Studio Code), JetBrains IDEs, Python, MySQL, C++, Java, Scala, Ruby, Go, Heroku, LaTeX, and some other things that I simply don’t need or use. Some of the commands you’ll find in this guide mimic his, because they are the same I use, because I got them from him… So, I just want to pay my dues where they are due… So if you are looking for a little bit more of those items I listed, I’d recommend heading over to his guide after you’re done with mine: [http://sourabhbajaj.com/mac-setup/](http://sourabhbajaj.com/mac-setup/)

I’m going to go over things at a high level and not dive into a lot of the details that Sourabh’s guide does. That’s because this is meant to be a very quick and dirty “Do this and get through it” guide and not a detailed description (it’s already getting long enough!). So, head over there after you’re done here for a little more detail if you would like.

First, make sure that XCode has finished. This must be installed first, and you have to open it for it to register on your system and the Comand Line Tools to be installed. This **MUST** be installed before you proceed past this point. So if it hasn’t finished downloading yet (That’s why we make sure to start it early as it can take a while!), you’ll have to wait for that. After it’s finished, open iTerm and copy/paste the following (without the $):

$ xcode-select --install

Also, if you didn’t go through and do it with FontForge, you should install [XQuartz](https://www.xquartz.org/) now.

After XCode is finished, we’ll install [Homebrew](http://brew.sh/), the popular Mac command line package manager. So open up iTerm and copy/paste the following (without the $):

$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Next, we need to tell the system to use the apps we install with Homebrew instead of the OS default versions. This is accomplished by adding them to our $PATH environment.

$ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash\_profile

Now, use cmd+t to open a new terminal tab and close the old one.

Note: If you chose to wait and install most of your MacOS apps from earlier via Homebrew Cask now is the time to go back and use those commands!

The following command will install a list of Mac Quick Look plugins that extend the default functionality of one of Mac’s best features.

$ brew cask install \\  
    qlcolorcode \\  
    qlstephen \\  
    qlmarkdown \\  
    quicklook-json \\  
    qlprettypatch \\  
    quicklook-csv \\  
    betterzipql \\  
    webpquicklook \\  
    suspicious-package

Next are iTerm2 and Oh-My-Zsh… With this, I deviate a bit from Sourabh’s guide. I pull more from Kevin Smets’ guide at [https://gist.github.com/kevin-smets/8568070#file-iterm2-solarized-md](https://gist.github.com/kevin-smets/8568070#file-iterm2-solarized-md).

Now, onward!!!

First, let’s get iTerm2 set up.

Open it up and go to Preferences > Profiles > Colors. Here’s where you can set up, you guessed it, your color scheme. There are dozens you can download, just click on Color Presets and then Visit Online Gallery or just go to [http://iterm2colorschemes.com/](http://iterm2colorschemes.com/). Find one that you want and download it (or just do like I do and download the full .zip file with all of them!) then go back to iTerm2 and back to Color Presets then click on Import… Select the theme (or themes) you want to install, open, and boom there they are! You just select which one you want from the drop-down.

Next, let’s get a powerline font. I highly recommend the fonts at [http://nerdfonts.com/](http://nerdfonts.com/). To be exact, I use their version of FiraCode and FiraMono. This is a great font and has font ligatures, if you like those, which I do…. Download and install the font of your choice, install it to your system, then go back to your iTerm2 profile and go to the Text section. Here you can change your font, font size, and choose if you want the ligatures.

Next, let’s get a few extra hotkeys set up, mainly for word and line jumps (as are default in MacOS but don’t work in terminal). Let’s go to Preferences > Profiles > Keys > Load Preset… > Natural Text Editing > Done!!

The last thing I’ll recommend in iTerm is the Dedicated Hotkey Window. It’s a “quake-style” dropdown terminal that shows/hide on a systemwide hotkey. For this we go to Preferences > Keys > activate Hotkey — Show/hide all windows with a system-wide hotkey > Create a Dedicated Hotkey Window. I set my hotkey for this to ctrl + opt + cmd + space.

Next, let’s install Zsh and [Oh-My-Zsh](https://github.com/robbyrussell/oh-my-zsh):

First, install Zsh with Homebrew:

brew install zsh zsh-completions

Then let’s install Oh-My-Zsh with cURL:

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

Next, install the Powerlevel9k theme, this is a fully customizable theme for Oh-My-Zsh, and it’s awesome:

git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k

There’s a great list of custom themes for Powerlevel9k that people made and have shared: [https://github.com/bhilburn/powerlevel9k/wiki/Show-Off-Your-Config](https://github.com/bhilburn/powerlevel9k/wiki/Show-Off-Your-Config)

I use mavam’s configuration which is about 2/3rd of the way down the list on that page. It looks like this:

![Image for post](https://miro.medium.com/max/2532/1*IPqnMC6HLHM70-4TFg-hBA.png)

mavam’s Powerlevel9k configuration

Now, I could go into all the details of setting up your .zshcon, but this is about getting up and going FAST, so I’m going to give you mine. I have it saved on my external and always just copy/paste it back over on my new installs, so now you can too!

You will need to edit your config at **~/.zshrc**

I have my config saved for you to download here: [https://www.dropbox.com/s/l14koa433zj4jk0/zshrc.md?dl=0](https://www.dropbox.com/s/l14koa433zj4jk0/zshrc.md?dl=0)

Download and open that file. Copy/paste the content into your .zshrc file, and then you just have to make sure to change the information at line 5 from **export ZSH=/Users/tretuna/.oh-my-zsh** to **export ZSH=/Users/<your home folder>/.oh-my-zsh** and you should be all set!

You’ll also want to install several extra plugins ([tree](http://sourabhbajaj.com/mac-setup/iTerm/tree.html), [fzf](https://github.com/junegunn/fzf), [ack](http://sourabhbajaj.com/mac-setup/iTerm/ack.html)) for Oh-My-Zsh and your terminal and while we’re at it, let’s install git and update vim as well by running:

brew install zsh-autosuggestions zsh-syntax-highlighting fortune tree fzf ack git vim

After that, you should be all set with iTerm2 and Oh-My-Zsh. Now, let’s finish setting up Git. You already installed it with the last command. First, let’s let it know who we are!

$ git config --global user.name "Your Name Here"  
$ git config --global user.email "your\_email@youremail.com"

Next, let’s cache your password, this is so you don’t have to type it every time you’re pushing to GitHub. We’re going to do this as described [here](https://help.github.com/articles/set-up-git).

$ git config --global credential.helper osxkeychain

Finally, let’s create you .gitignore\_global:

$ git config --global core.excludesfile ~/.gitignore\_global

And lucky for you, just like the .zshrc, I’m going to supply my custom .gitignore\_global for you as well! Just download, open, copy/paste over! Here you go: [https://www.dropbox.com/s/mp29jgc52os73u2/gitignore\_global.md?dl=0](https://www.dropbox.com/s/mp29jgc52os73u2/gitignore_global.md?dl=0)

The final piece of the puzzle I’m going to go through is Node. You can install it with a downloaded installer, or with Homebrew, however, I recommend using [Node Version Manager (NVM)](https://github.com/creationix/nvm) for this on a Mac. We can install this in terminal with cURL:

$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

Then you can download Node, select different versions to run, and more by using the NVM commands like:

$ source ~/.bashrc        # source your bashrc/zshrc to add nvm to PATH  
$ command -v nvm          # check the nvm use message  
$ nvm install node        # install most recent Node stable version  
$ nvm ls                  # list installed Node version  
$ nvm use node            # use stable as current version  
$ nvm ls-remote           # list all the Node versions you can install  
$ nvm alias default node  # set the installed stable version as the default Node

This will also install Node Package Manager (NPM) for you as well.

WHEW!!!! Alright! You’ve got it all! Woo-hoo!!!! That’s all the main stuff I use for my fresh install setup and will get you running with some great stuff moving forward! Now, let’s get all of your files back onto your machine.

Now, this section would be a bit more extensive and exhausting if it wasn’t for one amazing VSC plugin… Settings Sync!

Let’s open up Visual Studio Code!

Use hotkey cmd + shift + p to open up the Command Palette

Type Install and select “Extensions: Install Extensions”

Type “Settings Sync” in the search bar

Install Settings Sync

Reload the window

Open Command Palette again (cmd + shift + p)

Type Sync and select “Sync: Download Settings”

It will open a message at the top asking for a gist ID, enter the following and hit enter:

37ed407d708c30c0433541ef2a79e10f

If you want to look at the gist before you do this, I understand, here is the main link to it: [https://gist.github.com/TreTuna/27cdd043d50902de930b5b50c993d681](https://gist.github.com/TreTuna/27cdd043d50902de930b5b50c993d681)

This will overwrite your settings and install all the plugins that I use!

You can check them out by opening your settings (cmd + ,) and navigate to the extensions sidebar to see the extensions that were installed and add/remove what you want. This will get you up and going with a pretty nice setup in VSC though!

And there it is! You pretty much have my full MacOS setup now. I know this may be a bit slower to do for you this round, but believe me, once you do this once you’ll get the gist of it and be able to fly through the process!

Please do leave me any constructive comments or questions below about apps you’ve found or things you may find more efficient. I’m always looking for ways to optimize my processes and new apps that could help me out!

Thanks for hanging in there! Good luck!