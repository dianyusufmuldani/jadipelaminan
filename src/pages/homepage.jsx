import CardFeatures from "@/component/cardFeatures";
import CardThema from "@/component/cardThema";
import CardVideo from "@/component/cardVideo";
import FooterApp from "@/component/footer";
import Introduction from "@/component/introduction";
import NavbarApp from "@/component/navbar";
import Image from "next/image";
import { useState } from "react";

const Homepage = () => {
  const [order, setOrder] = useState(null);
  return (
    <div>
      <NavbarApp />

      <div
        className="grid grid-cols-1 gap-4 h-[100vh] items-center "
        id="homepage"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  bg-gradient-to-r from-green-600 via-green-500 to-green-400 md:h-[85vh] h-[100vh]  rounded-bl-[50px]  md:rounded-bl-[150px] rounded-tr-[100px] md:rounded-tr-[250px] md:mt-[80px]">
          <div className="flex items-center justify-center">
            <Introduction />
          </div>
          <div className="flex items-center">
            <Image
              src={"/img1.png"}
              height={200}
              width={600}
              className="rounded-bl-[100px] rounded-tr-[100px] rounded-[10px]"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
      <br />
      <div
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:h-[100vh] h-[120vh] items-center px-[20px] bg-green-50 md:py-0 py-5"
      >
        <div>
          <Image
            src="/img2.png"
            width={600}
            height={200}
            className="rounded-[40px]"
            alt="Image 2"
          />
        </div>
        <div>
          <h2 className="font-bold text-black text-4xl md:text-justify text-center">
            Website Undangan Digital yang mudah untuk digunakan baik dari laptop
            maupun hp kalian
          </h2>
          <br />
          <p>Segera buat undangan website kalian hanya dalam hitungan menit!</p>
          <p className="text-black text-sm text-justify">
            Cukup pilih desain yang sesuai dengan kalian, isi detail acara,
            upload foto dan klik buat undangannya. Maka undangan kalian akan
            segera dibuatkan dalam hitungan menit
          </p>
        </div>
      </div>
      <br />
      <br />
      <div
        id="tutorial"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[100vh] items-center px-[20px]"
      >
        <div>
          <h2 className="font-bold text-black text-4xl text-center">
            CARA MEMBUAT UNDANGAN
          </h2>
          <br />
          <p>
            Ikuti langkah-langkah berikut untuk membuat undangan atau cek
            videonya di sebelah kanan
          </p>
          <ol>
            <li>1. Lakukan pendaftaran terlebih dahulu disini</li>
            <li>2. Pilih template yang kalian inginkan</li>
            <li>
              3. Isi detail acara, upload foto dan bagian lainnya yang perlu
              diisi
            </li>
            <li>4. Aktifkan undangan anda</li>
            <li>
              5. Undangan siap untuk disebarkan ke para tamu undangan anda
            </li>
          </ol>
        </div>
        <div className="justify-center flex flex-cols ">
          <Image
            src="/img3.png"
            height={500}
            width={500}
            className="rounded-2xl"
            alt="Image 3"
          />
        </div>
      </div>
      <br />

      <div
        className="md:h-[100vh] h-[100%] md:mt-0 mt-[50px]  bg-green-50 p-5 "
        id="fitur"
      >
        <h2 className="font-bold text-black text-4xl text-center mb-[20px] ">
          TERSEDIA FITUR YANG LENGKAP DAN KEREN
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10  items-center px-[20px] text-center">
          <CardFeatures
            src={"/hours.png"}
            title="Countdown"
            description={"Menghitung waktu mundur menuju waktu acara kalian"}
          />
          <CardFeatures
            src={"/maps.png"}
            title="Maps"
            description={
              "Menampilkan lokasi acara kalian dalam bentuk google maps"
            }
          />
          <CardFeatures
            src={"/music.png"}
            title="Background Music"
            description={"Jalankan music latarbelakang untuk undangan anda"}
          />
          <CardFeatures
            src={"/gallery.png"}
            title="Gallery Foto"
            description={
              "Perlihatkan moment-moment indah kalian kepada tamu undangan"
            }
          />
          <CardFeatures
            src={"/story.png"}
            title="Love Story"
            description={
              "Ceritakan kisah cinta kalian dari kenal sampai menikah"
            }
          />
          <CardFeatures
            src={"/amplop.png"}
            title="Amplop Digital"
            description={
              "Sediakan fitur amplop agar permudah tamu untuk memberi hadiah pada anda"
            }
          />
          <CardFeatures
            src={"/design.png"}
            title="Desain Menarik"
            description={
              "Dapatkan undangan digital yang berdesain elegan dan kekinian"
            }
          />
          <CardFeatures
            src={"/responsive.png"}
            title="Responsive"
            description={
              "Undangan digital yang bisa diakses melalui laptop maupun hp"
            }
          />
        </div>
      </div>
      <div
        className="md:h-[100vh] h-[100%] md:mt-0 mt-[50px]  p-5 items-center flex flex-col"
        id="design"
      >
        <h2 className="font-bold text-black text-4xl text-center mb-[20px] ">
          DESAIN YANG TERSEDIA
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5  items-center text-center ">
          <CardThema src="/img1.png" />
          <CardThema src="/img2.png" />
          <CardThema src="/img3.png" />
          <CardThema src="/img2.png" />
          <CardThema src="/img1.png" />
          <CardThema src="/img1.png" />
        </div>
        <br />
        <a href={"/template"}>
          <button className="font-bold text-white text-xl text-center  bg-green-600 py-2 px-4 rounded-xl hover:bg-green-400">
            Lihat Selengkapnya!
          </button>
        </a>
      </div>
      <br />
      <br />
      <div
        className="md:h-auto h-[100%] md:mt-[50px] mt-[50px]  p-5 items-center flex flex-col"
        id="video"
      >
        <h2 className="font-bold text-black text-4xl text-center mb-[20px] ">
          UNDANGAN VIDEO
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10  items-center px-[20px] text-center ">
          <CardVideo
            linkYt={"6ELcWHGSDr0"}
            onClick={() => setOrder("KODE 48")}
            order={order}
          />
          <CardVideo
            linkYt={"WboL_ehxd-w"}
            onClick={() => setOrder("militer U KODE 43")}
            order={order}
          />
          <CardVideo
            linkYt={"rR7_j-2Incs"}
            onClick={() => setOrder("KODE 44")}
            order={order}
          />
          <CardVideo
            linkYt={"7CcnDKpBWq4"}
            onClick={() => setOrder("KODE 39")}
            order={order}
          />
          <CardVideo
            linkYt={"jX_LHxAWH18"}
            onClick={() => setOrder("KODE 38")}
            order={order}
          />
          <CardVideo
            linkYt={"ewiYBeoBiVo"}
            onClick={() => setOrder("KODE 37")}
            order={order}
          />
        </div>
        <a href={"/video"}>
          <button className="font-bold text-white text-xl text-center  bg-green-600 py-2 px-4 rounded-xl hover:bg-green-400 mt-5">
            Lihat Selengkapnya!
          </button>
        </a>
      </div>
      <br />
      <br />
      <FooterApp />
    </div>
  );
};

export default Homepage;
