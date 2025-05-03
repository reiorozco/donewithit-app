import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AppButton from "@/components/AppButton";
import { AppFormField } from "@/components/forms";

const logoSource = require("@/assets/images/logo-red.png");

const schema = z.object({
  email: z.string().nonempty({ message: "This is required" }).email({
    message: "Invalid email address",
  }),
  password: z
    .string()
    .nonempty({ message: "This is required" })
    .min(5, { message: "Must be five or more characters long" }),
});

type FormData = z.infer<typeof schema>;

function LoginScreen() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} />

      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        control={control}
        icon="email"
        keyboardType="email-address"
        name="email"
        placeholder="Email"
      />

      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        control={control}
        icon="lock"
        name="password"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />

      <View style={styles.submitButton}>
        <AppButton title="Login" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  submitButton: { marginTop: 10 },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
});

export default LoginScreen;
