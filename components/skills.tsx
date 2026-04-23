import { skills } from "@/lib/data";
import { SectionHeading } from "./experience";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <SectionHeading title="Skills" />
      <div className="grid grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-md font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
