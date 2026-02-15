import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa6';

import Displaycontrastratio from "../assets/Displaycontrastratio.webp";
import widecolour from "../assets/Wide Color Gamut.webp";
import Effortless from "../assets/Effortless Input Control.webp";
import Personalized from "../assets/Personalized Visual Control.webp";

const Animation = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const [openPreviousAccordionIndex, setOpenPreviousAccordionIndex] = useState(0);

  const imageRefs = useRef([]);
  const contentRefs = useRef([]);
  const buttonRefs = useRef([]);
  const parentRefs = useRef([]);

  const accordionData = useMemo(
    () => [
      {
        title: "1200:1 Contrast Ratio",
        heading: "For Deeper Visual Clarity",
        content:
          "Lumina 15F offers a high 1200:1 contrast ratio and super wide viewing angle. Over a million colors are presented with exceptional accuracy and dynamic range that transforms the professional workflow. It delivers deeper blacks, brighter highlights and clearer separation between light and dark. Text appears sharper, images feel more refined. And details stay visible across changing environments. It combines clarity and contrast to create a viewing experience that feels balanced, comfortable and precise, whether you're multitasking, presenting or creating on the go.",
        image: Displaycontrastratio,
        imageClass: "",
                height: 430,

      },
      {
        title: "Wide Color Gamut",
        heading: "Wide Colour Gamut",
        content:
          "With an advanced 8-bit panel capable of displaying up to 16.2 million colors. The Lumina 15F produces rich, vibrant visuals with smooth color transitions and impressive accuracy. This ensures consistent color reproduction, deeper gradients and lifelike images making it ideal for everyday work, creative tasks, multimedia viewing and extended screen time.",
        image: widecolour,
        imageClass: "my-auto",
                height: 300,

      },
      {
        title: "Source Button",
        heading: "Effortless Input Control",
        content:
          "Switch between devices without interrupting your workflow. The Source button on Lumina 15F lets you instantly toggle between inputs with one press. Featuring 1× HDMI and 2× USB-C display inputs, switching between laptops, desktops or other devices is fast and effortless. No menus. No delays. Just seamless control perfect for extending your workspace, presenting content or collaborating across screens while staying focused and productive.",
        image: Effortless,
        imageClass: "my-auto",
                height: 380,

      },
      {
        title: "OSD Settings",
        heading: "Personalized Visual Control",
        content:
          "Take full control of your viewing experience with intuitive On-Screen Display (OSD) controls. Easily adjust brightness, contrast and color settings to suit your workspace, content and lighting conditions. From crisp visuals in bright environments to comfortable viewing in low light, OSD control helps maintain balanced colors and clear detail at all times. Fine color matching ensures visuals look natural and consistent, making everyday work, creative tasks and entertainment more enjoyable. Designed for flexibility and ease of use, OSD controls put personalized visual performance at your fingertips.",
        image: Personalized,
        imageClass: "mt-auto",
                height: 440,

      },
    ],
    []
  );

  const handleAccordionAction = (index) => {
    if (index === openAccordionIndex) return;
    setOpenPreviousAccordionIndex(openAccordionIndex);
    setOpenAccordionIndex(index);
  };

  const changeAccordionByButton = (value) => {
    const prevIndex = openAccordionIndex;
    setOpenAccordionIndex((prev) => {
      let nextIdx = prev;
      if (value === "next") {
        nextIdx = prev < accordionData.length - 1 ? prev + 1 : prev;
      } else if (value === "previous") {
        nextIdx = prev > 0 ? prev - 1 : prev;
      }
      if (nextIdx !== prev) {
        setOpenPreviousAccordionIndex(prevIndex);
      }
      return nextIdx;
    });
  };

  useEffect(() => {
    // --- Image Transition Fix ---
    if (openAccordionIndex !== null) {
      const newImage = imageRefs.current[openAccordionIndex];
      const oldImage = imageRefs.current[openPreviousAccordionIndex];

      const imgTl = gsap.timeline();

      // Clear any remaining images from previous stuck states
      imageRefs.current.forEach((img, idx) => {
        if (img && idx !== openAccordionIndex && idx !== openPreviousAccordionIndex) {
          gsap.set(img, { opacity: 0, zIndex: 1, visibility: 'hidden' });
        }
      });

      // 1. OLD Image: Fast exit and hide
      if (oldImage && oldImage !== newImage) {
        imgTl.to(oldImage, {
          opacity: 0,
          xPercent: -30,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(oldImage, { visibility: 'hidden', zIndex: 1 });
          }
        }, 0);
      }

      // 2. NEW Image: Enter and stay on top
      if (newImage) {
        gsap.set(newImage, { visibility: 'visible', zIndex: 10 });
        imgTl.fromTo(newImage,
          {
            xPercent: 100,
            opacity: 0,
            clipPath: "inset(0% 0% 0% 0%)",
          },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.1
        );
      }
    }

    // --- Accordion Logic (Original Height/Width Animations) ---
     parentRefs.current.forEach((parent, index) => {
        const content = contentRefs.current[index];
        const button = buttonRefs.current[index];
  
        if (!parent || !content || !button) return;
  
        const isOpen = openAccordionIndex === index;
  
        const tl = gsap.timeline({ overwrite: true });
  
        if (openAccordionIndex != null) {
          gsap.set(contentRefs.current[openAccordionIndex], { opacity: 0 });
          gsap.set(buttonRefs.current[openAccordionIndex], { opacity: 0 });
        }
  
        if (openPreviousAccordionIndex != null) {
          gsap.set(contentRefs.current[openPreviousAccordionIndex], { opacity: 0 });
          gsap.set(buttonRefs.current[openPreviousAccordionIndex], { opacity: 0 });
        }
  
        tl.to(parent, {
          width: isOpen ? "100%" : "max-content",
          duration: 0.5,
          ease: "power3.inOut",
          transformOrigin: "bottom left",
        });
  
        tl.to(
          content,
          {
            height: isOpen ? accordionData[index].height : 0,
            width: isOpen ? "100%" : "0px",
            duration: 0.5,
            ease: "power3.inOut",
          },
          0,
        );
  
        tl.to([content], {
          opacity: isOpen ? 1 : 0,
          duration: isOpen ? 0.5 : 0,
          ease: "power2.out",
          pointerEvents: isOpen ? "auto" : "none",
        });
  
        tl.to(
          [button],
          {
            width: "max-content",
            opacity: isOpen ? 0 : 1,
            duration: isOpen ? 0 : 0.5,
            pointerEvents: isOpen ? "none" : "auto",
          },
          "<",
        );
      });
    }, [openAccordionIndex, openPreviousAccordionIndex, accordionData]);

  return (
    <div className="flex items-center justify-center py-8 sm:py-10 md:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-0">
      <div 
        className="flex flex-col md:flex-row rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden max-w-355 w-full pt-8 sm:pt-10 pb-0 md:pl-4 lg:pl-5 md:pr-0 md:py-0 gap-5 lg:gap-0 md:gap-0  h-125 sm:h-145 md:h-162.5 lg:h-187.5 xl:h-187 relative gradient-bg box-6"
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 flex-col space-y-3 z-30">
          <button
            className={`bg-white/40 backdrop-blur-sm w-8 h-8 rounded-full flex justify-center items-center transition-all duration-500 ${
              openAccordionIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-white/90 hover:scale-110 active:scale-95"
            }`}
            disabled={openAccordionIndex === 0}
            onClick={() => changeAccordionByButton("previous")}
          >
            <FaChevronUp className="text-slate-900" />
          </button>
          <button
            className={`bg-white/40 backdrop-blur-sm w-8 h-8 rounded-full flex justify-center items-center transition-all duration-500 ${
              openAccordionIndex === accordionData.length - 1 ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-white/90 hover:scale-110 active:scale-95"
            }`}
            onClick={() => changeAccordionByButton("next")}
            disabled={openAccordionIndex === accordionData.length - 1}
          >
            <FaChevronDown className="text-slate-900" />
          </button>
        </div>

        {/* Left Side - Text Content */}
        <div className="w-full h-fit md:w-[50%] flex flex-col justify-center md:py-6 lg:py-10 md:pr-12 lg:pr-20 md:pl-14 lg:pl-16">
          <div className="flex h-full justify-between gap-3 w-full">
            <div className="flex flex-col justify-center gap-3 flex-1 hidden md:flex">
              {accordionData.map((item, index) => (
                <div key={index} className="relative text-black w-full">
                  <div
                    ref={(el) => (parentRefs.current[index] = el)}
                    className={`${ openAccordionIndex === index ? "md:p-4 lg:p-6" : "p-3" } rounded-[20px] md:rounded-[25px] lg:rounded-[30px] bg-white/60 backdrop-blur-md overflow-hidden will-change-transform w-full`}
                  >
                    <h4
                      ref={(el) => (buttonRefs.current[index] = el)}
                      className={`${ openAccordionIndex === index ? "opacity-0 h-0 pointer-events-none" : "cursor-pointer" } flex items-center gap-2 pr-1`}
                      onClick={() => handleAccordionAction(index)}
                    >
                      <span className="border border-gray-900 p-1 rounded-full"><FaPlus /></span>
                      <span className="text-lg lg:text-xl font-bold text-[#3B3A3A] whitespace-nowrap">{item.title}</span>
                    </h4>

                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className={`${openAccordionIndex === index ? "" : "opacity-0 h-0 overflow-hidden"}`}
                    >
                      <h5 className="md:text-base lg:text-lg xl:text-xl font-bold md:mb-1 xl:mb-4 text-[#3B3A3A]">{item.heading}</h5>
                      <p className="md:text-base lg:text-[1.5dvw] xl:text-xl lg:leading-[1.80dvw] text-[#3B3A3A] overflow-y-auto max-h-[350px] lg:max-h-[300px] xl:max-h-[400px] pr-2 scrollbar-hide">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden">
            <div className="bg-white/60 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl mx-4 sm:mx-6">
              <h4 className="font-semibold mb-2 text-[#3B3A3A] text-base sm:text-lg leading-[139.1%]">{accordionData[openAccordionIndex].title}</h4>
              <p className="mt-3 sm:mt-4 text-[#3B3A3A] text-sm sm:text-base leading-[139.1%] overflow-y-auto max-h-[150px] scrollbar-hide">
                {accordionData[openAccordionIndex].content}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-[50%] flex justify-center items-end md:justify-end md:items-end">
          <div className="relative w-full h-[240px] sm:h-[280px] md:h-full flex justify-center items-end md:justify-end overflow-hidden md:overflow-visible md:min-h-[450px] lg:min-h-[520px]">
            {accordionData.map((item, index) => (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={item.image}
                alt={item.title}
                className={`absolute w-full opacity-0 ${
                  index === 0 || index === 3
                    ? "bottom-0 right-0 h-auto object-contain object-bottom-right"
                    : "top-1/2 -translate-y-1/2 right-0 h-auto object-contain object-center"
                }`}
                style={{
                  visibility: index === 0 ? 'visible' : 'hidden', // Initial load
                  opacity: index === 0 ? 1 : 0,
                  willChange: 'transform, opacity',
                  maxHeight: index === 0 || index === 3 ? '100%' : '85%'
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <button className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/40 rounded-full z-10" onClick={() => changeAccordionByButton("previous")}>
          <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
        <button className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/40 rounded-full z-10" onClick={() => changeAccordionByButton("next")}>
          <svg className="w-5 h-5 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Animation;