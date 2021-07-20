window.onload = function() {
(function($) {
  // custom cursor
  let mouseCursor = document.querySelector('.cursor');
  let navLinks = document.querySelectorAll('.pointer-hover'); //메뉴 링크
  //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
  window.addEventListener('scroll', cursor);
  window.addEventListener('mousemove', cursor);
  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function cursor(e) {
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.top = e.pageY - scrollY + 'px';
  }

  navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      mouseCursor.classList.add('pointer');
      mouseCursor.style.zIndex = '9000';
      link.classList.add('pointer-hover');
    });
    link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('pointer');
      mouseCursor.style.zIndex = '9000';
      link.classList.remove('pointer-hover');
    });
  });

  // logo-home
  const homeBtn = document.getElementsByClassName('logo-home');
  const homeBtnHov = document.getElementsByClassName('logo-home-hover');
  
  homeBtn[0].style.display = 'block';
  homeBtnHov[0].style.display = 'block';

  // menu-btn animation
  const menuBar = $('.menu-btn')
  
  menuBar.each(function() {
    let $this = $(this);

    $this.on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
  });

  // menu
  $('#header .menu-btn').click(function() {
    const gnb = $('.menu');
    if(gnb.css('display') == 'none') {
      gnb.show();
      $('.left-img, .right-menu').animate({left: 0}, 1000);
    }else {
      $('.left-img, .right-menu').animate({left: 1000}, 1000);
      gnb.fadeOut();
    } 
  });

  // scroll animation
  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll('.sa');

  const saFunc = function() {
    for (let element of saElementList) {
      if (!element.classList.contains('show')) {
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.add('show');
        }
      }
    }
  }

  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);

  // when submit, alert
  $('ul.textarea li input').click(function() {
    alert("상담문의가 담당자에게 전송되었습니다. \n빠른 시일 내로 답변드리겠습니다. 감사합니다.")
  });

})(jQuery);
}