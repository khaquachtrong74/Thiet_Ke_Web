window.onload = function () {
    let broadcast = document.getElementById('broadcast');
    let flag = document.getElementById('true');
    let btn = document.getElementsByClassName('custom-button');
    let danhgiacongty = document.getElementsByClassName('danhgiacongty');
    let i = 1;
    let num = 0;
    // xử lý chạy quảng cáo ở home page
    if (flag) {
        setInterval(() => {
            broadcast.style.backgroundImage = `url("../../images/b${i}.jpg")`;
            i = (i % 3) + 1;

            if (broadcast.children[1]) {
                broadcast.children[1].addEventListener('click', function () {
                    broadcast.style.backgroundImage = `url("../../images/b1.jpg")`;
                    this.style.backgroundColor = 'grey';

                });

            }

            if (broadcast.children[2]) {
                broadcast.children[2].addEventListener('click', function () {
                    broadcast.style.backgroundImage = `url("../../images/b2.jpg")`;
                    this.style.backgroundColor = 'grey';

                });
            }

            if (broadcast.children[3]) {
                broadcast.children[3].addEventListener('click', function () {
                    broadcast.style.backgroundImage = `url("../../images/b3.jpg")`;
                    this.style.backgroundColor = 'grey';

                });
            }
            broadcast.children[i].style.backgroundColor = 'grey';

            setTimeout(() => {
                broadcast.children[i].style.backgroundColor = '';

            }, 2900);
        }, 3000);
    }
    // Xử lý đăng ký và đăng nhập
    let dangkyEl = document.getElementById('dangky');
    // xử lý đăng ký
    dangkyEl.addEventListener('click',function(){
        
        let div_chot = document.createElement('div');
        let x1 = document.getElementsByClassName('x-button');
        div_chot.classList.add('chot');
        div_chot.textContent = 'Tiếp tục hoặc DieEEEE';
        let cl_dangky = this.children[1];
        let nen_dangky = cl_dangky.querySelector('div#dk');
        nen_dangky.classList.add('nen');
        cl_dangky.style.display = 'block';
        
        Array.from(x1).forEach(function(button) {
            button.addEventListener('click', function(event) {
                nen_dangky.classList.remove('nen');
                event.stopPropagation(); // tránh đụng độ với sự kiện click của thằng trên
                cl_dangky.style.display = 'none';
            });
        });
    })
    //Xử lý đăng nhập
    let dangnhapEl = document.getElementsByClassName('dangnhap');

    for (let i = 0; i < dangnhapEl.length; i++) {
        dangnhapEl[i].addEventListener('click', function () {
            let d = document.createElement('div');
            let x = document.createElement('button');
            let k = document.createElement('div');
            
            k.classList.add("nen")
            x.classList.add('x-button');
            k.setAttribute('style', 'position: fixed; top:0; left:0; width:100%; height:100%; background-color: rgba(0,0,0,0.5);display:flex; justify-content:center; align-items:center;z-index:20;')
            d.classList.add('hoverDiv');
            d.appendChild(x); // Gắn nút X vào trong div d
            d.setAttribute('style', 'text-align:center;width:50%; height:520px; background-color:white;outline: solid black; position:absolute;z-index:30;display:flex;');

            // Thiết kế thằng d
            let f5 = document.createElement('div');
            let f6 = document.createElement('div');
            f5.classList.add('f5');
            f6.classList.add('f6');

            f5.setAttribute('style', 'flex:1;background-color:white;padding:5px;');
            // Tạo các thẻ
            let div = document.createElement('div');
            let div_1 = document.createElement('div');
            let h3 = document.createElement('h3');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let a1 = document.createElement('a');
            let div_icon = document.createElement('div');
            let div_icon_1 = document.createElement('div');
            let f5hover = f5.getElementsByTagName('div');
            let span = document.createElement('span');
            // thẻ để kẻ ngang với span
            let hr = document.createElement('hr');
            let hr_1 = document.createElement('hr');
            let line = document.querySelectorAll('.line');
            // Tạo check box
            let div_cb = document.createElement('div');
            let checkbox = document.createElement('input');
            let p = document.createElement('p');
            // Tạo thẻ nhập username;
            let input_user = document.createElement('input');
            let input_user_pass = document.createElement('input');
            let user = document.querySelectorAll('.user');

            // Tạo 1 cái div chốt
            let div_chot = document.createElement('div');
            div_chot.classList.add('chot');        
            // set up các thẻ
            
           
            // quen.allowFullscreen;
            
            a.href = '#';
            a1.href = '#';
            a.style.textDecoration = 'none';
            a.style.color = 'black';
            a1.style.textDecoration = 'none';
            a1.style.color = 'black';
            h3.textContent = 'Người tìm việc';
            h2.textContent = 'Đăng nhập đi thằng nhóc!';
            span.textContent = 'Hoặc là chọn cách đăng nhập khác';
            div_chot.textContent = 'Tiếp tục hoặc DieEEEE';
            div.textContent = 'Tiếp tục với FaceBook';
            input_user.type = 'text';
            input_user_pass.type = 'password';
            input_user.placeholder = 'Nhập tên người dùng vào đây';
            input_user_pass.placeholder = 'Nhập mật khẩu người dùng vào đây';
            input_user.classList.add('user');
            input_user_pass.classList.add('user');
            hr.classList.add('line');
            hr_1.classList.add('line');

            div_cb.style.display = 'flex';
            checkbox.type = 'checkbox';
            p.textContent = 'Bằng việc nhấn nút tiếp tục, bạn đồng ý hiến toàn bộ những gì bạn có cho chúng tôi.';

            
            // style của user được định nghĩa trong file style.css
            span.style.whiteSpace = 'nowrap';
            span.style.fontSize = '20px';
            div.setAttribute('style', 'box-sizing: border-box;position:relative;margin:auto;align-items:center;background-color:white;width:70%;height:40px; border: 1px solid black');
            div_1.setAttribute('style', 'box-sizing: border-box;position:relative;margin:auto;background-color:white;margin-top:25px;margin-bottom:20px;width:70%;height:40px; border: 1px solid black');
            div_icon.setAttribute('style', 'padding-left:10px;top:0;border-radius:50%;width:12%; background-repeat: no-repeat; background-image: url(../../images/fb_icon.png);height:100%; background-size: contain; background-position: center;z-index:10;position:absolute;');
            div_icon_1.setAttribute('style', 'padding-left:10px;top:0;border-radius:10px;width:12%; background-repeat: no-repeat; background-image: url(../../images/gmail_icon.png);height:100%; background-size: contain; background-position: center;z-index:12;position:absolute;');
            checkbox.style.width = '10%';


            div.style.textAlign = 'center';
            div.style.alignContent = 'center';
            div.classList.add('faceboock');
            div_1.classList.add('google');
            div_1.textContent = 'Tiếp tục với Google';
            div_1.style.textAlign = 'center';
            div_1.style.alignContent = 'center';

            div_1.appendChild(div_icon_1);
            div.appendChild(div_icon);
            div_cb.appendChild(checkbox);
            div_cb.appendChild(p);
            f5.appendChild(h3);
            f5.appendChild(h2);
            f5.appendChild(input_user);
            f5.appendChild(input_user_pass);
            let forget = document.createElement('a');
            forget.textContent = 'Quên mật khẩu';
            forget.href = '#'; // Đặt href là # để không có hành động mặc định của liên kết
            forget.style.fontSize = '1.2rem';
            // forget.style.paddingBottom = '10px';
            forget.style.textAlign = 'start';

            // Thêm sự kiện click để mở tab mới với video YouTube
            forget.addEventListener('click', function(event) {
                event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
                window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0?si=tzhHsPS4WkUzXuLo', '_blank');
            });

            // Thêm liên kết "Quên mật khẩu" vào DOM, ví dụ trong `f5`
            f5.appendChild(forget);
            f5.append(hr);
            f5.append(span);
            f5.append(hr_1);
            f5.appendChild(div);
            f5.appendChild(div_1);
            f5.appendChild(div_cb);
            f5.appendChild(div_chot);
            
            f6.setAttribute('style', 'flex:1;background-image: url("../../images/Bg.jpg");background-size:cover;text-align:center;');
            d.appendChild(f5);
            d.appendChild(f6);
            k.appendChild(d);

            //Thêm sự kiện khi user focus vào ô nhập liệu


            input_user.addEventListener('focus', function () {
                this.style.borderColor = '#4A90E2';
                this.style.outline = 'none';
            })
            //Khi không focus
            input_user.addEventListener('blur', function () {
                this.style.borderColor = 'black';
                this.style.outline = 'none';
            })
            input_user_pass.addEventListener('focus', function () {
                this.style.borderColor = '#4A90E2';
                this.style.outline = 'none';
            })
            input_user_pass.addEventListener('blur', function () {
                this.style.borderColor = 'black';
                this.style.outline = 'none';
            })

            
            for (let i = 0; i < f5hover.length; i++) {
                if (i === f5hover.length - 2) {
                    continue;
                }
                if (i === f5hover.length - 1) {
                    f5hover[i].addEventListener('mousemove', function () {
                        f5hover[i].style.scale = '1.1';
                        f5hover[i].style.transition = 'scale .5s';
                    });
                    f5hover[i].addEventListener('mouseleave', function () {
                        f5hover[i].style.scale = '1';
                    });
                }
                else {
                    // f5hover[i].style.backgroundColor = 'white';
                    f5hover[i].addEventListener('mousemove', function () {
                        f5hover[i].style.scale = '1.2';
                        f5hover[i].style.transition = 'scale .5s';
                    });
                    f5hover[i].addEventListener('mouseleave', function () {
                        f5hover[i].style.scale = '1';
                    });
                }
            }
            
            if (document.querySelector('.nen')) {
                return;
            }
            
            this.appendChild(k);
            // Xử lý sự kiện khi nút X được nhấp

            x.addEventListener('click', function () {
                event.stopPropagation()// tránh đụng độ với sự kiện click của thằng trên
                d.parentElement.removeChild(d); // Xóa div d khỏi parent của nó
                dangnhapEl[i].removeChild(k);
            });

        });
    }
    

}