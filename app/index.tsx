import React from "react";
import { Redirect } from "expo-router";

import { useSession } from "@/context/AuthContext";
import AppActivityIndicator from "@/components/AppActivityIndicator";
import routes from "@/constants/routes";

export default function Index() {
  const { isUserLoading: isLoading, user } = useSession();

  if (isLoading) {
    return <AppActivityIndicator />;
  }

  if (!user) {
    return <Redirect href={routes.WELCOME} />;
  }

  return <Redirect href={routes.HOME} />;
}
