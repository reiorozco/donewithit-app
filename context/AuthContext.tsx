import { createContext, type PropsWithChildren, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import authStorage from "./storage";
import authApi from "@/api/auth";
import usersApi from "@/api/users";
import { LoginFormData } from "@/screens/LoginScreen";
import { RegisterFormData } from "@/screens/RegisterScreen";

type User = {
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  logIn: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logOut: () => void;
  isLoading: boolean;
  isUserLoading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function SessionProvider({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();

  const {
    data: user,
    error: userError,
    isLoading: isUserLoading,
    refetch,
  } = useQuery<User | null>({
    queryFn: async () => (await authStorage.getUser()) as User | null,
    queryKey: ["auth", "user"],
    staleTime: Infinity,
  });

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: async (result) => {
      if (result?.data) {
        await authStorage.storeToken(result.data);
        await queryClient.invalidateQueries({ queryKey: ["auth", "user"] });
      }
    },
  });

  const registerMutation = useMutation({
    mutationFn: usersApi.register,
    onSuccess: async (_, registerForm) => {
      await logIn(registerForm);
    },
  });

  const logIn = async (data: LoginFormData) => {
    await loginMutation.mutateAsync(data);
  };

  const register = async (data: RegisterFormData) => {
    await registerMutation.mutateAsync(data);
  };

  const logOut = () => {
    void authStorage.removeToken();
    queryClient.setQueryData(["auth", "user"], null);
  };

  const isLoading =
    isUserLoading || loginMutation.isPending || registerMutation.isPending;

  const error =
    (userError as AxiosError<{ error: string }>)?.response?.data?.error ||
    (loginMutation.error as AxiosError<{ error: string }>)?.response?.data
      ?.error ||
    (registerMutation.error as AxiosError<{ error: string }>)?.response?.data
      ?.error ||
    null;

  return (
    <AuthContext.Provider
      value={{
        error,
        isLoading,
        isUserLoading,
        logIn,
        logOut,
        register,
        user: user ?? null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useSession() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }
  return context;
}
