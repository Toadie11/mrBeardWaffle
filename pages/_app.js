import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Mr Beard Waffle - Belgian Waffle</title>
        <link rel="icon" href="/logo/logo3.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
