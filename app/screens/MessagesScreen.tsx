import React from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "Item 1",
    description: "Descripción del Item 1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "Item 2",
    description: "Descripción del Item 2",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 3,
    title: "Item 3",
    description: "Descripción del Item 3",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 4,
    title: "Item 4",
    description: "Descripción del Item 4",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 5,
    title: "Item 5",
    description: "Descripción del Item 5",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 6,
    title: "Item 6",
    description: "Descripción del Item 6",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 7,
    title: "Item 7",
    description: "Descripción del Item 7",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 8,
    title: "Item 8",
    description: "Descripción del Item 8",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 9,
    title: "Item 9",
    description: "Descripción del Item 9",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 10,
    title: "Item 10",
    description: "Descripción del Item 10",
    image: require("../assets/avatar.jpg"),
  },
];

function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

export default MessagesScreen;
