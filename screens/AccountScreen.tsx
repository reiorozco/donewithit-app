import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import ListItemSeparatorComponent from "@/components/ListItemSeparator";
import colors from "@/constants/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const avatarSource = require("@/assets/images/avatar.jpg");

function AccountScreen() {
  return (
    <>
      <View style={styles.container}>
        <ListItem
          title="Rei Orozco"
          subTitle="rfoc15@gmail.com"
          image={avatarSource}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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
