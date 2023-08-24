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
        name="(feed)"
        options={{
          headerShown: false,
          title: "Feed",

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="listingEdit"
        options={{
          title: "Listing Edit",
          headerShown: false,

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="application-edit"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          headerShown: false,

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
