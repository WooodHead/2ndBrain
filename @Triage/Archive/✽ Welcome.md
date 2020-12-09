# Welcome

Editorial is a powerful editor for writing plain text, [Markdown][md], [TaskPaper][tp], and [Fountain][fntn] documents. In addition to the editor itself, Editorial comes with a comprehensive automation toolkit for snippets, document templates, and custom workflows, including Python scriptability.	

# Getting Started

If you're new to Editorial, here are some tips to help you get up and running:

*	To create a **new document**, tap `≡` to reveal the file browser, then tap `+` at the bottom. You can also use a swipe gesture to show the file browser.

*	Swipe left to show the Markdown/Fountain **preview** and the in-app **web browser**. You can open multiple browser tabs to do research while you're writing.

*	While editing a document, tap on its title to show the **outline** (list of headings), and to rename it. Using the outline, you can navigate long documents more quickly.

*	Tap the *wrench* button to view the list of **workflows** – these are the heart of Editorial's extensive automation system. A couple of default workflows are already there, but you can customize this list by creating your own, or by choosing from the bundled collection of extra workflows (tap *More Workflows* at the bottom of the list).

*	In Markdown and TaskPaper documents, you'll see a little triangle next to each header – you can tap it to **fold** (hide) a section. When a section is folded, its word count (or task count) is shown next to the title. Tap the word count label or the triangle again to unfold a section. You can also unfold everything by tapping the triangle button in the top-lefthand corner.

*	**Snippets** allow you to insert commonly used pieces of text by typing abbreviations – for example, type `wbr` to insert "With best regards", or `ppp` to quickly paste the clipboard without using the editing menu. You can view (and edit) the list of snippets by tapping the *lightning* key on the extra keyboard row. The default snippets also include some helpers for Markdown formatting, e.g. `llnk` to insert a link.

*	You can move the cursor by sliding your finger anywhere on the extra keyboard row.

*	A lot of keys in the extra keyboard row have multiple mappings. For example, you can tap and hold the `>` key to select `<`.

# What's New in Editorial

The following are some of the highlights in the most recent updates – to read all the details about bugfixes and scripting/automation improvements, please refer to the *Release Notes* section in the documentation.

## Version 1.3

*	Native support for the 12" iPad Pro screen resolution.

*	Split-screen multitasking (requires iPad Air 2 or later).

*	Updated Python interpreter (2.7.5 => 2.7.12) and lots of new and improved modules (e.g. `numpy`/`matplotlib`, revamped `photos` module, `objc_util`, and more).

*	Improved Python console with syntax highlighting, better support for multi-line statements, and a zoomable image viewer.

*	Errors/exceptions in Python scripts are now printed to the console instead of showing a simple alert, so you can read the full traceback. 

*	The workflow editor has moved to the accessory panel, and the Python/UI editors are opened in separate tabs.

*	Improved UI editor with undo support and a more compact inspector panel (for *Custom UI* and *Python Script* workflow actions).

*	Fixed a couple of UI readability issues when using the dark theme.

## Version 1.2

*	Improved support for iPhone 6 and 6 plus.

*	Folding for Markdown headers and TaskPaper projects.

*	Quick settings – By tapping the `Aa` button, you can quickly access editor-related settings, including a new *Text Zoom* that makes it easier to change the overall font size (instead of adjusting font size settings for headings, paragraph text etc. separately). You can also switch to a different syntax mode (Markdown, TaskPaper...) from here.

*	Document templates allow you to customize the *New File* menu. Your templates can include placeholders for things like the current date/time or clipboard content, similar to snippets. Actually, each template is a full-fledged workflow, so you can incorporate more advanced logic if you like.

*	Improved in-document search and a new *Highlight All* option in the editing menu – this allows you to quickly highlight all occurrences of a selected word within the current document without having to type anything into the search bar.

*	The accessory panel has a completely new UI and the in-app browser now supports multiple tabs.

*	Sharing in the browser and preview now uses the standard iOS share sheet, and you can even use the share sheet in your own workflows, using the *Share Text/URL* action.

*	There's a new collection of bundled workflows that you can easily add to your list – just tap on *More Workflows* at the bottom of the "wrench" menu to see what's available.

*	Several additional Python modules enable new kinds of automation, including access to iOS Twitter accounts and Reminders.

*	The new *HTML to PDF* workflow action allows you to generate PDF documents from websites or HTML code.

# Feedback

I hope you enjoy writing with Editorial. If you have any feedback, please send an email to <editorial@omz-software.com> or visit the [Editorial community forum][forum]. You can also follow me on Twitter:[@olemoritz][tw].


[md]: http://daringfireball.net/markdown
[tp]: http://www.hogbaysoftware.com/products/taskpaper
[fntn]: http://fountain.io
[forum]: http://forum.omz-software.com/
[tw]: http://twitter.com/olemoritz
