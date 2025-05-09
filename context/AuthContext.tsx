import { createContext, type PropsWithChildren, use } from "react";

import { useStorageState } from "./useStorageState";

type Session = {
  token: string;
  email: string;
} | null;

const AuthContext = createContext<{
  signIn: (email: string) => void;
  signOut: () => void;
  session?: Session;
  isLoading: boolean;
}>({
  isLoading: false,
  session: null,
  signIn: () => null,
  signOut: () => null,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] =
    useStorageState<Session>("session");

  return (
    <AuthContext
      value={{
        isLoading,
        session,
        signIn: async (email: string) => {
          setSession({ email, token: "mock-token-for-" + email });
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
