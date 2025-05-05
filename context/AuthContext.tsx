import { createContext, type PropsWithChildren, use } from "react";

import { useStorageState } from "./useStorageState";

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  isLoading: false,
  session: null,
  signIn: () => null,
  signOut: () => null,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext
      value={{
        isLoading,
        session,
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx");
        },
        signOut: () => {
          console.log("sign out");
          setSession(null);
        },
      }}
    >
      {children}
    </AuthContext>
  );
}

// This hook can be used to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}
