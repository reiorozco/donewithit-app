import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";

const logoSource = require("@/assets/images/logo-red.png");

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        value={password}
        onChangeText={setPassword}
      />

      <AppButton
        title="Login"
        onPress={() => console.log("Login: ", email, password)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
