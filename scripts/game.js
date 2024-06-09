document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 3000; // Інтервал зміни слайдів (в мілісекундах)
    let slideTimer;

    // Функція для відображення наступного слайда
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Функція для відображення конкретного слайда
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Запуск автоматичної зміни слайдів через певний інтервал часу
    function startSlideTimer() {
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    // Зупинка автоматичної зміни слайдів
    function stopSlideTimer() {
        clearInterval(slideTimer);
    }

    // Розпочати автоматичну зміну слайдів
    startSlideTimer();

    // Ви можете додати обробники подій для стрілок вліво/вправо для керування каруселлю вручну, якщо бажаєте

    // Приклад обробника подій для кнопки вперед
    // document.querySelector('.next').addEventListener('click', function() {
    //     stopSlideTimer();
    //     nextSlide();
    //     startSlideTimer();
    // });

    // Приклад обробника подій для кнопки назад
    // document.querySelector('.prev').addEventListener('click', function() {
    //     stopSlideTimer();
    //     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //     showSlide(currentSlide);
    //     startSlideTimer();
    // });
});
