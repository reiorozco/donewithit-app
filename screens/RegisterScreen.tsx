import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AppButton from "@/components/AppButton";
import { AppFormField, ErrorMessage } from "@/components/forms";
import routes from "@/constants/routes";
import { useSession } from "@/context/AuthContext";
import AppActivityIndicator from "@/components/AppActivityIndicator";

const logoSource = require("@/assets/images/logo-red.png");

const schema = z.object({
  email: z.string().nonempty({ message: "Email is a required field" }).email({
    message: "Invalid email address",
  }),
  name: z.string().max(100).nonempty({ message: "Name is a required field" }),
  password: z
    .string()
    .nonempty({ message: "Password is a required field" })
    .min(5, { message: "Must be five or more characters long" }),
});

export type RegisterFormData = z.infer<typeof schema>;

function RegisterScreen() {
  const router = useRouter();
  const { error, isLoading, register } = useSession();

  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("Register form submitted: ", data);

    await register(data);
    if (error) return;

    router.replace(routes.HOME);
  });

  return (
    <>
      {isLoading && <AppActivityIndicator />}

      <View style={styles.container}>
        <Image source={logoSource} style={styles.logo} />

        {error && <ErrorMessage error={error} />}

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
          autoCorrect={false}
          control={control}
          icon="account"
          name="name"
          placeholder="Name"
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
          <AppButton color="secondary" onPress={onSubmit} title="Register" />
        </View>
      </View>
    </>
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

export default RegisterScreen;
