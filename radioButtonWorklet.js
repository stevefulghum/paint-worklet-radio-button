class RadioPainter {

  static get inputProperties() {
    return ['--radio-width', '--radio-height', '--radio-inner-width', '--radio-fill', '--radio-stroke'];
  }
  
  paint(ctx, geom, properties, args) {
    const widthProp = properties.get('--radio-width');
    const heightProp = properties.get('--radio-height');
    const innerProp = properties.get('--radio-inner-width');
    const fill = properties.get('--radio-fill');
    const stroke = properties.get('--radio-stroke');
    
    let width;
    let height;
    let inner;
    let midpoint;
      
    console.log(innerProp);
    
    if (!widthProp.unit) {
      // console.log('is not fancy');
      
      width = parseInt(widthProp[0], 10);
      height = parseInt(heightProp[0], 10);
      
      
      // let derp = width;
    } else {
      width = widthProp.value;
      height = heightProp.value;
      inner = innerProp.value;
      
      console.log(inner);
    }
    
//     midpoint = width / 2;
    
//     console.log(width);
//     console.log(height);
//     console.log(midpoint);
    
    for (let i = 0; i < 2; i++) {
      // console.log(i);
      // ctx.moveTo(15, 15);
      if (i === 0) {
        ctx.beginPath();
        ctx.arc((width/2), (width/2), ((width/2) - 1), 0, 2*Math.PI);

        ctx.lineWidth = 2;
        ctx.strokeStyle = stroke.toString();
        ctx.stroke();

        ctx.fillStyle = '#00f';
        ctx.fill();
        
      } else {
        ctx.beginPath();
        ctx.arc((width/2), (width/2), inner, 0, 2*Math.PI);

        // ctx.lineWidth = 0;
        // ctx.strokeStyle = stroke.toString();
        // ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.fill();
        
      }
    }
    
  }
  
  parseCSSPxLength(value) {
    let slicer = -2;
    let parsed = value.slice(slicer);
    
    return parsed;
  }
}

registerPaint('radio', RadioPainter);

