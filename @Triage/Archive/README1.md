# Atom One Dark 2 for TaskPaper 3

A dark StyleSheet/Theme for [TaskPaper 3](http://taskpaper.com) heavily inspired by @pslobo's excellent adaptation of [Atom One Dark Syntax](https://github.com/atom/one-dark-syntax), which in turn I believe was heavily influenced by the now infamous [2006 Monokai theme for Textmate by Wimer Hazenberg](http://www.monokai.nl/blog/2006/07/15/textmate-color-theme/).
# 
![](https://raw.githubusercontent.com/jasonshanks/TaskPaper-Atom-One-Dark/master/Preview.png)

## Colours/Colors

- _Fountain Blue_ for items tagged `@next`
- _Malibu_ for URLs and Projects (gradually faded from Project levels 1-4)
- _Soft Purple_ for items tagged `@waiting`
- _Pistachio_ for items tagged `@today`, `@active` or `@now` (this is especially useful in conjunction with [this great script](http://support.hogbaysoftware.com/t/script-displaying-the-active-task-in-the-os-x-menu-bar/1290) by @complexpoint)
- _Froly_ for items tagged `@due`
- _Sunset_ for items tagged `@flag`, `@high`, `@hot`, `@priority(high)` or `@prio(1)`
- _Whiskey_ for vanilla tags
- _Chalky_ for context tags
- _Mischka_ for text
- _Bright Gray_ for selections
- _Ebony_ for the background

## Other Style Features

- Done tasks are dimmed so as not to distract from what needs to be done
- Done tasks also mutes all other colours that may have been applied from previous tags
- Notes are dimmed, non-italiced and slightly smaller in relation to tasks.
- Tags are always dimmed in relation to task text.
- Saved searches are a very subdued tone so as not to distract from the main list
- Guide lines and item handles are slim, subdued and tinted a faded Malibu blue.
- Paragraph spacing before and after Project titles and within notes is enhanced for clean separation.

## Installation

Move the Atom-One-Dark-Blue.less file to:

`~/Library/Application Support/TaskPaper/Stylesheets`

> NOTE: From within TaskPaper you can open this folder location from the **Window** menu > **StyleSheet** > **Open StyleSheet Folder**.

## Installation (prior to TaskPaper 3.5)

Backup then replace the **theme.less** file located at:

`~/Library/Application Support/TaskPaper/`

> NOTE: You can easily get to this folder location from the TaskPaper File menu > **Open Application Folder**. ALSO NOTE: You will need to change the name to theme.less to be recognised by TP versions earlier than 3.5

## TODO

- continue to update as TaskPaper theme styles change or expand
- create colour variations (first might re-instate Pedro's favoured Orange project titles)
- add distinction between due and overdue?

- add paragraph spacing? @done

- add subtle variation to Priority levels @done

- style the Sidebar if this becomes possible (white is really jarring against a dark theme, so I recommend hiding it and the Toolbar most of the time). @done

## RELEASE NOTES

**2018-10-07:**

*It's been awhile! Note: this is just a quick maintenance fix while I'm preparing to release a new Light/Dark version compatible with MacOS Mojave and TaskPaper 3.8. It's going to be much improved, I've learned a lot re design/coding since 2016!*

- fixed all font sizes to dynamically resize with user's zoom scaling setting.
- brought up the opacity and size of notes and done tasks/tags. Either I'm not sure what we were thinking before or my eyes are getting older...I suspect both!

**2016-09-03:**

- Commented out the custom font-family by default. [I'm enamored lately with **San Francisco** for prose (current TP default) and [**Hack**](http://sourcefoundry.org/hack/) for code.] You can easily insert your current favourite typeface on line 2 and remove //comment.
- reduced the multiple line height by .1 but still tighter than the default 1.3\. Largely because...
- Notes Pro: added some more professional looking paragraph and line-spacing for notes, especially if they consist of multiple paragraphs. [Thanks @mylevelbest for bringing this to my attention].
- increased contrast of selection color back to One Dark default of 10% lighter than background. I like the mixing of text/background idea but it lends to some subtle difference between task/note selection color (especially in future theme variants!)
- Reduced opacity of guide-lines. Because...subtle :)

**2016-08-29:**

Updated to reflect new naming & location conventions in TP 3.5 Preview:

- updated README with new Installation instructions
- added the newly referenced 'Dark Mode' appearance for the Sidebar and Titlebar – Yay! crossed a most-desired one off the TODO list :)
- incorporated new 'prose-targeted' editor styles. (de-activated all but typewriter scrolling one though as it doesn't suit my purposes. Would make more sense with FoldingText. If any of these stick I imagine they would get toggled in actual in-app preference settings, in which case I'll re-enable all)

Other tweaks:

- named Atom-One-Dark-Blue in preparation for possible style variations.
- soft-coded Project level tints & collapsed Handle-colors to make future style variations easier to implement.
- added border-color to Collapsed and Filtered handles for consistent width.
- reduced handle-border-width so they are more subtle when expanded.
- brightened Caret color to be a bit more prevalent.

**2016-05-26:**

- added new handle styles from 3.3
- reduced the brightness of collapsed handles to project color as I think they stand out with the new style possibilities.
- matched filtered handle style to the default tag color (and improved the less syntax by consolidating under @tag-color)

**2016-04-20:**

Added new theme possibilities from 3.1 and 3.2:

- item-handle-size, guide-line width, paragraph-spacing-before(after)
- updated deprecated `display` label to `content`
- reintegrated additional Atom One Dark styles of syntax-saturation, syntax-brightness, mono-2

Other tweaks:

- swapped Project and Tag colors (not a fan of Orange, but true to Atom One Dark it is heavily used as a function or value color.)
- changed tint of guides and invisibles to malibu blue.
- found content uses for 2 unused colours.
- swapped a few other colours around to my personal preference.
- de-italiced and reduced font size of notes (slightly OmniFocus-like)
- further reduced fade of Search tag lines.
- Enlarged top Project title font size
- Expanded Project styles to 4 levels with gradually reducing color fade and type size.
- Added additional tag names to related functions (active, now, hot, priority, due)

**2016-03-17:**

- forked from @pslobo's excellent code heist!
- renamed the deprecated **user.less** filename to new **theme.less**
- updated the handle tints to be in line with TP3 release style of tinting dim when not collapsed.
- borrowed the cleaner handle idea from [theme-notes-first](https://github.com/pascallaliberte/theme-notes-first) to make them invisible when there are no sub-tasks or sub-notes. [UPDATE: now a TP3 default style!]
