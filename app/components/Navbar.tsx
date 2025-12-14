import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-8 ">
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div>
            <Link href="/thanksfortreat" className="font-semibold text-yellow-600">
            Buy Me a Coffee
            </Link>
        </div>
    </nav>
  );
}