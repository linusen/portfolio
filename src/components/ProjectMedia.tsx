import Image from "next/image";

type ProjectMediaItem = {
  src: string;
  alt: string;
  caption?: string;
  variant?: "inline" | "wide" | "full";
};

type ProjectMediaProps = {
  item: ProjectMediaItem;
};

function isGif(src: string) {
  return src.split("?")[0].toLowerCase().endsWith(".gif");
}

export function ProjectMedia({ item }: ProjectMediaProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      {isGif(item.src) ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={1600}
          height={900}
          className="h-auto w-full"
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      )}
    </div>
  );
}
