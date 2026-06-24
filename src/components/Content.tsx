import { BookOpen, Headphones, Play, Users, ArrowUpRight } from "lucide-react";
import { CONTENT, type ContentItem } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ICONS: Record<ContentItem["kind"], typeof BookOpen> = {
  Reading: BookOpen,
  Watching: Play,
  Listening: Headphones,
  Following: Users,
};

export default function Content() {
  return (
    <section className="border-y border-line bg-surface/50">
      <div id="content" className="mx-auto max-w-content px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Content I Like"
          title="What I'm reading, watching & following"
          description="A running list of the things that keep me curious and sharpen how I build."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {CONTENT.map((item, i) => {
            const Icon = ICONS[item.kind];
            const card = (
              <article className="group flex h-full gap-4 rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_24px_60px_-30px_rgba(20,19,15,0.35)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {item.kind}
                    </span>
                    {item.href && (
                      <ArrowUpRight
                        size={14}
                        className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.by}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.note}
                  </p>
                </div>
              </article>
            );

            return (
              <Reveal key={item.title} delay={i * 0.06}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
