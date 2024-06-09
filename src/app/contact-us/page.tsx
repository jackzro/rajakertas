"use client";

import ComponentContactUs from "@/components/ComContactUs";
import FooterRaja from "@/components/home/footer/Footer";
import { handleBeli } from "@/helpers/tools";
import { usePostContactUs } from "@/services/apiRajaKertas";
import { WhatsAppOutlined } from "@ant-design/icons";
import React from "react";

function ContactUs() {
  return (
    <div className="bg-white">
      <ComponentContactUs />
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

export default ContactUs;
