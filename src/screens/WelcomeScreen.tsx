import React, { useContext, useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useRootNavigationState, useRouter } from "expo-router";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import jwtDecode from "jwt-decode";

import AppButton from "../components/AppButton";

import routes from "./routes";
import authStorage from "../auth/storage";
import AuthContext from "../auth/context";

function WelcomeScreen() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { isConnected, isInternetReachable } = useNetInfo();
  const rootNavigationState = useRootNavigationState();

  // NetInfo
  useEffect(() => {
    NetInfo.fetch().then((netInfoState) => console.log(netInfoState));
  }, []);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    authContext?.setUser(jwtDecode(token));
  };

  useEffect(() => {
    if (!rootNavigationState?.key) return;

    restoreToken();

    if (authContext?.user) router.replace(routes.FEED);
  }, []);

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => router.push(routes.LOGIN)} />

        <AppButton
          title="Register"
          color="secondary"
          onPress={() => router.push(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
