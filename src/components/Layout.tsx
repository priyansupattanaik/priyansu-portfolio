
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import StarBackground from "./StarBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      <StarBackground />
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
