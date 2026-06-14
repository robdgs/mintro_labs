"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";

export function UserProfileSaver() {
  const { authenticated, user, ready } = usePrivy();

  useEffect(() => {
    if (!ready || !authenticated || !user) return;

    const saveProfile = async () => {
      try {
        const response = await fetch("/api/user/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            privy_user_id: user.id,
            email: user.email?.address || null,
            wallet_address: user.wallet?.address || null,
          }),
        });

        if (!response.ok) {
          console.error("Failed to save user profile");
        }
      } catch (error) {
        console.error("Error saving user profile:", error);
      }
    };

    saveProfile();
  }, [authenticated, user, ready]);

  return null;
}
