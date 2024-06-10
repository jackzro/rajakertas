"use client";

import WhatsappFloat from "@/components/WhatsappFloat";
import FooterRaja from "@/components/home/footer/Footer";
import Galery from "@/components/home/galery/galery";
import Pemesanan from "@/components/productscom/Pemesanan";
import ProductDetailCom from "@/components/productscom/ProductDetailCom";
import { handleBeli } from "@/helpers/tools";
import { useGetProductDetail } from "@/services/apiRajaKertas";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useSearchParams } from "next/navigation";
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

function DetailProduct() {
  const searchParams = useSearchParams();
  const kertas = searchParams.get("kertas") as string;
  const { data, isLoading } = useGetProductDetail(kertas);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <div className="bg-white text-black">
          {data?.product !== undefined && isLoading === false ? (
            <>
              <ProductDetailCom
                title={data.product.title}
                description={data.description}
                src={data.product.product_image}
                alt={data.product.product_image_alt}
              />
              <Galery
                paragraf={
                  "Lihat contoh penggunaan kertas Ivory dalam berbagai produk atau aplikasi."
                }
                galerylist={galerylist}
              />
              <Pemesanan title={data.product.title} />
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
