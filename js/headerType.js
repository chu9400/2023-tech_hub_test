

/* 현재 브라우저의 크기가 pc 사이지인지 모바일 사이즈인지 */
let mobileState = 0;
function checkWindowSize() {
    if (window.innerWidth <= 768) {
        mobileState = 1;
    } else {
        mobileState = 0;        
    }
}

checkWindowSize();
window.addEventListener('resize', checkWindowSize);

/* sub__menu 펼치기&접기 */
$('.header__wrap').on('mouseover', function() {
    if(mobileState == 0) {
        $('.list__sub').addClass('on__sub__menu');
        $('.sub__bg').addClass('on__sub__menu');
    }
    
})

$('.header__wrap').on('mouseleave', function() {
    if(mobileState == 0) {
        $('.list__sub').removeClass('on__sub__menu');
        $('.sub__bg').removeClass('on__sub__menu');
    }
})


/* menu line 나타나기 */
$('.item__menu').on('mouseover', function() {
    if(mobileState == 0) {
        $(this).find('.txt__menu').addClass('on__line');
    }
})

$('.item__menu').on('mouseleave', function() {
    if(mobileState == 0) {
        $(this).find('.txt__menu').removeClass('on__line');
    }
})


/* modal 효과 */

/* modal창 나타나기 */
$('.member').on('click', function() {
    $('.modal__bg').addClass('modal__bg__on');
})

/* 닫기 버튼 효과 */
$('.cloes').on('click', function(e) {
    e.preventDefault();
    $('.modal__bg').removeClass('modal__bg__on');
    $('.check__icon').removeClass('check__icon__on');  
    $('.help__sub').removeClass('help__sub__on'); 
})


/* 로그인 버튼 클릭시 페이지 이동 방지 */
$('.big__login__link').on('click', function(e) {
    e.preventDefault();
    alert('준비 중입니다.');
})


/* modal창의 도움말 클릭시 나타나기 */
$('.check__label').on('click', function() {
    $('.check__icon').toggleClass('check__icon__on');  
})
$('.help__icon').on('click', function() {
    $('.help__sub').toggleClass('help__sub__on');  
})



/* 모바일 */
/* 모바일 메뉴 클릭시 서브메뉴 나타남 */
$('.link__menu').on('click', function(e) {
    e.preventDefault();
    $(this).siblings('.list__sub').toggleClass('on__sub__menu');
})

/* 모바일 버튼 클릭 */
$('.btn__menu').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('hide-scrollbar'); /* 스크롤 없애기 */
    $('.menu').toggleClass('on__mobile__menu') /* 서브 메뉴 나타나기 */
    $('.icon__menu').toggleClass('close__icon__menu') /* 메뉴 배경 바꾸기 */

})