import Display from "./Display";
import { useState } from "react";

function App() {
  const [version, setVersion] = useState(0);
  return (
    <>
      <Display version={version} />
      <button onClick={() => setVersion(version => version + 1)}>write</button>
    </>
  );
};

export default App;