import * as css from './Display.css';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Display = forwardRef(function Display(props, ref) {
  var canvasRef = useRef(null);
  function clearCanvas() {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function drawString() {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.fillText(props.str, 100, 100);
  }
  useImperativeHandle(ref, () => {
    return {
      clearCanvas, drawString
    };
  });
  return (
    <div id='display'>
      <canvas id='canvas' ref={canvasRef}></canvas>
    </div>
  );
});

export default Display;