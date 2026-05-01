import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/projects">projects</Link>
      <Link href="/content">content i like</Link>
      <Link href="/other">other stuff</Link>
    </nav>
  );
}
