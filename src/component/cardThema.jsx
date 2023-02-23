import Image from "next/image";
import React from "react";

const CardThema = ({ src }) => {
  return (
    <div className="items-center justify-center flex felx-col">
      <div className=" bg-[url('/img1.png')] bg-cover md:w-[320px] w-[300px] justify-end  h-[250px] flex flex-col  items-center rounded-[20px]">
        {/* <Image src={src} width={300} height={200} className="rounded-xl" /> */}
        <br />
        <div className="flex justify-between  w-9/12  mb-3 ">
          <button className="bg-green-500 text-white rounded-md  py-1 px-1 hover:bg-green-300 w-[100px]">
            Order!
          </button>
          <button className="bg-green-500 text-white rounded-md  py-1 px-1 hover:bg-green-300 w-[100px]">
            DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardThema;
