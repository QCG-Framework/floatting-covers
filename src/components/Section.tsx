import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, kicker, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="max-w-3xl text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
