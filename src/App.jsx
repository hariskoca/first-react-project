import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MySentence from "./MySentence";

function App() {
  const [count, setCount] = useState(0);

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // destructuring objekta
  // const { name } = osoba;
  // console.log(name);
  // CEMU JE JEDNAKO name?
  // name === osoba.name

  // const osobaNiz = ["Kanita", 19];
  // destructuring niza
  // const [ime] = osobaNiz;
  // console.log(ime);

  // const a = 5
  // a++ === a = a + 1
  // a+1
  // setCount((prevValue) => prevValue++) NIJE KOREKTNO
  // setCount((prevValue) => prevValue + 3)

  return (
    // <React.Fragment>
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
      <MySentence />
    </>
    // </React.Fragment>
  );
}

export default App;
