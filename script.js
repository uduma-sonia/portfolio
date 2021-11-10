let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
  },
});

tl.from(".btn-1", { y: 400, opacity: 0, duration: 1.5 })
  .from(".btn-2", { y: 400, opacity: 0, duration: 1.5 }, "-=1.5")
  .from(".btn-3", { y: 400, opacity: 0, duration: 1.5 }, "-=1.4")
  .from(".btn-4", { y: 400, opacity: 0, duration: 1.5 }, "-=1.4")
  .from(".btn-5", { y: 400, opacity: 0, duration: 1.5 }, "-=1.3")
  .from(".btn-6", { y: 400, opacity: 0, duration: 1.5 }, "-=1.3")
  .from(".btn-7", { y: 400, opacity: 0, duration: 1.5 }, "-=1.2")
  .from(".btn-8", { y: 400, opacity: 0, duration: 1.5 }, "-=1.1")
  .from(".btn-9", { y: 400, opacity: 0, duration: 1.5 }, "-=1.0")
  .from(".btn-10", { y: 400, opacity: 0, duration: 1.5 }, "-=0.9")
  .from(".btn-11", { y: 400, opacity: 0, duration: 1.5 }, "-=0.8");

let tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
  },
});

tl_2
  .from(".acc-1", { y: 400, opacity: 0, duration: 1.5 })
  .from(".acc-2", { y: 400, opacity: 0, duration: 1.5 }, "-=0.6")
  .from(".acc-3", { y: 400, opacity: 0, duration: 1.5 }, "-=0.8")
  .from(".acc-4", { y: 400, opacity: 0, duration: 1.5 }, "-=1");
