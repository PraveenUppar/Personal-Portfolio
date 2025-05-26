"use client";
import React from "react";

const MarqueeScroll = () => {
  return (
    <div>
      <section className="a-section">
        <div className="a-section-marquee-box">
          <h2 className="marquee-text">scrolling text using css only •</h2>
          <h2 className="marquee-text">scrolling text using css only •</h2>
        </div>
      </section>

      <section className="b-section">
        <div className="b-section-marquee-box">
          <h2 className="marquee-text">scrolling text using css only •</h2>
          <h2 className="marquee-text">scrolling text using css only •</h2>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Public+Sans:wght@100&display=swap");

        body {
          background-color: #181818;
          color: #f2f2f2;
          font-family: "Public Sans", sans-serif;
        }

        .a-section,
        .b-section {
          padding: 3em 3% 0;
        }

        .a-section-marquee-box,
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
          font-size: 7em;
          font-weight: 100;
          flex-shrink: 0;
          padding: 0 10px;
          width: max-content;
          display: flex;
          align-items: center;
          transform: translateX(0);
        }

        .a-section-marquee-box h2 {
          animation: a-text-scroll 35s linear infinite;
        }

        .b-section-marquee-box h2 {
          animation: b-text-scroll 35s linear infinite;
          color: #475747;
        }

        @keyframes a-text-scroll {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        @keyframes b-text-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeScroll;
