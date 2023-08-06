import React, { useState } from "react";

function App() {
  const options = { hour12: false };
  let now = new Date().toLocaleTimeString(undefined, options);

  const [time, setTime] = useState(now);

  function update() {
    var newTime = new Date().toLocaleTimeString(undefined, options);
    setTime(newTime);
  }
  setInterval(update, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
