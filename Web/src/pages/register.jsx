import RegisterForm from "../components/registerForm/registerForm";
import { useNavigate } from "react-router";
import { register } from "../services/userService";
import { useState } from "react";
import { ROUTES } from "../constants";

const Register = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
    backgroundImage: ""
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();
    const trimmedName = formData.name.trim();

    if (!trimmedEmail || !trimmedPassword || !trimmedName) {
      setError("Email, password and name cannot be empty");
      return;
    }

    try {
      await register(formData);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <RegisterForm
      formData={formData}
      onChange={handleChange}
      onSubmit={onSubmit}
      error={error} 
    />
  );
};

export default Register;
