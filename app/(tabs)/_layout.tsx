import { Tabs, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../../src/config/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={
        {
          // tabBarActiveBackgroundColor: "tomato",
          // tabBarActiveTintColor: "white",
          // tabBarInactiveBackgroundColor: "#eee",
          // tabBarInactiveTintColor: "black",
        }
      }
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

          tabBarButton: () => <NewListingButton />,

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
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

function NewListingButton() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("listingEdit")}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 5,
    bottom: 15,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});
