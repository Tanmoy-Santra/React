import { useMemo, useState } from "react";
import { Counts } from "./MemoCount";
function App() {

   const [count, setCount] = useState(0);

  //  {};

  const myBioData = useMemo(() => {
    return {
      name: "tommy",
      age: 30,
    };
  }, []);

  return (
    <div className="App">
     <div>
        <h1>{count}</h1>
        <button

          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBioData} />
    </div>
  );
}

export default App;
