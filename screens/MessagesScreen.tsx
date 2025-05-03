import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItemDeleteAction from "@/components/ListItemDeleteAction";

type Message = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/images/avatar.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/avatar.jpg"),
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
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/images/avatar.jpg"),
          },
        ]);
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
