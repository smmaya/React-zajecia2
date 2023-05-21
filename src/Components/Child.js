import { useState } from "react";

function Child({msg, myCallback}) {

  const [message, setMessage] = useState("");

  const btnClick=() =>{
    myCallback(message)
  }

  return (
    <div>
      <div className="card border-secondary mt-2 mb-2">
        <div className="card-body">
          <h5 className="card-title">Child component</h5>
          <h5>{msg}</h5>
          <input onInput={(e) => setMessage(e.currentTarget.value)} type="text" placeholder="input a message to parent"></input>
          <button onClick={btnClick} type="button" className="ms-2 btn btn-outline-primary">Send to Parent</button>
        </div>
      </div>
    </div>
  );
}

export default Child;
