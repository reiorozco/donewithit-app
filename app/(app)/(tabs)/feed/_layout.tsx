import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function FeedLayout() {
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
