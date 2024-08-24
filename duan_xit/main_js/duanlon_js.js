window.onload = function () {
    let search = document.getElementsByTagName('input')[0];
    let btn = document.getElementsByClassName('btn')[0];
    let k = document.getElementsByClassName('content')[0]
    function Compl_text() {
        let p = document.createElement('p');
        p.textContent = search.value; // Đặt nội dung cho phần tử <p>
        // alert(search.value)
        let ps = document.querySelectorAll('.content>p');
        let exists = false;
        for (let i of ps) {
            if (i.textContent === p.textContent) {
                exists = true;
                break;
            }
        }
        if (exists === false) {
            let num = 0;
            for (let i of k.children) {
                num += 1;
                if (num === 5) {
                    k.removeChild(k.lastChild)
                }
            }
            // k.appendChild(p);
            if (k.children[0]) {
                k.insertBefore(p, k.children[0]);
            } else {
                k.appendChild(p);
            }
        }
        p.onclick = function () {

            search.value = this.textContent
        }
    }
    btn.onclick = Compl_text;
    search.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            Compl_text();
            let in4 = document.getElementsByClassName('in4');
            for (let i of in4) {
                // alert(1)
                if (i.textContent === search.value)//this lúc này là search
                {
                    i.setAttribute('style', 'background:linear-gradient(120deg,yellow,white)');
                    setTimeout(() => {
                        i.setAttribute('style', 'background:linear-gradient(120deg,grey,red)');
                    }, 1000);
                    setTimeout(() => {
                        i.setAttribute('style', 'background:none;')
                    }, 2000);
                }
            }

        }
    });
    let user = document.getElementById('user');
    user.addEventListener('mouseenter', function () {
        let d = document.createElement('div');
        let u = document.createElement('ul');
        // d.setAttribute('style','width:100px; height:100px; background-color:red;');
        for (let i = 0; i < 5; i++) {
            let li = document.createElement('li');
            li.className = 'HoverLi';
            u.appendChild(li);
        }
        let context = u.getElementsByClassName('HoverLi');
        context[0].textContent = 'Người tìm việc Đăng ký/Đăng nhập';
        context[1].textContent = 'Đăng nhập bằng Facebook';
        context[2].textContent = 'Đăng nhập bằng Google';
        context[3].textContent = 'Điều khoản';
        context[4].textContent = 'Tiếp tục';
        for (let i = 0; i < context.length; i++) {
            context[i].addEventListener('mousemove', function () {
                this.setAttribute('style','border:1px solid green; padding:5px; margin:5px 0;');
            });
        }

        u.style.width = '50%';
        d.appendChild(u);
        let k = document.createElement('img');
        k.src = 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/233518421_2922120058050915_7044357429443650340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGeY9HYIiS9a0mhAl53bE2UflcpZ7JfNRR-Vylnsl81FLDhQBil_oDDk1U3mY5BxFxCQTUYjcViXwwltSpi_Uzm&_nc_ohc=t5Oo1Ztcn30Q7kNvgGAOwm3&_nc_ht=scontent.fsgn19-1.fna&oh=00_AYDfdVGldUMVtrpwqtUn4YfUrWT9m4nNFemfbY60SrJlAA&oe=66CA6AF8';
        k.alt = 'test'
        k.width = 200;
        k.height = 200;
        k.style.width = '50%';
        k.style.height = '100%';
        k.style.borderRadius = '10px';
        d.appendChild(k);
        d.setAttribute('style',
            "position:absolute; padding:5px; border: 1px solid white; background-color: lightblue;left:200px;width:75%;height:600px; display: flex; justify-content: space-between;");
            d.id = 'HoverDiv'
        d.className = 'flex'

        user.appendChild(d);
        let hoverLi = document.getElementsByClassName('HoverLi');
        for (let i = 0; i < hoverLi.length; i++) {
            hoverLi[i].addEventListener('mousemove', function () {
                this.style.backgroundColor = 'red';
            });
            hoverLi[i].addEventListener('mouseleave', function () {
                this.style.backgroundColor = ''; // Reset the background color on mouse leave
            });
        }
    })

    user.addEventListener('mouseleave', function () {
        let d = document.getElementById('HoverDiv');
        user.removeChild(d);
    })
}