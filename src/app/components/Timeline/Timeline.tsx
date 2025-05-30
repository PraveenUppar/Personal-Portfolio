import React from "react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "Nov 2024 - May 2025",
      content: (
        <div>
          <p className="mb-8 text-5xl font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            VITBMUN Tech Lead
          </p>
          <p className="">
            As the Technical Team Lead at VITB MUN, I am currently leading the
            redesign and rebuild of the entire website to make it more
            user-friendly, functional, and visually appealing for event
            participants. It is been an exciting challenge to collaborate with
            the team, implement new features, and ensure that the website meets
            the evolving needs of the event. My goal is to create a seamless and
            interactive online experience that enhances the overall MUN event
            for everyone involved.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="/Join.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/Leave.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2024 - Nov 2025",
      content: (
        <div>
          <p className="mb-8 text-5xl font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            Open Source Contribution
          </p>
          <p className="">
            Over the course of one month, I worked on the Station Sarthi
            project, contributing to both front-end and back-end development
            with a total of 7 pull requests. I achieved a score of 100 and
            secured the 2026th rank, gaining valuable experience in
            collaborative development and open-source practices.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="/gssoc1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/gssoc2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2024 - Nov 2024",
      content: (
        <div>
          <p className="mb-8 text-5xl font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            VITBMUN Tech Member
          </p>
          <p className="">
            As a Technical Team Member at VITB MUN, I took charge of keeping the
            official website up-to-date and running smoothly for all event.
            Beyond that, I had the opportunity to lead the development of a
            Virtual Reality (VR) feature, which added a whole new level of
            interaction and engagement to the event.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
