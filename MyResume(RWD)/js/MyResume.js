// -------------------------navStart-------------------------------//
//在執行RWD時，當#menu ul被點擊後，系統會自動變成display:block!!
//到時候RWD回去>575px時，#menu ul沒辦法變回display:flex，版面跑掉!!
//RWD回來<575時，#menu ul沒辦法變回display:none，版面跑掉!!
function navlistJudge() {
  if ($("#navlist").is(":visible")) {
    $("#menu ul").css("display", "none");
  } else {
    $("#menu ul").css("display", "flex");
  }
}
//用addClass 權限會輸給上inline增加的display:flex進而沒有效果//

function navlistShow() {

  $("#navlist").click(function (){
    var menulist = $(this).next();
      if($(menulist).hasClass("hide")){
        $(menulist).stop(true, true).slideDown(700)
        $(menulist).removeClass('hide');
      } else {
        $(menulist).stop(true, true).slideUp(700);
        $(menulist).addClass('hide');
    }
  })
}


// function navlistHide() {
//   if(!($("#menu ul").hasClass("hide"))){
//     $("#menu ul").mouseout(function () {
//       $("#menu ul").stop(true, true).slideUp(700);
//       $("#menu ul").addClass('hide');
//     });
//   }
// }


// -------------------------navrEnd-------------------------------//
// -------------------------page01Start----------------------------//
var CardIndex = 1;
function btnshow() {
  if (CardIndex == 1) {
    $("#btnPrev").hide();
  } else {
    $("#btnPrev").show();
  }

  if (CardIndex > 3) {
    $("#btnNext").hide();
  } else {
    $("#btnNext").show();
  }
}
function Cardshow() {
  $(".portifoliocard").stop(true, true).fadeOut(500);
  $("#portifoliocard0" + CardIndex)
    .stop(true, true)
    .fadeIn(2000);
}

function fnPrev() {
  CardIndex--;
  Cardshow();
  btnshow();
}
function fnNext() {
  CardIndex++;
  if (CardIndex >= 5) {
    CardIndex = 1;
  }
  Cardshow();
  btnshow();
}

function Cardturnaround() {
  timer = setInterval(fnNext, 7000);
  $(".portifoliocard").mouseenter(function () {
    clearInterval(timer);
  });
  $(".portifoliocard").mouseleave(function () {
    timer = setInterval(fnNext, 7000);
  });
}




// -------------------------Page01End----------------------------------//

$(document).ready(function () {
  //------------------------nav-----------------------
  $(window).resize(navlistJudge);
  navlistShow();
  // -------------------------Page01Start-------------------------------//
  btnshow();
  $("#btnPrev").on("click", fnPrev);
  $("#btnNext").on("click", fnNext);
  Cardturnaround();
  // -----------------------page01End------------------------------------//
});
