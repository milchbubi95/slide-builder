var stage = new Konva.Stage({
  container: 'canvas',
  width: 800,
  height: 600
});

var layer = new Konva.Layer();

Konva.Image.fromURL("https://images.unsplash.com/photo-1599721765049-d7f0e0f727a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1887&q=80", function(image) {
  resizeImageToCanvas(image);
  document.getElementById('sliderX').min = -(image.width() - stage.width());
  layer.add(image);
  layer.draw();
})

stage.add(layer);
layer.draw();

function setXPosition(event) {
  layer.clear();
  let image = layer.findOne('Image');
  image.x(event.value);
  layer.add(image);
  layer.draw();
}

function resizeImageToCanvas(image) {
  var width = image.width();
  var height = image.height();
  var ratio = 0;
  if(width <= height) {
    ratio = image.width() / stage.width();
    image.width(stage.width());
    image.height(image.height() / ratio);
  } else {
    ratio = image.height() / stage.height();
    image.height(stage.height());
    image.width(image.width() / ratio);
  }
}