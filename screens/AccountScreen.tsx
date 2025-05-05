import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Href, useRouter } from "expo-router";

import { useSession } from "@/context/AuthContext";
import Icon, { IconProps } from "@/components/Icon";
import { ListItem, ListItemSeparator } from "@/components/lists";
import colors from "@/constants/colors";

const menuItems: {
  icon: IconProps;
  route?: Href;
  title: string;
}[] = [
  {
    icon: {
      backgroundColor: colors.primary,
      name: "format-list-bulleted",
    },
    title: "My Listings",
  },
  {
    icon: {
      backgroundColor: colors.secondary,
      name: "email",
    },
    route: "/account/messages",
    title: "My Messages",
  },
];

const avatarSource = require("@/assets/images/avatar.jpg");

function AccountScreen() {
  const router = useRouter();
  const { signOut } = useSession();

  return (
    <>
      <View style={styles.container}>
        <ListItem
          image={avatarSource}
          subTitle="rfoc15@gmail.com"
          title="Rei Orozco"
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
              onPress={() => {
                if (item.route) router.push(item.route);
              }}
              title={item.title}
            />
          )}
        />
      </View>

      <ListItem
        IconComponent={<Icon backgroundColor="#ffe66d" name="logout" />}
        onPress={() => signOut()}
        title="Log Out"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
