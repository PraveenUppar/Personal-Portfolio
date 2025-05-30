"use client"
import { useRef, useEffect } from "react";

const TextScroll = () => {
  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sections.current.forEach((section) => {
        if (section) {
          const h1 = section.querySelector(".big-title");
          if (h1) {
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const sectionTop = section.offsetTop;
            const viewportBottom = scrollTop + windowHeight;

            if (sectionTop <= viewportBottom) {
              const distanceFromTop = viewportBottom - sectionTop;
              const scrollValue = distanceFromTop - 150;
              const scrollSlow = scrollValue + scrollValue / 70 / 100;
              const translateX = scrollSlow * 0.3; // 30% of calculated value
              h1.style.transform = `translateX(${translateX}px)`;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addSectionRef = (element) => {
    if (element) sections.current.push(element);
  };

  return (
    <div>
      <section className="Frist" ref={addSectionRef}>
        <h1 className="big-title font-sans font-light">Education/Certifications</h1>
      </section>

      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          overflow-x: hidden;
        }

        .big-title {
          font-size: 120px;
          position: relative;
          left: -230px;
          white-space: nowrap;
          right: 81vw;
          margin: 0;
          will-change: transform;
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TextScroll;
