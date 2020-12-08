import {useEffect, useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (3 <= count && count % 3 === 0) {
      setText(count + " is divisible by 3.")
    } else {
      setText(count + " is not divisible by 3.")
    }
  }, [count])

  return (
    <div style={{marginLeft: "30px"}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{text}</p>
    </div>
  );
}

export default App;
