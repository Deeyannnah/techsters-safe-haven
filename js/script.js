window.onload = () => {
    AOS.init();

    const swiper = new Swiper('.swiper', {
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        mousewheel: true,
    });
}
