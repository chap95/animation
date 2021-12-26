class Panel {
  constructor(scale) {
    this.scale = 0;
  }

  draw() {
    let panelWidth = 300;
    let panelHeight = 300;
    context.fillStyle = 'rgba(255,0,0,0.8)';
    context.resetTransform();
    context.translate(canvasWidth, canvasHeight);
    context.scale(this.scale, this.scale);
    context.translate(-canvasWidth, -canvasHeight);
    context.fillRect(canvasWidth - panelWidth / 2, canvasHeight - panelHeight / 2, panelWidth ,panelHeight);
    context.resetTransform();
   
  }

  showContent(){
    context.fillStyle = '#fff';
    context.fillText(selectedBoxIndex + 1, canvasWidth, canvasHeight);
    
  }
}