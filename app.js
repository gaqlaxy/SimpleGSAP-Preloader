// So, we create a timeline tl, which allows us to chain together multiple animations
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".lightCyan-slider", {
  x: "-10%",
  duration: 1,
});

tl.to(
  ".persianGreen-slider",
  {
    x: "-20%",
    duration: 1.5,
  },
  "-=1"
);

tl.to(
  ".white-slider",
  {
    x: "-30%",
    duration: 1.5,
  },
  "-=1"
);

tl.to(".hide", {
  x: "0%",
  duration: 2,
  opacity: 1,
});

tl.to(".preloader", {
  x: "200%",
  duration: 3,
});

