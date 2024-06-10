"use client";
import { useGetTentangKami } from "@/services/apiRajaKertas";
import React from "react";

function Profile() {
  const { data, isLoading } = useGetTentangKami();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-10 bg-white space-y-2">
      {data?.key !== undefined && isLoading === false ? (
        <div className="md:p-20">
          <img
            src={data.app_config_image}
            className="rounded-img h-[500px] "
            alt={data.value.product_image_alt}
          />
        </div>
      ) : null}

      {data?.key !== undefined && isLoading === false ? (
        <div className="text-black flex flex-col items-start justify-center space-y-6">
          <span className="text-6xl">Tentang Kami</span>
          <span>
            <p>
              Kami adalah RajaKertas, sebuah perusahaan yang menyediakan dan
              mendistribusikan kertas secara online. Misi kami adalah
              menyediakan kertas sebagai bahan baku untuk bisnis atau ritel.
              Kami saat ini menyediakan kertas ivory, kraft paper, art carton,
              dan wrapping paper. Di masa depan, kami akan menyediakan lebih
              banyak jenis kertas.
            </p>
            <br></br>
            <p>
              Kami juga perusahaan paper converting adalah perusahaan yang
              bergerak di industri pengolahan kertas. Mereka mengambil bahan
              baku kertas dalam berbagai bentuk dan mengolahnya menjadi produk
              kertas yang siap pakai untuk berbagai keperluan. Proses konversi
              ini bisa meliputi berbagai tahapan, seperti pemotongan, pelapisan,
              melipat, dan pencetakan.
            </p>
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
