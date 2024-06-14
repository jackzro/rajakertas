import Image from "next/image";
import React from "react";

function Description({ src, alt, header, paragraph }: any) {
  return (
    <div className="relative px-[7%]">
      <>
        <div className="container">
          <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28 text-white">
            <div className="w-[800px]">
              <h1 className="mb-5 text-2xl leading-none font-semibold md:mb-6 md:text-5xl md:leading-tight">
                {header}
              </h1>
              <p className="text-md text-text-alternative md:text-lg">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <Image src={src} alt={alt} fill objectFit="cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </>
    </div>
  );
}

export default Description;
