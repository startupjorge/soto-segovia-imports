import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBubble from "@/components/ChatBubble";
import { LanguageProvider } from "@/components/LanguageContext";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBubble />
    </LanguageProvider>
  );
}
