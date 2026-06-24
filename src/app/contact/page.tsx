import { SOCIALS } from "@/lib/data";

export default function Contact() {
  return (
    <main>
      <h1>contact.</h1>
      <p>
        i&apos;m always open to new projects, collaborations, or just a chat.
        the best way to reach me is email — i generally reply to anything with a
        clear ask.
      </p>
      <ul>
        <li className="entry">
          <div className="meta">email</div>
          <a href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
        </li>
        <li className="entry">
          <div className="meta">github</div>
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
            github.com/shuhayb
          </a>
        </li>
        <li className="entry">
          <div className="meta">linkedin</div>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/shuhaybmiah
          </a>
        </li>
      </ul>
    </main>
  );
}
