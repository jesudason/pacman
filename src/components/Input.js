import { useState } from "react";
import "./Input.scss";

export default function Input(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleInput(input);
    return;
  };

  return (
    <form className="Input" onSubmit={handleSubmit}>
      <label htmlFor="command-input">Enter your command:</label>
      <input
        id="command-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="submit" type="submit">
        Submit
      </button>
    </form>
  );
}
