import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import { Formik } from "formik";

import Screen from "./Screen";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          console.log("touched", touched);
          console.log(errors);

          return (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              {<Text>{errors.email}</Text> && touched.email && (
                <Text>{errors.email}</Text>
              )}

              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                textContentType="password"
                secureTextEntry
              />
              {<Text>{errors.password}</Text> && touched.password && (
                <Text>{errors.password}</Text>
              )}

              <AppButton title="Login" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
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
