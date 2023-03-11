import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="할일관리서비스 투두입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/" legacyBehavior>
          <a style={{ color: "" }}>메인</a>
        </Link>

        <Link href="/about" legacyBehavior>
          <a style={{ color: "pink" }}>어바웃</a>
        </Link>

        <Link href="/contact" legacyBehavior>
          <a style={{ color: "red" }}>연락처</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
