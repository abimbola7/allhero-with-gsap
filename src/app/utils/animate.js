import gsap from "gsap";
import { showHeader, hideHeader } from "@/store/uislice";


export const animatePageIn = (dispatch) => {
  const openingRef = document.querySelector(".opening");
  const iconn = document.querySelector(".iconn");
  const overlay = document.querySelector(".overlay");
  const tl = gsap.timeline({
    defaults : {
      // immediateRender : false,
      duration : .6,
      delay : 1,
      opacity : 1,
      onComplete : () => {
        dispatch(showHeader())
      }
    }
  }).from(openingRef, {
      xPercent : -100, scaleX : 1
    }, 0)
    .to(iconn, {
      x : 100,
      ease : "power2.out",
      opacity : 0,
      duration : .5
    }, 0)
    .to(openingRef, {
      scaleX : 0, transformOrigin : "right"
    }, 0.2)
    .set(overlay, {
      zIndex : -100
    }, .7)
}


export const animatePageOut = (href, router, dispatch) => {
  const openingRef = document.querySelector(".opening");
  const iconn = document.querySelector(".iconn");
  const overlay = document.querySelector(".overlay");
  const tl = gsap.timeline({
    defaults : {
      // immediateRender : false,
      duration : .6,
      // delay : 1,
      opacity : 1,
      onStart : () => {
        dispatch(hideHeader())
      },
      onComplete : () => {
        router.push(href);
      }
    }
  })
  .set(overlay, {
    zIndex : 100
  }, 0)
  .to(iconn, {
    x : 0,
    ease : "power2.out",
    opacity : 1,
    duration : .5
  }, 0.2)
  .from(openingRef, {
    xPercent : 100, scaleX : 1
  }, 0)
  .to(openingRef, {
    scaleX : 0, transformOrigin : "left"
  }, 0.7)
}


export const mockAnimation = (section) => {
  const sectionSelect = document.querySelector(section)
  const gridItems = gsap.utils.toArray(".grid-items"); 
  gsap.timeline({
    scrollTrigger: {
      trigger: sectionSelect,
      start: "top bottom",
      toggleActions: "play none none reset",
      // markers: true,
    },
  })
  .from(gridItems, {
    opacity: 0,
    xPercent: -20 ,
    stagger: 0.2,
    duration: 1,
    ease : "power4.out"
  });
}

export const imagesAnimation = (sections) => {
  const images = gsap.utils.toArray(sections);
  images.forEach((image, i) => {
    gsap.from(image, {
      xPercent : -100,
      ease : "power4.out",
      duration: 1.5,
      opacity : 0,
      scrollTrigger : {
        trigger : image,
        start : `21% bottom`,
        toggleActions : "play none none reset",
        // markers: true
      }
    })
  })
}

export const StayLowKeyAnim = (section) => {
  const motto = document.querySelector(".motto")
  console.log(motto, section)
  gsap.timeline({
    scrollTrigger : {
      trigger : section,
      start : "top bottom",
      toggleActions : "play none none reset",
      // markers : true
    }
  })
  .from(motto, {
    x: -250,
    opacity : 0,
    duration : 1.2,
    ease : "power4.out",
  },0)
}

export const idkWhatToNameThisAnim = (sections) => {
  const sect = gsap.utils.toArray(sections);
  sect.forEach((sec, i) => {
    gsap.from(sec, {
      xPercent : -10,
      ease : "power4.out",
      duration: 1.5,
      opacity : 0,
      scrollTrigger : {
        trigger : sec,
        start : `21% bottom`,
        toggleActions : "play none none reset",
        // markers: true
      }
    })
  })
}

export const textAnimation = (sections) => {
  console.log(sections)
  const texts = gsap.utils.toArray(sections);
  texts.forEach((text, i) => {
    gsap.from(text, {
      delay: .2,
      xPercent : -50,
      ease : "circ.out",
      duration: .6,
      opacity : 0,
      scrollTrigger : {
        trigger : text,
        start : `top bottom`,
        toggleActions : "play none none reset",
        // markers: true
      }
    })
  }) 
}