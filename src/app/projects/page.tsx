import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <main>
      <h1>projects.</h1>
      <p>some of the things i&apos;ve been building. more on the way.</p>
      <ul>
        {PROJECTS.map((project) => {
          const link = project.live ?? project.source;
          return (
            <li key={project.title} className="entry">
              <h2>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <p style={{ marginBottom: 0 }}>{project.description}</p>
              <div className="tags">{project.tags.join(" · ")}</div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
