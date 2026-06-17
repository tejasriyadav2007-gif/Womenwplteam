import { useState } from "react";

function PlayerForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Player name required");
      return;
    }

    alert("Added: " + name);

    setName("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Player Name"
      />

      {error && <p>{error}</p>}

      <button type="submit">
        Add Player
      </button>
    </form>
  );
}

export default PlayerForm;