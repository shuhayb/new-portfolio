import { CONTENT } from "@/lib/data";

export default function Content() {
  return (
    <main>
      <h1>content i like.</h1>
      <ul className="links">
        {CONTENT.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
