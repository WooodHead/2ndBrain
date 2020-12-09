# Welcome to MWeb for iOS

MWeb is Pro Markdown writing, note taking and static blog generator App for Mac, iPad and iPhone. MWeb use of Github Flavored Markdown, referred to as GFM, which is one of the most widely used Markdown syntax. If you do not know what Markdown is, it is recommended to take a look at the [Markdown Syntax.md](Markdown Syntax.md) documentation. GFM in addition to support the official syntax, but also extended a lot of grammar. 

## Introducing MWeb for iOS

![mweb-ios-3](media/mweb-ios-3.png)

The above picture shows the main interface and features of MWeb for iOS. It should be noted that the iOS version of MWeb currently only supports viewing, editing, and adding documents for the MWeb for Mac document library. Management classification, deletion, and so on are not supported.

## GFM syntax guide

### Newlines

End a line with two or more spaces + enter.
Just typing enter to newline,please go to Settings and enable "Translate newlines to `<br>` tags" ( default is enable ).

### Task lists

**Example:**

```
- [ ] task one not finish `- + SPACE + [ ]`
- [x] task two finished `- + SPACE + [x]`
```

**Result:**

- [ ] task one not finish `- + SPACE + [ ]`
- [x] task two finished `- + SPACE + [x]`

### Image size and alignment **(Only in MWeb)**

Setting image width, align left, align right, align center syntax. For example: `![image description-w450](pic.jpg)`, -w450 mean set the image width: 450. `![-l500](pic.jpg)` --> align left, width:500. `![-r500](pic.jpg)` --> align right, width:500. `![-c500](pic.jpg)` --> align center, width:500.

### Multi-line code

**Example:**

	```js
	function fancyAlert(arg) {
	  if(arg) {
	    $.facebox({div:'#foo'})
	  }

	}
	```

**Result:**

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }

}
```

### Tables

**Example:**

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:

**Result:**

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


### Strikethrough

**Example:**

	 (like ~~this~~)

**Result:**

Any word wrapped with two tildes (like ~~this~~) will appear crossed out.

### LaTeX

Use double US dollors sign pair for Block level Math formula, and one US dollor sign pair for Inline Level.

```
For example this is a Block level $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$ formula, and this is an inline Level $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ formula.

\\[ \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } } \\]

```

**Result:**

For example this is a Block level $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$ formula, and this is an inline Level $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ formula.

\\[ \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } } \\]

### Footnote

**Example:**

```
This is a footnote:[^sample_footnote]
```

**Result:**

This is a footnote:[^sample_footnote]

[^sample_footnote]: footnote text detail...

### Comment And Read More..

<!-- comment -->
<!-- more -->

### TOC

**Example:**

```
[TOC]
```

**Result:**

[TOC]



