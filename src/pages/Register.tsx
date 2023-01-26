import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(passwordConfirmation);

    //パスワードと確認用パスワードが合っているかどうかを確認
    if (password !== passwordConfirmation) {
      // passwordConfirmation.setCustomValidity("パスワードが異なっています");
      window.alert("パスワードが異なっています");
    } else {
      try {
        const user = {
          username: username,
          email: email,
          password: password,
        };
        //registerAPIを叩く
        await axios.post(`http://localhost:4000/api/auth/register`, user);
        router.push("/Login");
      } catch (err) {
        console.log(err);
      }
    }
  };
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
          <form
            className="h-[500px] w-full p-5 bg-white rounded-xl flex flex-col justify-between shadow"
            onSubmit={(e) => handleSubmit(e)}
          >
            <p className="text-center font-semibold text-base my-2">
              新規登録はこちら
            </p>
            <input
              type="text"
              name="username"
              autoComplete="username"
              className="h-[50px] rounded-[10px] border border-gray-500 bg-white text-gray-500 text-[18px] focus:outline-none mb-4 p-5"
              placeholder="ユーザー名"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="h-[50px] rounded-[10px] border border-gray-500 bg-white text-gray-500 text-[18px] pl-4 focus:outline-none mb-4 p-5"
              placeholder="Eメール"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="h-[50px] rounded-[10px] border border-gray-500 bg-white text-gray-500 text-[18px] pl-4 focus:outline-none mb-4 p-5"
              required
              minLength={6}
              placeholder="パスワード"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              name="confirmationーpassword"
              autoComplete="current-password"
              className="h-[50px] rounded-[10px] border border-gray-500 bg-white text-gray-500 text-[18px] pl-4 focus:outline-none mb-4 p-5"
              required
              minLength={6}
              placeholder="確認用パスワード"
              value={passwordConfirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
            />
            <button
              className="h-[50px] rounded-[10px] border-none bg-blue-400 text-white text-[18px] cursor-pointer my-3"
              type="submit"
            >
              サインアップ
            </button>
            <button className="h-[50px] w-2/3 self-center rounded-[10px] border-none bg-green-600 text-white text-[18px] cursor-pointer">
              ログイン
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
