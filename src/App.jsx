import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      {token && <Authenticate token={token} setToken={setToken} />}
    </>
  );
}

export default App;
