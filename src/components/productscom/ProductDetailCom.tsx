import React from "react";

function ProductDetailCom({ title, description, src, alt }: any) {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center space-y-2 md:space-x-20 py-10 px-10">
        <span className="flex flex-col items-center md:items-start  justify-center space-y-10">
          <h1 className="text-2xl font-bold">Kertas {title}</h1>
          <p>{description}</p>
        </span>
        <span className="">
          <img src={src} className="rounded-img object-scale-down" alt={alt} />
        </span>
      </div>
    </div>
  );
}

export default ProductDetailCom;
