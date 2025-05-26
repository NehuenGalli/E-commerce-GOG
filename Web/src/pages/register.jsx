import RegisterForm from "../components/registerForm/registerForm";
import { useNavigate } from "react-router";
import { login } from "../services/userService";
import { useState } from "react";
import NavBar from "../components/navBar/navBar";

const Register = ({ logIn }) => {
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
      logIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <RegisterForm
        email={email}
        password={password}
        error={error}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Register;
