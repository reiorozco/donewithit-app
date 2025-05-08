import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "@/constants/colors";

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="home" size={size} />
          ),
          title: "Feed",
        }}
      />

      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="plus" size={size} />
          ),
          title: "Post",
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="account" size={size} />
          ),
          title: "Account",
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
