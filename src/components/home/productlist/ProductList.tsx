"use client";

import React, { useRef } from "react";
import { Button, Carousel } from "antd";
import Product from "./Product";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import useWindowSize from "@/hooks/useWIndow";
import { useRouter } from "next/navigation";
import { useGetProductList } from "@/services/apiRajaKertas";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const kertaslist = [
  {
    name: "IVORY",
    src: "/images/kertas/kertas.png",
    price: "55",
  },
  {
    name: "BROWN KRAFT SHEETS",
    src: "/images/kertas/kertas2.png",
    price: "55",
  },
  {
    name: "WHITE KRAFT SHEETS",
    src: "/images/kertas/kertas3.png",
    price: "55",
  },
  {
    name: "GREASEPROOF SHEETS",
    src: "/images/kertas/kertas4.png",
    price: "55",
  },
];

function ProductList() {
  const { data, isLoading } = useGetProductList();
  const window = useWindowSize();
  const router = useRouter();

  //@ts-ignore
  function onChange(a) {
    console.log(a);
  }
  const carousel = useRef();
  //@ts-ignore
  const handleNext = () => carousel.current.next();
  //@ts-ignore
  const handlePrev = () => carousel.current.prev();

  //@ts-ignore
  const goTo = (slide) => {
    //@ts-ignore
    carousel.current.goTo(slide, false);
  };

  const adjustCarouselShow = () => {
    if (window.width! < 600 && window.width! > 100) {
      return 2;
    } else if (window.width! < 800 && window.width! >= 600) {
      return 2;
    } else if (window.width! <= 1200 && window.width! >= 800) {
      return 3;
    } else {
      return 4;
    }
  };

  return (
    <div className="p-6 bg-brownkertas space-y-3">
      <div className=" text-white space-y-4 p-4">
        <div className="border-white border-t-2 mb-24"></div>
        <div>
          <h1 className="text-5xl font-bold">Produk </h1>
        </div>
        <div className="flex justify-between flex-col space-y-5 md:flex-row">
          <span>
            <p>Lihat daftar produk kertas berkualitas kami</p>
          </span>
          <Button onClick={() => router.push("/product")}>Lihat Semua</Button>
        </div>
      </div>
      <Carousel
        slidesToShow={adjustCarouselShow()}
        //@ts-ignore
        ref={carousel}
        dots={false}
        afterChange={onChange}
        // style={{ padding: "90px" }}
      >
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
      </Carousel>

      <div className="flex justify-between">
        {/* <div className="flex space-x-2">
          <Button
            shape="circle"
            className="bg-black text-white"
            type="primary"
            // style={{ backgroundColor: "#808080" }}
            size="small"
            onClick={() => goTo(0)}
          ></Button>
          <Button
            shape="circle"
            className="bg-black text-white"
            type="primary"
            style={{ backgroundColor: "#808080" }}
            size="small"
            onClick={() => goTo(1)}
          ></Button>
          <Button
            shape="circle"
            className="bg-black text-white"
            type="primary"
            style={{ backgroundColor: "#808080" }}
            size="small"
            onClick={() => goTo(2)}
          ></Button>
          <Button
            shape="circle"
            className="bg-black text-white"
            type="primary"
            style={{ backgroundColor: "#808080" }}
            size="small"
            onClick={() => goTo(3)}
          ></Button>
        </div> */}

        <div className="space-x-2 justify-end flex w-full px-4">
          <Button
            onClick={handlePrev}
            shape="circle"
            icon={<ArrowLeftOutlined />}
          ></Button>
          <Button
            onClick={handleNext}
            shape="circle"
            icon={<ArrowRightOutlined />}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
