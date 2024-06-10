"use client";

import ComponentContactUs from "@/components/ComContactUs";
import WhatsappFloat from "@/components/WhatsappFloat";
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
      <WhatsappFloat />
    </div>
  );
}

export default ContactUs;
