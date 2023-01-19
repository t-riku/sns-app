import Head from "next/head";

type Layout = {
  children: any;
  title?: string;
};

// Layout.jsxは全てのコンポーネントをラップし共通のスタイルやレイアウトを適応させる
const Layout = ({ children, title = "SNS app by Nextjs" }: Layout) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white bg-gray-800 font-mono">
      <Head>{title}</Head>

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>

      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @t-riku 2023
      </footer>
    </div>
  );
};

export default Layout;
