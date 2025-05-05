import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { useSession } from "@/context/AuthContext";

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/(app)/(tabs)");
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
