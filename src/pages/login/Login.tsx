import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-2/3 h-2/3 grid grid-cols-12">
        <div className="col-span-6 flex items-center justify-center flex-col">
          <h3 className="text-[50px] font-bold text-indigo-900 mb-[10px]">
            Real SNS
          </h3>
          <span className="text-2xl">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <form className="h-[400px] w-full p-5 bg-white rounded-xl flex flex-col justify-between shadow">
            <p className="text-center font-semibold text-base my-2">
              ログインはこちら
            </p>
            <input
              type="email"
              className="h-[50px] rounded-[10px] border border-gray-500 bg-white text-gray-500 text-[18px] pl-4 focus:outline-none mb-4"
              placeholder="Eメール"
              required
            />
            <input
              type="password"
              className="h-[50px] rounded-[10px] border border-gray-500 bg-white text-gray-500 text-[18px] pl-4 focus:outline-none mb-4"
              required
              // minLength="6"
              placeholder="パスワード"
            />
            <button className="h-[50px] rounded-[10px] border-none bg-blue-400 text-white text-[18px] cursor-pointer">
              ログイン
            </button>
            <span className="text-center text-gray-500 my-4">
              パスワードを忘れた方へ
            </span>
            <button className="h-[50px] w-2/3 self-center rounded-[10px] border-none bg-green-600 text-white text-[18px] cursor-pointer">
              アカウント作成
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
