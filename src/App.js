import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  // let wali wali complete line to Destructing kahte hai
  let [count, setCount] = useState(0);
  // ye function useEffect ko use krne ka function hai isi tarahse ise use kiya jata hai
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="App">
      <h1>useEffect-In-React {count}</h1>

      <button onClick={() => setCount(count + 1)}>Update counter</button>
    </div>
  );
}
