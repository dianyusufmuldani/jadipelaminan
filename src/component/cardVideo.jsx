import React from "react";

const CardVideo = ({ linkYt, onClick, order }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <iframe
        width="300"
        height="250"
        src={`https://www.youtube.com/embed/${linkYt}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="flex justify-center  w-full  mb-3 ">
        <a
          href={`https://wa.me/628990728387?text=Hello!%20Saya%20mau%20order%20undangan%20pernikahan%20video%20dengan%20kode%20${order}`}
        >
          <button
            className="bg-green-500 text-white rounded-md  py-1 px-3 hover:bg-green-300 w-auto mt-1"
            onClick={onClick}
          >
            Order Sekarang!
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardVideo;
