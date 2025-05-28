import LoginForm from "../components/loginForm/login";
import { useNavigate } from "react-router";
import { login } from "../services/userService";
import { useState } from "react";
import { logInFunction } from "../utilities/buttonFunction";
import { ToastContainer } from "react-toastify";

const Login = ({ logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Fields cannot be empty");
      return;
    }

    try {
      await login({ email: trimmedEmail, password: trimmedPassword });
      logInFunction(logIn, navigate);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        error={error}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={onSubmit}
      />
      <ToastContainer />
    </>
  );
};

export default Login;
