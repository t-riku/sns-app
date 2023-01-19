import Image from "next/image";
import React from "react";
import me from "public/assets/person/1.jpeg";

const Topbar = () => {
  return (
    <div className="">
      <div className="">
        <span className="">SNS App</span>
      </div>
      <div className="">
        <div className="">
          <input type="text" className="" placeholder="探し物は何ですか？" />
        </div>
      </div>
      <div className="">
        <div className="">1</div>
        <div className="">2</div>
      </div>

      <div className="relative aspect-square h-8">
        <Image
          className="object-contain"
          src={me}
          fill
          priority={true}
          placeholder="blur"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Topbar;
