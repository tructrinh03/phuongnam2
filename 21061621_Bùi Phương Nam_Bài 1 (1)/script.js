// Lấy ra khung container
const container = document.querySelector('.container');

// Hàm để thay đổi màu của khung container
function flashEffect() {
    // Tạo một mảng chứa các màu có thể sử dụng
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    // Lấy ra một màu ngẫu nhiên từ mảng colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Thay đổi màu của khung container thành màu ngẫu nhiên
    container.style.borderColor = randomColor;
}

// Lấy tất cả các hình ảnh trong class "zoomable"
const images = document.querySelectorAll('.zoomable');

// Lặp qua từng hình ảnh
images.forEach(image => {
    // Thêm sự kiện mouseenter khi di chuột vào
    image.addEventListener('mouseenter', () => {
        // Thay đổi kích thước của hình ảnh khi rê chuột vào
        image.style.transform = 'scale(1.1)';
        // Thêm hiệu ứng transition để mượt mà hơn
        image.style.transition = 'transform 0.3s ease';
    });

    // Thêm sự kiện mouseleave khi rời chuột ra
    image.addEventListener('mouseleave', () => {
        // Trở lại kích thước ban đầu khi rời chuột ra
        image.style.transform = 'scale(1)';
    });
});

// Gọi hàm flashEffect() mỗi 500ms (0.5 giây)
setInterval(flashEffect, 500);

// Hiệu ứng nhấp nháy cho tiêu đề
const header = document.querySelector('header h1');
setInterval(function() {
    header.classList.toggle('flash');
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    var captions = document.querySelectorAll(".image-caption");

    captions.forEach(function(caption) {
        caption.addEventListener("click", function() {
            // Thêm hoặc loại bỏ lớp "show" để hiển thị hoặc ẩn văn bản
            caption.classList.toggle("show");
        });
    });
});
