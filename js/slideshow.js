let slideIndex = 0;
let preIndex = 0;
const slides = $(".slider-item");
const dots = $(".dot");
const totalSlides = slides.length;
const slideBase = $("#slider-base")[0];

//　インディケーター更新
function updateIndicators(index) {
    dots.removeClass("active");
    $(dots[index]).addClass("active");
}

//　スライドの位置設定
function showSlides(index) { 
    const offsetX = slideBase.getBoundingClientRect().width * 0.5;
    const baseRect = slideBase.getBoundingClientRect();
    const stdX = baseRect.left + baseRect.width / 2;
    const stdY = baseRect.top + baseRect.height / 2;

    slides.removeClass("active");
    slides.css("z-index", "1");
    
    const preprevIndex = (index - 2 + totalSlides) % totalSlides;
    const prevIndex = (index - 1 + totalSlides) % totalSlides;
    const nextIndex = (index + 1) % totalSlides;
    const nexnextIndex = (index + 2) % totalSlides;

    gsap.to(slides[preprevIndex], { duration: 0.35, x: stdX-offsetX*2, y: stdY, opacity: 0, scale: 0.5 });
    gsap.to(slides[prevIndex], { duration: 0.35, x: stdX-offsetX, y: stdY, opacity: 0.5, scale: 1 });
    gsap.to(slides[nextIndex], { duration: 0.35, x: stdX+offsetX, y: stdY, opacity: 0.5, scale: 1 });
    gsap.to(slides[nexnextIndex], { duration: 0.35, x: stdX+offsetX*2, y: stdY, opacity: 0, scale: 0.5 });
    gsap.to(slides[index], { duration: 0.35, x: stdX, y: stdY, opacity: 1, scale: 1.8 });
    
    $(slides[index]).addClass("active");
    updateIndicators(index);
    console.log(preprevIndex, stdX-offsetX*2 , " / ", prevIndex, stdX-offsetX, "/", index, stdX);
}

//　スライドをn個ずらして更新
function changeSlide(n) {
    preIndex = slideIndex;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides(slideIndex);
}

//　スライドの位置指定で更新
function currentSlide(n) {
    preIndex = slideIndex;
    slideIndex = n;
    showSlides(slideIndex);
}

$(document).ready(function(){
    $(".left").click(function() {
        changeSlide(-1);
    });
    $(".right").click(function() {
        changeSlide(1);
    });
    $(".dot0").click(function() {
        currentSlide(0);
    });
    $(".dot1").click(function() {
        currentSlide(1);
    });
    $(".dot2").click(function() {
        currentSlide(2);
    });
    $(".dot3").click(function() {
        currentSlide(3);
    });
    $(".dot4").click(function() {
        currentSlide(4);
    });

    showSlides(slideIndex);
});