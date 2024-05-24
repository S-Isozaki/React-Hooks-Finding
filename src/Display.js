import * as css from './Display.css';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Display = forwardRef(function Display(props, ref) {
  var canvasRef = useRef(null);
  var str = props.str;
  var numberOfRow = str.length / 25;
  var charFieldWidth = 10;
  var charFieldHeight = 15;
  const numberOfColumn = 25;
  const leftMargin = 5;
  const topMargin = 10;
  const charHeight = 8;
  const decender = 5;
  
  function clearCanvas() {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function drawString() {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    var numberOfRow = Math.floor(str.length / numberOfColumn);
    ctx.font = toString(charHeight) + "px Roboto Mono";
    ctx.fillStyle = "gray";
    clearCanvas();
    for(var i = 0; i < numberOfRow; i++){
      for(var j = 0; j < numberOfColumn; j++){
        var index = numberOfColumn * i + j;
        var width = ctx.measureText(str[index]).width;
        ctx.fillText(str[index], leftMargin + j * charFieldWidth + (charFieldWidth - width) / 2, topMargin + i * charFieldHeight)
      }
    }
  }
  function changeColor(index, color) {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    var width = ctx.measureText(str[index]).width;
    ctx.clearRect(leftMargin + (index % numberOfColumn) * charFieldWidth, topMargin + Math.floor(index / numberOfColumn) * charFieldHeight + decender, charFieldWidth, -charFieldHeight);
    ctx.fillStyle = color;
    ctx.fillText(str[index], leftMargin + (index % numberOfColumn) * charFieldWidth + (charFieldWidth - width) / 2, topMargin + Math.floor(index / numberOfColumn) * charFieldHeight);
  }
  useImperativeHandle(ref, () => {
    return {
      clearCanvas, drawString, changeColor
    };
  });
  return (
    <div id='display'>
      <canvas id='canvas' ref={canvasRef}></canvas>
    </div>
  );
});

export default Display;