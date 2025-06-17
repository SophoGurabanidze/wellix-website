import { useMutation } from "@tanstack/react-query";
import API from "../api";

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await API.post("/api/auth/login", { email, password });
      return res.data;
    },
  });
};
