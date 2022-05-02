var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = new fabric.Canvas('imageCanvas'); 
//var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        //var img = new Image();
        //img.src = event.target.result;
        fabric.Image.fromURL(event.target.result, function(oImg) {
            oImg.scale(0.5).set('flipX', true);
            canvas.add(oImg);
          });
    }
    reader.readAsDataURL(e.target.files[0]);     
}

var canvas2 = new fabric.Canvas('Task2canvas');
var imgElement2 = document.getElementById('image');
var imgInstance2 = new fabric.Image(imgElement2, {
  
  
  opacity: 0.85
});
canvas2.add(imgInstance2);
canvas2.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas2.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas2.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  });