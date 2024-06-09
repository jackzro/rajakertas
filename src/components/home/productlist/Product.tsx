"use client";
import useWindowSize from "@/hooks/useWIndow";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Product({ name, price, src, alt, id, urlSlug }: any) {
  const router = useRouter();
  const window = useWindowSize();

  return (
    <div className="text-white font-bold space-y-2 p-4 cursor-pointer ">
      {/* <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        onClick={() => router.push(`/product/detail/?kertas=${name}`)}
      /> */}
      <img
        src={src}
        // className={
        //   window.width! < 600 && window.width! > 100
        //     ? "h-[150px] w-[150px]"
        //     : "h-[300px] w-[300px]"
        // }
        className="object-scale-down"
        alt={alt}
        // onClick={() => router.push(`/product/detail/id`)}
        onClick={() => router.push(`/product/${urlSlug}?kertas=${id}`)}
      />
      <h1 className="text-black">{name}</h1>
    </div>
  );
}

export default Product;
