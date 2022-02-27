const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색')
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','')
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle( function() {
  if (scrollY > 500) { //배지 숨기기 //badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    })
  } else { // 배지 보이기 //badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    })
  }
}, 300));
// _.throttle(함수, 시간 == ms) 


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션{});
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 , 1.4 , 2.1 , 2.8
    opacity: 1,
  })
});