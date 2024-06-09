import { handleBeli } from "@/helpers/tools";
import { Button } from "antd";
import React from "react";

function Pemesanan({ title }: any) {
  return (
    <div className="md:py-20 md:px-20 py-4 px-10 grid grid-cols-1 md:grid-cols-2">
      <div className="text-2xl font-bold space-y-6">
        <h1>Pemesanan Kertas {title}</h1>
        <p>Sekarang Juga</p>
      </div>
      <div className="space-y-6 items-start justify-center flex flex-col">
        <p>
          Kami menyediakan kertas {title} berkualitas tinggi dengan harga
          terjangkau. Hubungi kami sekarang untuk informasi lebih lanjut.
        </p>
        <Button onClick={handleBeli}>Pesan</Button>
      </div>
    </div>
  );
}

export default Pemesanan;
