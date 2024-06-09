"use client";

import FooterRaja from "@/components/home/footer/Footer";
import Galery from "@/components/home/galery/galery";
import Pemesanan from "@/components/productscom/Pemesanan";
import ProductDetailCom from "@/components/productscom/ProductDetailCom";
import { useGetProductDetail } from "@/services/apiRajaKertas";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const detailList = {
  IVORY: {
    name: "IVORY",
    src: "/images/kertas/kertas.png",
    paragraf:
      "Kertas Ivory adalah jenis kertas yang memiliki warna putih alami. Kertas ini sering digunakan dalam percetakan, pembuatan undangan, dan berbagai aplikasi kreatif lainnya.",
  },
  DUPLEX: {
    name: "DUPLEX",
    src: "/images/kertas/kertas5.jpeg",
    paragraf:
      "Kertas duplex adalah jenis kertas yang memiliki dua sisi dengan karakteristik yang berbeda. Satu sisi dari kertas ini umumnya memiliki permukaan yang lebih halus dan putih, sementara sisi lainnya lebih kasar dan bisa berwarna abu-abu atau coklat tergantung pada kualitas dan jenisnya.",
  },
  "BROWN KRAFT SHEETS": {
    name: "BROWN KRAFT SHEETS",
    src: "/images/kertas/kertas2.png",
    paragraf:
      "Kertas Ivory adalah jenis kertas yang memiliki warna putih alami. Kertas ini sering digunakan dalam percetakan, pembuatan undangan, dan berbagai aplikasi kreatif lainnya.",
  },
  "WHITE KRAFT SHEETS": {
    name: "WHITE KRAFT SHEETS",
    src: "/images/kertas/kertas3.png",
    paragraf:
      "Kertas Ivory adalah jenis kertas yang memiliki warna putih alami. Kertas ini sering digunakan dalam percetakan, pembuatan undangan, dan berbagai aplikasi kreatif lainnya.",
  },
  "BROWN KRAFT ROLL": {
    name: "BROWN KRAFT ROLL",
    src: "/images/kertas/roll2.png",
    paragraf:
      "Kertas Ivory adalah jenis kertas yang memiliki warna putih alami. Kertas ini sering digunakan dalam percetakan, pembuatan undangan, dan berbagai aplikasi kreatif lainnya.",
    price: "55",
  },
  "GREASEPROOF SHEETS": {
    name: "GREASEPROOF SHEETS",
    src: "/images/kertas/kertas4.png",
    paragraf:
      "Kertas Ivory adalah jenis kertas yang memiliki warna putih alami. Kertas ini sering digunakan dalam percetakan, pembuatan undangan, dan berbagai aplikasi kreatif lainnya.",
  },
};

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
    </Suspense>
  );
}

export default DetailProduct;
