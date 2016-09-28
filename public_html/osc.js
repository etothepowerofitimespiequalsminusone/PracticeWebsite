function O(obj)
{
    if(typeof obj == 'object') return obj;
    else return document.getElementById(obj);
}

function S(obj)
{
    return O('obj').style;
}

function C(name)
{
    var elements = document.getElementByTagName('*');
    var objects = [];
    
    for(var i = 0; i< elements.length; ++i)
    {
        objects.push(elements[i]);
    }
    
    return objects;
}