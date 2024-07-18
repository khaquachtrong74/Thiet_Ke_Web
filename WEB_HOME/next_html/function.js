function show_account() {
    taikhoan = document.getElementById("Taikhoan");
    matkhau = document.getElementsByName("Matkhau");

    alert("Ha ha bạn đã bị lừa tôi đã biết mật khẩu của bạn XĐ");
    let again = document.createElement('div')
    again.innerHTML = "<button type='text' color='red' onclick='haha()'>Nhấp vào đây để tiếp tục.</button>"
    document.body.appendChild(again);

}
function haha() {
    alert("haha bạn lại bị lừa")

}

const zoomableElement = document.getElementById('zoomableElement');
let isZoomed = false;
zoomableElement.addEventListener('click', () => {
    if (isZoomed) {
        // Thu nhỏ lại phần tử nếu đã được phóng to
        zoomableElement.style.width = '100px'; // Kích thước ban đầu của phần tử
        zoomableElement.style.height = '100px'; // Kích thước ban đầu của phần tử
        isZoomed = false; // Cập nhật lại trạng thái
    } else {
        // Phóng to phần tử nếu chưa được phóng to
        zoomableElement.style.width = '300px'; // Phóng to chiều rộng của màn hình
        zoomableElement.style.height = '300px'; // Phóng to chiều cao của màn hình
        zoomableElement.style.borderRadius = '25ch';
        isZoomed = true; // Cập nhật lại trạng thái
    }
});