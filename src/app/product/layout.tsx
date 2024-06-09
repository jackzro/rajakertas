import Navbar from "@/components/home/navbar/navbar";
import { handleBeli } from "@/helpers/tools";
import { WhatsAppOutlined } from "@ant-design/icons";
import React, { Suspense } from "react";

function ProductLayout({ children }: any) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div>
        <Navbar />
        {children}
      </div>
    </Suspense>
  );
}

export default ProductLayout;
