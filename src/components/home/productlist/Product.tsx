"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Product({ name, price, src, alt, id, urlSlug }: any) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="text-white font-bold space-y-2 p-4 cursor-pointer ">
      <Image
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full object-scale-down"
        alt={alt}
        onClick={() => router.push(`/product/${urlSlug}`)}
      />
      <h1
        className={`${pathname === "/product" ? "text-black" : "text-white"}`}
      >
        {name}
      </h1>
    </div>
  );
}

export default Product;
