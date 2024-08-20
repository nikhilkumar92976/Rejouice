function curserfunction() {
    var gola = document.querySelector("#page1-gola");
    var page1 = document.querySelector("#loader")

    page1.addEventListener("mousemove", function (dets) {
        gola.style.left = dets.x + "px";
        gola.style.top = dets.y + "px";
    })
    page1.addEventListener("mouseleave", function (dets) {
        gola.style.opacity = 0;
    })
    page1.addEventListener("mouseenter", function (dets) {
        gola.style.opacity = 1;
    })
}
curserfunction();

var tl = gsap.timeline()
function page1Animi() {
    tl.from("#loader h3 ", {
        x: 200,
        opacity: 0,
        duration: .7,
        stagger: .5
    })
    tl.from("#loader", {
        opacity: 1,
        duration: 1.5,
    })
    tl.to("#loader", {
        opacity: 0,
        duration: .4,
    })
    tl.from("nav", {
        x: 40,
        opacity: 0,
        duration: .7,
        delay: .7,
        stagger: .5
    })
    tl.from("#page1 #buttom ", {
        y: 100,
        opacity: 0,
        duration: .7,
        stagger: .3
    })
}
page1Animi()

function page2Animi() {
    tl.from("#topdiv h2", {
        y: 40,
        opacity: 0,
        duration: 2.5,
        delay: 2,
        scrollTrigger: {
            trigger: "#topdiv h2",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            // markers: true
        }
    })
    gsap.from("#page2 h1", {
        y: 150,
        opacity: 0,
        duration: 3.5,
        delay: 2,
        stagger: 1,
        scrollTrigger: {
            trigger: "#page2 h1",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            // markers: true
        }
    })
    tl.from("#topdiv ", {
        x: 0,
        opacity: 0,
        duration: 3.5,
        delay: 2,
        scrollTrigger: {
            trigger: "#topdiv h2",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            // markers: true
        }
    })
}
page2Animi()

function page3Animi() {
    gsap.from("#page3 h1", {
        y: 150,
        opacity: 0,
        duration: 3.5,
        delay: 2,
        stagger: 1,
        scrollTrigger: {
            trigger: "#page3 h1",
            start: "top 80%",
            end: "top 90%",
            scrub: 1,
            // markers: true
        }
    })
}
page3Animi()

function curser() {
    var go = document.querySelector("#page5 #page1-gola");
    var page5 = document.querySelector("#page5")

    page5.addEventListener("mousemove", function (dets) {
        go.style.left = dets.x + "px";
        go.style.top = dets.y + "px";
    })
    page5.addEventListener("mouseleave", function (dets) {
        go.style.opacity = 0;
    })
    page5.addEventListener("mouseenter", function (dets) {
        go.style.opacity = 1;
    })
}
curser();

function footeranimi() {
    gsap.from("footer h1 ", {
        y: -200,
        opacity: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: "footer h1",
            start: "top 40%",
            end: "buttom 24%",
            scrub: 1,
            // markers:true
        }
    })
}
footeranimi()

function fourbox() {
    var element = document.querySelectorAll(".names");
    var image = document.querySelector("img");

    element.forEach(function (val) {
        console.log(val.childNodes)
        val.addEventListener("mousemove", function (data) {
            val.childNodes[1].style.left = data.x + "px";
            val.childNodes[1].style.top = data.y + "px";
        })
        val.addEventListener("mouseenter", function (data) {
            val.childNodes[1].style.opacity = 1;
        })
        val.addEventListener("mouseleave", function (data) {
            val.childNodes[1].style.opacity = 0;
        })
    })
}
fourbox()
