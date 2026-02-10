import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPlusCircle } from 'react-icons/fi';

import Displaycontrastratio from "../assets/Displaycontrastratio.webp";
import widecolour from "../assets/Wide Color Gamut.webp";
import Effortless from "../assets/Effortless Input Control.webp";
import Personalized from "../assets/Personalized Visual Control.webp";

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRefs = useRef([]);
  const buttonWrapperRefs = useRef([]);
  const sectionRef = useRef(null);

  const accordionData = [
    {
      buttonTitle: "1200:1 Contrast Ratio",
      title: "For Deeper Visual Clarity",
      description:
        "Lumina 15F offers a high 1200:1 contrast ratio and super wide viewing angle. Over a million colors are presented with exceptional accuracy and dynamic range that transforms the professional workflow. It delivers deeper blacks, brighter highlights and clearer separation between light and dark. Text appears sharper, images feel more refined. And details stay visible across changing environments. It combines clarity and contrast to create a viewing experience that feels balanced, comfortable and precise, whether you're multitasking, presenting or creating on the go.",
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

  // Scroll-based animation setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll trigger for each section
      const totalSections = accordionData.length;
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * totalSections}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * totalSections),
            totalSections - 1
          );
          
          if (newIndex !== openIndex) {
            setOpenIndex(newIndex);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Image and content animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Premium image transition with scale and rotation
      tl.to(imageRef.current, {
        x: -120,
        opacity: 0,
        scale: 0.85,
        rotateY: -15,
        duration: 0.5,
        ease: "power4.in",
      })
        .set(imageRef.current, { 
          x: 120,
          opacity: 0,
          scale: 0.85,
          rotateY: 15,
        })
        .to(imageRef.current, {
          x: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power4.out",
        });

      // Premium accordion animations
      accordionData.forEach((_, index) => {
        const isOpen = openIndex === index;

        // Content animation with stagger effect
        gsap.to(contentRefs.current[index], {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          duration: 0.7,
          ease: "expo.out",
          onStart: () => {
            if (isOpen && contentRefs.current[index]) {
              const children = contentRefs.current[index].children;
              if (children.length > 0) {
                gsap.fromTo(
                  children[0].children,
                  { 
                    opacity: 0, 
                    y: 20,
                    scale: 0.95
                  },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    delay: 0.2
                  }
                );
              }
            }
          }
        });

        // Enhanced Button wrapper animation with bounce and slide
        gsap.to(buttonWrapperRefs.current[index], {
          height: isOpen ? 0 : "auto",
          opacity: isOpen ? 0 : 1,
          marginTop: isOpen ? 0 : 12,
          scale: isOpen ? 0.85 : 1,
          x: isOpen ? -20 : 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.6)",
          pointerEvents: isOpen ? "none" : "auto",
        });
      });
    });

    return () => ctx.revert();
  }, [openIndex]);

  return (
    <div ref={sectionRef} className="relative">
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-0">
        <div 
          ref={containerRef}
          className="flex flex-col md:flex-row rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden max-w-355 w-full pt-8 sm:pt-10 pb-0 md:pl-16 lg:pl-22 md:pr-0 md:py-0 h-[582px] sm:h-[650px] md:h-[700px] lg:h-[810px] xl:h-220 relative gradient-bg box-4"
        >

          {/* Left Side - Text Content */}
          <div className="w-full h-fit md:w-[50%] flex flex-col justify-center md:py-6 lg:py-10 md:pr-12 lg:pr-20">
            {accordionData.map((item, index) => (
              <div key={index} className="group hidden md:block">
                <div
                  ref={(el) => (buttonWrapperRefs.current[index] = el)}
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="relative flex items-center space-x-2 lg:space-x-3 text-lg lg:text-xl xl:text-2xl backdrop-blur-md font-semibold text-[#3B3A3A] px-3 lg:px-4 rounded-2xl lg:rounded-3xl bg-white/60 transition-all py-2 lg:py-2.5 ml-1 lg:ml-2 leading-[139.1%] mt-2 lg:mt-3 hover:bg-white/90  overflow-hidden"
                    style={{ 
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        y: -2,
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                  >
                    {/* Animated background gradient on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                    
                    <span className="text-lg lg:text-xl xl:text-2xl font-light transition-all duration-500 group-hover:rotate-90 group-hover:scale-110 relative z-10">
                      <FiPlusCircle />
                    </span>
                    <span className="relative z-10">{item.buttonTitle}</span>
                  </button>
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden opacity-0"
                  style={{ height: 0 }}
                >
                  <div className="bg-white/60 backdrop-blur-md p-4 lg:p-6 rounded-2xl lg:rounded-3xl mt-3 lg:mt-4">
                    <h4 className="font-semibold mb-2 text-[#3B3A3A] text-lg lg:text-xl xl:text-2xl leading-[139.1%]">
                      {item.title}
                    </h4>
                    <p className="mt-6 lg:mt-8 xl:mt-12 text-[#3B3A3A] text-base lg:text-lg xl:text-2xl leading-[139.1%] overflow-y-auto max-h-[350px] lg:max-h-[300px] xl:max-h-[400px] pr-2 scrollbar-hide">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Content - Only show current item */}
            <div className="md:hidden">
              <div className="bg-white/60 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl mx-4 sm:mx-6">
                <h4 className="font-semibold mb-2 text-[#3B3A3A] text-base sm:text-lg leading-[139.1%]">
                  {accordionData[openIndex].title}
                </h4>
                <p className="mt-3 sm:mt-4 text-[#3B3A3A] text-sm sm:text-base leading-[139.1%] overflow-y-auto max-h-[200px] sm:max-h-[250px] scrollbar-hide">
                  {accordionData[openIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div
            className={`w-full md:w-[50%] flex justify-center md:justify-end mt-4 sm:mt-6 md:mt-0 ${
              accordionData[openIndex].isCenter ? "items-center" : "items-end"
            }`}
          >
            <div className="relative w-full h-[280px] sm:h-[300px] md:h-full flex justify-center md:justify-end overflow-visible md:min-h-[450px] lg:min-h-[520px] pr-0 pb-0 md:pr-0 md:pb-0">
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
                style={{ perspective: '1000px' }}
              />
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 flex-col space-y-2 z-10">
            <button
              className="p-1.5 lg:p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg"
              onClick={() =>
                setOpenIndex((prev) => Math.max(0, prev - 1))
              }
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  rotate: -5,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  rotate: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 rotate-180 transition-transform duration-300"
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
              className="p-1.5 lg:p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg"
              onClick={() =>
                setOpenIndex((prev) =>
                  Math.min(accordionData.length - 1, prev + 1)
                )
              }
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  rotate: 5,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  rotate: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300"
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
            className="md:hidden absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            onClick={() =>
              setOpenIndex((prev) => Math.max(0, prev - 1))
            }
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 transition-transform duration-300"
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
            className="md:hidden absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            onClick={() =>
              setOpenIndex((prev) =>
                Math.min(accordionData.length - 1, prev + 1)
              )
            }
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 -rotate-90 transition-transform duration-300"
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Animation;