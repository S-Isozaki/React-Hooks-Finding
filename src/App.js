import Display from "./Display";
import { useRef } from "react";

function App() {
  const ref = useRef();
  return (
    <>
      <Display ref={ref} />
      <button onClick={() => {ref.current.drawString()}}>write</button>
      <button onClick={() => {ref.current.clearCanvas()}}>clear</button>
    </>
  );
};

export default App;