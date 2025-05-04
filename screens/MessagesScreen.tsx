import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "@/components/lists";

type Message = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const initialMessages: Message[] = [
  {
    description: "D1",
    id: 1,
    image: require("../assets/images/avatar.jpg"),
    title: "T1",
  },
  {
    description: "D2",
    id: 2,
    image: require("../assets/images/avatar.jpg"),
    title: "T2",
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <FlatList
      data={messages}
      ItemSeparatorComponent={ListItemSeparator}
      keyExtractor={(message) => message.id.toString()}
      onRefresh={() => {
        setMessages([
          {
            description: "D2",
            id: 2,
            image: require("../assets/images/avatar.jpg"),
            title: "T2",
          },
        ]);
      }}
      refreshing={refreshing}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          onPress={() => console.log("Message selected", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
          subTitle={item.description}
          title={item.title}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
