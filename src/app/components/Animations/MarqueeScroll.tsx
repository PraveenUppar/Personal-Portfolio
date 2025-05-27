"use client";
import React from "react";

const MarqueeScroll: React.FC = () => {
  return (
    <div>
      <section className="a-section">
        <div className="a-section-marquee-box mt-12">
          <h2 className="marquee-text font-sans font-light ">
            • Full Stack • Frontend • Backend • DevOps • Full Stack • Frontend •
            Backend • DevOps • Full Stack • Frontend • Backend • DevOps • Full
            Stack • Frontend • Backend • DevOps • Full Stack • Frontend •
            Backend • DevOps •
          </h2>
        </div>
      </section>

      <style jsx>{`
        .a-section {
          padding: 3em 3% 0;
        }

        .b-section-marquee-box {
          height: 180px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border: 1px solid #181818;
        }

        .a-section-marquee-box h2,
        .b-section-marquee-box h2 {
          white-space: nowrap;
          text-transform: uppercase;
          font-size: 4.5em;
          flex-shrink: 0;
          padding: 0 10px;
          width: max-content;
          display: flex;
          align-items: center;
          transform: translateX(0);
        }

        .a-section-marquee-box h2 {
          animation: a-text-scroll 70s linear infinite;
        }

        @keyframes a-text-scroll {
          0% {
            transform: translate3d(-80%, 0, 0);
          }
          100% {
            transform: translate3d(-10%, 0, 0);
          }
        }
        }
      `}</style>
    </div>
  );
};

export default MarqueeScroll;
