import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme/Provider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>
        <Navbar />
        {children}
      </main>
      <Toaster toastOptions={{
        style : {
          zIndex:"1000"
        }
      }}/>
    </ThemeProvider>
  );
}
