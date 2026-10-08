import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  ratio?: string; // CSS aspect-ratio, e.g. "4/5"
  label?: string;
  priority?: boolean;
  className?: string;
};

export default function Media({ src, alt, ratio = "4/3", label = "Image", priority, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder: ${alt}`}
          className="placeholder absolute inset-0 grid place-items-center p-4 text-center text-xs text-moss"
        >
          <span>
            Placeholder: {label} ({ratio.replace("/", ":")})
          </span>
        </div>
      )}
    </div>
  );
}
