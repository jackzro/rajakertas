"use client";

import { Button } from "antd";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useGetFaq, useGetWhasapp } from "@/services/apiRajaKertas";
import { handleBeli } from "@/helpers/tools";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    label: "Apakah kertasnya bisa dipotong sesuai ukuran kami ?",
    children:
      "sangat bisa kita spesialis custom potong ukuran kertas plano yang diinginkan dari lebar kertas roll berapa lalu kita potong panjang kertas sesuai keinginan sehingga mendapat sheet brp x brp",
  },
  {
    label: "Terdapat roll kertas ukuran berapa ?",
    children: "standar lebar 90cm 100cm.",
  },
  {
    label: "Apakah bisa pesen roll kertas saja? ",
    children:
      "Sangat bisa kita bisa sampe kirim roll kertas satu indonesia dan untuk lebar kertasnya bisa lanjut by via wa untuk roll kertas yang diinginkan berapa",
  },
  {
    label: "⁠Terdapat kurir kusus untuk kirim kertas ?",
    children:
      "Kita ada truck khusus untuk pengiriman roll kertas untuk pabrik percetakan anda.",
  },
  {
    label: "Minimum order berapa pcs?",
    children: "1 rim atau 500 pcs.",
  },

  {
    label: "Apakah kertas ini sudah food grade?",
    children:
      "Sudah food grade yang tipe SPE artinya sudah ada laminasi food grade dari bahan kertasnya",
  },
  {
    label: "Contoh produk packaging yang bisa dibuat apa saja?",
    children:
      "takeaway box craft, takeaway box full color, kertas minyak makanan, paper bag, hampers box, dll",
  },
];

function Question() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const { data, isLoading } = useGetFaq();
  const { data: whatsapp, isLoading: loadingWhatsapp } = useGetWhasapp();
  return (
    <div className="bg-white text-black py-20 px-4 grid grid-cols-1 lg:grid-cols-3 space-x-4 space-y-2 lg:px-10">
      <div className="flex space-y-6 flex-col col-span-1 mb-10">
        <h1 className="text-6xl font-bold">Pertanyaan</h1>
        <p>
          Temukan jawaban atas pertanyaan yang sering diajukan tentang produk
          dan layanan kami.
        </p>
        {whatsapp?.key !== undefined && loadingWhatsapp === false ? (
          <Button className="w-1/2" onClick={() => handleBeli(whatsapp)}>
            Hubungi
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
