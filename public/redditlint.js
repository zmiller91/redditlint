function lint()
{
    var code = document.getElementById("code-block");
    var text = code.value;
    var parts = text.split("\n");
    for(var p in parts)
    {
        parts[p] = "    " + parts[p];
    }
    
    code.value = parts.join("\n");
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