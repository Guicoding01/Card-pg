açao();
function açao(){
    const cli = document.getElementById('açao')
    cli.addEventListener('click',function(){
        var el = document.getElementById("card_front");
        el.style.zIndex = 1;
        
    })
    var rotated = false;

    document.getElementById('açao').onclick = function() {
         var div = document.getElementById('card_front'),

    deg = rotated ? 0 : 195;

div.style.webkitTransform = 'rotate('+deg+'deg)'; 
div.style.mozTransform    = 'rotate('+deg+'deg)'; 
div.style.msTransform     = 'rotate('+deg+'deg)'; 
div.style.oTransform      = 'rotate('+deg+'deg)'; 
div.style.transform       = 'rotate('+deg+'deg)'; 

rotated = !rotated;
}
}