import Link from "next/link";

export default function ToolbarContent() {
  return (
    <nav className="flex self-center">
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
  );
}
