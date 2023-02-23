import CardThema from "@/component/cardThema";
import NavbarApp from "@/component/navbar";
import React from "react";

const TemplateWeb = () => {
  return (
    <div>
      <NavbarApp hideMenu={true} />
      <div className="grid grid-cols-1 justify-center flex flex-col text-center mt-[100px] mb-[20px]">
        <h1 className="font-bold text-4xl">Template Web</h1>
      </div>
      <div className="grid md:grid-cols-3 flex flex-col items-center w-[100%] gap-y-5">
        <CardThema src="/img1.png" />
        <CardThema src="/img2.png" />
        <CardThema src="/img3.png" />
        <CardThema src="/img2.png" />
        <CardThema src="/img1.png" />
        <CardThema src="/img1.png" />
      </div>
    </div>
  );
};

export default TemplateWeb;
