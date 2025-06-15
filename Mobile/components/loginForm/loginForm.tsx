import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./loginForm.style";

type LoginFormProps = {
  email: string;
  password: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onSubmit: () => void;
  error?: string;
};

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  error,
}: LoginFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      {error && <Text style={styles.error}>{error}</Text>}
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
  );
}


// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });