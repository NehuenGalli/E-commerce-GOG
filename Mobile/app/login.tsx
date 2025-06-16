import { useState, useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useRouter } from "expo-router";
import LoginForm from "../components/loginForm/loginForm";
import { login } from "../services/userService"
import { fieldsCannotBeEmpty_message } from "../utilities/error_message";
import { Keyboard } from "react-native";
import Spinner from "@/components/spinner";

export default function Login() {
  const { logIn, isLoggedIn, getToken } = useContext(userContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    setIsLoading(true);
    if (isLoggedIn) {
      router.replace("/home");
    }
    setIsLoading(false);
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
      const loginResult = await login({ email: trimmedEmail, password: trimmedPassword });
      if (!loginResult || !loginResult.token) {
        setError("No se pudo obtener el token de autenticación");
        return;
      }
      logIn(loginResult.token);
        
      router.replace("/home");
      
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <>
    {isLoading && <Spinner />}
     {
      
      !isLoading && 
    <LoginForm
      email={email}
      password={password}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={onSubmit}
    />
     }
  </>
  );
}