import { Stack } from "expo-router";

import useNotifications from "@/hooks/useNotifications";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function FeedLayout() {
  const { expoPushToken } = useNotifications();

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
