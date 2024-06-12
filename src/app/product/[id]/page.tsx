"use client";

import WhatsappFloat from "@/components/WhatsappFloat";
import FooterRaja from "@/components/home/footer/Footer";
import Galery from "@/components/home/galery/galery";
import Pemesanan from "@/components/productscom/Pemesanan";
import ProductDetailCom from "@/components/productscom/ProductDetailCom";
import { useGetProductDetail } from "@/services/apiRajaKertas";
import React, { Suspense } from "react";

const galerylist = [
  {
    src: "/images/ivory/ivory1.png",
  },
  {
    src: "/images/ivory/ivory2.png",
  },
  {
    src: "/images/ivory/ivory3.png",
  },
  {
    src: "/images/ivory/ivory4.png",
  },
];

function DetailProduct({ params }: any) {
  const { id } = params;
  const { data, isLoading } = useGetProductDetail(id);
  return (
    <Suspense
      fallback={
        <div className="bg-black min-h-screen">
          <p className="text-white">Loading...</p>
        </div>
      }
    >
      <div>
        <div className="bg-white text-black">
          {data?.results.length !== 0 && isLoading === false ? (
            <>
              <ProductDetailCom
                title={data.results[0].product.title}
                description={data.results[0].description}
                src={data.results[0].product.product_image}
                alt={data.results[0].product.product_image_alt}
              />
              <Galery
                paragraf={
                  "Lihat contoh penggunaan kertas Ivory dalam berbagai produk atau aplikasi."
                }
                galerylist={galerylist}
              />
              <Pemesanan title={data.results[0].product.title} />
              <FooterRaja />
            </>
          ) : null}
        </div>
      </div>
      <WhatsappFloat />
    </Suspense>
  );
}

export default DetailProduct;
