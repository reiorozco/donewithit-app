import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import AppTextInput from "@/components/AppTextInput";
import colors from "@/constants/colors";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  console.log("errors: ", errors);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && (
        <AppText style={styles.textError}>{errors.email.message}</AppText>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            secureTextEntry
            textContentType="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && (
        <AppText style={styles.textError}>{errors.password.message}</AppText>
      )}

      <View style={styles.loginButtonContainer}>
        <AppButton title="Login" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  loginButtonContainer: { marginTop: 10 },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
  textError: {
    color: colors.danger,
    fontSize: 15,
    marginLeft: 10,
  },
});

export default LoginScreen;
