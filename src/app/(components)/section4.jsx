"use client";

import React from "react";
import Branch from "./ui/branch";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const Section4 = () => {
  const gridRef = React.useRef(null);
  const timeline = React.useRef(null);
  const timeline1 = React.useRef(null);
  // const timeline2  = React.useRef(null);
  const lastHoveredItem = React.useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      const textSections = gsap.utils.toArray(".textSection")
      const section4 = document.querySelectorAll(".section4");
      console.log(textSections);
      const gridItems = gsap.utils.toArray(".grid-items");

      textSections.forEach((text, i) => {
        gsap.from(text, {
          xPercent : -30,
          scrollTrigger : {
            trigger : text,
            start: "top bottom",
            toggleActions: "play none none reset",
          }
        });
      })

      
      timeline1.current = gsap.timeline({
          scrollTrigger: {
            trigger: section4,
            start: "top bottom",
            toggleActions: "play none none reset",
            // markers: true,
          },
        })
        .from(gridItems, {
          opacity: 0,
          xPercent: -20,
          stagger: 0.15,
          duration: .7,
          ease : "power4.out"
        });

      timeline.current = gsap.timeline({
        defaults: {
          duration: 0.2,
        },
      });
    },
    {
      scope: gridRef,
    }
  );

  const mouseEnter = contextSafe((grid, grid2, gridItem) => {
    // console.log(lastHoveredItem.current)
    // If we enter a new grid item, reset the previous animations first
    if (lastHoveredItem.current && lastHoveredItem.current !== gridItem) {
      timeline.current?.clear();
      gsap.set(".gridSection", { xPercent: 0 });
    }

    // Store the currently hovered item
    lastHoveredItem.current = gridItem;

    // Clear any ongoing animations
    timeline.current?.clear();

    // Run the animation
    timeline.current.to(grid, {
      xPercent: 100,
      onUpdate: function () {
        if (this.progress() >= 0.1) {
          afterAnimation(grid2);
        }
      },
    });
  });

  const mouseLeave = contextSafe((event) => {
    // Only reset if we're leaving the entire grid container
    // if (event.relatedTarget && !gridRef.current.contains(event.relatedTarget)) {
    timeline.current?.clear();
    timeline.current.set(
      ".gridSection",
      {
        xPercent: 0,
      },
      0
    );
    // lastHoveredItem.current = null;
    // }
  });

  const afterAnimation = contextSafe((grid) => {
    timeline.current?.to(grid, {
      xPercent: 100,
    });
  });

  return (
    <div className="w-full min-h-screen bg-[#181818] pt-16 pb-20 section4">
      <div className="h-full mx-auto max-w-7xl">
        <Branch title={"SERVICE"} id={2} className={"py-10"} />
      </div>
      <div
        className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3"
        ref={gridRef}
        onMouseLeave={mouseLeave}
      >
        <div
          onMouseEnter={(e) => {
            mouseEnter(".grid1", ".grid2", e.currentTarget);
          }}
          className="relative overflow-hidden cursor-pointer grid-item-1 grid-items "
        >
          <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid2" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid1" />

          {/* text 1 */}
          <div className="absolute bottom-0 left-0 w-full p-6 h-fit textSection">
            <span className="text-[#ffffff80] text-xs font-medium textSection">
              SERVICE DETAILS
            </span>
            <h1 className="mt-3 text-5xl font-semibold text-white textSection">
              HR Stratey Consulting
            </h1>
            <h6 className="mt-3 text-sm font-medium text-white textSection">
              HR strategy consulting
            </h6>
            <p className="mt-4 text-sm leading-loose text-[#ffffff80] font-medium textSection">
              From upstream to recruitment strategy development to engagement
              and escorting to joining and establishing through methods such as
              interview measures and training
            </p>
          </div>
          <Image
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
            alt="service-details"
            className="w-full"
            quality={100}
            priority
            width={500}
            height={1000}
          />
        </div>
        <div
          onMouseEnter={(e) => {
            mouseEnter(".grid3", ".grid4", e.currentTarget);
          }}
          className="relative overflow-hidden cursor-pointer grid-item-2 grid-items"
        >
          <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid4" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid3" />

          {/* text 2 */}
          <div className="absolute bottom-0 left-0 w-full p-6 h-fit textSection">
            <span className="text-[#ffffff80] text-xs font-medium textSection">
              SERVICE DETAILS
            </span>
            <h1 className="mt-3 text-5xl font-semibold text-white textSection">Branding</h1>
            <h6 className="mt-3 text-sm font-medium text-white textSection">branding</h6>
            <p className="mt-4 text-sm leading-loose text-[#ffffff80] font-medium textSection">
              Consistently from branding to branding such as websites, footage,
              printed materials, and SNS to improve the value of the companies
              and create a virtuous cycle that is assetally successful.
            </p>
          </div>
          <Image
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details03.jpg"
            alt="service-details"
            className="w-full"
            quality={100}
            priority
            width={500}
            height={1000}
          />
        </div>
        <div
          onMouseEnter={(e) => {
            mouseEnter(".grid5", ".grid6", e.currentTarget);
          }}
          className="relative overflow-hidden cursor-pointer grid-item-3 grid-items"
        >
          <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid6" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid5" />

          {/* text 3 */}
          <div className="absolute bottom-0 left-0 w-full p-6 h-fit textSection">
            <span className="text-[#ffffff80] text-xs font-medium textSection">
              SERVICE DETAILS
            </span>
            <h1 className="mt-3 text-5xl font-semibold text-white textSection">
              Job Advertising
            </h1>
            <h6 className="mt-3 text-sm font-medium text-white textSection">
              job advertisment agency service{" "}
            </h6>
            <p className="mt-4 text-sm leading-loose text-[#ffffff80] font-medium textSection">
              We will form a tag with a consultant/writer/cameraman/designer to
              create advertisment that can only be lauunched by the company.
            </p>
          </div>
          <Image
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details01.jpg"
            alt="service-details"
            className="w-full"
            quality={100}
            priority
            width={500}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
