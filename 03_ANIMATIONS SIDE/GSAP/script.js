// gsap.to(".main", {//it s like final postion(whch we mention here) from base satte or normal where it has to be ---I TO F
//   x: 1000,
//   // y:200,
//   duration: 2,
//   dilay: 1,
//   // ease:"bounce.out"
// });

gsap.from(".main", {
  //it s like final postion(whch we mention here) to base satte or normal where it has to be ----F TO I
  x: 1000,
  // y:200,
  duration: 2,
  dilay: 1,
  // ease:"bounce.out"
});

gsap.to(".box22", {
  x: 100,
  y: 200,
  duration: 2,
  dilay: 1,
  ease: "bounce.in",
});

gsap.to("#box2", {
  x: 1000,
  duration: 2,
  dilay: 1,
  rotate: 360,
  backgroundColor: "blue",
  //   ease: "bounce.out",
  borderRadius: "50%",
  scale: 2,
});

// text side---

gsap.from("h1", {
  opacity: 0,
  color: "red",
  duration: 1,
  y: 50,
  scale:0.2,
  stagger: 0.5, //to keep one by one un animation--- 1 or 0.x or -1
  dilay: 1,
});

// box--stagger

gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  // repeat:3,// repeats same above animations foe 1+1 times
  repeat: -1, //like inifnte times it runs
  yoyo: true,
});

// gsap.to("#boxx1", {
//   x: 1000,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
//   borderRadius: "50%",
// });

// gsap.to("#boxx2", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 2.5,
//   borderRadius: "50%",
//   backgroundColor: "white",
// });

// gsap.to("#boxx3", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 4.5,
//   scale: 0.6,
//   borderRadius: "50%",
//   backgroundColor: "blue",
//   stagger: true,
// });

//above is normal way of du=oing synchronised animations with calucaltions very time taking in latge case 

//so below is soltion to this we use timeline concept here

var tl = gsap.timeline();

// tl.to("#boxx1", {
//   x: 1000,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
//   borderRadius: "50%",
// });

// tl.to("#boxx2", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   borderRadius: "50%",
//   backgroundColor: "white",
// });

// tl.to("#boxx3", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   scale: 0.6,
//   borderRadius: "50%",
//   backgroundColor: "blue",
//   stagger: true,
// });




tl.from("h2",{
  y:-10,
  opacity:0,
  duration:1,
  delay:1,
});

tl.from("h4",{
  y:-10,
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.3,
});