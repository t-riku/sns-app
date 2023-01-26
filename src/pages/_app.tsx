// import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
