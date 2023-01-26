import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

const Navigation = () => {
  return (
    <section>
      <ul className="m-0 p-0">
        <Link href="/Home">
          <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
            <AiFillHome className="text-2xl mr-3" />
            <span className="text-lg pt-[2px]">ホーム</span>
          </li>
        </Link>
        <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
          <AiOutlineSearch className="text-2xl mr-3" />
          <span className="text-lg pt-[2px]">検索</span>
        </li>
        <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
          <IoIosNotifications className="text-2xl mr-3" />
          <span className="text-lg pt-[2px]">通知</span>
        </li>
        <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
          <BiCommentDetail className="text-2xl mr-3" />
          <span className="text-lg pt-[2px]">メッセージ</span>
        </li>
        <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
          <BsFillBookmarkCheckFill className="text-2xl mr-3" />
          <span className="text-lg pt-[2px]">ブックマーク</span>
        </li>
        <Link
          href={{
            pathname: "/Profile",
            // pathname: "/Profile/:username",
            // query: { username: "t-riku" },
          }}
          as="/Profile/[username]"
        >
          <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
            <BsPersonFill className="text-2xl mr-3" />
            <span className="text-lg pt-[2px]">プロフィール</span>
          </li>
        </Link>
        <li className="flex items-center mb-[10px] p-[11px] cursor-pointer rounded-xl shadow-md hover:shadow-none hover:translate-y-[4px] transition-all duration-200">
          <IoMdSettings className="text-2xl mr-3" />
          <span className="text-lg pt-[2px]">設定</span>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
