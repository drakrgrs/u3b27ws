import { useState } from "react";

const Authenticate = ({ token, setToken }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [data, setData] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);

      setSuccessMessage(result.message);
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate!</h2>

      {data && (
        <>
          <span>Username:{data.username}</span>
          <br />
          <span>IAT:{data.iat}</span>
          <br />
        </>
      )}

      {successMessage === "jwt malformed" ? (
        <p>Houston, we have a problem.</p>
      ) : (
        <p>{successMessage}</p>
      )}

      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
};

export default Authenticate;
