import React, { useState, useEffect } from "react";
import axios from "axios";

function CounterAndGet() {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const callingApi = async () => {
      const response = await axios.get("https://randomuser.me/api");
      console.log(response?.data?.results, "response");
      setResponse(response?.data?.results);
    };

    callingApi();
  }, []);

  return (
    <div>
      <h1>The Counter APP</h1>
      <div>{counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>{" "}
      <br />
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
      <div>{JSON.stringify(response[0])}</div> <br />
      <button type="button" onClick={() => console.log("click me")}>
        click ME
      </button>
      <form action="">
        <input type="text" name="name" value="helllo"></input>
      </form>
    </div>
  );
}

export default CounterAndGet;
