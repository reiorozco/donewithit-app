import React from "react";
import { Button, Text } from "react-native";
import { Stack } from "expo-router/stack";
import { useLocalSearchParams, useRouter } from "expo-router";

import Screen from "../../src/components/Screen";

function TweetDetails() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: name as string,

          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Text>Tweets Details</Text>

      <Button
        title="Fix title"
        onPress={() => router.setParams({ name: "Tweet Details" })}
      />
    </Screen>
  );
}

export default TweetDetails;
