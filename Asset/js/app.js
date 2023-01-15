$(document).ready(function () {
    $('.food-list').slick(
        {
            infinite: false, // true: lặp lại, false: không lặp lại
            slidesToShow: 4, // số lượng ảnh hiển thị
            slidesToScroll: 1, // số lượng ảnh cuộn
            prevArrow: // nút prev
                `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
            nextArrow: // nút next
                `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        }
    );
});