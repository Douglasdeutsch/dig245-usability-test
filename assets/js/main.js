






//
// function getScrollMaxY(){"use strict";
//     var innerh = window.innerHeight || ebody.clientHeight, yWithScroll = 0;
//
//     if (window.innerHeight && window.scrollMaxY){
//         // Firefox
//         yWithScroll = window.innerHeight + window.scrollMaxY;
//     } else if (document.body.scrollHeight > document.body.offsetHeight){
//         // all but Explorer Mac
//         yWithScroll = document.body.scrollHeight;
//     } else {
//         // works in Explorer 6 Strict, Mozilla (not FF) and Safari
//         yWithScroll = document.body.offsetHeight;
//     }
//     return yWithScroll-innerh;
// };
//
//
//
// var isInViewport = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };
//
//
//
//
//
//
// $(window).scroll(function(){
//
//
//   var task1 = document.querySelector("#task-1");
//   while(task1===true){
//     console.log("Here!");
//   };
//   var scrollMaxY = getScrollMaxY();
//   var scrollMaxX = document.body.clientWidth;
//
//
//   let scrollYnormal = $(window).scrollTop() /  scrollMaxY;
//   let scrollNormal25 = ($(window).scrollTop() - (0.25901815578547976*scrollMaxY)) / (.13*scrollMaxY);
//   let moveX = scrollNormal25 * scrollMaxX;
//
//
//
//   $(".info").html($(window).scrollTop() +"/"+scrollMaxY+"="+scrollYnormal)
//
//   $(".info2").html( scrollNormal25 + "*" + scrollMaxX + "=" +moveX)
//
//
//    if (scrollNormal25>0 && scrollNormal25<1){
//       $("#task-1").css({
//     "left": moveX})
//    }
// });
