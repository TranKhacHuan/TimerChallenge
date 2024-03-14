import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerNames] = useState("");
  const playerNameRef = useRef();

  const handleSubmit = () => {
    setEnteredPlayerNames(playerNameRef.current.value);
  };
  return (
    <section id="player">
      <h2>
        {enteredPlayerName
          ? ` Welcome ${enteredPlayerName} entity`
          : "Welcome unknown entity"}
      </h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
