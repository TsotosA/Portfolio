//TYPING EFFECT - TYPED.JS//
var options = {
  strings: ["FrontEnd Designer!", "FrontEnd Web Dev!"],
  typeSpeed: 100,
  smartBackspace: true,
  loop: true,
  loopCount: 1
}
var typed = new Typed(".typed", options);
//TYPING EFFECT - TYPED.JS//

//FULL SCREEN NAV OPEN AND CLOSE //
function openNav(){
  document.getElementById("myNav").style.width = "100vw";
};
function closeNav(){
  document.getElementById("myNav").style.width = "0vw";
};
//FULL SCREEN NAV OPEN AND CLOSE //

// STICKY MAVBAR (ADD REMOVE STICKY CLASS DEPENDING ON THE DISTANCE OF THE NAVBAR FROM TOP)
var navbar = document.getElementById("myBigScreenNav");
var sticky = navbar.offsetTop;
function stickyNavBar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  }else {
    navbar.classList.remove("sticky");
  }
}
// STICKY MAVBAR//

// SMOOTH SCROLLING//

// Code goes here
// based on
// http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
// use href="#anchorID" in your hyperlinks
// with smoothScroll('destinationAnchorID');return false; as the onclick event.
// <a href="#anchor-1" onclick="smoothScroll('anchor-1-id');">smooth scroll to Anchor 1<a/>
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}
function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  return false;
}
// SMOOTH SCROLLING//

// function offset(el) {
//     var rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }
// var el = document.querySelector("#portfolio");
// var portfolio = offset(el);
// var y = portfolio.top;
