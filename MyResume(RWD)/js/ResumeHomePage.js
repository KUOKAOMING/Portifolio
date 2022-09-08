// -------------------OpenAnimate Cancel---------------------->
function AnimateCancel() {
  $("#h1Animate").removeClass("h1Animate");
  $("#OpenAnimate").removeClass("OpenAnimate");
  $("#home").removeClass("OpacityAnimate");
  $("#Introduction").removeClass("TextAnimate");
  clearTimeout(timer);
  setTimeout(timer, 500);
}

// ------------------Circlenav animate-------------------------->
let i = 0;
let angle = 50;
function translateAnimate() {
  var Icon = document.getElementsByClassName("circlenav");
  if (i < 6) {
    console.log(angle);
    var radian = (angle * Math.PI) / 180;
    var PonX = 380 + Math.cos(radian) * 450;
    var PonY = 380 - Math.sin(radian) * 450;
    Icon[i].style.transition = "all 1s ease-in-out";
    Icon[i].style.left = PonX + "px";
    Icon[i].style.top = PonY + "px";
    angle = angle - 20;
    i++;
  } else {
    clearInterval(t);
  }
}
function timer() {
  t = setInterval(translateAnimate, 200);
}

$(document).ready(function () {
  setTimeout(timer, 7000);
  $("#OpenAnimate").click(AnimateCancel);
});
