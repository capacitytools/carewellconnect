import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "CareWellConnect — Nigeria's Trusted Digital Health Platform",
    description: "Get reliable health education, track medications, and connect with a qualified nurse. Built by Nurse Eunice Tolulope Daramola.",
      keywords: "Nigerian health, nurse consultation, AI health assistant, medication tracker, pregnancy companion, digital health Nigeria",
      };

      export default function RootLayout({ children }) {
        return (
            <html lang="en">
                  <body className="min-h-screen flex flex-col bg-gray-50">
                          <Navbar />
                                  <main className="flex-1">
                                            {children}
                                                    </main>
                                                            <Footer />
                                                                    <WhatsAppButton />
                                                                          </body>
                                                                              </html>
                                                                                );
                                                                                }

                                                                                