import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24">
      <hr className="border-border mb-12" />
      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
        {profile.bio}
      </p>
    </section>
  );
}
