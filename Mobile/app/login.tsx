import { useState, useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useRouter } from "expo-router";
import LoginForm from "../components/loginForm/loginForm";
import { login } from "../services/userServices";
import { fieldsCannotBeEmpty_message } from "../utilities/error_message";
import { Keyboard } from "react-native";
import Spinner from "@/components/spinner";
import { ROUTES_MOBILE } from "../constants";

export default function Login() {
  const { logIn, isLoggedIn } = useContext(userContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(ROUTES_MOBILE.HOME);
    }
  }, [isLoggedIn]);

  const onSubmit = async () => {
    Keyboard.dismiss();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError(fieldsCannotBeEmpty_message);
      return;
    }

    try {
      const loginResult = await login({
        email: trimmedEmail,
        password: trimmedPassword,
      });
      if (!loginResult || !loginResult.token) {
        setError("Failed to obtain authentication token");
        return;
      }
      logIn(loginResult.token);

      router.replace(ROUTES_MOBILE.HOME);
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    }
  };

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        error={error}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={onSubmit}
      />
    </>
  );
}
