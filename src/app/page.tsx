"use client";

import Description from "@/components/home/description";
import Features from "@/components/home/features/features";
import FooterRaja from "@/components/home/footer/Footer";
import Galery from "@/components/home/galery/galery";
import Keunggulan from "@/components/home/keunggulan";
import Mitra from "@/components/home/mitra/mitra";
import Navbar from "@/components/home/navbar/navbar";
import ProductList from "@/components/home/productlist/ProductList";
import Profile from "@/components/home/profile/profile";
import Question from "@/components/home/question/question";
import { handleBeli } from "@/helpers/tools";
import { useGetHero } from "@/services/apiRajaKertas";
import { WhatsAppOutlined } from "@ant-design/icons";
import Image from "next/image";

const galerylist = [
  {
    src: "/images/galery/galery1.png",
  },
  {
    src: "/images/galery/galery2.png",
  },
  {
    src: "/images/galery/galery3.png",
  },
  {
    src: "/images/galery/galery4.png",
  },
];

export default function Home() {
  const { data, isLoading } = useGetHero();
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />
      {data?.key !== undefined && isLoading === false ? (
        <Description
          src={data.app_config_image}
          alt={data.value.title}
          header={data.value.title}
          paragraph={data.value.description}
        />
      ) : null}

      <Profile />
      <Features />
      <ProductList />
      <Question />
      <Mitra />
      <Galery
        paragraf={
          "Lihat berbagai penggunaan kertas dalam industri yang berbeda."
        }
        galerylist={galerylist}
      />
      <FooterRaja />
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
    </main>
  );
}
