// Slick slider 
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

// Menu toggle
// Sự kiện domcontentloaded dùng để chạy code ngây cả khi chưa load hết html
document.addEventListener("DOMContentLoaded", function () {
   // Tạo biến lưu trữ các thẻ html cần sử dụng
   const menuOpen = document.querySelector(".menu-toggle");
   const menuClose = document.querySelector(".navigation-close");
   const menu = document.querySelector(".navigation");
   // Nếu không tìm thấy thẻ html trên thì return
   if (!menuOpen || !menuClose || !menu) return;
   // Thêm class active khi click vào nút toggle
   menuOpen.addEventListener("click", function () {
      menu.classList.add("active");
   });
   // Xoá class active khi click vào nút close
   menuClose.addEventListener("click", function () {
      menu.classList.remove("active");
   });
   // Xoá class active khi click cả bên ngoài menu
   document.addEventListener("click", function (e) {
      // Nếu click vào menu hoặc nút toggle thì xoá class active
      if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
         menu.classList.remove("active");
      }
   });
});