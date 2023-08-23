import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Feed",
          headerTitle: "Tweets",

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen name="details" />
    </Tabs>
  );
}
