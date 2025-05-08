import { Href } from "expo-router";

interface Routes {
  HOME: Href;
  LOGIN: Href;
  POST: Href;
  REGISTER: Href;
}

const routes: Routes = {
  HOME: "/(app)/(tabs)/feed",
  LOGIN: "/(auth)/login",
  POST: "/(app)/(tabs)/post",
  REGISTER: "/(auth)/register",
};

export default routes;
