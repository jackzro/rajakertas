"use client";

import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import { useGetKeunggulan } from "@/services/apiRajaKertas";

const features = [
  {
    icon: {
      src: <CodeSandboxOutlined style={{ fontSize: "100px", color: "#08c" }} />,
      alt: "",
    },
    heading: "Keunggulan RajaKertas",
    description: "Kami menyediakan berbagai jenis kertas berkualitas tinggi.",
    buttonTitle: "Lihat Lebih Lanjut",
  },
  {
    icon: {
      src: <CodeSandboxOutlined style={{ fontSize: "100px", color: "#08c" }} />,
      alt: "",
    },
    heading: "Manfaat RajaKertas",
    description: "Kami membantu memenuhi kebutuhan kertas Anda.",
    buttonTitle: "Lihat Lebih Lanjut",
  },
  {
    icon: {
      src: <CodeSandboxOutlined style={{ fontSize: "100px", color: "#08c" }} />,
      alt: "",
    },
    heading: "Fitur RajaKertas",
    description: "Temukan berbagai fitur unggulan dari RajaKertas.",
    buttonTitle: "Lihat Lebih Lanjut",
  },
  {
    icon: {
      src: <CodeSandboxOutlined style={{ fontSize: "100px", color: "#08c" }} />,
      alt: "",
    },
    heading: "Industri Kami",
    description:
      "Kami melayani berbagai industri dengan kebutuhan kertas mereka.",
    buttonTitle: "Lihat Lebih Lanjut",
  },
];

function Features() {
  const { data, isLoading } = useGetKeunggulan();
  return (
    <section className="px-[10%] py-16 md:py-24 lg:py-28 bg-brownkertas text-white ">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 py-2 md:grid-cols-2">
            {data?.key !== undefined && isLoading === false
              ? data?.value.map((unggul: any) => {
                  return (
                    <div key={unggul.title}>
                      <div className="mb-3 md:mb-4">
                        <img
                          src={"/images/Icon/icon.svg"}
                          className="size-12"
                          alt={unggul.title}
                        />
                      </div>
                      <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                        {unggul.title}
                      </h1>
                      <p>{unggul.description}</p>
                      <div className="mt-5 flex items-center gap-x-4 md:mt-6"></div>
                    </div>
                  );
                })
              : null}
          </div>
          {data?.key !== undefined && isLoading === false ? (
            <div className="flex justify-center items-center">
              <img
                src={data.app_config_image}
                className="rounded-img object-scale-down"
                alt={data.app}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Features;
