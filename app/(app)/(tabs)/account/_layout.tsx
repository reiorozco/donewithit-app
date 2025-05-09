import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AccountLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Account" }}
      />

      <Stack.Screen name="messages" options={{ title: "Messages" }} />
    </Stack>
  );
}
