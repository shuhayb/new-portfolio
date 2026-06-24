import { CONTENT } from "@/lib/data";

export default function Content() {
  return (
    <main>
      <h1>content i like.</h1>
      <p>a running list of the stuff that keeps me curious.</p>
      <ul>
        {CONTENT.map((item) => (
          <li key={item.title} className="entry">
            <div className="meta">{item.kind.toLowerCase()}</div>
            <h2>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h2>
            <p style={{ marginBottom: 0 }}>{item.note}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
