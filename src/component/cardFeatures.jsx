import Image from "next/image";
import React from "react";

const CardFeatures = ({ src, title, description }) => {
  return (
    <div className=" bg-green-200 justify-center flex py-5 h-[220px] rounded-xl">
      <div className="flex flex-col items-center w-9/12">
        <Image src={src} height={50} width={50} />
        <br />
        <h5>
          <b>{title}</b>
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardFeatures;
