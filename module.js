// cho load nội dung html từ file khác

export function load(num) {
    fetch(`../Find_job/noidung/noidung${num}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(`noidung${num}`).innerHTML = data;
        })
        .catch(error => console.error('Có lỗi xảy ra:', error));
    return true;
}
// Cho quảng cáo ở homepage
export function broadCast() {
    const broadCast = document.getElementById('broadcast');
    const divBroadCast = broadCast.children[0];
    const buttons = Array.from(divBroadCast.children);

    buttons[0].setAttribute('style','color:blue')

    // Mảng chứa đường dẫn các hình ảnh
    const images = ["../../../images/b1.jpg", "../../../images/b2.jpg", "../../../images/b3.jpg"];

    // Biến để theo dõi chỉ số hình ảnh hiện tại
    let currentIndex = 0;

    // Hàm cập nhật hình nền và màu sắc nút
    function updateBackgroundImage(index) {
        broadCast.style.backgroundImage = `url("${images[index]}")`;
        buttons.forEach((btn, i) => {
            btn.style.backgroundColor = (i === index) ? 'grey' : '';
        });
    }

    // Thay đổi ảnh thông qua vị trí của nút
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            updateBackgroundImage(currentIndex);
        });
    });
    updateBackgroundImage(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackgroundImage(currentIndex); // Cập nhật hình nền và màu sắc nút
    }, 3000);
}
// js cho trang đánh giá tổng quan
export function dgct(fl) {

    if (fl) {
        setTimeout(() => {
            let divList = document.getElementById('list');
            let pTrangChu = document.getElementById('pTrangChur');
            let pDanhGia = document.getElementById('pDanhGia');
            let pNhanXet = document.getElementById('pNhanXet');
            let pCoHoi = document.getElementById('pCoHoi');
            let sectionComment = document.getElementById('comment');
            let listIcon = document.getElementById('list_icon');
            divList.style.position = 'fixed';
            divList.style.zIndex = 1000;
            pTrangChu.style.display = 'none';
            pDanhGia.style.display = 'none';
            pNhanXet.style.display = 'none';

            pCoHoi.style.display = 'none';

            listIcon.addEventListener('click', function (event) {
                event.stopPropagation(); // Ngăn sự kiện nhấp chuột tiếp tục lên tài liệu
                if (divList.style.width === '70px') {
                    divList.style.width = '270px';
                    setTimeout(() => {
                        pTrangChu.style.display = 'block';
                        pDanhGia.style.display = 'block';
                        pNhanXet.style.display = 'block';

                        pCoHoi.style.display = 'block';
                    }, 300);

                    // divList.style.transition = 'all 1s';

                    // sectionComment.setAttribute('style', 'opacity:.3; background-color:black')
                }
                else {
                    divList.style.width = '70px';
                    pTrangChu.style.display = 'none';
                    pDanhGia.style.display = 'none';
                    pNhanXet.style.display = 'none';

                    pCoHoi.style.display = 'none';
                    // sectionComment.setAttribute('style', 'opacity:1; background-color:none')

                }

            });

        }, 100);
        setTimeout(() => {


            let DoanhNghiep = document.getElementsByClassName('DoanhNghiep');
            for (let i of DoanhNghiep) {
                for (let k of i.children) {
                    k.setAttribute('style', `background-image: url("../../../images/${k.id}.jpg"); background-size:contain;border-radius:24px;`);
                }
            }

            // Dữ liệu cho biểu đồ
            const viecData = {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Dữ liệu theo năm',
                    data: [10.1, 8.5, 17.24, 5.7, 22.5, 15.8, 16],
                    borderColor: 'rgb(41, 52, 85)',
                    // color:'rgb(41, 52, 85)',
                    backgroundColor: 'rgb(41, 52, 85)',
                    tension: 0.1
                }]
            };
            const tienData = {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Dữ liệu theo năm',
                    color: 'black',
                    data: [7.8, 6.7, 2.3, 3.4, 5.6, 4.5, 5.3],
                    borderColor: 'black',
                    tension: 0.1
                }]
            }
            const kinhTeData = {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Dữ liệu theo năm',
                    color: 'black',
                    data: [7.1, 7, 2.9, 2.6, 8.0, 5.25],
                    borderColor: 'black',
                    tension: 0.1
                }]
            }
            // Cấu hình tùy chọn
            //Cấu hình cho biểu đồ tuyển dụng
            const viecConfig = {
                type: 'bar',
                data: viecData,
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Biểu đồ dữ liệu nhu cầu tuyển dụng việc làm qua các năm'
                        }
                    },
                    scales: {

                        x: {

                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Năm'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: '%'
                            }

                        }
                    }
                }
            };
            // Cấu hình cho biểu đồ tốc độ tăng trưởng kinh tế của nước ta

            //Cấu hình cho biểu đồ tiền lương
            const tienConfig = {
                type: 'line', data: tienData,
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Biểu đồ thu nhập của người dân Việt Nam qua các năm'
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Năm'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: '%'
                            },
                            min: 0,
                            max: 10
                        }
                    }
                }
            }
            const kinhTeConfig = {
                type: 'line', data: kinhTeData,
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Biểu đồ mức độ tăng trưởng kinh tế nước ta'
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Năm'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: '%'
                            },
                            min: 0,
                            max: 10
                        }
                    }
                }
            }
            // Tạo biểu đồ
            const ctx = document.getElementById('viecChart').getContext('2d');
            new Chart(ctx, viecConfig);
            const ctx1 = document.getElementById('tienChart').getContext('2d');
            new Chart(ctx1, tienConfig);
            const ctx2 = document.getElementById('kinhTeChart').getContext('2d');
            new Chart(ctx2, kinhTeConfig);
            // Phần Comments
            let divComments = document.getElementById('comments');
            let divCommentInput = document.getElementById('inputComment');
            let commentButton = document.getElementById('commentButton');
            let pCre = document.createElement('p');

            commentButton.addEventListener('click', function () {
                pCre.textContent = 'Người dùng 3: ' + divCommentInput.textContent;
                pCre.style.display = 'block';
                divComments.innerHTML += pCre.outerHTML;//+ User được đăng ký từ homepage.
                divCommentInput.textContent = '';

            })
        }, 100);
        setTimeout(() => {
            let hCoHoi = document.getElementsByClassName('hCoHoi');

            let hoverH2 = document.getElementsByClassName('hoverH2');
            for (let j = 0; j < hoverH2.length; j++) {
                let childrenCoHoi = hCoHoi[j].children;
                hoverH2[j].addEventListener('click', function () {
                    if (hCoHoi[j].classList.contains('move')) {
                        hCoHoi[j].classList.remove('move');
                    }
                    else {
                        hCoHoi[j].classList.add('move');
                    }

                })

            }
        }, 100);
    }

}
// js cho trang Nhà Tuyển dụng
export function tuyenDung() {
    let taoBaiViet = document.getElementById('taoBaiViet');
    let baiViet = document.getElementById('baiViet');
    let hoanTat = document.getElementById('hoanTat');
    let baiVietP = document.getElementsByClassName('baiVietP');

    let pTenCongTy = document.getElementById('tenCongTy');
    let pViTri = document.getElementById('viTri');
    let pMucLuong = document.getElementById('mucLuong');
    let pSoDienThoai = document.getElementById('soDienThoai');
    let pMail = document.getElementById('email');
    const pArray = [pTenCongTy, pViTri, pMucLuong, pSoDienThoai, pMail];
    let pArr = document.getElementsByClassName('tt');
    let hienThi = document.getElementById('hienThi');
    baiViet.style.display = 'none';
    taoBaiViet.addEventListener('click', function () {
        baiViet.style.display = baiViet.style.display === 'none' ? 'block' : 'none';
    });

    hoanTat.addEventListener('click', function () {
        let fl = true;
        for (let i = 0; i < pArr.length; i++) {
            if (pArray[i].value.trim() === '') {
                fl = false;
                pArray[i].style.border = '1px solid red'; // Viền đỏ để báo lỗi
            } else {
                pArray[i].style.border = ''; // Xóa viền đỏ nếu đã nhập
            }

        }
        if (!/^\d+$/.test(pSoDienThoai.value.trim()) && pSoDienThoai.value.strim !== '') {
            fl = false;
            pSoDienThoai.style.border = '1px solid red';
            alert('Vui lòng nhập đúng định dạng số cho ô Số điện thoại.');
        }
        if (!pMail.value.includes('@') && pMail.valie.strim() !== '') {
            fl = false;
            pMail.style.border = '1px solid red';
            alert('Vui lòng nhập đúng định dạng email có ký tự "@".');
        }
        if (!fl) {
            alert("Vui lòng nhập đủ thông tin trước khi hoàn tất!");
            return;
        }
        for (let i = 0; i < pArr.length; i++) {

            pArr[i].textContent = baiVietP[i].textContent + pArray[i].value;
        }
        hienThi.style.display = 'flex';
    });

    const dropZone = document.getElementById('dropZone');
    const imagePreview = document.getElementById('imagePreview');

    dropZone.addEventListener('dragover', function (event) {
        event.preventDefault();
        dropZone.classList.add('hover');
        dropZone.textContent = 'Thả ảnh vào đây';
    });

    dropZone.addEventListener('dragleave', function () {
        dropZone.classList.remove('hover');
        dropZone.textContent = 'Thả ảnh vào đây';
    });

    dropZone.addEventListener('drop', function (event) {
        event.preventDefault();
        dropZone.classList.remove('hover');
        const files = event.dataTransfer.files;

        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imagePreview.innerHTML = '';
                    imagePreview.appendChild(img);
                }
                reader.readAsDataURL(file);
            } else {
                alert('Vui lòng thả một file ảnh!');
            }
        }
    });

}
// js cho trang Mẫu CV tham khảo và cẩm nang
export function Cv() {
    let selectedLink = ''; // Biến toàn cục để lưu liên kết của CV được chọn
    let lists = document.querySelectorAll('.image-list');

    function filterImages(category) {
        lists.forEach(list => {
            if (category === 'all') {
                list.style.display = 'flex'; // Hiển thị tất cả
                shuffleList(); // Xáo trộn khi chọn "Tất cả"
            } else if (list.classList.contains(category)) {
                list.style.display = 'flex'; // Hiển thị các hình ảnh thuộc category
            } else {
                list.style.display = 'none'; // Ẩn các hình ảnh không thuộc category
            }
        });

        // Cập nhật nút lọc
        document.querySelectorAll('.filter-buttons button').forEach(button => {
            if (button.id === category + '-button' || category === 'all' && button.id === 'all-button') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function shuffleList() {
        let container = document.getElementById('image-container');
        let lists = Array.from(container.querySelectorAll('.image-list'));
        // Xáo trộn danh sách
        for (let i = lists.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [lists[i], lists[j]] = [lists[j], lists[i]]; // Hoán đổi
        }
        // Thêm lại các danh sách đã xáo trộn vào container
        lists.forEach(list => container.appendChild(list));
    }

    function openModal(imageSrc, link) {
        document.getElementById('modal').style.display = 'flex'; // Hiển thị modal
        document.getElementById('modal-image').src = imageSrc; // Cập nhật hình ảnh trong modal
        selectedLink = link; // Lưu liên kết của CV được chọn
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none'; // Ẩn modal
    }

    function applyChanges() {
        if (selectedLink) {
            window.open(selectedLink, '_blank'); // Mở liên kết đã lưu trong tab mới
        }
        closeModal(); // Đóng modal
    }

    // Hiển thị tất cả hình ảnh khi trang được tải
    document.addEventListener('DOMContentLoaded', () => {
        filterImages('all');
    });

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        // Chọn tất cả các phần tử muốn áp dụng hiệu ứng từ phần modal trở xuống
        const boxes = document.querySelectorAll('.content-box'); // Đảm bảo các phần tử này tồn tại

        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }
    // Gọi checkBoxes khi cuộn trang
    window.addEventListener('scroll', checkBoxes);

    // Gọi một lần khi tải trang để áp dụng hiệu ứng cho các phần tử đã trong viewport
    document.addEventListener('DOMContentLoaded', checkBoxes);

    // các phần tử bên file cẩm nang
    let allButton = document.getElementById('allButton');
    // các phần tử bên file mẫu cv
    let simpleButton = document.getElementById('simple-button');
    let modernButton = document.getElementById('modern-button');


    simpleButton.addEventListener('click', function () {
        filterImages('simple');
    })
    modernButton.addEventListener('click', function () {
        filterImages('modern');
    })
    allButton.addEventListener('click', function () {
        filterImages('all');
    })
    // Gọi checkBoxes khi cuộn trang
    window.addEventListener('scroll', checkBoxes);

    // Gọi một lần khi tải trang để áp dụng hiệu ứng cho các phần tử đã trong viewport
    document.addEventListener('DOMContentLoaded', checkBoxes);


}
// js cho login
export function loginFunction(nAme, eMail, pAssword, divNoiDung7) {
    let dangNhap = document.getElementById('dangNhap');
    let dangXuat = document.getElementById('dangXuat');
    let taiKhoan = document.getElementById('taiKhoan');
    // thao tác
    let thongTin = document.getElementById('thongTin');
    let thongTinTaiKhoan = document.getElementById('thongTinTaiKhoan');
    let pUser = document.getElementById('user');
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    //đăng ký
    const signButton = document.getElementById('signButton');
    let signName = document.getElementById('signName');
    let signEmail = document.getElementById('signEmail');
    let signPassword = document.getElementById('signPassword');
    // đăng nhập
    const loginButton = document.getElementById('loginButton');
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');
    // thông tin 
    let pNAme = document.getElementById('nAme');
    let pEMail = document.getElementById('eMail');


    taiKhoan.style.display ='none';

    thongTin.style.display = 'none';
    dangNhap.addEventListener('click', function () {
        if (taiKhoan.style.display === 'block') {
            taiKhoan.style.display = 'none'
        }
        else {
            taiKhoan.style.display = 'block';
        }
    })
    dangXuat.addEventListener('click', function () {
        pUser.style.display='block';
        thongTin.style.display ='none';
        thongTinTaiKhoan.style.display ='none';
    })


    registerBtn.addEventListener('click', () => {
        container.classList.add("kichHoat");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("kichHoat");
    });
    signButton.addEventListener('click', function () {
        event.preventDefault();  // Prevent form from submitting and reloading the page

        if (signName.value.strim !== '' && signEmail.value.strim !== '' && signPassword.value.strim !== "") {
            nAme = signName;
            eMail = signEmail;
            pAssword = signPassword;
            console.log('dang ky thanh cong');
            console.log(nAme.value)
        }
        else {
            console.log('dang ky that bai')
        }

    })
    loginButton.addEventListener('click', function () {
        console.log(loginEmail.value)
        console.log(nAme.value)
        console.log(loginPassword.value);
        console.log(pAssword.value);
        if (loginEmail.value === eMail.value && loginPassword.value === pAssword.value) {
            console.log('dang nhap thanh cong');
            pUser.style.display = 'none';
            divNoiDung7.style.display = 'none';
            thongTin.style.display = 'block';
            pNAme.textContent = 'Tên người dùng: ' + nAme.value;
            pEMail.textContent = 'Email: ' + eMail.value;

        }
        else {
            console.log('Dang nhap that bai');
        }
    })
    thongTin.addEventListener('click', function () {
        if (thongTinTaiKhoan.style.display === 'flex') {
            thongTinTaiKhoan.style.display = 'none';
        }
        else {
            thongTinTaiKhoan.style.display = 'flex';
        }
    })

}
export function camNangLamViec() {
    function ftImg(category) {
        let lists = document.querySelectorAll('.imgLists');
        lists.forEach(list => {
            if (category === 'all' || list.classList.contains(category)) {
                list.style.display = 'flex';
            } else {
                list.style.display = 'none';
            }
        });

        // Cập nhật trạng thái nút lọc
        document.querySelectorAll('.ftButton button').forEach(button => {
            if (button.id === `${category}-button` || (category === 'all' && button.id === 'all-button')) {
                button.classList.add('active');
                button.classList.remove('inactive');
            } else {
                button.classList.remove('active');
                button.classList.add('inactive');
            }
        });

        // Gọi hàm randomLists nếu nhấn vào nút "Tất cả"
        if (category === 'all') {
            randomLists();
        }
    }

    function randomLists() {
        let container = document.getElementById('image-container');
        let lists = Array.from(container.querySelectorAll('.imgLists'));
        // Xáo trộn danh sách
        for (let i = lists.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [lists[i], lists[j]] = [lists[j], lists[i]]; // Hoán đổi các phần tử
        }
        // Thêm lại các danh sách đã xáo trộn vào container
        lists.forEach(list => container.appendChild(list));
    }
    let allButton = document.getElementById('all-button');
    let storyButton = document.getElementById('story-button')
    let moveButton = document.getElementById('move-button');
    let orienButton = document.getElementById('orien-button')
    let consulButton = document.getElementById('consul-button');
    // Đảm bảo mã JavaScript được chạy sau khi DOM đã tải xong
    document.addEventListener('DOMContentLoaded', () => {
        ftImg('all'); // Khởi tạo trạng thái ban đầu
    });
    allButton.addEventListener('click', function () {
        ftImg('all');
    })
    storyButton.addEventListener('click', function () {
        ftImg('story');
    })
    moveButton.addEventListener('click', function () {
        ftImg('move');
    })
    orienButton.addEventListener('click', function () {
        ftImg('orien');
    })
    consulButton.addEventListener('click', function () {
        ftImg('consul');
    })
    let liLists = document.getElementsByClassName('liLists');
    for (let i = 0; i < liLists.length; i++) {



        liLists[i].addEventListener('mousemove', function () {


            for (let j = 0; j < liLists.length; j++) {
                if (j !== i) {
                    liLists[j].classList.add('notHover');
                }
                else {
                    liLists[j].classList.remove('notHover');
                }
            }
        })
        liLists[i].addEventListener('mouseleave', function () {


            for (let j = 0; j < liLists.length; j++) {

                liLists[j].classList.remove('notHover');
            }

        })


    }
}