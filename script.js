$(document).ready(function(){
    let slideIndex = 0;
    const slides = $(".slides");
    const dots = $(".dot");
    const totalSlides = slides.length;
    function updateIndicators(index) {
        dots.removeClass("active");
        $(dots[index]).addClass("active");
    }
    function showSlides(index) {
        slides.removeClass("active");
        slides.css("z-index", "1");
        const prevIndex = (index - 1 + totalSlides) % totalSlides;
        const nextIndex = (index + 1) % totalSlides;
        gsap.to(slides, { duration: 0.5, x: '150%', opacity: 0.5, scale: 0.8 });
        gsap.to(slides[prevIndex], { duration: 0.5, x: '-150%', opacity: 0.5, scale: 0.8 });
        gsap.to(slides[nextIndex], { duration: 0.5, x: '150%', opacity: 0.5, scale: 0.8 });
        gsap.to(slides[index], { duration: 0.5, x: '0%', opacity: 1, scale: 1 });
        $(slides[index]).addClass("active");
        updateIndicators(index);
    }
    function changeSlide(n) {
        slideIndex = (slideIndex + n + totalSlides) % totalSlides;
        showSlides(slideIndex);
    }
    function currentSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
    }
    $(".prev").click(function() {
        changeSlide(-1);
    });
    $(".next").click(function() {
        changeSlide(1);
    });
    dots.each(function(index) {
        $(this).click(function() {
            currentSlide(index);
        });
    });
    showSlides(slideIndex);
});