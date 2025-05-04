import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AccountLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="messages" options={{ headerShown: false }} />
    </Stack>
  );
}
