import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import IconT from "../interfaces/icon";
import colors from "../config/colors";

interface MenuItem {
  icon: IconT;
  title: string;
}

const menuItems: MenuItem[] = [
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

function AccountScreen() {
  return (
    <>
      <View style={styles.container}>
        <ListItem
          subTitle="rfoc15@gmail.com"
          image={require("../assets/avatar.jpg")}
          title="Rei Orozco"
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
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
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});

export default AccountScreen;
