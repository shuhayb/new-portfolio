import { SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <p>
        p.s: if you wanna contact me ping{" "}
        <a href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
      </p>
    </footer>
  );
}
