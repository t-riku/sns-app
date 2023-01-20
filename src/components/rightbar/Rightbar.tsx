import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import event from "public/assets/ad.jpeg";
import person01 from "public/assets/person/2.jpeg";
import person02 from "public/assets/person/3.jpeg";
import person03 from "public/assets/person/4.jpeg";
import promotion01 from "public/assets/promotion/promotion1.jpeg";
import promotion02 from "public/assets/promotion/promotion2.jpeg";
import promotion03 from "public/assets/promotion/promotion3.jpeg";

const Rightbar = () => {
  return (
    <div className="col-span-3 h-screen">
      <div className="pt-5 pr-5 pl-5">
        <section className="mb-1">
          <div className="flex items-center">
            <AiFillStar className="mr-1 cursor-pointer text-yellow-600 h-10" />
            <span className="text-sm font-light">
              <b>フォロワー限定</b>イベントを開催中！
            </span>
          </div>
          <div className="relative aspect-square max-h-[300px] w-full mt-1 mb-8">
            <Image
              className="object-cover w-8 h-8 cursor-pointer"
              src={event}
              fill
              placeholder="blur"
              alt="event image"
            />
          </div>
        </section>

        <section className="my-9">
          <h4 className="text-lg font-semibold mb-3">オンラインの友達</h4>
          <ul className="px-0 m-0">
            <li className="flex items-center mb-4 gap-2">
              <div className="relative">
                <div className="aspect-square h-11">
                  <Image
                    className="object-cover w-8 h-8 cursor-pointer rounded-full"
                    src={person01}
                    fill
                    priority={true}
                    placeholder="blur"
                    alt="friend image"
                  />
                </div>
                <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
              </div>
              <span className="text-lg font-semibold">t-riku</span>
            </li>
            <li className="flex items-center mb-4 gap-2">
              <div className="relative">
                <div className="aspect-square h-11">
                  <Image
                    className="object-cover w-8 h-8 cursor-pointer rounded-full"
                    src={person02}
                    fill
                    priority={true}
                    placeholder="blur"
                    alt="friend image"
                  />
                </div>
                <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
              </div>
              <span className="text-lg font-semibold">kouta</span>
            </li>
            <li className="flex items-center mb-4 gap-2">
              <div className="relative">
                <div className="aspect-square h-11">
                  <Image
                    className="object-cover w-8 h-8 cursor-pointer rounded-full"
                    src={person03}
                    fill
                    priority={true}
                    placeholder="blur"
                    alt="friend image"
                  />
                </div>
                <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
              </div>
              <span className="text-lg font-semibold">tatuki</span>
            </li>
          </ul>
        </section>

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
      </div>
    </div>
  );
};

export default Rightbar;
