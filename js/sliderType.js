/* 슬라이드 숫자 */
let slideNum = 0;                                       

/* 슬라이드 이미지 갯수 */
let slideImgLength = $('.slider__img').length;          

/* 슬라이드 너비 세팅 */
$('.slider').css('width', slideImgLength * 100 + "vw") 


/* 슬라이더 케러셀 효과 */
/* 좌측 화살표 */
$('.left').on('click', function(e) {
    if (slideNum == 0) {
        slideNum = slideImgLength - 1;
    } else {
        slideNum--;
    }
    $('.slider__img').css('transform', 'translateX(-'+ slideNum +'00vw)')
    $('.dot').removeClass('active');
    $('.dot').eq(slideNum).addClass('active');
})

/* 우측 화살표 */
$('.right').on('click', function(e) {
    slideNum++
    if(slideNum > slideImgLength - 1) {
        slideNum = 0;
    }
    
    $('.slider__img').css('transform', 'translateX(-'+ slideNum +'00vw)')
    $('.dot').removeClass('active');
    $('.dot').eq(slideNum).addClass('active');
    console.log(slideNum);
    
})

/* 슬라이드 동그라미 클릭시 효과 */
$('.dot').on('click', function(e) {
    e.preventDefault();
    $('.dot').removeClass('active');
    $(this).addClass('active')

    slideNum = $(this).index();
    console.log(slideNum);
    $('.slider__img').css('transform', 'translateX(-'+ slideNum +'00vw)')

})