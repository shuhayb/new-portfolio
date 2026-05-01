import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <h1>hi, i&apos;m shuhayb.</h1>
        <p>
          i&apos;m a software engineer who loves building products and writing
          quality code. i have a passion for designing things that genuinely
          change people&apos;s lives for the better.
        </p>
        <p>
          i&apos;ve been building on the web for a few years now — from full-stack
          apps to small experiments. i love picking up new tools, shipping fast,
          and learning from what doesn&apos;t work.
        </p>
        <p>
          some stuff worked out. most of it didn&apos;t. but i learned a lot.
        </p>
      </main>
      <footer>
        <p>
          p.s: if you wanna contact me ping{" "}
          <a href="mailto:shuhayb@example.com">shuhayb@example.com</a>
        </p>
      </footer>
    </div>
  );
}
