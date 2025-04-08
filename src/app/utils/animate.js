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