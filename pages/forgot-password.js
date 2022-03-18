import { useState } from "react";
import Login from "./login";

export default function ForgotPassword() {
  const [readyToReset, setReadyToReset] = useState(false);
  return (
    <Login readyToReset={readyToReset} />
  )
}
