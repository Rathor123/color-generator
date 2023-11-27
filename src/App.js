import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setcolor] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const handleclick = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (e) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <form onSubmit={handleclick}>
          <input
            type="text"
            className={error ? "error" : null}
            onChange={(e) => setcolor(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colorbox">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
