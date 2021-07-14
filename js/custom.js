window.onload = function() {
(function($) {
  // custom cursor
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".pointer-hover"); //메뉴 링크
  //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("pointer");
      mouseCursor.style.zIndex = "9000";
      link.classList.add("pointer-hover");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("pointer");
      mouseCursor.style.zIndex = "9000";
      link.classList.remove("pointer-hover");
    });
  });

  // logo-home
  const homeBtn = document.getElementsByClassName("logo-home");
  const homeBtnHov = document.getElementsByClassName("logo-home-hover");
  
  homeBtn[0].style.display = "block";
  homeBtnHov[0].style.display = "block";

  // menu-btn animation
  const menuBar = $(".menu-btn")
  
  menuBar.each(function() {
    let $this = $(this);

    $this.on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
    });
  });

  // menu
  $("#header .menu-btn").click(function() {
    const gnb = $(".menu");
    if(gnb.css("display") == "none") {
      gnb.show();
      $(".left-img, .right-menu").animate({left: 0}, 1000);
    }else {
      $(".left-img, .right-menu").animate({left: 1000}, 1000);
      gnb.fadeOut();
    } 
  });

  // dot(navigation)
  // var dotColor = $("a.dot");

  // dotColor.click(function() {
  //   dotColor.removeClass("on");
  //   $(this).addClass("on");
  // });

  // var scroll = new Scroll();

  // function Scroll() {
  //   this.currentScroll = 0;
  //   this.location = [];

  //   this.start();
  // }

  // Scroll.prototype.init = function() {
  //   for(var i = 0; i < this.scroll.length; i++) {
  //     this.location[i] = this.$(".page").eq(i).offset().top;
  //   }
  // }

  // Scroll.prototype.initEvent = function() {
  //   var objThis = this;

  //   objThis.dotColor.click(function() {
  //     var index = $(this).index();
  //     objThis.html.animate({"scrollTop": objThis.location[index]});
  //   });
  // }

  // $(window).scroll(function() {
  //   objThis.currentScroll = $(window).scrollTop();

  // });
  
  // business-area
  // businessArea();
  // function businessArea(){
  //   var el = $("span.business");
  //   var texts = ["Branding", "Viral Marketing", "Development", "Design", "Display"];
  //   var count = texts.length - 1;
  //   var i = 1;
    
  //   if(el.length <= 0){
  //     return;
  //   }
  
  //   (function enter() {
  //     titTimer = setTimeout(function(){
  //       el.html(texts[i]);
  //       i++;
  //       enter()
  //       if(i > count){
  //         i=0;
  //         return;
  //       }
  //     }, 1500);
  //   })();
  // }

  // scroll animation
  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll(".sa");

  const saFunc = function() {
    for (let element of saElementList) {
      if (!element.classList.contains("show")) {
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.add("show");
        }
      }
    }
  }

  window.addEventListener("load", saFunc);
  window.addEventListener("scroll", saFunc);
})(jQuery);
}