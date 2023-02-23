import Image from "next/image";
import React from "react";

const FooterApp = () => {
  return (
    <footer>
      <div className="grid grid-cols-1  md:grid-cols-2 px-[20px]">
        <div>
          <h4 className="text-xl font-bold">Metode Pembayaran</h4>
          <br />
          <div className="grid grid-cols-4 flex gap-3 pr-10 justify-center items-center">
            <Image src="/icon/bca.png" height={100} width={100} />
            <Image src="/icon/dana.jpeg" height={70} width={100} />
            <Image src="/icon/shopeepay.png" height={70} width={100} />
            <Image src="/icon/gopay.png" height={50} width={70} />
            <Image src="/icon/ovo.png" height={70} width={50} />
            <Image src="/icon/linkaja.webp" height={70} width={50} />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-5">Lebih dekat tentang kami</h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div className="flex gap-5">
              <Image src={"/icon/wa.png"} height={30} width={30} />
              <h1>08990728387</h1>
            </div>
            <div className="flex gap-5">
              <Image src={"/icon/email.png"} height={30} width={45} />
              <h1>jadipelaminan@gmail.com</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-10">
            <div className="flex gap-5">
              <Image src={"/icon/instagram.png"} height={30} width={30} />
              <h1>@jadipelaminan</h1>
            </div>
            <div className="flex gap-5">
              {/* <Image src={"/icon/email.png"} height={30} width={45} />
              <h1>jadipelaminan@gmail.com</h1> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className="text-center">
        Copyright © 2023 Jadi Pelaminan All Right Reserved
      </p>
    </footer>
  );
};

export default FooterApp;
