import client from "./client";

const login = (email: string, password: string) =>
  client.post<string, { error: string }>("/auth", { email, password });

export default { login };
