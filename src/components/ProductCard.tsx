import Image from "next/image";

type ProductCardProps = {
  title: string;
  body: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProductCard({ title, body, tag, imageSrc, imageAlt }: ProductCardProps) {
  return (
    <div className="card flex h-full flex-col gap-4">
      <div className="image-shell aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{tag}</p>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{body}</p>
      </div>
      <button
        type="button"
        className="mt-auto w-fit rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:border-slate-400"
      >
        More info
      </button>
    </div>
  );
}
