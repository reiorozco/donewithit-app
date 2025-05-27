import client from "./client";
import { LoginFormData } from "@/screens/LoginScreen";

const login = (loginForm: LoginFormData) =>
  client.post("/auth", {
    email: loginForm.email,
    password: loginForm.password,
  });

export default {
  login,
};
