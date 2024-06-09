"use client";
import useWindowSize from "@/hooks/useWIndow";
import { useGetPartner } from "@/services/apiRajaKertas";
import React from "react";

const paramitra = [
  {
    src: "/images/mitra/mitra1.png",
  },
  {
    src: "/images/mitra/mitra2.png",
  },
  {
    src: "/images/mitra/mitra3.png",
  },
  {
    src: "/images/mitra/mitra4.png",
  },
  {
    src: "/images/mitra/mitra5.png",
  },
  {
    src: "/images/mitra/mitra6.png",
  },
  {
    src: "/images/mitra/mitra7.png",
  },
  {
    src: "/images/mitra/mitra8.png",
  },
  {
    src: "/images/mitra/mitra9.png",
  },
];

function Mitra() {
  const { data, isLoading } = useGetPartner();
  const window = useWindowSize();

  const firstColumn = (first: any, modulo: any) => {
    const colDecide = () => {
      switch (modulo) {
        case 5:
          return "grid grid-cols-5";
        case 4:
          return "grid grid-cols-4";
        case 3:
          return "grid grid-cols-3";
        case 2:
          return "grid grid-cols-2";
      }
    };

    return (
      <div className={`${colDecide()} space-y-4 `}>
        {first.map((partner: any) => (
          <div
            key={partner.id}
            className={` flex items-center justify-center px-4 `}
          >
            <img
              // className={
              //   window.width! < 600 && window.width! > 100
              //     ? "h-[50px] w-[50px]"
              //     : "h-[100px] w-[100px]"
              // }
              className="h-[100px] w-[100px]"
              // className="object-scale-down"
              src={partner.our_partner_image}
              alt={partner.our_partner_image_alt}
            />
          </div>
        ))}
      </div>
    );
  };

  const lastColumn = (last: any) => {
    return (
      <div className="flex items-center justify-center w-full mt-6">
        {last.map((partner: any) => (
          <div
            key={partner.id}
            className={` flex items-center justify-center px-4 `}
          >
            <img
              // className={
              //   window.width! < 600 && window.width! > 100
              //     ? "h-[50px] w-[50px]"
              //     : "h-[100px] w-[100px]"
              // }
              // className="object-scale-down"
              className="h-[100px] w-[100px]"
              src={partner.our_partner_image}
              alt={partner.our_partner_image_alt}
            />
          </div>
        ))}
      </div>
    );
  };

  const divideArray = () => {
    let modulo = 5;
    if (window.width! < 600 && window.width! > 100) {
      modulo = 2;
    } else if (window.width! < 800 && window.width! >= 600) {
      modulo = 3;
    } else if (window.width! <= 1200 && window.width! >= 800) {
      modulo = 4;
    } else {
      modulo = 5;
    }
    const lastCount = data?.results.length - (data?.results.length % modulo);

    let first = data?.results.slice(0, lastCount);
    let last = data?.results.slice(lastCount, data?.results.length);
    return (
      <div>
        {firstColumn(first, modulo)} {lastColumn(last)}
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-6 p-20 text-black bg-white">
      <h1>Mitra oleh salah satu Perusahaan Terkemuka di Dunia.</h1>
      {data?.results.length !== 0 && isLoading === false ? divideArray() : null}
      {/* <div className="grid grid-cols-3 lg:grid-cols-5 space-y-4 place-items-center  md:px-28">
        {data?.results.length !== 0 && isLoading === false
          ? data?.results.map((partner: any, i: any) => (
              <div
                key={partner.id}
                className={` flex items-center justify-center px-4 `}
              >
                <img
                  className={
                    window.width! < 600 && window.width! > 100
                      ? "h-[50px] w-[50px]"
                      : "h-[100px] w-[100px]"
                  }
                  // className="object-scale-down"
                  src={partner.our_partner_image}
                  alt={partner.our_partner_image_alt}
                />
              </div>
            ))
          : null}
      </div> */}
    </div>
  );
}

export default Mitra;
