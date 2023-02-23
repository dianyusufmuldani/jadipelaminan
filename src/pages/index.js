import Head from "next/head";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import Homepage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="md:container md:mx-auto">
      <Head>
        <title>JADI PELAMINAN</title>
        <meta
          name="Jadi Pelaminan"
          content="Buat undangan pernikahan anda lebih elegant dan simple"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  );
}
