import Display from "./Display";
import { useState, useRef } from "react";

function App() {
  const displayRef = useRef();
  const [num, setNum] = useState('25');
  var str = generateRandomString(Number(num));
  return (
    <>
      <select onChange={e => setNum(e.target.value)}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
      <Display ref={displayRef} />
      <button onClick={() => {displayRef.current.drawString(str)}}>write</button>
      <button onClick={() => {displayRef.current.clearCanvas()}}>clear</button>
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