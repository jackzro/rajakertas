"use client";

import WhatsappFloat from "@/components/WhatsappFloat";
import Description from "@/components/home/description";
import FooterRaja from "@/components/home/footer/Footer";
import ProductView from "@/components/productscom/ProductView";
import { handleBeli } from "@/helpers/tools";
import { useGetMainProduct } from "@/services/apiRajaKertas";
import { WhatsAppOutlined } from "@ant-design/icons";
import React from "react";

function ProductPage() {
  const { data, isLoading } = useGetMainProduct();
  return (
    <div>
      {data?.key !== undefined && isLoading === false ? (
        <Description
          src={data.app_config_image}
          alt={data.value.title}
          header={data.value.title}
          paragraph={data.value.description}
        />
      ) : null}

      <ProductView />
      <FooterRaja />
      <WhatsappFloat />
    </div>
  );
}

export default ProductPage;
