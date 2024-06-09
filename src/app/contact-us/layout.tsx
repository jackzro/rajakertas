import Navbar from "@/components/home/navbar/navbar";
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
