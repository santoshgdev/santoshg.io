import { profile } from "@/lib/data";
import { SectionHeading } from "./experience";
import { buttonVariants } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <SectionHeading title="Contact" />
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
        Open to interesting problems and conversations. Reach out via email or
        find me on GitHub and LinkedIn.
      </p>
      <div className="flex gap-3 flex-wrap">
        <a
          href={`mailto:${profile.email}`}
          className={
            buttonVariants({ variant: "default" }) +
            " font-mono text-xs tracking-wide px-5"
          }
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className={
            buttonVariants({ variant: "outline" }) +
            " font-mono text-xs tracking-wide px-5 border-border text-muted-foreground hover:text-foreground"
          }
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={
            buttonVariants({ variant: "outline" }) +
            " font-mono text-xs tracking-wide px-5 border-border text-muted-foreground hover:text-foreground"
          }
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
