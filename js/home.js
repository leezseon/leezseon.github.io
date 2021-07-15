window.onload = function() {
  
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
  const homeBtnHov = document.getElementsByClassName('logo-home-hover')

  window.onscroll = function() {
    scrollFunction();
  }; 
  function scrollFunction() {
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      homeBtn[0].style.display = 'block';
      homeBtnHov[0].style.display = 'block';
    }else {
      homeBtn[0].style.display ='none';
      homeBtnHov[0].style.display ='none';
    }
  }

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

  // when click scroll, page scroll down
  const btn = document.querySelectorAll('.pre-about p span, .pre-about p');
  const target = document.getElementById('about-us');
  const targetTop = target.getBoundingClientRect().height;
  
  btn.forEach(_btn =>{
    _btn.addEventListener('click', (e)=>{
      e.preventDefault();    
      $('html, body').animate({
        scrollTop: targetTop, behavior: 'smooth'
      });
    });
  });
    
  // main page buisiness intro - modal
  const enter = document.getElementsByClassName('enter');
  const modalWrap = document.getElementsByClassName('modal-wrap');
  const exit = document.getElementsByClassName('exit');
  const modalLayer = document.getElementsByClassName('modal-layer');
  const funcs = [];

  function modal(num) {
    return function() {
      enter[num].onclick = function() {
        modalWrap[num].style.display = 'block';
      }
      exit[num].onclick = function() {
        modalWrap[num].style.display = 'none';
      }
      modalLayer[num].onclick = function() {
        modalWrap[num].style.display = 'none';
      }
    }
  }
  for(let i = 0; i < enter.length; i++) {
    funcs[i] = modal(i);
  }
  for(let j = 0; j < enter.length; j++) {
    funcs[j]();
  }

  // main page buisines area - hover
  const subject = document.querySelectorAll('li.enter a');
  const changeImg = document.getElementsByClassName('img-box-left');
   
  for(let i = 0; i < subject.length; i++) {
    $(subject[i]).mouseover(function() {
      $(changeImg).removeClass('hovered');
      $(changeImg[i]).addClass('hovered');
    });
  }

  // setInterval(function() {  
  //   $('.about-us-mobile ul.subject').stop().animate({'margin-left':'-100%'},2000,
  //     function() {
  //       $('.about-us-mobile ul.subject li').first().appendTo('.about-us-mobile ul.subject');
  //       $('.about-us-mobile ul.subject').css({'margin-left':'0px'});
  //     });
  // },2500);
}