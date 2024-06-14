"use client";
import { useGetTentangKami } from "@/services/apiRajaKertas";
import Image from "next/image";
import React from "react";

function Profile() {
  const { data, isLoading } = useGetTentangKami();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-10 bg-white space-y-2">
      {data?.key !== undefined && isLoading === false ? (
        <div className="md:p-20">
          <Image
            src={data.app_config_image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-[300px] md:h-[500px] rounded-img"
            priority
            alt={data.value.product_image_alt}
          />
        </div>
      ) : null}

      {data?.key !== undefined && isLoading === false ? (
        <div className="text-black flex flex-col items-start justify-center space-y-6">
          <span className="text-6xl">{data.value.title}</span>
          <span>
            <p>{data.value.description}</p>
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
