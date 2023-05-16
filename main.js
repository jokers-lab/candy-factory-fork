// GSAP
const rightBox = document.querySelector(".demo");
const leftBox = document.querySelector(".demo-rht");

const GSAP = gsap.timeline();

GSAP.to([rightBox], {
  x: 200,
  color: "#fff",
  duration: 2,
  ease: "elastic",
});

GSAP.to([leftBox], {
  x: -200,
  color: "#fff",
  duration: 3,
  ease: "elastic",
});
