import { ReactNode } from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar";

export const metadata: Metadata = {
  title: "Adequate dashboard",
  description: "Adequate user dashboard to manage their profile.",
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex flex-row gap-x-4 min-h-screen">
      <Sidebar />
      <div className="border-2 border-green-500 flex-grow">{children}</div>
    </div>
  );
};

export default DashboardLayout;
