import { Stack } from "expo-router";
import Constants from "expo-constants";
import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { ExpoPushToken } from "expo-notifications";

import expoPushTokensApi from "@/api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export const unstable_settings = {
  initialRouteName: "index",
};

export default function FeedLayout() {
  const [expoPushToken, setExpoPushToken] = useState("");
  // const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
  //   [],
  // );
  // const [notification, setNotification] = useState<
  //   Notifications.Notification | undefined
  // >(undefined);
  const notificationListener = useRef<Notifications.EventSubscription>(null);
  // const responseListenÓer = useRef<Notifications.EventSubscription>(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      token && setExpoPushToken(token);
      token &&
        void expoPushTokensApi.register(
          expoPushToken as unknown as ExpoPushToken,
        );
    });

    // if (Platform.OS === "android") {
    //   Notifications.getNotificationChannelsAsync().then((value) =>
    //     setChannels(value ?? []),
    //   );
    // }

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // setNotification(notification);
        console.log("notification: ", notification);
      });
    //
    // responseListener.current =
    //   Notifications.addNotificationResponseReceivedListener((response) => {
    //     console.log(response);
    //   });
    //
    // return () => {
    //   notificationListener.current &&
    //     Notifications.removeNotificationSubscription(
    //       notificationListener.current,
    //     );
    //   responseListener.current &&
    //     Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, [expoPushToken]);

  console.log("expoPushToken: ", expoPushToken);

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="details/[id]"
        options={{ presentation: "modal", title: "" }}
      />
    </Stack>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("myNotificationChannel", {
      importance: Notifications.AndroidImportance.MAX,
      lightColor: "#FF231F7C",
      name: "A channel is needed for the permissions prompt to appear",
      vibrationPattern: [0, 250, 250, 250],
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get a push token for push notification!");
      return;
    }

    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error("Project ID not found");
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log("registerForPushNotificationsAsync: ", token);
    } catch (e) {
      token = "";
      console.log(e);
    }
  } else {
    alert("Must use a physical device for Push Notifications");
  }

  return token;
}
