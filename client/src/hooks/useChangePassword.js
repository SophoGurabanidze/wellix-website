import { useMutation } from "@tanstack/react-query";
import API from "../api";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: async ({ currentPassword, newPassword }) => {
      const res = await API.post("/api/auth/change-password", {
        currentPassword,
        newPassword,
      });
      return res.data;
    },
  });
};
