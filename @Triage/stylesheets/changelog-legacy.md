
## Version 1.10.4
_22. August 2017_

* Opens changelog in Safari View
* Error messages are now displayed as notification banner
* Improved onboarding and premium screen
* The subscribe extension now also works when long pressing an RSS link in Safari.
* Reduced minimum preview image file size
* Properly changed Login to Safari View (Feedly)
* Fixes UI issue with load images setting
* Improved FeedHQ syncing

## Version 1.10.3
_3. August 2017_

* Article view in web mode now opens links to the same domain inline
* Also fades feed icon, read icon and preview image for read articles in the list
* Properly changed Login to Safari View (InoReader)
* Improved condensed article list layout
* Removed all ads from free version

## Version 1.10.2
_5. July 2017_

Fixed

* Article List Problems with enabled preview images
* Slightly increased minimum preview image size

## Version 1.10.1
_28. June 2017_

New

* More obvious dimming of read articles
* Option to hide article status icons in list
* Shows status icon and feed icons separately if both are enabled
* Tweaked predefined list styles

Fixed

* Crash on launch for some users
* Increased preview image resolution
* Prevent tiny preview images
* Fixed only downloading 1000 starred items (Inoreader)

## Version 1.10
_21. June 2017_


New

* Support for sync with FeedHQ
* You can now change the mobilizer per feed if the pages is displayed incorrectly (use the link at the bottom of the mobilized article)
* Automatic Mode for mobilizer... tries to automatically pick the best mobilizer service
* More mobilizer services available (Mercury, Graby, Goose and Boilerpipe)
* Support for Firefox as external browser

Changed

* Removed global article mode and mobilizer settings in favor of per feed settings.

Fixed

* The subscribe action is now also supported in 3rd party browser apps like Chrome, Firefox and iCab.
* Fixed a problem where allow all certificates wouldn't allow some certification.
* You can now mark all articles as read in searches (Feedbin)
* Improved inline video playback while fullscren on scroll is enabled.
* Fixed problem with toolbar in Fiery's integrated web view.
* Fixed potential crash in Today Widget

## Version 1.9.2
_22. March 2017_

New 

* You can now set a minimum interval between syncs
* Option to reset cookies on opening the web view
* Option whether the article list should be updated with new articles while it's open or not 

Changed

* Always use white background for websites - some websites appear broken otherwise
* The star article action now toggles the article state on and off
* Improved error logging (Wallabag)
* Improved syncing (Fever)

Fixed

* Fixed Article list text color after swipe to mark read
* Fixed a problem where not all articles were downloaded (Feed Wrangler)
* Fixed a bug, where the wrong group may be expanded (Feedly)
* Fixed a problem with pinboard settings
* Fixed a layout bug in the article list
* Fixed a bug where the today widget would display the wrong preview images

## Version 1.9.1
_20. Febuary 2017_

Changed

* No longer shows the loading indicator while in article mode
* Width of "normal" sidebar increased - especially on the larger iPad Pro
* Disabled autocorrect in URL and mail action editor

Fixed

* Fix unread count in article view off by one
* More reliable and stable article cache
* Fixed swiping on articles in the article list in quick succession
* Fixed Pinboard action tags and title options 

## Version 1.9
_8. Feburary 2017_

New

* Full support for bazqux (sync, subscribe, move feed, rename feed, unsubscribe, create folder, delete folder, rename folder)
* Full support for wallabag (sync, add, archive)
* Support for preview images supplied by the server (Feedly, Pocket, Wallabag)
* Preview images are now downloaded on demand, if preview images are enabled
* Autohide Sidebar has now the options always / only portrait / never
* Tapping the already selected article filter (favorites/unread/all) or article sort type (date/feed) now changes the sort order within that type from oldest first to newest first and vice versa
* Pulling up in the feed list now also marks all items read (if enabled in settings)
* The "Add To Fiery Feeds" extension is now also available within Fiery Feeds

Changed 

* Advanced Settings are now split into multiple groups
* Slightly increased the favicon size in the article list
* Much improved scroll performance in the article list

Fixed

* Auto Open First Article Option now actually works
* Fixed disappearing favicons in the article list
* Fixed a probleme where the statusbar would stay hidden
* Fixed article highlight in the article list
* Fixed sync status messages
* Fixed Pinboard title (null) when shared through the system share sheet
* Fixed typos

## Version 1.8.8
_21. January 2017_

New

* Option if the first article should be opened automatically
* Added Video/Image/Article groups to pocket accounts
* Added Iowan font to the selection
* New URL scheme fiery://resetSettings to reset global settings to defaults

Changed

* Tweaked a few default values
* Less obtrusive colors in the status bar
* Updated App Transport Security rules
* A few tweaks to the appearance and article settings panes
* Improved performance marking multiple articles as read
* No longer removes articles after a sync from the article list while it's open
* Removed patronage to avoid confusion with the premium subscription

Fixed

* Fixed swipe to show sidebar gesture (iPad)
* Fixed missing ... in long titles when only one line was displayed
* Fixed a problem updating the app badge after a background sync
* Now respects the 24h/12h time setting for voiceover as well
* Fixed problems with protocol-relative URLs

## Version 1.8.7
_3. January 2017_

New

* Support for mercury text extractor
* You can look at the log file in the about screen

Changed

* Changelog, Shortcuts, Acknowledgement and other info pages now also use the theme colors
* Clearing the image cache now also clears cached webpages in the app.
* Improved handling of broken images

Fixed

* Fixed a problem where images would not show up in an article
* Fixed a potential crash when marking articles below or above as read
* Fixed animation direction when using buttons to switch articles
* Fixed the appearance of preformatted blocks in articles
* Fixed layout issue with double height statusbar
* Fixed no folders showing up (Minimalreader)
* Fixed problem when the server response contained invalid characters
* Fixed problem with UTF-8 characters in the article view
* Fixed unread counter in article view

## Version 1.8.6
_21. Nov 2016_

New 

* Option if errors should display an alert. (Default off)
* Number of title lines is now configurablex
* Dismiss Article View On Leaving Article List option

Changed

* Improved horizontal article scrolling
* Dismisses the refresh indicator at the top of the list immediately

Fixed

* Fixed a bug where the article list would not correctly update the colors after changing the theme
* Fixed a bug where headers in the article list would be displayed multiple times
* Fixed a bug where the sync status in the article list would not be updated
* Fixed error when syncing with Inoreader
* Fixed a couple of potential crashes
* Slightly improved launch time

## Version 1.8.5
_7. Oct 2016_

New

* Dynamic Height option in advanced / lists
* Long press an article in the article list to quickly share it
* Added "Star Article" to the list of possible Quick Actions
* Automatically selects a theme, when newly installed
* Option to automatically hide the sidebar on opening an article
* Swipe from the side to show the sidebar if it's hidden
* Safari View Controller uses theme colors (iOS 10)

Changed

* Changed the mark article read keyboard shortcut to cmd+m for consistency
* Split advanced settings into more sections
* Scrollbar color in dark themes

Fixed

* Crash while syncing in background
* Improved caching images in background
* Fixed a problem with the separator lines in the article list
* Now displays article counts in a smaller font if necessary
* Scrolling at the very edge of the screen
* Fixed possible “Lost network connection error”
* Fixed notifications


## Version 1.8.4
_7. Oct 2016_

Fixed

* Crash when saving an image


## Version 1.8.3
_4. Oct 2016_

Changed

* Improved title only layout
* Slightly increased contrast in light theme
* The "More" and "Mark All Read" button at the end of the list highlights in the correct color
* Monospace font in code blocks in the article view

Fixed

* Authorizing message not disappearing (Feedly)
* Now displays the correct cache size once again

## Version 1.8.2
_18. Sept 2016_

New

* Support for tags (Inoreader)

Changed

* Increased contrast in the dark theme
* Faster sync after editing a feed
* Improved initial login (Feedly)
* Slightly improved article list performance 

Fixed

* AOL Reader sync
* A few potential crashes
* Preview image aspect ratio
* Layout issues

## Version 1.8.1
_18. Sept 2016_

Changed 

* Removed Readability sync and share action, as Readability is shutting down by the end of september
* Displays the sidebar width option in the article appearance options
* Now displays the syncing status in article list as well

Fixed

* Potential crash when sharing an article
* Potential crash when using keyboard shortcuts
* Black screen when using return on mark all read
* Fixed potential crash when subscribing to a feed
* Unsubscribing from feeds in smart streams (Feed Wrangler)
* Login with Evernote (sharing action)
* A few visual issues

## Version 1.8
_12. Sept 2016_

New

* Unsubscribe from feeds (Feedbin, Minimal Reader, Feedly, Feed Wrangler, TTRSS, Inoreader, NewsBlur, AOL Reader, The Old Reader)
* Renaming Feeds (Feed Wrangler, Inoreader, NewsBlur, AOL Reader, The Old Reader, Feedly, Minimal Reader)
* Subscribing to Feeds (Feedbin, TTRSS, Minimal Reader, Feedly, Feed Wrangler, Inoreader, Newsblur, AOL Reader, The Old Reader)
* Delete Folder (Feedbin, Minimal Reader, Feedly, Inoreader, AOL Reader, The Old Reader, Feed Wrangler)
* Create Folder (Feedbin, Minimal Reader, Inoreader, AOL Reader, The Old Reader, Feedly)
* Rename Folder (Minimal Reader, Inoreader, AOL Reader, The Old Reader, Feedly, Feed Wrangler)
* Add / remove feed from folder (Feedbin, Minimal Reader, Inoreader, AOL Reader, The Old Reader, Feedly)
* Update a single feed or folder server side (TTRSS)
* Update all feeds server side (TTRSS, Fever)
* Add new link (Instapaper, Pocket, Readability)
* Article appearance settings screen is no longer fullscreen (iPhone)
* Subscribe via URL scheme fiery://subscribe/{url}
* Pull the  article list up to mark all read
* Option to set username/password for additional HTTP auth (Fever, TT-RSS)
* New sidebar width option (Small, Normal, Large)
* Text alignment can now be set to right as well
* Downloads starred articles (tt-rss)
* New About Screen in settings
* New Action Extension (subscribe or add urls from anywhere)
* New Shortcut: Shift + Space to scroll up in the article view
* New Shortcuts: CMD + 1, CMD + 2, CMD +3 to change the article view mode
* New Share Selection menu item in article view
* Preview images now also appear in the today widget

Changed

* Moved Acknowledgements into the app
* Redesigned pull to refresh
* Article View Mode: "Last Selected" works now per feed
* The "Show Feed Icon" option now affects the feed list as well
* The keep starred articles option is now strictly yes or no
* Improved the article list layout
* Updated today widget for iOS 10
* Darker Launch Screen (fits better with the dark theme)

Fixed

* Scrolling with keyboard shorts not reaching the end of the article
* URL actions no longer open the in app browser for http links
* Article list layout with 1 preview line

## Version 1.7.3
_27. August 2016_

Fixed

* Improved AOL Reader sync
* Improved Inoreader sync
* No longer opens the webpage on long pressing a link in an article


## Version 1.7.2
_09. August 2016_

New

* Added Fiery Feeds' text extractors as options in textmode (Formatted, Text)
* Added option to always display the article count 

Changed

* Switched to OAuth (Inoreader)
* Displays the article date in text mode
* Adjusted colors in the black and dark theme 

Fixed

* Improved favicon search
* Fixed sharing to pocket with in included action
* Fixed a problem when syncing with two accounts on one ttrss server
* Fixed a problem where an article's read status was not displayed correctly
* Fixed auto-opened article not being displayed correctly
* Caught a potential crash with readability
* Fixed opening webpages on a future OS

## Version 1.7.1
_16. July 2016_

New

* Text mode settings accessible in article appearance

Changed

* Improved text mode in article view
* Removed text mode from web view
* Removed Google mobilizer

Fixed

* Patronage In App Purchases
* Fixed a rare problem with the article list layout
* Article view (opened via today widget) disappearing after dismissing image view
* Crash when sharing an article (when there is a user action without name)
* Article view no longer switches to default view mode after sharing
* Auto opening first article, if no article is open (iPad)
* Layout problem in the article view
* Loading favicons (TT-RSS)

## Version 1.7
_7. July 2016_

New

* Inline web and readability view in article view
* Added option to become a patron (in settings)
* Option to hide feed title and time
* Separate setting for the author / time text size in the article view
* Global text size presents (Small, Regular, Large, Extra Large)
* Option to display favicons on unread articles

Changed

* Tweaked the default settings for text sizes a bit
* Improved article view performance
* Improved article list scroll performance
* Simplified interface settings, moved everything else to the 'advanced' tab
* Combined fullscreen on scroll settings (web, article) into one
* The list of shortcuts is now also localized

Fixed

* An 400 error when syncing (Feedbin)
* Not syncing on launch after restart
* Not marking articles with a published date in the future as read when marking all read
* Text Selection in Article View
* Only mark articles read on scroll if article list is visible
* Downloading all unread articles (tt-rss)
* A bug where the sidebar whould stay black after exiting fullscreen
* A crash when authentication with Pocket while offline
* Potential crashes

## Version 1.6.3
_12. Mai 2016_

New

* Spacebar shortcut to scroll down in web view (not safari view)
* Right arrow shortcut to expand groups in the folders list

Changed

* Updated alert view design
* Voiceover with on/off switches

Fixed

* Login with Pocket
* "Not connected to the internet" message on launch
* Tags in main list (Pocket, Instapaper)
* Problem where the wrong article would be displayed
* Not correctly updating the article counts while "skip article list" was enabled
* Single feeds are no longer skipped when navigating with the keyboard
* Crash when syncing with no remaining articles (Pocket)
* Potential crash when navigation with the keyboard
* Potential crash while syncing (Inoreader)

## Version 1.6.2
_18. April 2016_

New

* Now requires iOS 9 and up
* Ability to mark all articles older than 1 month / week / day as read
* Discoverability titles for keyboard shortcuts
* Article list title size option
* Redesigned article list
* Fiery's sharing actions are now available in the Safari webview
* Keyboard Shortcut (Space) to scroll content
* User keyboard shortcuts (up, down, enter) to navigate in accounts and groups

Changed

* Updated to a more modern network framework
* Pushing read articles to the server
* Arrow key shortcuts now work without command modifier
* Mute switch no longer mutes youtube videos
* The system sharing sheet and safari view controller are now enabled by default
* Avenir Next uses bolder fonts
* Now displays the progress while downloading articles (Pocket, Instapaper, Readability)
* Only displays error messages for the selected account
* Removed footnote popups, full width images for performance
* Slight treshold before swiping between articles
* URL and mail activities are only shown if all used elements are available
* Gives a warning if trying to sync while offline
* Cmd+w instead of esc for going back
* Alphabetical sorting is now case insensitive

Fixed

* Removes html from titles and css from the summary in the article list
* The separator between a heading and content
* A problem when preview images where enabled and the number of preview lines set to zero
* 1Password login with newsblur
* A few potential crashes
* Error message when Instapaper failed to parse a site
* Long presses on links or images trigger before removing the finger (again)
* Keyboard Shortcuts now work when an article is opened from the today widget
* Changed the order of shortcuts in the overlay
* Swipe to mark as read in article list
* Keyboard not showing up for editable settings
* UI blocking while Fiery was caching articles
* Opening URL Activities from Safari View Controller
* Update article list when the sync finished (even while open)

## Version 1.6.1
_1. February 2016_

Changed

* Logging when a network error happens

Fixed

* A crash when opening a link in safari view controller using the sharing sheet
* Not all sharing activities showing up in the sharing sheet
* Quick share not working
* A few potential crashes

## Version 1.6
_28. January 2016_

New

* Sync with Instapaper
* Sync with Readability
* Sync with Pocket
* Sync with Tiny Tiny RSS

Changed

* Updated today widget
* Performance when scrolling in the article list with preview images on
* Swiping left/right in the article list
* Combined preview images options into one

Fixed

* Improved Swipe back from Safari view
* Some SSL certificates were not accepted even with the "Allow all certificates" option enabled
* A few possible crashes
* TT-RSS session expiration
* Not downloading more then 200 articles (TT-RSS)
* Redownloads all images after clearing the image cache
* Some articles with invalid links not opening correctly
* Bug where Instapaper wouldn't download all articles

## Version 1.5.3
_1. December 2015_

New

* Option to open URL Actions in Safari View Controller
* Separate setting for the text size in the article view
* Table separator color field in themes
* Sharing an article includes the preview image if available
* New URL scheme to launch Fiery Feeds: fiery://openAccount/{account name or number}
* 3D Touch shortcuts for different accounts
* Darker table separators in contrast theme
* Full width images in the article view (if the image is large enough)
* Share custom URL actions (e.g. for other Fiery users)
* Only auto opens first article if no other article is open (iPad)
* URL Action Directory
* Swipe back to dismiss Safari View Controller

Fixed

* No longer shares the article content if using the system share sheet (A lot of sharing exentions can't handle that much text).
* Potential crash when selecting a browser
* Swiping animation when swiping left or right between articles on iOS 9.1
* Background color in preformated text in articles is now darker in dark themes
* Some images wouldn't be cached if the app was terminated while caching
* Opens the first article automatically on iPad (instead of the second in some cases)
* Removed Protocol field from URL actions
* Correctly rotates sharing sheet when the device orientation changes
* Improved fullscreen image view performance
* It's no longer possible swipe back while an image is displayed fullscreen
* Properly disabled editing of system URL and mail actions
* Larger maximum text size
* Problem with articles counts (Feed Wrangler)

## Version 1.5.2
_25. October 2015_

New

* San Francisco font
* Support for Slide Over and Split View
* Support for Safari View Controller

Changed

* Keyboard shortcuts require the command key (⌘) now
* Removed Instapaper Mobilizer

Fixed

* Enabled AOL Reader login with 3rd party accounts
* Problem loading articles urls (AOL Reader)
* Article Links in email templates
* Updates the interface after marking articles as read above/below

## Version 1.5.1
_2. July 2015_

New

* Long press mobilizer in web view to change service
* {article-url} and {image-url} tokens for mail and url actions

Changed

* Removed scale effect in navigation
* Updated support Twitter account
* Long tap on share icon triggers instantly

Fixed

* feeds in sparks (Fever)
* sparks count on app badge (Fever)
* No longer shows feeds in sparks as ungrouped (Fever)
* cell highlight color after theme change
* dots on lists in articles
* Background refresh not updating the icon badge
* Ungrouped feeds not appearing in the main list
* Back gesture while in fullscreen (iPad)

## Version 1.5
_4. June 2015_

New

* Support for Inoreader
* Support for NewsBlur
* Support for AOL Reader
* Support for The Old Reader
* {input} field to URL Actions
* Quick Sharing - Long tap the share icon to quickly send the article to a selected service
* Mark All Read Button to bottom of article list
* Inline footnotes in the article view
* Maven Pro fonts

Changed

* German translation
* Sorts articles by date within a feed (while sorting by feed)
* updating counts and lists
* Centered alert view on screen
* Automatically opens the first article (iPad)

Fixed

* article title when sharing to Instapaper
* Correct image url when sharing from image viewer
* Open Login Pages (AOL Reader, Feedly) in app regardless of external browser setting
* feeds in a stream with search filter not being filtered (Feed Wrangler)
* crash when long-tapping a link
* problems in the articles list
* skip article list option on iPad
* article font size not matching the rest of the app
* No longer passes HTML content to sharing extensions
* Keep starred duration reset on save
* Bug that could cause the wrong article to open

## Version 1.4.3
_6. April 2015_

New

* You can find the changelog in the settings
* Support for miniflux (via Fever API)
* Option to set an external browser (safari, chrome) as default for opening links
* You can now use {content-preview-nohtml} and {content-nohtml} in URL actions
* Added Mark Article / All Above / All Below as read actions to VoiceOver's action rotor (article list)
* Added 2Do URL action

Fixed

* Fixed a bug where the wrong article would be displayed
* Fixed voiceover in the sharing dialog
* Fixed a bug where an article's preview text was missing
* Fixed background blur in input (Buffer sharing)
* VoiceOver: Back gesture now works in the article view

## Version 1.4.2
_28. January 2015_

New

* Preview Image Size option
* Displays the feed icon on every article cell when feed title on article cell is enabled

Changed

* Support for Preview Length of 0 lines
* The keep duration for articles can now be set to forever (-1)
* Remembers open groups per account
* Greatly improved image caching performance
* Updated Empty Today Widget Look
* Improved alerts with more than 4 options
* Changed open first article automatically option to skip article list

Fixed

* Sharing from web view to extensions
* Uses the title again when sharing a website from the web view
* scroll to top in article view
* opening articles from widget (Minimal Reader)
* toolbar size after switching articles in landscape (iPhone)
* not displaying preview images in landscape (iPhone 6 Plus)
* crash while caching images with a large number of articles
* No longer shares the full text to facebook and twitter
* problem when sending articles to pinboard
* a couple of potential crashes
* Displays tutorial notifications only in the app
* No longer shows sharing notifications outside the app
* Improved handling of wrong supplied text encoding (Fever)

## Version 1.4.1
_31. October 2014_

New

* Support for 1Password in the web view
* Displays the progress while caching images

Changed

* Improved Favicon search
* Moved the feed title to the top (if enabled)
* Increased maximum font size
* Other minor interface improvements
* Performance improvements
* Improved background refresh
* Improved app icon (iPhone 6 Plus)
* Improved german lokalisation
* Displays the full date and time inside an article
* Applys sidebar position setting immediately
* Mark articles read on scroll: Only marks articles read while scrolling down
* New Icons for mark all above and mark all below as read
* Sorts feeds alphabetically within types (when sorting by type)
* Longer timeout when refreshing on the server (Fever)

Fixed

* opening hotlinks (Fever)
* notifications and badge icon
* 1Password URL Action
* VoiceOver support
* crash on opening style options (iPhone)
* crash on opening native sharing sheet
* close button on modal web view
* sort by date (Feedly)
* scroll to top in article view
* marking more then 1000 articles read (Feedbin)
* standard sharing sheet not appearing correctly
* Facebook / Twitter not always prefilling the sharing sheet correctly
* a problem where the status would not be display in the group view
* support for iOS's read screen function

## Version 1.4
_7. October 2014_

New

* Universal App
* Support for iOS 8
* Support for iPhone 6 / 6 Plus
* Option to use the system sharing dialog
* Option to mark articles read while scrolling
* Displays helpful tips from time to time
* Today Widget

## Version 1.3.4
_9. September 2014_

New

* Added a button to open the default sharing sheet (in case you're already using a certain version of a certain OS)
* Long tap on images in the webview to bring up the detail view
* Long tap on links in the webview to bring up the sharing view

Changed

* Minor interface improvements
* Improved voiceover support

Fixed

* login/logout from Evernote
* emtpy articles in article list
* problem with certain FeedWrangler passwords
* problems using {content} in custom url schemes
* not correctly unescaping certain characters when sharing an article

## Version 1.3.3
_7. August 2014_

Fixed

* Fixed crash when sorting groups alphabetically was enabled
* Improved voiceover support

## Version 1.3.2
_1. August 2014_

Fixed

* Fixed syncing bug with Feed Wrangler (please re-add Feed Wrangler accounts)
* Fixed potential crash when sharing certain urls

Changed

* Minor interface changes

## Version 1.3.1
_21. July 2014_

New

* New theme selection screen
* Theme directory and additional themes
* Added Gill Sans as a font option
* Added Keep Everything and {url-no-protocol} token for URL actions

Changed

* The selected font is now used across the entire app
* The selected text size is now used across the entire app
* Text size in theme options
* Reorganized settings
* Improved Evernote Web Clipping
* Removed the white and blue theme from the app. (They can be installed from the theme directory)

## Version 1.3
_6. June 2014_

New

* New, custom designed sharing sheet
* Added sound to new article notifications
* Added sharing to Appigo's Todo, Clear, Simplenote, Stache
* Added customizable URL Actions
* Added customizable Mail Actions
* Included SendToReader sharing in-app
* Include Buffer sharing in-app
* Include OneNote sharing in-app
* You can logout from any sharing service individually
* Optionally enter a title when saving to pinboard
* Added 1Password link when adding an account
* Explicit option to display the sidebar left or right

Changed

* Minor Interface Improvements
* Minimum image size for preview images
* Changed preview length setting to lines
* Improved mark all read (Feedly)
* Removed switch mode gesture from article list

Fixed

* Feedly no longer logs you in when adding a new account
* Asks for password again, if authorization has failed
* Fixed Problem when sharing to evernote
* Fixed jumping in article list
* Fixed scrolling in article list
* Fixed mark stream as read (Feed Wrangler)

## Version 1.1.6
_1. May 2014_

New

* Added support for Feedja

Fixed

* Fixed All Items > Sort by Sort by Feed (MnmlRdr)

## Version 1.1.5
_24. April 2014_

New

* Option to clear read articles immediately
* Main list is now grouped into sections
+ Option if sparks count should be displayed (Fever)

Fixed

* No longer searches for images in articles if image caching is disabled
* Fixed a problem with the default values for "Keep Starred" and Image Caching
* Fixed bug where sometimes the wrong article was opened
* Fixed scroll position when returning to article list
* Fixed bug where cells could be displayed empty
* Stability improvements

## Version 1.1.4
_6. April 2014_

New

* German Translation
* Article preview images
* Image caching as per account option
* Show Article Counts per account option

Changed

* Removed article cache size option
* Improved VoiceOver support

Fixed

* Deselects rows in settings view correctly
* Restore statusbar after displaying an image
* Updates list correctly if sync is started from article list
* Performance improvements with 10k+ articles
* Fixed tap on statusbar to scroll to top
* Fixed Feedbin custom API endpoints
* Fixed close button in image view
* Fixed crash when sharing to evernote
* Fixed no content when sharing to evernote from web
* Fixed mark all read for a certain hotlink

## Version 1.1.3
_5. March 2014_

New

* Sync status in main list
* Keyboard shortcuts (with external keyboard)
* Swipe article cell to the right to reveal more options
* Star, Share, Mark Above Read, Mark Below Read from article cell
* Option to display the feed title on every article
* Included a list of gestures and shortcuts
* Support for animated GIFs in image viewer

Fixed

* Fixed keep unread (Feedly)
* Updates hotlinks links correctly (Fever)
* Fixed article text not reliably selectable
* Improved image viewer
* Improved image caching

## Version 1.1.2
_24. Feb 2014_

New

+ New icon
+ Open website in 1Password
+ Unread count in article view
+ New option to keep starred articles only for a certain duration
+ New Sync Sparks option (Fever)
+ New color theme 'Blue'

Fixed

* Fixed problem syncing with Feed Wrangler with 1000+ items
* Fixed problem when changing an items status repeatedly on a bad connection (Feedbin)
* Scroll to top in item list
* Fixed bug where the app would not sync on launch
* Improved background sync
* Improved item list scroll performance
* Improved swipe back performance
* Improved article swipe

## Version 1.1.1
_7. Feb 2014_

Fixed

* Fixes problem with marking articles read (Fever)
* Displays notifications now correctly after each other
* No longer displays network errors while the device is offline
* Fixed embeded YouTube aspect problem

## Version 1.1
_29. Jan 2041_

New

* New Icon
* Syncing with MnmlRdr
* Syncing with Feedly
* Syncing with Feed Wranger
* Improved Feedbin Sync Performance
* Improved Fever Sync Performance
* Sharing articles to Firetask
* 64 Bit support
* Option to sort main list alphabetically
* Long press refresh button to refresh on server (Fever)
* Long press refresh button to force full refresh (MnmlRdr)
* Option to allow self signed certificates (Fever, Feedbin)

Fixed

* Fixed Twitter and Facebook Buttons in Settings
* Fixed webview fullscreen option
* Fixed webview content inset in fullscreen
* Fixed image view image scale after rotation
* Fixed long tap in article view
* Fixed unstarring items (Feedbin)
* Fixed swipe back lag
* Removed rate app dialog
* Fixed visual problems with in-call statusbar
* Fixed delete button on wrong cell after deleting account
* Fixed a problem with the item cell height
* Fixed a potential crash when marking items read
* Fixed a potential crash when an article's url wasn't set
* Properly decodes HTML entities in image alt text
* Now shows the number of currently cached articles in settings
* Tweaked required left / right swipe speed (article view)
* Fixed opening the YouTube page from embedded video
* Mailing the URL now sets the title as mail subject
* No longer shows the unread badge for sparks (Fever)

## Version 1.0.5
_4. Dec 2013_

New

+ It's now possible to reorder accounts in settings
+ Left / right swipe in list to change between starred/unread/all
+ Option to mark links saved to pinboard as unread
+ New Intense White theme

Changed

* Pinboard with tags is now an option instead of a separate sharing activity
* Removed swipe to go back starting anywhere but the screen edge. (Screen edge still works!)
* Changed brightness gesture to a three finger swipe
* Setting max articles to 0 now removes any limit

Fixed

* Fixed a crash when sharing to evernote
* Fixed a problem with overly long Feedbin passwords
* Fixed the done button being disabled after editing accounts
* Fixed hotlinks order with hotness over 100°
* Fixed a problem calculating the correct zoom scales when viewing a image
* Properly updates color in hotlinks view after changing the color theme in the article view

## Version 1.0.4
_26. Nov 2013_

New

+ Color themes apply to the entire app
+ High contrast mode

Fixed

* Fixed a bug where the main list would update automatically after syncing
* Fixed a possible crash when loading favicons
* You can now disable evernote sharing in settings

## Version 1.0.3
_21. Nov 2013_

New

+ Shows ungrouped feeds in the main list
+ Share to Pinboard with tags
+ Share full article by mail
+ Share to Evernote
+ Redesigned hotlinks view (Fever)
+ Set hotlinks start date (Fever)
+ Mark all read in hotlinks (Fever)
+ Mark all read in starred mode (Fever)
+ Line hight option in article view
+ Uses 12h format based on system settings
+ Maximum number of articles to cache option
+ Per Account option to keep articles unread on open
+ Added Georgia as a font option
+ Increased maximum interface font size
+ Enabled swipe navigation in settings
+ Application and account list unread badges are now configurable per account
+ Two finger swipe up or down to change brightness (in article and web view)

Changed

* Removed option to display feeds in a separate
* Taping the refresh indicator in webview cancels loading
+ Hides Sparks, Kindling and All group when empty
* Improved statusbar animation while navigating
* Logout from all logs out from Pocket as well
* Increased animation speeds
* A bunch of new sharing icons
* Slightly increased contrast

Fixed

* Fixes multiline titles with larger font option
* Smoother fullscreen animation in webview
* Fixed refresh on server without explicit http (Fever)
* Fixed a bug preventing the app to sync successfully (Fever)
* Fixed a problem where read items would show up as read
* Fixed pocket sharing failed message
* Performance improvements

## Version 1.0.2
_5. Nov 2013_

New

+ Feedbin saved searches
+ Option to display unread counts in accounts list
+ Option to return to groups list after marking all articles as read
+ Custom server URL for feedbin
+ Option to enable fullscreen mode in article view
+ Option to enable fullscreen mode in web view
+ Option to change the text size in list views
+ Reload button in web view
+ Now uses up to two lines to display the title in list views
+ Displays a notification instead of an alert when sharing was successful

Fixed

* Fixed crash on launch with too many items
* Improved performance with a large number of articles
* Sorting now effects the order of groups (Last 6 Hours, Last Day,...) as well
* Removes empty groups immediatly
* You can now copy text from alert views
* Renamed Invert Accessory Action to Open Groups As (Feeds/Articles)
* Fixed icon badge number not updating correctly
* Automatically perpends http to server url if nessecary
* Swiping from the edge to go back now working in article view
* Correctly displays an error message if connection to a fever server fails

## Version 1.0.1
_17. Oct 2013_

New

+ Mobilizer in Webview (Instapaper, Readability, Google)
+ Article Color Themes (Dark, Grey, White)
+ Left/Right Margin Option in Article View
+ Article Order (Newest First/Oldest First)
+ Share to Felix (App)
* Share to Velocity (App)
* Double Tap in Groups View to hide recently read items (in unread mode)

Fixed

* Bug blocking swipes in article view
* Alert View rotation bug
* List not updating when marking all as read immediatly
* Fever not correctly displaying counts for all items
* Feedbin not correctly displaying all feeds in All Feeds
* Left/Right animation in article view being slow
* Problem with non ASCII Characters in Feedbin Password
