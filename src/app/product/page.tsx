"use client";

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

      <div>
        <WhatsAppOutlined
          onClick={() => handleBeli()}
          style={{
            backgroundColor: "green",
            fontSize: "50px",
            position: "fixed",
            zIndex: 100,
            textAlign: "center",
            borderRadius: 50,
            bottom: "40px",
            right: "40px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default ProductPage;
