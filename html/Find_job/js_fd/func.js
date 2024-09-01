import { load,Cv, dgct, tuyenDung } from './module.js';
window.onload = () => {
    //Xử lý việc load từng nội dung trong main.
    // USER này có tác dụng là khi ấn vào sẽ hiện 2 lựa chọn đăng ký và đăng nhập
    let USER = document.getElementById('user');
    USER.addEventListener('click', function () {
        const userDiv = document.getElementById('nguoidung');
        if (userDiv.style.display === 'none') {
            userDiv.style.display = 'block';
        }
        else {
            userDiv.style.display = 'none';
        }
    });


    window.addEventListener('scroll', function () {
        const navbar = this.document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    })
    let flag = document.getElementById('true');
    // xử lý chạy quảng cáo ở home page
    if (flag) {
        // Xử lý sự kiện doanh nghiệp
        let doanhNghiep = document.getElementById('doanhnghiep');
        Array.from(doanhNghiep.children).forEach(function (div) {
            if (div.tagName.toLowerCase() === 'div') { // Ensuring only divs are targeted
                div.children[0].addEventListener('mouseenter', function () {
                    div.children[1].classList.remove('overlay');
                    div.children[0].style.transform = 'scale(1.2)';
                    div.children[1].style.transform = 'scale(1.2)';

                    div.children[0].style.transition = 'all .7s';
                    div.children[1].style.transition = 'all .5s';

                });

                div.children[0].addEventListener('mouseleave', function () {

                    div.children[1].classList.add('overlay');
                    div.children[1].style.transform = 'scale(1)';

                    div.children[0].style.transform = 'scale(1)';
                    div.children[0].style.transition = 'all .7s';
                    div.children[1].style.transition = 'all .5s';

                });
            }
        })
    }

    //Xử lý nạp file động

    let danhgiacongty = document.getElementById('danhgiacongty');
    let homepage = document.getElementById('homepage');
    let maucv = document.getElementById('maucv');
    let hmp = document.getElementById('hmp');
    let nhaTuyenDung = document.getElementsByClassName('homePageNhaTuyenDung');
    let flg = true;
    let divNoiDung4 = document.getElementById('noidung4');

    load(4);//loading
    hmp.style.display = 'none';
    setTimeout(() => {
        divNoiDung4.style.display = 'none';
        homepage.style.display = 'block';
    }, 3000);
    setTimeout(() => {
        if (flg) {
            divNoiDung4.style.display = 'none';

            hmp.style.display = 'block';
            setTimeout(() => {
                load(2);//dgct
                dgct(true);
                load(3);//cv    
                setTimeout(() => {
                    Cv();
                }, 100);
                load(6);//nha tuyen dung
                setTimeout(() => {
                    tuyenDung();
                }, 100);
            }, 100);

        }
    }, 3200);
    setTimeout(() => {

        let divNoiDung2 = document.getElementById('noidung2')
        let divNoiDung3 = document.getElementById('noidung3')
        let divNoiDung6 = document.getElementById('noidung6');
        divNoiDung2.style.display = 'none';
        divNoiDung3.style.display = 'none';
        divNoiDung6.style.display = 'none';
        maucv.addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung2.style.display = 'none';
            divNoiDung6.style.display = 'none';
            divNoiDung3.style.display = 'block';
        })
        danhgiacongty.addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung6.style.display = 'none';
            divNoiDung2.style.display = 'block';
        })
        
        nhaTuyenDung[0].addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung2.style.display = 'none';
            divNoiDung6.style.display = 'block';
        })
        nhaTuyenDung[1].addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung2.style.display = 'none';
            divNoiDung6.style.display = 'block';
        })
        let favicon_homepage = document.getElementById('favicon_homepage');
        favicon_homepage.addEventListener('click', function () {
            divNoiDung2.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung6.style.display = 'none';
            homepage.style.display = 'block';
        })
    }, 100);



}