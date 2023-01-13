$(document).ready(function () {
    $('.food-list').slick(
        {
            infinite: true, // true: lặp lại, false: không lặp lại
            slidesToShow: 4, // số lượng ảnh hiển thị
            slidesToScroll: 1, // số lượng ảnh cuộn
        }
    );
});