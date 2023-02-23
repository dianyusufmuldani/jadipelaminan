import CardVideo from "@/component/cardVideo";
import NavbarApp from "@/component/navbar";
import React, { useState } from "react";

const VideoApp = () => {
  const [order, setOrder] = useState(null);
  return (
    <div>
      <NavbarApp hideMenu={true} />
      <div className="grid grid-cols-1 justify-center flex flex-col text-center mt-[100px] mb-[20px]">
        <h1 className="font-bold text-4xl">Template Video</h1>
      </div>
      <div className="grid md:grid-cols-4 flex flex-col gap-1">
        <CardVideo
          linkYt={"GkZ1sKWeDZs"}
          onClick={() => setOrder("Minimalist 4")}
          order={order}
        />
        <CardVideo
          linkYt={"U-JpuM9y6xI"}
          onClick={() => setOrder("Minimalist 4 2")}
          order={order}
        />
        <CardVideo
          linkYt={"UAme_efOn5E"}
          onClick={() => setOrder("Minimalist 3")}
          order={order}
        />
        <CardVideo
          linkYt={"NieIzp40PAw"}
          onClick={() => setOrder("Minimalist 10")}
          order={order}
        />
        <CardVideo
          linkYt={"SBH5rU7x8WU"}
          onClick={() => setOrder("Minimalist 10 2")}
          order={order}
        />
        <CardVideo
          linkYt={"6ELcWHGSDr0"}
          onClick={() => setOrder("KODE 48")}
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
        <CardVideo
          linkYt={"VkQjS1UuzPI"}
          onClick={() => setOrder("KODE 36")}
          order={order}
        />
        <CardVideo
          linkYt={"nhuNXrIVu5k"}
          onClick={() => setOrder("KODE 35")}
          order={order}
        />
        <CardVideo
          linkYt={"swtN9rj7BJ0"}
          onClick={() => setOrder("KODE 34")}
          order={order}
        />
        <CardVideo
          linkYt={"ct4ShgKYKZg"}
          onClick={() => setOrder("Fidhy & Amin")}
          order={order}
        />
        <CardVideo
          linkYt={"hNXfV_6jAjQ"}
          onClick={() => setOrder("Minimalist 3 2")}
          order={order}
        />
        <CardVideo
          linkYt={"JDYTeL_NA18"}
          onClick={() => setOrder("Minimalist 2")}
          order={order}
        />
        <CardVideo
          linkYt={"VTXaoYJv1uo"}
          onClick={() => setOrder("Minimalist 2 2")}
          order={order}
        />
        <CardVideo
          linkYt={"IMzBxBXrGUk"}
          onClick={() => setOrder("Minimalist 1")}
          order={order}
        />
        <CardVideo
          linkYt={"147NA1vvXu0"}
          onClick={() => setOrder("Minimalist 1 2")}
          order={order}
        />
      </div>
    </div>
  );
};

export default VideoApp;
