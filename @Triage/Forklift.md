### User Interface

![](https://binarynights.com/images/manual/forklift-3-user-interface.png)

Using ForkLift will come very easily. If you are used to Finder, everything will look familiar, and all the extra functionality will work as you expect it. ForkLift's user interface has got highly modular by now. You can have it anyways, from a minimal single pane look to the pedal-to-the-metal 3 ton engineering monster it can become, depending on what you need at the moment.

#### Main Panes

The main panes display the item lists for your current location. You can always see your current location in the path bar sitting on top of each main pane. When both panes are visible, the active pane is shown by a blue highlighted path bar. The color of the path bar and the selection can be changed at System Preferences > General > Highlight color.

#### Path Bar

The path bar is displayed at the top of each main pane and shows the path of your current location. You can click the items in the bar to quickly navigate up in your filesystem. The path bar also supports drag and drop.

![](https://binarynights.com/images/manual/path-bar.png)

##### Show Devices

Click on the icon in the path bar or use the Control-D shortcut to list connected devices and servers.

![](https://binarynights.com/images/manual/device-list.png)

#### View Modes

There are three ways to view items in Forklift: as icons, as a list, or in columns. To choose a view, use the View buttons in the toolbar or the View menu. In dual pane mode, you can split panes vertically or horizontally.

#### View Options

There are a number of options you can use to customize the main panes to your preferences. Some affect only the appearance of the file list, others define behaviors and can also affect performance. Most visual elements are set in the view options panel, accessed from the right-click context menu of the pane itself, or from View > Show View Options (Command-J).

![](https://binarynights.com/images/manual/view-options.png)

Option

Description

Arrange by

Organize folders and files by kind, date, size, or tags. Choose None to switch back to alphanumeric organization.

Sort by

You can sort items by name, kind, date, size, tags, owner, group, or permissions.

Icon Size

You can adjust the size of icons and thumbnails in Icon View. You can also use pinch gestures, or the slider on the status bar.

Text Size

To make ForkLift go easy on your eyes, you can set text size for the main pane's item list from 10 pt to 16 pt text.

Columns

Check the categories of file metadata you want to see in your main panes.

Show hidden files

This option enables you to see system folders and files (e.g.: .DS\_Store files) in the item list.

Use alternating background

If you prefer, you can set a background for the file list with alternating lines in light gray color in List View.

Treat packages as folders

When checked in, double clicking packages (such as applications and package formatted files, like .pages files) will open the package and display its contents, instead of launching the application or opening the file. Showing the contents of individual packages is possible by right-clicking the package, and choosing Show Package Contents from the context menu.

Show Folders on top

When checked in, your folders are kept separate from the files, and grouped separately at the top of the item list.

Use relative dates

When checked in, you will see Today and Yesterday in the date columns, instead of the standard date format.

Calculate all sizes

When enabled, ForkLift will calculate all local folder sizes by default. Calculating the size of individual folders is possible by right-clicking the folder, and choosing Calculate Folder Size from the context menu. This option is not recommended for connected volumes, as getting directory size information may seriously slow down the navigation.

Show icon preview

Displays thumbnails for available file formats in the item list. This option also enables thumbnail previews on connected volumes and inside archives. Thumbnail previews on remote servers is not recommended for slow servers, as getting the previews may seriously slow down navigation on a slow server

SCM Status

Displays git status of recently changed items in List View.

Resize columns to fit

When checked in, column width will be adjusted to the longest filename in Column View.

Use as Defaults

If you set options for view, then click Use as Defaults, all folders and files in the pane appear with the same options. Choose View > Restore Default View Settings in the other pane to use the previously set options.

#### Sidebar

ForkLift has a sidebar with items you frequently use, including drives, folders, and remote connections. Click any of these items to open the volume in the active pane. To create a favorite item or a favorite group, click on the plus button at the bottom of the sidebar. You can add other folders by dragging them into the Favorites group. You can also add files, applications, and smart folders to sidebar.

![](https://binarynights.com/images/manual/sidebar.png)

Drag a favorite item to the desired location to rearrange it. You can also rearrange a sidebar group by dragging its title close to the left side of the sidebar.

Free space info of devices are displayed by default. To hide device info, choose Hide Device Info from View menu.

#### Toolbar

You can find toolbar icons for most frequent operations and tools, and arrange them as you like. Right-click the toolbar or go to View > Customize Toolbar... in the menu. Enable Title bar in View menu to display icon and text in the Toolbar.

![](https://binarynights.com/images/manual/toolbar.png)

#### Activities

With Activities you can keep your transfers organized, reorder transfers and even pause them. To display activities queue, choose View > Show Activities or click on its toolbar button. For each item that is in the process of being copied the size of the item, the amount already copied, the transfer rate and a progress bar are displayed for information.

![](https://binarynights.com/images/manual/activities.png)

One of the basics of ForkLift's superior speed is that it connects to the server through several connections, and uses them all in concert to speed up transfers. Since this represents an increased load on the target server, controls are provided to adjust the number of connections depending on your server. You can set the maximum amount of simultaneous transfers by adjusting its value in [Preferences](https://binarynights.com/manual#transfers).

Finished transfers will diappear from the queue automatically. To remove ongoing transfers, select them and press Backspace. You can also reorder a transfer by dragging it to the desired position. Hold down the Command key to select more transfers.

#### Search

Search enables you to search for a search string at the location that is displayed in the pane. Press Command-F or click on it on toolbar and start typing. Click on the arrow in the search field to choose between Search by Name, Extension, Kind, Tags, or Content to search in the current directory. If you choose Search by Spotlight, ForkLift will use Spotlight's metadata query and will search on all volumes. To filter visible items, uncheck Search in Subfolders option. You can also use Regular Expressions in the search field.

![](https://binarynights.com/images/manual/search.png)

#### Tabs

Each pane has its own set of Tabs located right above the path bar. By default, the tab bar is hidden until a new tab is created (Command-T). The new tab opens the starting directory which can be set at [General preferences](https://binarynights.com/manual#general). You can drag and rearrange tabs inside and between panes. ForkLift will remember tabs on application exit, and restore them on next launch. Use the Ctrl-Tab keyboard shortcut to show the next tab, and Ctrl-Shift-Tab to show the previous one. Command-Double-Click on a folder, and Command-Click on a sidebar item to open it in a new tab.

![](https://binarynights.com/images/manual/tab-bar.png)

#### Preview

The preview panel shows preview of a selected image, document, audio, video, or other type of file, and shows its file name, file size, date created, date modified, file permissions, file owner and group.

![](https://binarynights.com/images/manual/preview.png)

To open preview panel, choose Show Preview from View menu. If you want Preview to automatically start playing a selected audio or video file, quit ForkLift and paste the following command in Terminal and hit Enter: `defaults write com.binarynights.ForkLift-3 PreviewAutostart true`

##### Editing in Preview

You can edit a document within the preview, just click in it and start typing, then click on Save. This feature also works on remote connections, so ForkLift will immediately upload changes after clicking Save.

![](https://binarynights.com/images/manual/preview-editing.png)

#### Get Info and Inspector

The Get Info panel is basically a proximation of Finder's. While this is a transient state, this is where you can presently set file and folder permissions, add or remove tags, and view general file info and metadata.

![](https://binarynights.com/images/manual/get-info.png)

You can display the Get Info panel as an Inspector panel by pressing Command-Option-I. In this case the panel will always float on top of any other window and the data displayed is following the navigation in the ForkLift main panels.

#### Favorite Manager

The favorite manager allows you to conveniently organize your favorites. To access the favorite manager, you can either use the Command-Option-F keyboard shortcut or choose Show Favorites from Favorites menu. You can change the order of items by a simple drag and drop. To edit a favorite, select it in the list, and choose Edit from the right-click context menu. To add a new favorite or group, click on the plus button at the bottom.

![](https://binarynights.com/images/manual/favorite-manager.png)

You can sync all your favorites between your Macs through Dropbox. Go to [General preferences](https://binarynights.com/manual#general) chapter for more details.

#### Quick Open

One of the most convenient features of ForkLift 3 is Quick Open. You can easily access your favorites, menu commands, open a selected file with a desired application, or apply a previously saved [Multi Rename](https://binarynights.com/manual#multi_rename) preset on selected files. Press Esc to show Quick Open popover. You don't even have to type the full name of the favorite item or menu command, just type the initials of it and ForkLift will already know what you are looking for. Navigate with Arrow Up and Down keys and press Enter to open.

![](https://binarynights.com/images/manual/quick-open.png)

#### Dropbox Menu

This feature requires [Dropbox's native app](https://www.dropbox.com/downloading). If it has been already installed, you will see the 'Copy Dropbox Link' option in the context menu. Click on it for the first time and you will be redirected to Dropbox's website to continue the authorization process and connect ForkLift to your Dropbox. Click Allow on that website and go back to ForkLift.

![](https://binarynights.com/images/manual/copy-dropbox-link.png)

#### Tags

Organize your documents and files with tags: add, edit, remove, search, or filter them within ForkLift. To add a tag to a item, right-click on it and choose from the colored dots, or choose Tags... option, then type the tag and press Enter. To edit tags, go to Finder > Preferences > Tags.

![](https://binarynights.com/images/manual/tags.png)

#### Share

Share files by right-clicking on them and choosing an option listed in Share context menu. Share menu options can be configured at System Preferences > Extensions > Share menu.

![](https://binarynights.com/images/manual/share.png)

#### Services

Go to System Preferences > Keyboard > Shortcuts and choose Services from the list, then choose which ones display in the Services menu or right-click context menu. You can use Reveal in ForkLift context menu option on a selected file or folder in Finder.

#### Localizations

ForkLift speaks English, German, Hungarian, Russian, and Ukrainian. To change ForkLift's language, choose a preferred language at System Preferences > Language & Region, then relaunch ForkLift.

### File Management

#### Open

Selected file can be opened by double clicking on it, choosing Open or Open with… from the right-click context menu, choosing Open from Go menu, and using shortcut Command-Down.

#### New File and New Folder

As a unique and uniquely practical feature, ForkLift lets you create a new, empty file in any folders, including connected remote volumes. Simply use File > New File, the toolbar icon, or keyboard shortcut.

Naturally, you can also create new folders anywhere, using the toolbar icon, the menu, or pressing Command-Shift-N. To create a new folder with selected items, choose New Folder with Selection from the right-click context menu, choose New Folder from File menu, or use shortcut.

#### Copy

To copy the item(s) selected in the active pane to the folder opened in the opposite pane you can use the following methods:

*   Drag and drop items while holding down the Option key
*   Choose Copy to from Commands menu
*   Use the Command-C keyboard command to copy the items to the clipboard, then switch to the second pane with Tab key and use Command-V to paste (on local volumes only)
*   Click the toolbar icon
*   Copy is also available in the item list context menu

To make a copy of an item within the same folder, select the item, then choose File > Duplicate or press Command–D.

Dragging files to a different disk or volume copies them. To move files to a different disk without copying them, hold down the Command key, then drag the files to the disk.

##### Conflict Handling

In case of conflict during a copy operation, ForkLift will ask whether you want to replace the file or folder, merge the folders, skip the file or folder, or resume a previous transfer, whichever action applies. You can set the pre-defined behavior for each case in the [Transfer preferences](https://binarynights.com/manual#transfers).

#### Merge

If you have two folders with identical names at two different locations, you can merge them into a single folder. Hold down the Option key, then drag one folder to the location that contains a folder with the same name to copy. In the dialog that appears, click Merge.

#### Move

To move selected items simply use drag and drop. Drag and drop will also work across other applications, such as Finder. To move the items selected in the active pane to the folder opened in the opposite pane you can also use the toolbar icon or choose Move to from Commands menu.

To move files to a different disk or volume without copying them, hold down the Command key, then drag the files to the disk.

With keyboard shortcuts, press Command-C to copy then Command-Option-V to move (on local volumes only).

#### Delete

To move a file to the Trash, drag the file to the Trash in the Dock. Or select one or more files and choose Commands > Move To Trash (Command-Backspace). To remove a file from the Trash, click the Trash to open it, then drag the file out of the Trash. To delete the files in the Trash within ForkLift, press Command-Shift-Backspace keyboard shortcut.

To permanently delete a file without putting it to the Trash, select one or more files and choose Commands > Delete (Command-Option-Backspace).

NOTE: Move to Trash is not available on remote volumes.

#### Go to Folder

In the Go menu of ForkLift, there is an option titled Go to Folder… with the keyboard shortcut Command-Shift-G. This will prompt you to enter a folder path and it allows Unix conventions (like using ~ to refer to home directory; for example ~/Documents refers to the Documents folder under your home folder). You can also type part of the folder name and hit Tab for autocompletion of the name. ForkLift lists the existing folders located in the curretly typed path, and also the previously opened folders. Select a folder using the up and down arrow keys from the list, then press Enter to open.

#### Quick Select

You can easily add or remove items from selection by using Command-S shortcut. Type a file or folder name, a tag, or a file extension, choose a command by pressing Arrow Up and Down keys in the Quick Select popover, then press Enter.

![](https://binarynights.com/images/manual/quick-select.png)

#### Aliases and Symlinks

ForkLift can use the aliases created with Finder, and vice versa. You can create aliases to any files or folders in the local file system. Double clicking an alias opens the target folder in ForkLift. Items dropped on an alias are copied to the target folder. ForkLift also can create and use symlinks. Both can be found in Commands menu.

#### Quick Look

Yes, you can use Quick Look with ForkLift, and even use it to view remotely stored files, whether browsing an FTP server, or an Amazon S3 account. Press the space bar to toggle Quick Look on/off, or click the toolbar icon. While the Quick Look view is up, you can still use the up and down arrow keys to browse through the items in the active pane.

#### Calculate Folder Size

You can see the size of any folder by selecting it and choosing Calculate Folder Size from File menu or pressing Command-Shift-S. You can also turn on Calculating Folder Sizes as a default action for all local folders in View > Show View Options (Command-J or right-click menu).

![](https://binarynights.com/images/manual/folder-size.png)

#### Archive Management

ForkLift lets you browse file archives as if they were read-only folders. You can copy files out from the archive, and you can Quick Look the files stored within the archive. Just right-click on an archive and choose Show Archive Contents from the context menu.

![](https://binarynights.com/images/manual/show-archive-contents.png)

You can also create your own archives, but you should note that creating archives is only available locally. To create an archive, select the item(s), then choose Compress from the Commands menu, or right-click on the selection and choose Compress from the context menu.

To create an encrypted zip, tar, tar.gz, or tar.bz2, select the item(s), then choose Compress with Options... from the Commands menu while holding the Option key, or right-click on the selection and choose Compress with Options... from the context menu while holding the Option key.

![](https://binarynights.com/images/manual/compress.png)

You can also enable Treat archives as folders at [General preferences](https://binarynights.com/manual#general). This feature works seamlessly through any remote connection. You can create your own archives, but you should note that creating archives is only available locally.

#### Sync Browsing

Sync browsing links the navigation of one pane to the other pane if the directory structures are equal. Open your local directory in one pane, say, ~/Documents/Projects/, then open the backup of the Projects folder in the opposite pane. Turn on Sync Browsing by clicking the toolbar icon. From this point on, navigation in one pane will be followed by the other pane, so you can compare folder contents without your carpal syndrome kicking back in.

![](https://binarynights.com/images/manual/sync-browsing.png)

#### Compare

With compare feature you can compare the content of two text-based files, images, or folders. To compare files select one file in the left pane and another file in the right pane and choose Commands > Compare from the menu or use its toolbar button. By default the Compare command is configured to use the built in File Merge of Xcode, so you must install Xcode. Forklift runs /usr/bin/opendiff and that needs to point to the correct location of Xcode. If Compare would not work, use the following Terminal command: `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` Set compare tool at ForkLift > Preferences > General. You can choose between Xcode's FileMerge, Kaleiodoscope, Beyond Compare, or Araxis Merge.

#### Source Control Management

ForkLift has [Git](https://git-scm.com/) support, so you can add, commit, push, and pull from the Commands menu, if you have git installed on your system. To show the status of recently changed individual files, enable SCM Status at View Options (Command-J).

#### Reveal in Finder

Choose Reveal in Finder option from the right-click context menu to reveal selected items in Finder.

### Remote Connections

ForkLift is able to connect to servers with a multitude of protocols. You can connect to a remote server by choosing Go > Connect from the Menu or using the shortcut Command-K.

ForkLift’s speed strongly depends on the maximum amount of simultaneous transfers enabled when copying many files and it is important to check how many concurrent connections the given server supports at the same time (the default setting in ForkLift is 5). You can read about simultaneous transfers in detail in the chapter [Activities](https://binarynights.com/manual#activities).

##### Supported protocols

*   FTP
*   FTP TLS
*   SFTP
*   WebDAV
*   WebDAV HTTPS
*   Amazon S3
*   Backblaze B2
*   Google Drive
*   Rackspace Cloud Files
*   SMB
*   AFP
*   NFS
*   VNC

##### Exemptions to normal workflow on remote volumes

*   Deleting files means deleting them immediately. Trash is not available for remote volumes.
*   You cannot create symlinks on remote volumes.

##### Connect to a Server

You need three basic information to connect to a remote server: server hostname, username, and password. Once connected to the server, you will be able to work with the data stored on the server in the same way you work with local data. You can use Quick Look, you can edit files, browse archives or use batch rename.

![](https://binarynights.com/images/manual/connect.png)

You can greatly enhance your workflow by storing frequently used connection as a favorite in the Favorite Manager and taking advantage of our amazing Local Path and [Copy URL](https://binarynights.com/manual#copy_url) features, for faster access and better management of your files. Local Path is for opening the given path in the other pane when connecting to a remote server. To set up or modify a remote connection, open a new connection or add/edit an existing favorite.

##### Example to connect to an FTP server

*   Press Command-K keyboard shortcut.
*   Choose FTP protocol.
*   Enter server hostname: e.g.: ftp.binarynights.com or IP address (127.0.0.1). Note you need not include the ftp:// prefix.
*   The default port for FTP connection is port number 21, but if your server is set up differently, you should enter the port number
*   Enter your username. ForkLift will log in as anonymous user if left blank.
*   Enter your password. Leave blank for anonymous user login.
*   If most of your FTP work is done in a specific folder on the FTP account, this is where you have the option to set the initial path for the connection (e.g.: /www/html). On connection, ForkLift will open directly in this folder
*   Check Add to Favorites option if you want to save the FTP connection after you successfully connected.
*   Click Connect

On connection, a spinning progress indicator shows the connection is in progress. An alert is displayed if the connection fails for some reason. Once the connection is established, the volume is listed in the Sidebar under Connections. You can disconnect from the connection by clicking the small eject button next to the connection's name in the Sidebar, or selecting the connection in the Sidebar and clicking File > Disconnect.

#### FTP and FTP TLS

FTP stands for File Transfer Protocol and is the most common way of transferring files over the Internet. ForkLift supports FTP over TLS Explicit only.

#### SFTP

SFTP is FTP over SSH. It is more secure and reliable than standard FTP.

If you want to log in using GPG card instead of SSH private key, quit ForkLift and use the following Terminal command: `defaults write com.binarynights.ForkLift-3 SSH_AUTH_SOCK /path/to/gpg-agent`

You can also use your Smart Card USB device if it supports PKCS#11 standard. After installing [OpenSC](https://github.com/OpenSC/OpenSC/wiki), quit ForkLift and use the following Terminal command: `defaults write com.binarynights.ForkLift-3 SSH_AUTH_SOCK /Library/OpenSC/lib/opensc-pkcs11.so` Then type your User Pin of the Smart Card in the Password field.

#### WebDAV and WebDAV HTTPS

WebDAV is an extension of the HTTP protocol that allows to edit and manage files on a remote web server.

#### Amazon S3

Amazon S3 (Simple Storage Service) is an online storage web service offered by Amazon Web Services. Supported regions:

*   US East (N. Virginia)
*   US East (Ohio)
*   US West (N. California)
*   US West (Oregon)
*   EU (Ireland)
*   EU (London)
*   EU (Frankfurt)
*   EU (Paris)
*   Asia Pacific (Singapore)
*   Asia Pacific (Tokyo)
*   Asia Pacific (Seoul)
*   Asia Pacific (Sydney)
*   Asia Pacific (Mumbai)
*   China (Bejing)
*   China (Ningxia)
*   Canada (Central)
*   South America (São Paulo)
*   AWS GovCloud (US)

Use your Access Key and Secret Key to connect.

NOTE: Connecting to a specific bucket with a bucket level only permission is not possible at the moment.

#### Backblaze B2

Backblaze B2 is an object storage service similar to Amazon's S3. Use your Account ID and Application Key to connect.

NOTE: Renaming and moving items within datasource are not supported by Backblaze.

#### Google Drive

Google Drive is a file storage service developed by Google. After clicking on Connect, log in to your Google account in the browser window and give ForkLift access to Google Drive, then go back to the ForkLift window.

#### Rackspace Cloud Files

Cloud Files is a cloud hosting service that provides "unlimited online storage and CDN" for media (examples given include backups, video files, user content) on a utility computing basis offered by Rackspace. Use your username and API Key to connect.

#### AFP

AFP is Apple’s Apple Filing Protocol to connect multiple Macs in a network. To connect to an AFP share click choose Go > Connect from the menu or use the shortcut Command-K, choose AFP protocol, enter the URL of the share and click on Connect. You can add a folder from the share to your favorites by simple drag and drop to a favorite group in the sidebar.

#### SMB

SMB stands for Server Message Block, also known as Common Internet File System, CIFS. Most usage of SMB involves computers running Microsoft Windows, where it was known as "Microsoft Windows Network" before the subsequent introduction of Active Directory. To connect to an SMB share click choose Go > Connect from the menu or use the shortcut Command-K, choose SMB protocol, enter the URL of the share and click on Connect. You can add a folder from the share to your favorites by simple drag and drop to a favorite group in the sidebar.

#### NFS

Network File System (NFS) is a distributed file system protocol allowing a user on a client computer to access files over a computer network much like local storage is accessed. To connect to an NFS share click choose Go > Connect from the menu or use the shortcut Command-K, choose NFS protocol, enter the URL of the share and click on Connect.

#### VNC

Virtual Network Computing (VNC) is a graphical desktop sharing system to remotely control another computer. It transmits the keyboard and mouse events from one computer to another, relaying the graphical screen updates back in the other direction, over a network.

#### Remote Editing

ForkLift allows you to edit files stored on remote servers in a single click action. Instead of downloading the file, editing it and then uploading it again, you can directly edit a remote file through the Open or Open with... command, found in the right-click context menu of the item, or if you double click on it. This will cause the remote file to be copied to the local cache and opened for editing. The Open and Open with... function keep monitoring the local file for changes and uploads the modified version back to the remote location on file save.

![](https://binarynights.com/images/manual/remote-editing.png)

#### Copy URL

Copy URL generates a direct URL that points to a file stored on your server. This is handy when you want to quickly share a file with others. Just upload the file, right-click on it and choose Copy URL from the context menu to create a URL on the clipboard pointing to your file. Holding the Option key gives you the opportunity to open the URL directly in a browser. The Copy URL feature is available on FTP, SFTP, WebDAV, Amazon S3 and Rackspace Cloud Files connections.

**Copy URL requires you to set up the Base URL and the Path parameters of the connection correctly** for each connection you want to use this command on. You can set this up on the Connect panel when you create or edit a connection. (Read [how to connect to a remote server](https://binarynights.com/manual#remote_connections) and [how to edit an existing favorite.](https://binarynights.com/manual#favorites))

**If you don’t set up these parameters, ForkLift will copy the full path of the file.**

*   **The Base URL field** tells ForkLift the beginning of the URL you want to use.
*   **The Path field** tells ForkLift which subfolder you want to open after logging in to your server. This defined path will be ignored in the copied URL. If you define a path, then copying the URL starting with the Base URL will only work inside that defined path. If you navigate outside of the path, then the Copy URL command will copy the full path of the file.

##### Examples of Copy URL Setups

Let’s say you have a file called index.html on your SFTP server.  
The full path of this file is: _**sftp://example.com/Users/Shared/Website/index.html**_

1\. If you set up the Base URL and the Path

1.1. Inside the defined Path: _**Copied URL = Base URL + (Path of the file - Path defined in ForkLift)**_

Full Path = _sftp://example.com/Users/Shared/Website/index.html_  
Path of the file = _**/Users/Shared/Website/index.html**_  
Path (defined in ForkLift) = _**/Users/Shared/Website/**_  
Base URL = _https://example.com_  
Copied URL = _**https://example.com/index.html**_  

![](https://binarynights.com/images/manual/forklift-copy-url-connect-panel.png)

_**https://example.com/index.html = https://example.com + (/Users/Shared/Website/index.html - /Users/Shared/Website)**_

1.2 Outside of the defined Path: _**Copied URL = Full Path**_

If you navigate outside of the defined Path, for example to the _/Users/Shared/Pictures_ folder on your server and copy the URL of a file called flowers.jpg which is sitting in this folder, then the copied path will be the full path of this file: _sftp://example.com/Users/Shared/Pictures/flowers.jpg_

Full Path = _sftp://example.com/Users/Shared/Pictures/flowers.jpg_  
Path of the file = _**/Users/Shared/Pictures/**flowers.jpg_  
Path (defined in ForkLift) = _**/Users/Shared/Website/**_  
Base URL = _https://example.com_  
Copied URL = _**sftp://example.com/Users/Shared/Pictures/flowers.jpg**_  

BUT

Full Path = _sftp://example.com/Users/Shared/Pictures/flowers.jpg_  
Path of the file = _**/Users/Shared/Pictures/**flowers.jpg_  
Path (defined in ForkLift) = _**/Users/Shared/Pictures/**_  
Base URL = _https://example.com_  
Copied URL = _**https://example.com/flowers.jpg**_  

OR

Full Path = _sftp://example.com/Users/Shared/Pictures/flowers.jpg_  
Path of the file = _/Users/Shared/Pictures/flowers.jpg_  
Path (defined in ForkLift) = _/Users/Shared/Pictures/_  
Base URL = _**https://example.com/Pictures/**_  
Copied URL = _**https://example.com/Pictures/flowers.jpg**_  

If you often copy URLs from different folders on the same server, it can be useful to set up more favorites with different paths. That way you will always be able to copy the URLs in the right formats.

2\. If you set up the Base URL and don’t set up the Path, then the _**Copied URL = Base URL + Path of the file**_

Full Path = _sftp://example.com/Users/Shared/Website/index.html_  
Path of the file = _**/Users/Shared/Website/index.html**_  
Base URL = _https://example.com_  
Path (defined in ForkLift) = _**None**_  
Copied URL = _**https://example.com/Users/Shared/Website/index.html**_  

3\. If you set up the Path but don’t set up the Base URL, then the _**Copied URL = Full Path**_

4\. If you don’t set up the Base URL nor the Path, then the _**Copied URL = Full Path**_

#### FXP Copy

Those of you who work a lot with moving data from one FTP server to the other, will just love this feature, which is pioneering on the OS X platform with ForkLift. By default, when you copying data from one server to another, the files are usually copied to your own machine first, and are then uploaded to the target. FXP Copy makes it possible to transfer the data directly between the two servers.

To FXP Copy

*   Open the two FTP folders in the two panels of Forklift
*   Select the files or folders you want to copy in one panel
*   Choose FXP Copy from Commands menu

The copy operation is added to Activities, but since the transfer is executed directly between the two ftp servers, the progress indicator you normally see will not show any useful information.

NOTE: Some FTP servers may restrict the use of this feature.

#### Transcript

ForkLift logs accesses and file transfers made on FTP servers to ~/Library/Logs/ForkLift/ directory.

### Tools

#### Sync

You can sync between folders, drives, and remote connections. In dual pane mode, open the target folder where you are going to sync to, and open the source folder in the other pane and leave the pane active, then press Command-Option-Shift-S, choose Sync to from Commands menu, or click Sync toolbar icon.

![](https://binarynights.com/images/manual/sync.png)

In this window you can configure these following options:

*   Sync direction: sync items from left to right, from right to left, or both ways
*   Add item: copy all files, which don't exist at the target location
*   Update items: copy files which have different size or modification date (depends on the setting)
*   Delete orphaned items: delete all files from the target folder which don't exist at the source location
*   Sync subfolders: sync folders also not just files
*   Sync hidden items: sync files you can't see
*   Filter items: you can add and define exceptions
*   Time offset correction

You can exclude items from sync by clicking on the arrows in the middle.

At the bottom of the sync preview you can see how many items will be added, updated, and deleted.

If you save this setup as a Synclet, you can perform synchronisation by clicking on it in the sidebar or in [ForkLift Mini](https://binarynights.com/manual#forklift_mini) from the menu bar. To edit a Synclet, right-click on it in the sidebar and choose Edit option. Click Save to finish editing.

#### Multi Rename

Use the Multi Rename tool when you need to rename a large number of files at once, like saving pictures from your phone camera to your desktop. Select two or more files and press Enter.

![](https://binarynights.com/images/manual/multi-rename.png)

The Multi Rename tool lets you:

*   replace a string of characters in filenames,
*   replace a string of characters based on Regular Expressions in filenames,
*   add text to a specified position in filenames,
*   add modification date to a specified position in filenames,
*   add creation date to a specified position in filenames,
*   add a numbered sequence at a specified position in filenames,
*   and change upper/lower case of characters in filenames.

You can add a Multi Rename preset to Favorites, so if you select the files you want to rename and click on the saved preset in the sidebar, the Multi Rename sheet will show up with the previously configured setup and you only have to click Rename to finish. If you drag and drop files to the saved preset, they will be renamed immediately. To edit a Multi Rename preset, right click on it in the sidebar and choose Edit from the context menu.

#### App Deleter

Remove apps with all their preferences files and all they usually leave behind. App Deleter helps you locate and get rid of all the files and folders that are used by an application that you don't use anymore.

![](https://binarynights.com/images/manual/app-deleter.png)

To remove an app:

*   Select the application you wish to remove in one of the panes
*   Press Command-Backspace or drag the application to the trash
*   Checked items get moved to the Trash with the application itself, so uncheck the items on the list you wish to keep
*   Click Move to Trash to remove the items

### ForkLift Mini

ForkLift Mini sits on your menu bar and lets you mount a saved remote connection as disk, upload files to a remote volume from Finder by drag and drop, or run a saved synclet no matter ForkLift is running or not. Make sure you have enabled it at ForkLift > Preferences > General.

#### Disklet

Disklet allows you mount any of your saved remote connections, making it appear to your Mac as local drives. Once mounted you can directly access your files on the server from any app. To mount a remote connection, open ForkLift Mini in the menu bar, choose the remote connection then choose Mount as Disk option.

![](https://binarynights.com/images/manual/forklift-mini-disklet.png)

Disklet relies on the free, third party FUSE for macOS framework. You can download it from [here](https://osxfuse.github.io/).

#### Droplet

You can open a saved remote connection as a Droplet and upload files from Finder by drag and drop. Open ForkLift Mini in the menu bar, choose the remote connection then choose Open as Droplet option, then drag files into the bordered area to upload. Upload progress will be shown underneath that area. Target location will be the path you specified at the remote connection's Path field. To edit the target location, right-click on the favorite in the sidebar in ForkLift, choose Edit option from the context menu, type the desired path in the Path field, then click Save. To close Droplet, click on ForkLift Mini's menu bar icon.

![](https://binarynights.com/images/manual/forklift-mini-droplet.png)

#### Synclet

To run a Synclet without launching ForkLift, open ForkLift Mini in the menu bar, choose a previously saved sync settings, then click on Sync option. You will see the progress information in the popover. You can close this popover by clicking on the forklift icon in the menu bar. Once it is finished, you will receive a notification showing how many items have been added, updated, and deleted.

![](https://binarynights.com/images/manual/forklift-mini-synclet.png)

### Preferences

#### General

![](https://binarynights.com/images/manual/preferences-general.png)

##### Starting Directory

This setting defines the default directory that is displayed when you open a new ForkLift window.

##### Restore windows and tabs on startup

When this option is enabled, ForkLift remembers the tabs that where open when you quit the app. The tabs will be restored on the next launch.

##### Ask for confirmation for drag operations

Check this option to avoid accidental drag operations like copy or move.

##### Detect application when deleting

Enable this option to use the [App Deleter](https://binarynights.com/manual#app_deleter) function.

##### Treat archives as folders

If this option is enabled, archives will be treated as folders, that means they will not be extracted, but you can browse them just like a folder and open even single items without extracting the entire archive. When this option is disabled archives are extracted when double-clicking or executing them.

##### Handle archives with ForkLift

Disable this option to use the default archive utility instead.

##### Dark Mode

Enable this option if you want to join the dark side of ForkLift. If you want to see vivid colors for selection, quit ForkLift and paste the following command in Terminal and hit Enter: `defaults write com.binarynights.ForkLift-3 VividSelectionColors true` If you are using ForkLift from Setapp, paste this command instead: `defaults write com.binarynights.forklift-setapp VividSelectionColors true`

On macOS Mojave, you can enable dark mode at System Preferences > General.

##### ForkLift Mini

Enable ForkLift Mini in order to use [Disklet](https://binarynights.com/manual#disklet), [Droplet](https://binarynights.com/manual#droplet), and [Synclet](https://binarynights.com/manual#synclet) from the menu bar.

##### Sync Favorites

You can sync all your favorites between your Macs through Dropbox. Click on the dropdown button and choose Dropbox, then you'll be redirected to Dropbox's website to continue the authorization process and connect ForkLift to your Dropbox. Click Allow on that website and go back to ForkLift.

![](https://binarynights.com/images/manual/dropbox-favorite-sync.png)

Choose a Master Password to encrypt and decrypt your passwords synced over the network. If you forget the Master Password, your saved passwords won't be synchronized to the other Mac where you set up sync.

##### Terminal Application

You can set Terminal, iTerm, Hyper, or Kitty as default terminal application. If you used to iTerm or Hyper, you can continue using it with 'Open in Terminal' function, just choose it from the dropdown.

##### Compare Tool

You can choose between Xcode's FileMerge, Kaleiodoscope, Beyond Compare, or Araxis Merge. If you already own Kaleiodoscope and want to use that instead of File Merge and want to [compare](https://binarynights.com/manual#compare) two images, choose Kaleiodoscope from the dropdown. Make sure you have installed ksdiff command line tool. If you haven't, open Kaleiodoscope, choose Integration from Kaleiodoscope menu, and click on the install button at Kaleiodoscope Command Line Tool section.

##### Updates

You can alter automatic update settings or check for ForkLift updates instantly. Updates are signed, and they are downloaded through a secure HTTPS protocol.

#### Shortcuts

![](https://binarynights.com/images/manual/preferences-shortcuts.png)

There are two default shortcut sets you can choose from:

*   Finder style key binding set for those users who are used to the shortcuts of Apple’s Finder
*   Commander style key binding set for those who have the Commander shortcuts hard-wired in their carpal muscles

To edit a shortcut, double click on it or select it and hit Enter, then press the key combination you would like to assign. If you would totally mess up the shortcuts by accident, you can always restore the default shortcuts by choosing Restore Defaults from the dropdown.

Enable keyboard selection to select items by pressing the Spacebar in List View.

##### Basic keyboard shortcuts

Action

Finder style

Commander style

Open Selection

Command-Down

Enter

Enclosing Folder

Command-Up

Backspace

Quick Look

Space

F3

Copy to

F5

F5

Move to

F6

F6

Rename

Enter

Shift-F6

Edit

Command-E

F4

Move to Trash

Command-Backspace

F8

New Folder

Command-Shift-N

F7

#### Transfers

![](https://binarynights.com/images/manual/preferences-transfers.png)

##### Conflict Handling

Select the behavior you would like to define for replace, resume, and merge policies.

##### Bandwidth Limit

If you have a slow internet connection and doesn't want ForkLift to occupy the whole bandwidth, you can set a desired upload and download speed limit.

##### Error Handling

If items in the queue fail to be transferred, ForkLift can automatically retry to transfer them. You can turn this setting off, or change the number of retries.

##### Max. simultaneous transfers

ForkLift connects to the server through several connections, and uses them all in concert to speed up transfers. Since this represents an increased load on the target server, controls are provided to adjust the number of connections depending on your server. Using concurrent transfers is obviously more taxing on the server, and may result in dropped transfers or recurring timeouts on slow servers. In this case, decrease the concurrency value from default 5. Enable Simultaneous deletion option to delete items simultaneously and much faster on remote servers.

#### Tools

![](https://binarynights.com/images/manual/preferences-tools.png)

Extend ForkLift's capabilities to the max by invoking command line tools. To create a new tool, click on the plus button at the bottom of the list, name your tool, then type the command and add arguments by clicking on the plus button at the bottom of the textfield:

*   $SOURCE\_PATH - Path of the displayed directory in the active pane
*   $TARGET\_PATH - Path of the displayed directory in the inactive pane
*   $SOURCE\_SELECTION\_PATHS - Full paths of the selected items in the active pane
*   $TARGET\_SELECTION\_PATHS - Full paths of the selected items in the inactive pane
*   $SOURCE\_SELECTION\_NAMES - Names of the selected items in the active pane
*   $TARGET\_SELECTION\_NAMES - Names of the selected items in the inactive pane

Click Save to finish. To use a tool, choose it from Commands menu, or assign a keyboard shortcut to it at [Shortcuts](https://binarynights.com/manual#shortcuts).

#### Editing

![](https://binarynights.com/images/manual/preferences-editing.png)

You can define your favorite editors for different kinds of files. To add an application for editing files, click on the plus button at the bottom left of the window and simply browse the application you would like to add. After you added an application you can set it as the default editor by putting a checkmark next to it in the Default column. To assign specific file types to an application double click the Extensions column of the application or select it and hit enter, then type the desired extensions separated with commas. To edit a selected file, just press Command-E shortcut.

#### Default File Viewer

You can set ForkLift 3 as default file viewer, and almost every app (except Desktop) will point to ForkLift when you choose Reveal in Finder, Show in Finder, or Open in Finder options. Paste the following command into Terminal and hit Enter: `defaults write -g NSFileViewer -string com.binarynights.ForkLift-3;  
defaults write com.apple.LaunchServices/com.apple.launchservices.secure LSHandlers -array-add '{LSHandlerContentType="public.folder";LSHandlerRoleAll="com.binarynights.ForkLift-3";}'` If you are using ForkLift from Setapp, paste this command instead: `defaults write -g NSFileViewer -string com.binarynights.forklift-setapp;  
defaults write com.apple.LaunchServices/com.apple.launchservices.secure LSHandlers -array-add '{LSHandlerContentType="public.folder";LSHandlerRoleAll="com.binarynights.forklift-setapp";}'` Then restart your Mac. The second command is required in order to open folders in ForkLift by pressing Enter in Alfred.  
To change it back to Finder, use the following command then restart your Mac: `defaults delete -g NSFileViewer  
defaults write com.apple.LaunchServices/com.apple.launchservices.secure LSHandlers -array-add '{LSHandlerContentType="public.folder";LSHandlerRoleAll="com.apple.finder";}'` If you set ForkLift as the default file viewer and you remove it from your system, Finder will automatically become the default one.