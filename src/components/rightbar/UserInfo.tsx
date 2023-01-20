import React from "react";

const UserInfo = () => {
  return (
    <section className="">
      <h4 className="text-lg font-semibold mb-1 mt-4">ユーザー情報</h4>
      <div className="text-gray-600 mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        aperiam officiis quo modi quia voluptatibus repudiandae est nostrum
        tenetur iste maiores facere, nobis eveniet unde distinctio saepe quasi
        et fugiat.
      </div>
      <div className="mb-1">
        <span className="font-semibold">生年月日：</span>
        <span className="">2000.1013</span>
      </div>
      <div className="mb-1">
        <span className="font-semibold">出身：</span>
        <span className="">神奈川県藤沢市</span>
      </div>
      <div className="mb-1">
        <span className="font-semibold">趣味：</span>
        <span className="">古着巡り・料理</span>
      </div>
      <div className="mb-1">
        <span className="font-semibold">特技：</span>
        <span className="">プログラミング</span>
      </div>
    </section>
  );
};

export default UserInfo;
