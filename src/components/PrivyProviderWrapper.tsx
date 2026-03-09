"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { usePathname } from "next/navigation";

export default function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Skip Privy on admin routes
  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={{
        loginMethods: ["email", "wallet", "google"],
        appearance: {
          theme: "light",
          accentColor: "#A3FF12",
          logo: "/images/logo.png",
          showWalletLoginFirst: false,
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets" as any,
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
