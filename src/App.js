import Display from "./Display";
import Timer from "./Timer";
import { useState, useRef, useEffect } from "react";

function App() {
  const displayRef = useRef();
  const timerRef = useRef();
  const [num, setNum] = useState('25');
  var str = generateRandomString(Number(num));
  var index = 0
  useEffect(() => {
    displayRef.current.drawString();
    window.addEventListener('keydown', (e) => {
      const char = e.key;
      if(e.keyCode < 32 || e.keyCode > 126) return;
      if(char === str[index]){
          displayRef.current.changeColor(index, "red");
          index++;
          if(index === length){
              window.removeEventListener('keydown', (e) => {});
          }
      }else{
          for(;;){
              displayRef.current.changeColor(index, "gray");
              if(index === 0) break;
              index--;
          }
      }
  })
  }, [str])
  return (
    <>
      <select onChange={e => setNum(e.target.value)}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
      <Timer ref={timerRef} />
      <Display str={str} ref={displayRef} />
      <button onClick={() => {displayRef.current.drawString()}}>write</button>
      <button onClick={() => {displayRef.current.clearCanvas()}}>clear</button>
      <button onClick={() => {timerRef.current.startTimer()}}>timer start</button>
      <button onClick={() => {timerRef.current.stopTimer()}}>timer stop</button>
      <button onClick={() => {timerRef.current.clearTimer()}}>timer clear</button>
    </>
  );
};

const generateRandomString = (len) => {
  var c = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  var cl = c.length;
  var r = "";
  for(var i=0; i<len; i++){
      r += c[Math.floor(Math.random()*cl)];
  }
  return r;
}

export default App;