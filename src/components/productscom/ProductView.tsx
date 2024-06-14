import React from "react";
import Product from "../home/productlist/Product";
import { useGetProductList } from "@/services/apiRajaKertas";

function ProductView() {
  const { data, isLoading } = useGetProductList();
  return (
    <div className="bg-white text-black p-20 flex flex-col justify-center items-center space-y-10">
      <h1 className="text-6xl font-bold">Products</h1>
      <div className="grid lg:grid-cols-3 ">
        {data?.results.length !== 0 && isLoading === false
          ? data?.results.map((list: any) => (
              <Product
                name={list.product.title}
                src={list.product.product_image}
                alt={list.product.product_image_alt}
                price={"50"}
                key={list.product.title}
                id={list.product.id}
                urlSlug={list.url_slug}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default ProductView;
