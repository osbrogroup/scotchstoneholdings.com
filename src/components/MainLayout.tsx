import React from "react";
import Header from "./Header/Header.client";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}