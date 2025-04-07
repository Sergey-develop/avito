window.addEventListener('scroll', function() {
    var header = document.getElementById('navbar');
    if (window.scrollY > 130) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});


function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    const offset = -130; // Отступ, можно настроить под свои нужды
    const targetPosition = targetElement.offsetTop + offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    $('.navbar-collapse').collapse('hide');
}

function scrollToTargetWork() {
    scrollToTarget('work');
}

function scrollToTargetReviews() {
    scrollToTarget('reviews');
}

function scrollToTargetTariffs() {
    scrollToTarget('tariffs');
}

function scrollToTargetFaq() {
    scrollToTarget('faq');
}

function scrollToTargetUs() {
    scrollToTarget('us');
}

// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//


function openOrCloseForm(formContainerId) {
    const formContainer = document.getElementById(formContainerId);
    const overlay = document.getElementById('overlay');
    $('.navbar-collapse').collapse('hide');

    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        formContainer.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailRegex.test(email);
}

function submitFormReviews(event) {
    event.preventDefault();

    const emailInput = document.getElementById('reviews-email-input');
    const phoneInput = document.getElementById('reviews-phone-input');
    const errorTextEmail = document.getElementById('reviews-error-text-email');
    const errorText = document.getElementById('reviews-error-text');
    const successMessage = document.querySelector('.reviews-success-message');
    const agreement = document.querySelector('.reviews-agreement');

    let hasError = false;

    if (phoneInput.value.replace(/\D/g, '').length < 10) {
        errorText.textContent = 'Пожалуйста, введите номер телефона';
        errorText.style.display = 'block';
        hasError = true;
    } else {
        errorText.style.display = 'none';
    }

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        errorTextEmail.textContent = 'Пожалуйста, введите корректный e-mail';
        errorTextEmail.style.display = 'block';
        hasError = true;
    } else {
        errorTextEmail.style.display = 'none';
    }

    if (hasError) {
        return false;
    }



    successMessage.style.display = 'block';
    agreement.style.display = 'none';

    emailInput.value = '';
    phoneInput.value = '';
}

function submitFormTariff(event) {
    event.preventDefault();

    // Получение элементов формы по их ID
    const emailInput = document.getElementById('tariff-email-input');
    const phoneInput = document.getElementById('tariff-phone-input');
    const errorTextEmail = document.getElementById('tariff-error-text-email');
    const errorText = document.getElementById('tariff-error-text');
    const successMessage = document.querySelector('.tariff-success-message');
    const agreement = document.querySelector('.tariff-agreement');

    // Валидация формы
    let hasError = false;

    if (phoneInput.value.replace(/\D/g, '').length < 10) {
        errorText.textContent = 'Пожалуйста, введите номер телефона';
        errorText.style.display = 'block';
        hasError = true;
    } else {
        errorText.style.display = 'none';
    }

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        errorTextEmail.textContent = 'Пожалуйста, введите корректный e-mail';
        errorTextEmail.style.display = 'block';
        hasError = true;
    } else {
        errorTextEmail.style.display = 'none';
    }

    if (hasError) {
        return false;
    }


    successMessage.style.display = 'block';
    agreement.style.display = 'none';

    emailInput.value = '';
    phoneInput.value = '';
}

function submitFormHeader(event) {
    event.preventDefault();

    // Получение элементов формы по их ID
    const emailInput = document.getElementById('header-email-input');
    const phoneInput = document.getElementById('header-phone-input');
    const errorTextEmail = document.getElementById('header-error-text-email');
    const errorText = document.getElementById('header-error-text');
    const successMessage = document.querySelector('.header-success-message');
    const agreement = document.querySelector('.header-agreement');

    // Валидация формы
    let hasError = false;

    if (phoneInput.value.replace(/\D/g, '').length < 10) {
        errorText.textContent = 'Пожалуйста, введите номер телефона';
        errorText.style.display = 'block';
        hasError = true;
    } else {
        errorText.style.display = 'none';
    }

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        errorTextEmail.textContent = 'Пожалуйста, введите корректный e-mail';
        errorTextEmail.style.display = 'block';
        hasError = true;
    } else {
        errorTextEmail.style.display = 'none';
    }

    if (hasError) {
        return false;
    }

    // Ваш код для отправки данных на сервер
    // Здесь можно использовать AJAX-запрос или другой способ отправки данных

    // Очистка полей и отображение сообщения об успешной отправке
    successMessage.style.display = 'block';
    agreement.style.display = 'none';

    emailInput.value = '';
    phoneInput.value = '';
}

function submitFormPreview(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email-input-preview');
    const errorTextEmail = document.getElementById('preview-error-text-email');
    const successMessage = document.querySelector('.preview-success-message');

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        errorTextEmail.textContent = 'Пожалуйста, введите корректный e-mail';
        errorTextEmail.style.display = 'block';
        return;
    }
    errorTextEmail.style.display = 'none';
    emailInput.value = '';
    successMessage.style.display = 'block';
}

function submitForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const errorTextEmail = document.getElementById('error-text-email');
    const errorText = document.getElementById('error-text');
    const successMessage = document.querySelector('.success-message');

    if (phoneInput.value.replace(/\D/g, '').length < 10) {
        errorText.textContent = 'Пожалуйста, введите номер телефона';
        errorText.style.display = 'block';
        return;
    } else {
        errorText.style.display = 'none';
    }

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        errorTextEmail.textContent = 'Пожалуйста, введите корректный e-mail';
        errorTextEmail.style.display = 'block';
        return;
    } else {
        errorTextEmail.style.display = 'none';
    }

    errorText.style.display = 'none';
    errorTextEmail.style.display = 'none';

    emailInput.value = '';
    phoneInput.value = '';
    successMessage.style.display = 'block';
}

const overlay = document.getElementById('overlay');
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        openOrCloseForm()
    }
});


// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//

function updatePriceStart() {
    const select = document.getElementById('durationSelectStart');
    const priceElement = document.getElementById('priceStart');
    const selectedValue = parseInt(select.value);

    let price = (selectedValue === 1) ? 0 : 700;
    priceElement.textContent = price;
}

function updatePriceMedium() {
    const select = document.getElementById('durationSelectMedium');
    const priceElement = document.getElementById('priceMedium');
    const selectedValue = parseInt(select.value);

    let price = (selectedValue === 1) ? 200 : 1300;
    priceElement.textContent = price;
}

function updatePriceHigh() {
    const select = document.getElementById('durationSelectHigh');
    const priceElement = document.getElementById('priceHigh');
    const selectedValue = parseInt(select.value);


    let price = (selectedValue === 1) ? 300 : 2000;
    priceElement.textContent = price;
}

updatePriceStart();
updatePriceMedium();
updatePriceHigh();

// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//

function initSlider() {
    $(".tariffs-slider").slick({
        dots: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
}
function initSecondSlider() {
    $(".logos-slider").slick({
        dots: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });
}
function initThirdSlider() {
    $(".reviews-slider").slick({
        dots: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
}
function initFourSlider() {
    $(".us-slider").slick({
        dots: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
}

$(document).on('ready', function () {
    initSlider();
    initSecondSlider();
    initThirdSlider();
    initFourSlider();

    if ($(window).width() < 992) {
        $('.reviews-slider').slick('slickRemove', 4);
        $('.us-slider').slick('slickRemove', 0);
    }

    $('.show-more-button').on('click', function () {
        var additionalContent = $(this).prev('.additional-content');
        var reviewItem = $(this).closest('.reviews-item-3');
        var reviewItem4 = $(this).closest('.reviews-item-4');


        additionalContent.slideToggle(function () {

            var button = $(this).siblings('.show-more-button');


            if ($(this).is(':visible')) {
                reviewItem.css('height', 'auto');
                reviewItem.css('max-height', 'none');
                reviewItem4.css('max-height', 'none');
                button.text('Свернуть отзыв');
            } else {
                reviewItem.css('max-height', '396px');
                reviewItem4.css('max-height', '396px');
                button.text('Читать еще');
            }
        });
    });

})

// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------//



$(document).ready(function () {
    function setReviewItemHeight() {
        var windowWidth = window.innerWidth;
        var desiredHeight = 396;


        $('.reviews-container .review-item').each(function () {
            var $item = $(this);
            if (windowWidth < 576) {
                $item.css('height', desiredHeight + 'px');
            } else {
                $item.css('height', 'auto');
            }
        });
    }


    setReviewItemHeight();
    $(window).on('resize', function () {
        setReviewItemHeight();
    });

    $('#phone-input').inputmask({
        mask: '+7 999 999 99 - 99',
        placeholder: ' ',
        showMaskOnHover: false
    });

    $('#header-phone-input').inputmask({
        mask: '+7 999 999 99 - 99',
        placeholder: ' ',
        showMaskOnHover: false
    });

    $('#tariff-phone-input').inputmask({
        mask: '+7 999 999 99 - 99',
        placeholder: ' ',
        showMaskOnHover: false
    });

    $('#reviews-phone-input').inputmask({
        mask: '+7 999 999 99 - 99',
        placeholder: ' ',
        showMaskOnHover: false
    });
});

