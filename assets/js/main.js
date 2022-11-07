

$(window).scroll(function(){

  var scrollMaxY = window.scrollMaxY;
  var scrollMaxX = document.body.clientWidth;


  let scrollYnormal = $(window).scrollTop() /  scrollMaxY;
  let scrollNormal25 = ($(window).scrollTop() - (0.25901815578547976*scrollMaxY)) / (.13*scrollMaxY);
  let moveX = scrollNormal25 * scrollMaxX;



  $(".info").html($(window).scrollTop() +"/"+scrollMaxY+"="+scrollYnormal)

  $(".info2").html( scrollNormal25 + "*" + scrollMaxX + "=" +moveX)


   if (scrollNormal25>0 && scrollNormal25<1){
      $("#task-1").css({
    "left": moveX})
   }
});
