import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);
  const featuresRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animation for features section
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // Animation for title section
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // Animation for each section
    sectionsRef.current.forEach((section,) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    // Animation for image and cards
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    // section 1
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center">
        <div
          ref={featuresRef}
          className="bg-white dm text-[20px] font-[700] text-green-600 text-center py-2 px-4 rounded-full  w-[216px] h-[46px] mt-8"
        >
          FEATURES
        </div>
        <h1 ref={titleRef} className="text-[64px] at font-[700] mt-4">
          Why Carbon Crunch?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          {[
            {
              title: "Automated Data Collection",
              description:
                "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
              imgSrc: "src/assets/images/icon-1.png",
            },
            {
              title: "Monitoring & Reporting",
              description:
                "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
              imgSrc: "src/assets/images/icon-1.png",
            },
            {
              title: "Monitoring & Reporting",
              description:
                "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
              imgSrc: "src/assets/images/icon-1.png",
            },
            {
              title: "Simplified Certification Process",
              description:
                "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
              imgSrc: "src/assets/images/icon-1.png",
            },
            {
              title: "AI-Driven Insights",
              description:
                "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
              imgSrc: "src/assets/images/icon-1.png",
            },
            {
              title: "AI-Driven Insights",
              description:
                "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
              imgSrc: "src/assets/images/icon-1.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <div className="flex justify-start mb-4">
                <img src={item.imgSrc} alt="Icon" className="h-12 w-12" />
              </div>
              <h2 className="text-green-600 text-[24px] at font-[700] mb-2">
                {item.title}
              </h2>
              <p className="text-[16px] dm font-[400]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
          {/* section 2 */}
      <div className="flex min-h-screen bg-gray-100 w-full relative">
        <div className="w-[50%]" ref={imageRef}>
          <img
            src="src/assets/images/image.png"
            alt="Sustainability"
            className="w-[700px] h-[800px] object-cover"
          />
        </div>

        <div className="pt-32">
          <div
            className="card 4 bg-white text-[#28B30E] rounded-lg shadow-lg py-[11px] px-[16px] max-w-[446px] absolute top-[68%] right-[33%]"
            ref={(el) => (cardRefs.current[3] = el)}
          >
            <p className="text-[48px] font-[700]">37%</p>
            <p className="text-[24px] font-[400] leading-[110%]">
              Of The World’s Largest Companies Have A Public Net Zero Target.
              Nearly All Are Off Track
            </p>
          </div>

          <div
            className="card 3 bg-[#2D2D2D] text-white rounded-lg shadow-lg px-[13px] py-[9px] max-w-[380px] flex flex-col items-end absolute top-[50%] right-[18%]"
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <p className="text-[51px] font-[700]">18%</p>
            <p className="text-[25px] font-[400] max-w-[324px] text-right">
              Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero
              By 2050
            </p>
          </div>

          <div
            className="card 2 bg-[#3A3A3A] text-white rounded-lg shadow-lg max-w-[490px] px-[13px] py-[9px] absolute right-[28%] top-[33%]"
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <p className="text-[55px] font-[700]">98%</p>
            <p className="text-[31px] font-[400] leading-[110%]">
              Of CEOs Agree Sustainability Is Their Responsibility
            </p>
          </div>

          <div
            className="card 1 bg-[#28B30E] text-black rounded-lg shadow-lg px-[14px] py-[10px] max-w-[400px] right-[17%] top-[13%] absolute"
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <p className="text-[87px] font-[700] leading-[100%]">3X</p>
            <p className="text-[29px] font-[400] leading-[110%] mt-2">
              ESG High Performers Deliver A Higher Total Shareholder Return
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-4 mt-24">{/* Empty footer */}</footer>
    </div>
  );
}

export default App;
