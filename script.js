var stage = new Konva.Stage({
  container: 'canvas',
  width: 800,
  height: 600
});

var layer = new Konva.Layer();

Konva.Image.fromURL("https://images.unsplash.com/photo-1598929439293-93f9d215b131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", function(image) {
    layer.add(image);
    image.draggable(true);
    const tr = new Konva.Transformer({
        node: image,
        enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      });
      layer.add(tr);
    layer.draw();
})

stage.add(layer);
layer.draw();