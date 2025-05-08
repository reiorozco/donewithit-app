import React from "react";
import { Tabs, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NewListingButton from "@/components/NewListingButton";
import colors from "@/constants/colors";
import routes from "@/constants/routes";

function TabLayout() {
  const router = useRouter();

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
          tabBarButton: () => (
            <NewListingButton onPress={() => router.push(routes.POST)} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              name="plus-circle"
              size={size}
            />
          ),
          tabBarItemStyle: {
            alignItems: "center",
          },
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
