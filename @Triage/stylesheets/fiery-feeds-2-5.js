function FieryFeedsGetCurrentElementAttributes(touchPositionX, touchPositionY)
{
    var element = document.elementFromPoint(touchPositionX, touchPositionY);
    
    while (element.tagName.toLowerCase() == "span")
    {
        element = element.parentElement;
    }
    
    if (element.tagName.toLowerCase() == "img")
    {
        return JSON.stringify({"type":"img", "src": element.src, "alt": element.alt});
    }
    
    if (element.tagName.toLowerCase() == "a")
    {
        return JSON.stringify({"type":"a", "href": element.href});
    }
    
    if (element.tagName.toLowerCase() == "div" && element.id.toLowerCase() == "fiery-header-image")
    {
        return JSON.stringify({"type":"header"});
    }
    
    return JSON.stringify({"type":"none"});
}

function FieryFeedsInsertStyleString(styleString)
{
    document.getElementById("article-css").textContent = styleString;
}

// Bionic Reading
function FieryFeedsRunBionicReader(fixation, saccade)
{
    $("span.bionic-b").contents().unwrap();
    $($("#fiery-content")).html($($("#fiery-content")).html())
    
    var br = new BionicReader(fixation, saccade);
    var article = document.getElementById('fiery-content')
    br.renderNode(article);
}

// Hide unloadable images
images = document.getElementsByTagName('img');
for (var i = 0, len = images.length; i < len; i++)
{
    images[i].onerror = function()
    {
        this.style.display='none';
    }
    
    images[i].onload = function()
    {
        // Enlarge large enough images
        contentWidth = document.getElementById('fiery-content').offsetWidth;
        if (this.offsetWidth == contentWidth) {
            this.classList.add('large-image')
        }

        // Hide tracking images
        if (this.offsetWidth < 2) 
        {
            this.style.display='none';
        }
    }
}

// Force enable video controls
videos = document.getElementsByTagName('video');
for (var i = 0, len = videos.length; i < len; i++)
{
    videos[i].controls = true;
}
