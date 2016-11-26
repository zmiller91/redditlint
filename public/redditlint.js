function valid(parts, tab)
{
    for(var p in parts)
    {
        if(parts[p].substring(0, tab.length) !== tab)
        {
            return false;
        }
    }

    return true;
}

function lint()
{
    var tab = "    ";
    var code = document.getElementById("code-block");
    var text = code.value;
    var parts = text.split("\n");
    if(!valid(parts, tab))
    {
        for(var p in parts)
        {
            parts[p] = tab + parts[p];
        }
    }

    code.value = parts.join("\n");
}

function lintAndCopy()
{
    lint();

    document.getElementById("code-block").select();
    document.execCommand("copy");

    $("#alert-copied-to-clipboard").show(0, function () {
        var that = this;
        setTimeout(function () {
            $(that).fadeOut();
        }, 1000);
    });
}

// thanks: http://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea
$(document).ready(function(){
    $("textarea").keydown(function(e) {
        if(e.keyCode === 9) { // tab was pressed
            // get caret position/selection
            var start = this.selectionStart;
            var end = this.selectionEnd;

            var $this = $(this);
            var value = $this.val();

            // set textarea value to: text before caret + tab + text after caret
            var tab = "    ";
            $this.val(value.substring(0, start)
                        + tab
                        + value.substring(end));

            // put caret at right position again (add one for the tab)
            this.selectionStart = this.selectionEnd = start + tab.length;

            // prevent the focus lose
            e.preventDefault();
        }
    });
});
