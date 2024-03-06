import React, { createContext, useState } from "react";
import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";

export const LayoutContext = createContext<any>({});

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [pageTitle, setPageTitle] = useState<string>("");
  const [breadcrumbs, setBreadcrumbs] = useState<any>([]);
  const [pageDescription, setPageDescription] = useState<any>();

  return (
    <div className="layout flex min-h-screen flex-col items-center">
      <LayoutContext.Provider
        value={{ setPageTitle, setBreadcrumbs, setPageDescription }}
      >
        <Header />
        <div className="page-header container py-4">
          <div className="breadcrumb">
            blah blah
            {">"}
            blah blah
          </div>
          page name
        </div>
        <main className="container flex-1 py-2">{children}</main>
        <Footer />
      </LayoutContext.Provider>
    </div>
  );
};

export default PageLayout;
