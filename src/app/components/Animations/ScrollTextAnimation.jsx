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
      <div className="spancediv">Move text on scroll :)</div>

      <section className="Frist" ref={addSectionRef}>
        <h1 className="big-title">Text move left right</h1>
      </section>

      <div className="spancediv spancediv4">One More Time Scroll :)</div>
      <section className="Frists" ref={addSectionRef}>
        <h1 className="big-title">Our project</h1>
      </section>

      <div className="spancediv spancediv3">Scroll :)</div>
      <section className="Fristss" ref={addSectionRef}>
        <h1 className="big-title">Our project</h1>
      </section>

      <div className="spancediv spancediv2">Scroll :)</div>
      <section className="Fristsss" ref={addSectionRef}>
        <h1 className="big-title">Our project</h1>
      </section>

      <div className="spancediv spancediv4">Scroll :)</div>
      <section className="Fristssss" ref={addSectionRef}>
        <h1 className="big-title">Our project</h1>
      </section>

      <div className="spancediv spancediv3"></div>

      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          overflow-x: hidden;
        }

        .spancediv {
          height: 300px;
          border-radius: 30px;
          color: #fff;
          font-size: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
        }

        .spancediv2 {
          background-color: #50915e;
        }
        .spancediv3 {
          background-color: #485c8b;
        }
        .spancediv4 {
          background-color: #e15858;
        }

        .big-title {
          font-size: 150px;
          position: relative;
          left: 10px;
          white-space: nowrap;
          right: 81vw;
          margin: 0;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default TextScroll;
