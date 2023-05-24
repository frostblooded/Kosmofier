// Code heavily inspired by https://github.com/DaveRandom/cloud-to-butt-mozilla
(function()
{
    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var value = textNode.nodeValue;
        var regex = /([\w-']*?[kcq]+[aou]+[sz]+)([\w-']*)/gi;
        var replacingFormat = "$&, or some say, $1m$2";

        if(regex.test(value))
        {
            var a = 1;
        }

        textNode.nodeValue = value.replaceAll(regex, replacingFormat);
    }

    walk(document.body);
}());
