import { useEffect } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { styles } from "./loginForm.style";

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  error,
}) {
  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error,
        position: "top",
        topOffset: 100,
      });
    }
  }, [error]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.signInText}>SIGN IN WITH EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={onEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.signInText}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signInButton} onPress={onSubmit}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
