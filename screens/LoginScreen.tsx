import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useSession } from "@/context/AuthContext";
import AppButton from "@/components/AppButton";
import { AppFormField } from "@/components/forms";
import routes from "@/constants/routes";

const logoSource = require("@/assets/images/logo-red.png");

const schema = z.object({
  email: z.string().nonempty({ message: "Email is a required field" }).email({
    message: "Invalid email address",
  }),
  password: z.string().nonempty({ message: "Password is a required field" }),
});

type FormData = z.infer<typeof schema>;

function LoginScreen() {
  const router = useRouter();
  const { signIn } = useSession();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Login form submitted: ", data);

    signIn(data.email);
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace(routes.HOME);
  });

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
        <AppButton onPress={onSubmit} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
  submitButton: { marginTop: 10 },
});

export default LoginScreen;
