import { StreamClientProvider } from "@/providers/StreamClientProvider";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  );
}

export default RootLayout;
