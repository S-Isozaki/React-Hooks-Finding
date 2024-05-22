import * as css from './Display.css';
import { useEffect, useRef, useState } from 'react';

function Display(props) {
  var canvasRef = useRef(null);
  function handleDisplay(e) {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  const [str, setStr] = useState("1");
  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.fillText(str, 100, 100);
    setStr(str => str + "0");
  }, [props.version])
  return (
    <div id='display'>
      <canvas id='canvas' ref={canvasRef}></canvas>
      <div id='jumpbutton' onClick={handleDisplay}></div>
    </div>
  );
};

export default Display;