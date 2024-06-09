"use client";
import { Button, Carousel } from "antd";
import React, { useRef } from "react";
import Product from "../productlist/Product";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import useWindowSize from "@/hooks/useWIndow";
import { useGetHomeGallery } from "@/services/apiRajaKertas";

function Galery({ paragraf, galerylist }: any) {
  const { data, isLoading } = useGetHomeGallery();
  const window = useWindowSize();
  const carousel = useRef();
  //@ts-ignore
  const handleNext = () => carousel.current.next();
  //@ts-ignore
  const handlePrev = () => carousel.current.prev();

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
    <div className="text-white p-10 bg-brownkertas ">
      <div className="space-y-6 mb-14 pl-2">
        <h1 className="text-4xl font-bold">Galeri Gambar</h1>
        <p>{paragraf}</p>
      </div>

      <Carousel
        slidesToShow={adjustCarouselShow()}
        //@ts-ignore
        ref={carousel}
        dots={false}
        // afterChange={onChange}
      >
        {data?.key === undefined && isLoading === false
          ? data?.results.map((galleryhome: any) => (
              <div className="p-1" key={galleryhome.id}>
                <img
                  className="object-scale-down"
                  src={galleryhome.home_gallery_image}
                  alt={galleryhome.home_gallery_image_alt}
                />
              </div>
            ))
          : null}
      </Carousel>

      <div className="space-x-2 justify-end flex w-full px-4 mt-6">
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
  );
}

export default Galery;
