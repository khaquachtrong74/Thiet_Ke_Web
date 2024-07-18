const zoomableElement = document.getElementById('zoomableElement');

zoomableElement.addEventListener('click', () => {
    if (isZoomed) {
        // Thu nhỏ lại phần tử nếu đã được phóng to
        zoomableElement.style.width = '100px'; // Kích thước ban đầu của phần tử
        zoomableElement.style.height = '100px'; // Kích thước ban đầu của phần tử
        isZoomed = false; // Cập nhật lại trạng thái
    } else {
        // Phóng to phần tử nếu chưa được phóng to
        zoomableElement.style.width = '80vw'; // Phóng to chiều rộng của màn hình
        zoomableElement.style.height = '80vh'; // Phóng to chiều cao của màn hình

        isZoomed = true; // Cập nhật lại trạng thái
    }
});
const dichchuyenElement = document.getElementById('dichchuyenElement');
let isMoved = false;

dichchuyenElement.addEventListener('click', () => {
    if (!isMoved) {
        // Di chuyển phần tử đến vị trí mới
        dichchuyenElement.style.top = '80vh'; // Di chuyển phần tử xuống dưới cùng của màn hình
        dichchuyenElement.style.left = '80vw'; // Di chuyển phần tử sang phải của màn hình
        isMoved = true; // Đã di chuyển, cập nhật trạng thái
    } else {
        // Đặt lại vị trí ban đầu của phần tử
        dichchuyenElement.style.top = '20vw'; // Vị trí top ban đầu của phần tử
        dichchuyenElement.style.left = '50vh'; // Vị trí left ban đầu của phần tử
        isMoved = false; // Chưa di chuyển, cập nhật trạng thái
    }
});


let isZoomed = false; // Biến trạng thái để kiểm tra xem phần tử đã được phóng to hay chưa

function myFunction() {
    alert("World: I have a boyfriends");
}
function check() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    var correctemail = "khaquachtrong74@gmail.com";
    var correctpassword = "123456";

    if (email == correctemail && password == correctpassword) {
        // Hiển thị thông báo với nút
        let alertMsg = document.createElement("div");
        alertMsg.innerHTML = "<div class ='alertMsg'><p>Đăng nhập thành công!</p><button onclick='redirectToAnotherPage()'>OK</button></div>";
        document.body.appendChild(alertMsg);
    }
    else {
        alert("Email hoặc mật khẩu không chính xác."); // Hiển thị thông báo khi đăng nhập không thành công
        return false;
    }
}

function redirectToAnotherPage() {
    window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"; // Chuyển hướng sang trang khác
}


// khaquachtrong74@gmail.com
