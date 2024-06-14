"use client";

import { Button } from "antd";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useGetFaq, useGetWhasapp } from "@/services/apiRajaKertas";
import { handleBeli } from "@/helpers/tools";

function Question() {
  // const onChange = (key: string | string[]) => {
  //   console.log(key);
  // };
  const { data, isLoading } = useGetFaq();
  const { data: whatsapp, isLoading: loadingWhatsapp } = useGetWhasapp();
  return (
    <div className="bg-white text-black py-20 px-4 grid grid-cols-1 lg:grid-cols-3 lg:space-x-20 space-y-2 lg:px-10">
      <div className="flex space-y-6 flex-col col-span-1 mb-10">
        <h1 className="text-6xl font-bold">Pertanyaan</h1>
        <p>
          Temukan jawaban atas pertanyaan yang sering diajukan tentang produk
          dan layanan kami.
        </p>
        {whatsapp?.key !== undefined && loadingWhatsapp === false ? (
          <Button className="w-1/2" onClick={() => handleBeli(whatsapp)}>
            Hubungi Kami
          </Button>
        ) : null}
      </div>

      <Collapse
        defaultActiveKey={["1"]}
        // onChange={onChange}
        ghost
        className="col-span-2"
      >
        {data?.key !== undefined && isLoading === false
          ? data?.value.list.map((faq: any) => (
              <Collapse.Panel
                key={faq.question}
                header={faq.question}
                className="border-black border-t-2 border-b-2"
              >
                <p>{faq.answer}</p>
              </Collapse.Panel>
            ))
          : null}
        {/* {items?.map((item, index) => {
          return (
            <Collapse.Panel
              key={index}
              header={item.label}
              className="border-black border-t-2 border-b-2"
            >
              <p>{item.children}</p>
            </Collapse.Panel>
          );
        })} */}
      </Collapse>
    </div>
  );
}

export default Question;
