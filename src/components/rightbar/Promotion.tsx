import React from "react";
import Image from "next/image";
import promotion01 from "public/assets/promotion/promotion1.jpeg";
import promotion02 from "public/assets/promotion/promotion2.jpeg";
import promotion03 from "public/assets/promotion/promotion3.jpeg";

const Promotion = () => {
  return (
    <section className="mt-12">
      <p className="text-lg font-semibold">プロモーション広告</p>
      <div className="relative aspect-square max-h-[200px] w-5/6 mt-5 mb-0">
        <Image
          className="object-cover w-8 h-8 cursor-pointer rounded-xl"
          src={promotion01}
          fill
          placeholder="blur"
          alt="promotion image"
        />
      </div>
      <p className="text-sm mt-2 text-gray-700">ショッピング</p>
      <div className="relative aspect-square max-h-[200px] w-5/6 mt-6 mb-0">
        <Image
          className="object-cover w-8 h-8 cursor-pointer rounded-xl"
          src={promotion02}
          fill
          placeholder="blur"
          alt="promotion image"
        />
      </div>
      <p className="text-sm mt-2 text-gray-700">カーショッピング</p>
      <div className="relative aspect-square max-h-[200px] w-5/6 mt-6 mb-0">
        <Image
          className="object-cover w-8 h-8 cursor-pointer rounded-xl"
          src={promotion03}
          fill
          placeholder="blur"
          alt="promotion image"
        />
      </div>
      <p className="text-sm mt-2 text-gray-700">t-riku株式会社</p>
    </section>
  );
};

export default Promotion;
