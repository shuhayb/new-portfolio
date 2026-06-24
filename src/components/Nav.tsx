import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/projects">projects</Link>
      <Link href="/content">content i like</Link>
      <Link href="/contact">contact</Link>
      <Link href="/threejs">threejs version</Link>
    </nav>
  );
}
