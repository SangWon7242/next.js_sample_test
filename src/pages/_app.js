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
      <header className="h-[60px] bg-[#dfdfdf]">
        <div className="con mx-auto flex h-full w-[1200px]">
          <nav className="menu-1 flex self-center">
            <ul className="flex h-full">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="block px-4 hover:text-[#afafaf]">메인</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="block px-4 hover:text-[#afafaf]">어바웃</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="block px-4 hover:text-[#afafaf]">연락처</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
