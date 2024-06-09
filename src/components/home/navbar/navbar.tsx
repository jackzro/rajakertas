"use client";
import { useGetLogoHitam } from "@/services/apiRajaKertas";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const router = useRouter();
  const { data: logo, isLoading: loadingLogo } = useGetLogoHitam();
  const [openMenu, setOpenMenu] = useState(false);
  const handleBeli = () => {
    window.open(
      "https://wa.me/+6282116612573/?text=hello admin mau tanya pesan kertas",
      "_blank"
    );
  };

  const NavbarMenu = (drawer: any) => {
    return (
      <>
        <button
          className={`${
            drawer === true ? "hover:bg-white w-full rounded-md p-2" : ""
          } `}
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className={`${
            drawer === true ? "hover:bg-white w-full rounded-md p-2" : ""
          } `}
          onClick={() => router.push("/product")}
        >
          Product
        </button>
        <button
          className={`${
            drawer === true ? "hover:bg-white w-full rounded-md p-2" : ""
          } `}
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </button>
      </>
    );
  };
  return (
    <div className="px-10 border-b-2 border-black bg-white">
      <div className="w-full text-black flex justify-between py-4">
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          closable={true}
          placement="left"
          style={{
            backgroundColor: "#B99470",
          }}
        >
          <div className="text-black flex flex-col space-y-4 justify-center items-center">
            <span className="mb-10 border-b-2 border-black w-full flex justify-center items-center">
              {logo?.key !== undefined && loadingLogo === false ? (
                <img
                  className="cursor-pointer"
                  src={logo.app_config_image}
                  width={150}
                  height={150}
                />
              ) : null}
            </span>

            {NavbarMenu(true)}
          </div>
        </Drawer>
        <div className="flex justify-center items-center space-x-4">
          <span className="lg:hidden">
            <MenuOutlined
              style={{ fontSize: "20px" }}
              onClick={() => setOpenMenu(true)}
            />
          </span>
          {logo?.key !== undefined && loadingLogo === false ? (
            <img
              className="cursor-pointer"
              src={logo.app_config_image}
              width={150}
              height={150}
              onClick={() => router.push("/")}
            />
          ) : null}
        </div>
        <div className="hidden space-x-10 items-center justify-center lg:flex pt-6 font-semibold">
          {NavbarMenu(false)}
        </div>

        <div className="items-center justify-center flex pt-6"></div>
      </div>
    </div>
  );
}

export default Navbar;
