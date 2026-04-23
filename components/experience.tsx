import { experience } from "@/lib/data";

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="bg-gradient-to-r from-primary to-violet-400 h-px w-12 mt-2" />
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <SectionHeading title="Experience" />
      <div className="space-y-2">
        {experience.map((job, i) => (
          <div
            key={i}
            className="group flex gap-6 rounded-xl border border-transparent p-4 hover:bg-card/60 hover:backdrop-blur-sm hover:border-border/60 transition-all duration-200 cursor-default"
          >
            {/* Date column */}
            <div className="w-36 shrink-0 pt-0.5">
              <p className="text-xs font-mono text-muted-foreground">
                {job.period}
              </p>
            </div>
            {/* Content column */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm text-foreground leading-snug mb-0.5">
                {job.role}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {job.company}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {job.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-md font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
