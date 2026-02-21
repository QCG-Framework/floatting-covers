import type { ReactNode } from "react";

type CardProps = {
  title: string;
  body: string;
  icon?: ReactNode;
};

export default function Card({ title, body, icon }: CardProps) {
  return (
    <div className="card flex flex-col gap-4">
      {icon ? <div className="text-2xl text-slate-700">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{body}</p>
    </div>
  );
}
