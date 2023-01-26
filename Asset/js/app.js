// Slick slider 
$(document).ready(function () {
   $('.intro-list').slick(
      {
         infinite: false, // true: lặp lại, false: không lặp lại
         slidesToShow: 4, // số lượng ảnh hiển thị
         slidesToScroll: 1, // số lượng ảnh cuộn
         prevArrow: // nút prev
            `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
         nextArrow: // nút next
            `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
         responsive: [ // thay đổi số lượng ảnh hiển thị theo kích thước màn hình
            {
               breakpoint: 1026,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 610,
               settings: {
                  arrows: false,
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 530,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
               }
            },
         ],
      }
   );
});

// Menu toggle
// Sự kiện domcontentloaded dùng để chạy code ngay cả khi chưa load hết html
document.addEventListener("DOMContentLoaded", function () {
   // Tạo biến lưu trữ các thẻ html cần sử dụng
   const menuOpen = document.querySelector(".menu-toggle");
   const menuClose = document.querySelector(".navigation-close");
   const nav = document.querySelector(".navigation");
   // Nếu không tìm thấy thẻ html trên thì return
   if (!menuOpen || !menuClose || !nav) return;
   // Thêm class active khi click vào nút toggle
   menuOpen.addEventListener("click", function () {
      nav.classList.add("active");
   });
   // Xoá class active khi click vào nút close
   menuClose.addEventListener("click", function () {
      nav.classList.remove("active");
   });
   // Xoá class active khi click ra bên ngoài navigation
   document.addEventListener("click", function (e) {
      // Nếu click vào menu hoặc nút toggle thì xoá class active
      if (!nav.contains(e.target) && !e.target.matches(".menu-toggle")) {
         nav.classList.remove("active");
      }
   });
});

// Custom Cursor
new kursor({
   type: 4,
   removeDefaultCursor: false,
   color: "#000",
})

// Animation on scroll
AOS.init({
   once: false,
});