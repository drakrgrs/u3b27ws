import { useState } from "react";

const SignUpForm = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/JSON" },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      setToken(result.token);
      setSuccessMessage(result.message);
      console.log(result);
    } catch (error) {
      setError(error.message);
      console.log("Please enter a username and password first.");
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {(!username && <p>Please enter a username and password.</p>) ||
        (!password && <p>Please enter a password.</p>)}
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            type="text"
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
