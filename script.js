let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
  },
});

tl.from(".btn-1", { y: 400, opacity: 0, rotation: 15, duration: 1.5 })
  .from(".btn-2", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1.5")
  .from(".btn-3", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1.4")
  .from(".btn-4", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1.4")
  .from(".btn-5", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1.3")
  .from(".btn-6", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1.3")
  .from(".btn-7", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1.2");

let tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
  },
});

tl_2
  .from(".acc-1", { y: 400, opacity: 0, rotation: 15, duration: 1.5 })
  .from(".acc-2", { y: 400, opacity: 0, rotation: 15, duration: 1.5 })
  .from(".acc-3", { y: 400, opacity: 0, rotation: 15, duration: 1.5 })
  .from(".acc-4", { y: 400, opacity: 0, rotation: 15, duration: 1.5 }, "-=1");

let tl_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
  },
});

tl_3
  .from(".header-text h4", {
    y: 200,
    opacity: 0,
    rotation: 15,
    duration: 1.5,
  })
  .from(
    ".header-text h1",
    {
      y: 200,
      opacity: 0,
      rotation: 15,
      duration: 1.5,
    },
    "-=1"
  )
  .from(
    ".header-text h2",
    {
      y: 200,
      opacity: 0,
      rotation: 15,
      duration: 1.5,
    },
    "-=1.2"
  )
  .from(
    ".header-text p",
    {
      y: 200,
      opacity: 0,
      rotation: 15,
      duration: 1.5,
    },
    "-=1.3"
  )
  .from(
    ".header-text .btn",
    {
      x: 200,
      opacity: 0,
      rotation: 15,
      duration: 1.5,
    },
    "-=1.3"
  );
