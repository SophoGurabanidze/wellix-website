import { useState } from "react";
import { useChangePassword } from "../hooks/useChangePassword";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    mutate: changePassword,
    isLoading,
    error,
    reset,
  } = useChangePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    changePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setSuccessMessage("Password changed successfully.");
          setCurrentPassword("");
          setNewPassword("");
          reset(); // clear any previous error
        },
      }
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLoading ? "Changing..." : "Change Password"}
        </button>
        {successMessage && (
          <p className="text-green-600 text-sm text-center">{successMessage}</p>
        )}
        {error && (
          <p className="text-red-600 text-sm text-center">
            {error.response?.data?.message || "Password change failed"}
          </p>
        )}
      </form>
    </div>
  );
}
