import React from "react";

const Introduction = () => {
  return (
    <div className="text-center justify-center flex flex-col w-9/12 ">
      <h1 className="font-bold md:text-6xl text-4xl text-white">
        JADI PELAMINAN
      </h1>
      <h3 className="font-bold text-3xl text-white">
        Website undangan pernikahan no. 1 di Indonesia.
      </h3>
      <p className="text-gray-50 text-justify">
        Segera buat undangan pernikahan kalian dengan cepat dan mudah namun
        tetap berkualitas tinggi
      </p>
      <br />
      <button className=" font-bold bg-green-700 h-auto rounded-xl py-3 px-1 text-white text-xl hover:bg-green-400 hover:text-white md:mb-0 mb-[30px]">
        Buat Undangan Sekarang!
      </button>
    </div>
  );
};

export default Introduction;
