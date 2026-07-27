"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Falls back to initials if the photo is missing, so a absent file degrades to
 * something deliberate rather than a broken-image icon.
 */
export default function Avatar({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="relative inline-flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-pill border border-line bg-surface sm:size-[5.5rem]">
      {failed ? (
        <span className="text-body font-semibold tracking-wide text-muted">
          {initials}
        </span>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="88px"
          priority
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
