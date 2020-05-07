var tl = gsap.timeline();

xTo = window.innerWidth;

//tl.fromTo(".curtain", {scaleX: 0, transformOrigin:"left"},{scaleX: 1, duration:1, ease: Power4.easeInOut});

//tl.fromTo("div#curtain-logo span",{opacity:0},{opacity:1, ease:Power4.easeInOut, stagger:0.05},"-=0.7");
tl.fromTo("div#curtain-logo",{x:0, opacity:1},{opacity:0, ease:Power4.easeInOut});

tl.fromTo(".curtain", {scaleX: 1, transformOrigin:"right"},{scaleX: 0, duration:1});

tl.fromTo("#inner-wrapper",{opacity:0},{opacity:1, duration:1.5}, "-=0.5")

tl.fromTo("#logo",{opacity:0},{opacity:1, duration:1.5}, "-=1.5")

//tl.fromTo(".nav-item",{x:-30, opacity:0},{x:0, opacity: 1, duration:1, stagger:0.25},"-=1")

tl.fromTo("left h1",{opacity:0, y:50},{opacity:1, y:0, ease:Power4.easeInOut, duration:2}, "-=1.5");

tl.fromTo("left article",{opacity:0, y:50},{opacity:1, y:0, ease:Power4.easeInOut, duration:2}, "-=1.8");

tl.fromTo("#cta",{x:-30, opacity:0},{x:0, opacity:1, ease:Power4.easeInOut, duration:1},"-=1.2");
/*
tl.fromTo("#white-dummy",{scaleX: 0, transformOrigin:"left"},{scaleX:1,ease:Power4.easeInOut, duration:0.5},"-=1");

tl.fromTo("#cta",{scaleX: 0, transformOrigin:"left"},{scaleX:1,ease:Power4.easeInOut, duration:0.7},"-=0.9");

tl.fromTo("a#cta-text",{opacity: 0, x:10},{opacity:1, x:0, duration:0.5},"-=0.25");
*/


if ($('#link') != null ) {
    $( "#link" ).click(function() {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000);
    });
}
