import Navbar from "@/components/home/navbar/navbar";
import { handleBeli } from "@/helpers/tools";
import { WhatsAppOutlined } from "@ant-design/icons";
import React, { Suspense } from "react";

function ProductLayout({ children }: any) {
  return (
    <Suspense
      fallback={
        <div className="bg-black min-h-screen">
          <p className="text-white">Loading...</p>
        </div>
      }
    >
      <div>
        <Navbar />
        {children}
      </div>
    </Suspense>
  );
}

export default ProductLayout;
