import client from "./client";
import { RegisterFormData } from "@/screens/RegisterScreen";

const register = (userInfo: RegisterFormData) =>
  client.post("/users", userInfo);

export default { register };
