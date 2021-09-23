var elementID = document.getElementsByClassName("sidebarnav")
function toggledisplay(elementID)
    {
        (function(style) {
            style.display = style.display === 'none' ? '' : 'none';
        })(document.getElementsByClassName(elementID).style);
    }