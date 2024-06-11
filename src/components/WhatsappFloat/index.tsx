import { handleBeli } from "@/helpers/tools";
import { useGetWhasapp } from "@/services/apiRajaKertas";
import { WhatsAppOutlined } from "@ant-design/icons";
import React from "react";

function WhatsappFloat() {
  const { data, isLoading } = useGetWhasapp();
  return (
    <>
      {data?.key !== undefined && isLoading === false ? (
        <WhatsAppOutlined
          className="animate-bounce"
          onClick={() => handleBeli(data?.value)}
          style={{
            backgroundColor: "green",
            fontSize: "50px",
            position: "fixed",
            zIndex: 100,
            textAlign: "center",
            borderRadius: 50,
            color: "white",
            bottom: "40px",
            right: "40px",
            cursor: "pointer",
          }}
        />
      ) : null}
    </>
  );
}

export default WhatsappFloat;
