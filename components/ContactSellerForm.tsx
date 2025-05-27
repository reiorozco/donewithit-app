import React from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import messagesApi from "@/api/messages";
import { AppFormField } from "@/components/forms";
import AppButton from "@/components/AppButton";

const schema = z.object({
  message: z.string().min(1),
});

export type FormData = z.infer<typeof schema>;

interface Props {
  listing: {
    id: number;
    image: any;
    price: number;
    title: string;
  };
}

function ContactSellerForm({ listing }: Props) {
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<FormData>({
    defaultValues: {
      message: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(data.message, listing.id);
    const isHttpOk = result.status >= 200 && result.status < 300;

    if (!isHttpOk) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();
    void Notifications.scheduleNotificationAsync({
      content: {
        body: "Your message was sent to the seller.",
        title: "Awesome!",
      },
      trigger: null,
    });

    console.log("Form data: ", data);
  });

  return (
    <View>
      <AppFormField
        control={control}
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />

      <View style={styles.submitButton}>
        <AppButton onPress={onSubmit} title="Contact Seller" />
      </View>

      {/*{isError && <AppText>Could not save the listing.</AppText>}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  submitButton: { marginTop: 10 },
});

export default ContactSellerForm;
