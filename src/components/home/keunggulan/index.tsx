"use client";
import { useGetKeunggulan } from "@/services/apiRajaKertas";
import React from "react";

function Keunggulan() {
  // const { data, isLoading } = useGetKeunggulan();
  return (
    <div>
      {/* {data?.key === undefined && isLoading === false ? (
        <>
          {data?.value.map((feature: any) => {
            <div>
              <img src={"/images/Icon/icon.png"} />
            </div>;
          })}
        </>
      ) : null} */}
    </div>
  );
}

export default Keunggulan;
