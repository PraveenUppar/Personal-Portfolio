import Image from "next/image";
import { ArrowIcon } from "./icons";

/**
 * Certificate scans are wide documents, so they read as a landscape tile
 * rather than a square avatar. The whole tile is the link — opening the full
 * image in a new tab beats a lightbox nobody asked for.
 */
export default function CertificateThumb({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer noopener"
      className="group/thumb relative block aspect-[4/3] w-20 shrink-0 self-start overflow-hidden rounded-tag border border-line bg-thumb-mat transition-colors duration-fast hover:border-accent sm:w-24"
    >
      <Image
        src={src}
        alt={`${label} certificate`}
        fill
        sizes="96px"
        className="object-cover object-top"
      />
      <span className="absolute inset-0 grid place-items-center bg-bg/70 opacity-0 transition-opacity duration-fast group-hover/thumb:opacity-100">
        <ArrowIcon className="size-4 text-accent" />
      </span>
    </a>
  );
}
