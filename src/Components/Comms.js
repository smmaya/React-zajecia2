import { useState } from "react";
import Child from "./Child";

function Comms() {

  const [message, setMessage] = useState("Message from parent component");

  const btnClick=() => {
    setMessage("Hello from Parent component!");
  }

  const getMessageFromChild=(info)=>{
    setInfoFromChild(info)
  }

  const [infoFromChild, setInfoFromChild] = useState();

  return (
    <div>

      <div className="card border-secondary mt-2 mb-2">
        <div className="card-body">
          <h5 className="card-title">Parent component</h5>
          <button onClick={btnClick} type="button" className="btn btn-outline-primary">Send to Child</button>
          <Child msg={message} myCallback={getMessageFromChild}></Child>
          <div>Message from Child: {infoFromChild}</div>
        </div>
      </div>

    </div>
  );
}

export default Comms;
