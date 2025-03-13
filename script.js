var t1 = gsap.timeline();
t1.from(".nav h1",{
    y:-50,
    opacity:0,
    duration:0.3,
    delay:0.1,
    stagger:0.5
})
t1.from(".main-body h1",{
    x:-50,
    opacity:0,
    duration:0.1,
    delay:0.1,
    stagger:0.5
})
t1.from(".main-body img",{
    x:100,
    opacity:0,
    duration:0.1,
    delay:0.1,
    stagger:0.5,
    rotate:"30deg"
})