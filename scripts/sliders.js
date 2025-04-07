// function initSlider() {
//     $(".tariffs-slider").slick({
//         dots: true,
//         infinite: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 9999,
//                 settings: "unslick"
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             },
//         ]
//     });
// }
//
// function initSecondSlider() {
//     $(".logos-slider").slick({
//         dots: true,
//         infinite: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 9999,
//                 settings: "unslick"
//             },
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//         ]
//     });
// }
//
// function initThirdSlider() {
//     $(".reviews-slider").slick({
//         dots: true,
//         infinite: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 9999,
//                 settings: "unslick"
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             },
//         ]
//     });
// }
//
// function initFourSlider() {
//     $(".us-slider").slick({
//         dots: true,
//         infinite: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 9999,
//                 settings: "unslick"
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             },
//         ]
//     });
// }
//
//
// // if ($(window).width() < 640) {}
//
// // $(window).resize(function() {
// //     if ($(window).width() < 1200) {
// //         $('.reviews-slider').slick('slickRemove', 4);
// //         $('.us').slick('slickRemove', 0);
// //     }
// // })
//
//
// $(document).on('ready', function () {
//
//     initSlider();
//     initSecondSlider();
//     initThirdSlider();
//     initFourSlider();
//
//     // if ($(window).width() < 992) {
//     //     $('.reviews-slider').slick('slickRemove', 4);
//     //     $('.us-slider').slick('slickRemove', 0);
//     // }
//
//
//     // if (window.matchMedia("(min-width: 769px)").matches) {
//     //     var $slideSmCount = $(".item_sm").length;
//     //
//     //     for (var i = 0; i < $slideSmCount; i++) {
//     //         $(".us").slick("slickRemove", false);
//     //     }
//     // }
//
//
//     $('.show-more-button').on('click', function () {
//         var additionalContent = $(this).prev('.additional-content');
//         var reviewItem = $(this).closest('.reviews-item-3');
//         var reviewItem4 = $(this).closest('.reviews-item-4');
//
//
//         additionalContent.slideToggle(function () {
//
//             var button = $(this).siblings('.show-more-button');
//
//
//             if ($(this).is(':visible')) {
//                 reviewItem.css('height', 'auto');
//                 reviewItem.css('max-height', 'none');
//                 reviewItem4.css('max-height', 'none');
//                 button.text('Свернуть отзыв');
//             } else {
//                 reviewItem.css('max-height', '366px');
//                 reviewItem4.css('max-height', '366px');
//                 button.text('Читать еще');
//             }
//         });
//     });
//
// })
//
