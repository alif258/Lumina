import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiPlusCircle } from 'react-icons/fi';

import Displaycontrastratio from "../assets/Displaycontrastratio.webp";
import widecolour from "../assets/Wide Color Gamut.webp";
import Effortless from "../assets/Effortless Input Control.webp";
import Personalized from "../assets/Personalized Visual Control.webp";

const Animation = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const imageRef = useRef(null);
  const contentRefs = useRef([]);
  const buttonWrapperRefs = useRef([]);

  const accordionData = [
    {
      buttonTitle: "1200:1 Contrast Ratio",
      title: "For Deeper Visual Clarity",
      description:
        "Lumina 15F offers a high 1200:1 contrast ratio and super wide viewing angle. Over a million colors are presented with exceptional accuracy and dynamic range that transforms the professional workflow. It delivers deeper blacks, brighter highlights and clearer separation between light and dark. Text appears sharper, images feel more refined. And details stay visible across changing environments. It combines clarity and contrast to create a viewing experience that feels balanced, comfortable and precise, whether you’re multitasking, presenting or creating on the go.",
      image: Displaycontrastratio,
      isCenter: false,
    },
    {
      buttonTitle: "Wide Color Gamut",
      title: "Wide Colour Gamut",
      description:
        "With an advanced 8-bit panel capable of displaying up to 16.2 million colors. The Lumina 15F produces rich, vibrant visuals with smooth color transitions and impressive accuracy. This ensures consistent color reproduction, deeper gradients and lifelike images making it ideal for everyday work, creative tasks, multimedia viewing and extended screen time.",
      image: widecolour,
      isCenter: true,
    },
    {
      buttonTitle: "Source Button",
      title: "Effortless Input Control",
      description:
        "Switch between devices without interrupting your workflow. The Source button on Lumina 15F lets you instantly toggle between inputs with one press. Featuring 1× HDMI and 2× USB-C display inputs, switching between laptops, desktops or other devices is fast and effortless. No menus. No delays. Just seamless control perfect for extending your workspace, presenting content or collaborating across screens while staying focused and productive.",
      image: Effortless,
      isCenter: true,
    },
    {
      buttonTitle: "OSD Settings",
      title: "Personalized Visual Control",
      description:
        "Take full control of your viewing experience with intuitive On-Screen Display (OSD) controls. Easily adjust brightness, contrast and color settings to suit your workspace, content and lighting conditions. From crisp visuals in bright environments to comfortable viewing in low light, OSD control helps maintain balanced colors and clear detail at all times. Fine color matching ensures visuals look natural and consistent, making everyday work, creative tasks and entertainment more enjoyable. Designed for flexibility and ease of use, OSD controls put personalized visual performance at your fingertips.",
      image: Personalized,
      isCenter: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Image slide from right to left
      tl.to(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      })
        // Reset position to right side
        .set(imageRef.current, { 
          x: 100,
          opacity: 0,
        })
        // Image slide in from right
        .to(imageRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });

      accordionData.forEach((_, index) => {
        const isOpen = openIndex === index;

        gsap.to(contentRefs.current[index], {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.6,
          ease: "power3.inOut",
        });

        gsap.to(buttonWrapperRefs.current[index], {
          height: isOpen ? 0 : "auto",
          opacity: isOpen ? 0 : 1,
          marginTop: isOpen ? 0 : 12,
          duration: 0.5,
          ease: "power3.inOut",
          pointerEvents: isOpen ? "none" : "auto",
        });
      });
    });

    return () => ctx.revert();
  }, [openIndex]);

  return (
    <div className="flex items-center justify-center py-14 md:py-20 px-4 md:px-0">
      <div className="flex flex-col md:flex-row rounded-3xl md:rounded-[40px] overflow-hidden max-w-355 w-full pt-10 pb-0 md:pl-22 md:pr-0 md:py-0 h-[650px] md:h-220 relative gradient-bg box-4">

        {/* Left Side - Text Content */}
        <div className="w-full md:w-[50%] flex flex-col justify-center md:py-10 md:pr-20">
          {accordionData.map((item, index) => (
            <div key={index} className="group hidden md:block">
              <div
                ref={(el) => (buttonWrapperRefs.current[index] = el)}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(index)}
                  className="flex items-center space-x-3 text-2xl backdrop-blur-md font-semibold text-[#3B3A3A] px-4 rounded-3xl bg-white/60 transition-all py-2.5 leading-[139.1%] mt-3"
                >
                  <span className="text-2xl font-light">
                    <FiPlusCircle />
                  </span>
                  <span>{item.buttonTitle}</span>
                </button>
              </div>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden opacity-0"
                style={{ height: 0 }}
              >
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl mt-4">
                  <h4 className="font-semibold mb-2 text-[#3B3A3A] text-2xl leading-[139.1%]">
                    {item.title}
                  </h4>
                  <p className="mt-12 text-[#3B3A3A] text-2xl leading-[139.1%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Content - Only show current item */}
          <div className="md:hidden">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl mx-6">
              <h4 className="font-semibold mb-2 text-[#3B3A3A] text-lg leading-[139.1%]">
                {accordionData[openIndex].title}
              </h4>
              <p className="mt-4 text-[#3B3A3A] text-sm leading-[139.1%]">
                {accordionData[openIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          className={`w-full md:w-[50%] flex justify-center md:justify-end mt-6 md:mt-0 ${
            accordionData[openIndex].isCenter ? "items-center" : "items-end"
          }`}
        >
          <div className="relative w-full h-[300px] md:h-full flex justify-center md:justify-end overflow-visible md:min-h-[520px] pr-0 pb-0 md:pr-0 md:pb-0">
            <img
              ref={imageRef}
              src={accordionData[openIndex].image}
              alt="Lumina Display"
              className={`absolute inset-0 w-full h-full object-contain ${
                accordionData[openIndex].isCenter
                  ? "object-center"
                  : openIndex === 0 || openIndex === 3
                  ? "object-bottom-right md:object-bottom-right"
                  : "object-bottom md:object-bottom-right"
              }`}
            />
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col space-y-2">
          <button
            className="p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300"
            onClick={() =>
              setOpenIndex((prev) => Math.max(0, prev - 1))
            }
          >
            <svg
              className="w-6 h-6 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button
            className="p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300"
            onClick={() =>
              setOpenIndex((prev) =>
                Math.min(accordionData.length - 1, prev + 1)
              )
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
              strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Controls - Previous Button (Left) */}
        <button
          className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300"
          onClick={() =>
            setOpenIndex((prev) => Math.max(0, prev - 1))
          }
        >
          <svg
            className="w-5 h-5 rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Mobile Controls - Next Button (Right) */}
        <button
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300"
          onClick={() =>
            setOpenIndex((prev) =>
              Math.min(accordionData.length - 1, prev + 1)
            )
          }
        >
          <svg
            className="w-5 h-5 -rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Animation;