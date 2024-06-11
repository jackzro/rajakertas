"use client";

import React from "react";
import {
  YoutubeFilled,
  LinkedinFilled,
  InstagramFilled,
  FacebookFilled,
  XOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useGetFooter } from "@/services/apiRajaKertas";
import Link from "next/link";

function FooterRaja() {
  const { data, isLoading } = useGetFooter();
  return (
    <div className="px-10 pt-4 text-white bg-brownkertas">
      {data?.key !== undefined && isLoading === false ? (
        <div className="grid md:grid-cols-3 space-y-2 md:space-x-6 justify-evenly">
          <div className="flex flex-col space-y-6">
            <span>
              <img src={data.app_config_image} width={150} height={100} />
            </span>

            <span>
              <h2>Alamat:</h2>
              <p>{data.value.alamat}</p>
            </span>

            <span>
              <h2>Kontak:</h2>
              <p>
                <WhatsAppOutlined /> {data.value.nomor} (Whatsapp)
              </p>
            </span>

            {/* <span className="space-x-5">
              <YoutubeFilled style={{ fontSize: "20px" }} />
              <FacebookFilled style={{ fontSize: "20px" }} />
              <InstagramFilled style={{ fontSize: "20px" }} />
              <LinkedinFilled style={{ fontSize: "20px" }} />
              <XOutlined style={{ fontSize: "20px" }} />
            </span> */}
          </div>

          {/* <div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end text-white"> */}
          <div className=" flex flex-col md:items-center ">
            <div className="flex flex-col space-y-2 items-start">
              {data?.value?.url_list_1.map((url: any) => {
                return (
                  <Link href={url.url} key={url.name}>
                    <h1 className="hover:text-black">{url.name}</h1>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col md:items-center ">
            <div className="flex flex-col space-y-2 items-start">
              {data?.value?.url_list_2.map((url: any) => {
                return (
                  <Link href={url.url} key={url.name}>
                    <h1 className="hover:text-black">{url.name}</h1>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* </div> */}
        </div>
      ) : // </div>
      null}

      <div className="border-t-2 border-black mt-10 py-6 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        <span>
          <p>© {new Date().getFullYear()} RajaKertas</p>
        </span>
      </div>
    </div>
  );
}

export default FooterRaja;
