var imageLoader = document.getElementById('imageLoader');

    imageLoader.addEventListener('change', handleImage, false);
var canvas = new fabric.Canvas('imageCanvas'); 


var imgInstance2;
function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
      fabric.Image.fromURL(event.target.result, function(oImg) {
            oImg.scale(1).set('flipX', true);
            canvas.add(oImg);  
          });
          
    }
    reader.readAsDataURL(e.target.files[0]); 
}

canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 1) zoom = 1;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
    
  });
  
  