import React from "react";
import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout flex min-h-screen flex-col items-center">
      <Header />
      <main className="container flex-1 py-2">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
