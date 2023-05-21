import { useState, useRef, useEffect } from "react";

function Hooks() {

  const inputRef = useRef();
  const [name, setName] = useState("Jan");
  const [result, setResult] = useState("");

  const [initValue, setInitValue] = useState(0);
  const [counter, setCounter] = useState(0);

  const [calc, setCalc] = useState(1);

  const btnClick = () => {
    alert("Current input's value is: " + inputRef.current.value)
  }

  const btnBindingClick = () => {
    setResult(name)
  }

  useEffect(() => {
    setInitValue(100)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1)
    },1000)
  })

  useEffect(() => {
    setCalc((c) => c*2)
  }, [initValue])

  return (
    <div>
      <p>This is React Hooks page</p>
      <div className="card border-secondary">
        <div className="card-body">
          <h4 className="card-title">React Hooks</h4>
          <input ref={inputRef} className="me-2" type="text" placeholder="input name"></input>
          <button onClick={btnClick} type="button mt-1 mb-1" className="btn btn-primary">Click me</button>
        </div>
      </div>

      <div className="card border-info mt-2 mb-2">
        <div className="card-body">
          <h4 className="card-title">Hook useState - binding</h4>
          <h4 className="card-title">{result}</h4>
          <input onInput={(e) => setName(e.currentTarget.value)} className="me-2" type="text" placeholder="input name"></input>
          <button onClick={btnBindingClick} type="button mt-1 mb-1" className="btn btn-primary">Click me</button>
        </div>
      </div>

      <div className="card border-warning mt-2 mb-2">
        <div className="card-body">
          <h4 className="card-title">Hook useEffect</h4>
          <h5>useEffect runs only first render: {initValue}</h5>
          <h5>useEffect runs every render (timer) - counter: {counter}</h5>
          <h5>useEffect runs first render and during change dependent value: {calc}</h5>
          <button onClick={() => setInitValue(initValue+1)} type="button mt-1 mb-1" className="btn btn-primary">Click me</button>
        </div>
      </div>

    </div>
  );
}

export default Hooks;
