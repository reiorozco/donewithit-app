import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

import FormLoginValues from "../interfaces/formLoginValues";
import AuthContext, { User } from "../auth/context";
import authStorage from "../auth/storage";
import authApi from "../api/auth";
import cache from "../utility/cache";
import routes from "./routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (values: FormLoginValues) => {
    const result = await authApi.login(values.email, values.password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);

    if (result.data != null) {
      const user = jwtDecode<User>(result.data);
      console.log("User: ", user);

      authContext?.setUser(user);
      await authStorage.storeToken(result.data);

      router.replace(routes.FEED);
    }
  };

  const storeData = async (value: { id: string }) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user-id", jsonValue);

      const userId = await AsyncStorage.getItem("user-id");
      if (userId != null) console.log(JSON.parse(userId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <AppForm<FormLoginValues>
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            // alert(JSON.stringify(values, null, 2));

            await handleSubmit(values);

            await cache.store("id", values.email);

            setSubmitting(false);
          }, 400);
        }}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
});

export default LoginScreen;
