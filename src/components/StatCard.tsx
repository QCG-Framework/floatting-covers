type StatCardProps = {
  title: string;
  highlight: string;
  body: string;
};

export default function StatCard({ title, highlight, body }: StatCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-200/90">{title}</p>
        <p className="text-2xl font-semibold">{highlight}</p>
      </div>
      <p className="text-sm text-slate-200">{body}</p>
    </div>
  );
}
