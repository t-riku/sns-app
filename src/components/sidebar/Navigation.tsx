import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsChatLeftText } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

const Navigation = () => {
  return (
    <ul className="m-0 p-0">
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <AiFillHome className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">ホーム</span>
      </li>
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <AiOutlineSearch className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">検索</span>
      </li>
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <IoIosNotifications className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">通知</span>
      </li>
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <BsChatLeftText className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">メッセージ</span>
      </li>
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <BsFillBookmarkCheckFill className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">ブックマーク</span>
      </li>
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <BsPersonFill className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">プロフィール</span>
      </li>
      <li className="flex items-center mb-[10px] px-2 py-1 cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
        <IoMdSettings className="text-3xl mr-3" />
        <span className="text-xl pt-[3px]">設定</span>
      </li>
    </ul>
  );
};

export default Navigation;
