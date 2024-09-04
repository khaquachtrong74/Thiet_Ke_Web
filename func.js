import { load, Cv, dgct, tuyenDung, loginFunction, camNangLamViec } from './module.js';
window.onload = () => {
    // Đăng nhập
    let nAme, eMail, pAssword;


    //Xử lý việc load từng nội dung trong main.
    // USER này có tác dụng là khi ấn vào sẽ hiện 2 lựa chọn đăng ký và đăng nhập
    let USER = document.getElementById('user');
    //noi dung 7 la trang login 



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
        // let doanhNghiep = document.getElementById('doanhnghiep');
        // Array.from(doanhNghiep.children).forEach(function (div) {
        //     if (div.tagName.toLowerCase() === 'div') { // Ensuring only divs are targeted
        //         div.children[0].addEventListener('mouseenter', function () {
        //             div.children[1].classList.remove('overlay');
        //             div.children[0].style.transform = 'scale(1.2)';
        //             div.children[1].style.transform = 'scale(1.2)';

        //             div.children[0].style.transition = 'all .7s';
        //             div.children[1].style.transition = 'all .5s';

        //         });

        //         div.children[0].addEventListener('mouseleave', function () {

        //             div.children[1].classList.add('overlay');
        //             div.children[1].style.transform = 'scale(1)';

        //             div.children[0].style.transform = 'scale(1)';
        //             div.children[0].style.transition = 'all .7s';
        //             div.children[1].style.transition = 'all .5s';

        //         });
        //     }
        // })
        let job = document.getElementsByClassName("jobLists");
        for (let i = 0; i < job.length; i++) {



            job[i].addEventListener('mousemove', function () {


                for (let j = 0; j < job.length; j++) {
                    if (j !== i) {
                        job[j].classList.add('notHover');
                    }
                    else {
                        job[j].classList.remove('notHover');
                    }
                }
            })
            job[i].addEventListener('mouseleave', function () {


                for (let j = 0; j < job.length; j++) {

                    job[j].classList.remove('notHover');
                }

            })


        }
    }

    //Xử lý nạp file động

    let danhgiacongty = document.getElementById('danhgiacongty');
    let homepage = document.getElementById('homepage');
    let maucv = document.getElementById('maucv');
    let hmp = document.getElementById('hmp');
    let nhaTuyenDung = document.getElementsByClassName('homePageNhaTuyenDung');
    // nhaTuyenDung[1].setAttribute('style', 'cursor: pointer')
    let flg = true;
    let divNoiDung4 = document.getElementById('noidung4');
    let camNang = document.getElementById('camnang');
    let divNoiDung2 = document.getElementById('noidung2')
    let divNoiDung3 = document.getElementById('noidung3')
    let divNoiDung6 = document.getElementById('noidung6');
    let divNoiDung7 = document.getElementById('noidung7');
    let divNoiDung8 = document.getElementById('noidung8');
    let divListss = document.getElementById('listss'); 
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
                setTimeout(() => {
                    dgct(true);
                }, 100);

                load(3);//cv    
                setTimeout(() => {
                    Cv()

                }, 100);
                load(6);//nha tuyen dung
                setTimeout(() => {
                    tuyenDung();
                }, 100);
                load(7);//login
                setTimeout(() => {
                    loginFunction(nAme, eMail, pAssword,divNoiDung7);
                }, 100);
                load(8);
                setTimeout(() => {


                }, 100);
                setTimeout(() => {
                    camNangLamViec();

                }, 100);
            }, 100);

        }
    }, 3200);

    let lt = document.getElementById('lt');
    lt.addEventListener('click',function(){
        divListss.style.display = 'none' ? 'block':'none';
    })
    setTimeout(() => {



        divNoiDung2.style.display = 'none';
        divNoiDung3.style.display = 'none';
        divNoiDung6.style.display = 'none';
        divNoiDung7.style.display = 'none';
        divNoiDung8.style.display = 'none';
        maucv.addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung2.style.display = 'none';
            divNoiDung6.style.display = 'none';
            divNoiDung8.style.display = 'none';
            divListss.style.display = 'none';
            divNoiDung3.style.display = 'block';
            
        })
        danhgiacongty.addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung6.style.display = 'none';
            divNoiDung8.style.display = 'none';
            // divListss.style.display = 'none';

            divNoiDung2.style.display = 'block';
        })

        nhaTuyenDung[0].addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung2.style.display = 'none';
            divNoiDung8.style.display = 'none';
            // divListss.style.display = 'none';

            divNoiDung6.style.display = 'block';
        })
        // nhaTuyenDung[1].addEventListener('click', function () {
        //     homepage.style.display = 'none';
        //     divNoiDung3.style.display = 'none';
        //     divNoiDung2.style.display = 'none';
        //     divNoiDung8.style.display = 'none';
        //     // divListss.style.display = 'none';

        //     divNoiDung6.style.display = 'block';
        // })
        camNang.addEventListener('click', function () {
            homepage.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung2.style.display = 'none';
            divNoiDung6.style.display = 'none';
            divNoiDung8.style.display = 'block';
            // divListss.style.display = 'none';

        })
        let favicon_homepage = document.getElementById('favicon_homepage');
        favicon_homepage.addEventListener('click', function () {
            divNoiDung2.style.display = 'none';
            divNoiDung3.style.display = 'none';
            divNoiDung6.style.display = 'none';
            divNoiDung8.style.display = 'none';
            // divListss.style.display = 'none';

            homepage.style.display = 'block';
        })
    }, 100);
    let userDiv = document.getElementById('noidung7');
    USER.addEventListener('click', function () {
        setTimeout(() => {
            if (userDiv.style.display === 'none') {
                userDiv.style.display = 'flex';
            }
            else {
                userDiv.style.display = 'none';
            }
        }, 100);
    });

    let liLists = document.getElementsByClassName('liLists');
    for (let i = 0; i < liLists.length; i++) {
        liLists[i].addEventListener('mousemove', function () {
            liLists[i].classList.add('yesHover');
            for (let j = 0; j < liLists.length; j++) {
                if (j !== i) {
                    liLists[j].classList.add('notHover');
                }
            }
        })
        liLists[i].classList.remove('yesHover');
        liLists[i].classList.remove('notHover');
    }
    
}