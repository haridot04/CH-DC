const main = document.querySelector(".main");
console.log("done");
const t1 = new TimelineLite ({paused: true})
console.log(t1);
t1.to('.bg', 2, {
    transform: "scale(1.2)",
    ease: Power2.easeOut
});

t1.play()