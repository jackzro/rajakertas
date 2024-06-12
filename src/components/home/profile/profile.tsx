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
            className="rounded-img h-[300px] md:h-[500px] "
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
