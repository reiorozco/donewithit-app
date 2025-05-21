import client from "./client";

const send = (message: string, listingId: number) =>
  client.post("/messages", {
    listingId,
    message,
  });

export default {
  send,
};
