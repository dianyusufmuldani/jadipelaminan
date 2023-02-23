import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const DemoPink1 = () => {
  const [timerDay, setTimerDay] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let inverval = useRef();
  const startTimer = () => {
    const CountdownDate = new Date("Feb 24 2023 00:00:00").getTime();
    inverval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        //timedout
        clearInterval(inverval.current);
      } else {
        //updateTimer
        setTimerDay(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(inverval.current);
    };
  });
  return (
    <>
      <div className=" bg-[url('../../public/bg/bg1.png')] w-[100%] h-[100vh] items-center text-center flex flex-col justify-center">
        <Image
          src={"/element/pink1-1.png"}
          width={200}
          height={200}
          alt="Left Top"
          className="absolute left-0 top-0"
        />
        <Image
          src={"/element/pink1-3.png"}
          width={200}
          height={200}
          alt="Right Top"
          className="absolute right-0 top-0"
        />
        <Image
          src={"/element/pink1-4.png"}
          width={200}
          height={200}
          alt="Left Bottom"
          className="absolute left-0 bottom-0"
        />
        <Image
          src={"/element/pink1-2.png"}
          width={200}
          height={200}
          alt="Right Bottom"
          className="absolute right-0 bottom-0"
        />

        <h1 className="font-bold md:text-4xl text-2xl w-[50%]">
          You Are Invited To The Wedding Of
        </h1>
        <Image
          src={"/image_cover/pink1.png"}
          width={400}
          height={400}
          className="md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
        />
        <h2 className="font-bold font-serif text-xl">Dinda & Rian</h2>
        <h3 className="font-bold">Selasa, 23 Februari 2023</h3>
        <div className="grid grid-cols-4 gap-1 md:mt-3 md:mb-0 mb-5 text-white md:font-bold md:text-xl text-[10px]">
          <div className="bg-pink-500 rounded-xl px-2">
            <h4>{timerDay}</h4>
            <h4>HARI</h4>
          </div>
          <div className="bg-pink-500 rounded-xl px-2">
            <h4>{timerHours}</h4>
            <h4>JAM</h4>
          </div>
          <div className="bg-pink-500 rounded-xl px-2">
            <h4>{timerMinutes}</h4>
            <h4>MENIT</h4>
          </div>
          <div className="bg-pink-500 rounded-xl px-2">
            <h4>{timerSeconds}</h4>
            <h4>DETIK</h4>
          </div>
        </div>
      </div>
      <div className="text-center justify-center flex bg-pink-800 text-white py-10">
        <div className="w-[90%]">
          <p>
            “Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan
            Pasangan-pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung
            Dan Merasa Teteram Kepadanya, Dan Dia Menjadikan Diantaramu Rasa
            Kasih Dan Sayang. Sungguh, Pada Yang Demuikian Itu Benar-benar
            Terdapat Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir”
          </p>
          <p>Q.S : Ar-Rum (30) : 20</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 text-center bg-[url('../../public/bg/bg1.png')] w-[100%] h-[100vh] items-center">
        <div className="items-center flex flex-col ">
          <div className="rounded-full w-[200px] h-[200px] overflow-hidden bg-white flex flex-col items-center justify-center">
            <Image
              src={"/img1.png"}
              width={200}
              height={200}
              className="aspect-square"
            />
          </div>
          <h1>Dinda</h1>
          <p>Dian Hardyani</p>
          <p>Puteri dari Bapak Sukimin dan Ibu Sumiyah</p>
        </div>
        <div className="items-center flex flex-col ">
          <div className="rounded-full w-[200px] h-[200px] overflow-hidden bg-white flex flex-col items-center justify-center">
            <Image
              src={"/img1.png"}
              width={200}
              height={200}
              className="aspect-square"
            />
          </div>
          <h1>Rian</h1>
          <p>Rian Santoso</p>
          <p>Putera dari Bapak Santoso dan Ibu Dini</p>
        </div>
      </div>
      <div className="text-center bg-[url('../../public/bg/bg1.png')] w-[100%] h-[100vh] flex flex-col justify-center">
        <h1 className="pb-10 font-bold text-xl">
          Insya Allah Acara Akan Dilaksanakan Pada :
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="items-center flex flex-col ">
            <h1 className="font-bold">AKAD NIKAH</h1>
            <p>Jum'at, 27 Februari 2023</p>
            <p>Pukul: 09.00 - Selesai</p>
            <p>Di Kediaman Mempelai Pria</p>
            <p>Perumahan Gunungkelid no23, Blok O, Jakarta Barat, Jakarta</p>
            <button className="text-white bg-pink-700 rounded-xl px-5 py-1 mt-2 hover:bg-pink-400">
              Lihat Lokasi
            </button>
          </div>
          <div className="items-center flex flex-col ">
            <h1 className="font-bold">RESEPSI</h1>
            <p>Sabtu, 28 Februari 2023</p>
            <p>Pukul: 09.00 -Selesai</p>
            <p>Di Kediaman Mempelai Wanita</p>
            <p>Perumahan Asriungu no1, Blok A, Jakarta Pusat, Jakarta</p>
            <button className="text-white bg-pink-700 rounded-xl px-5 py-1 mt-2 hover:bg-pink-400">
              Lihat Lokasi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPink1;
