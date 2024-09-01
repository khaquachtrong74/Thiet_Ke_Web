window.onload = () => {
    // let btnLogIn = document.getElementById('login');
    // let btnSignUp = document.getElementById('signup');
    let divDangNhap = document.getElementById('dangnhap');
    let divDk = document.getElementById('dk');
    divDk.style.display = 'none';
    // btnLogIn.addEventListener('click', function () {
    //     divDangNhap.style.transform = 'rotateY(180deg)';
    //     divDangNhap.style.transition = 'all 2.5s';
    //     setTimeout(() => {

    //         divDangNhap.style.display = 'flex';

    //         divDk.style.display = 'none';
    //     }, 3000);
    // })
    // btnSignUp.addEventListener('click', function () {
    //     divDangNhap.style.display = 'none';
    //     divDk.style.display = 'flex';
    //     flag = !flag;
    // })
    let btn = document.getElementsByClassName('btn');
    for (let i of btn) {
        i.addEventListener('click', function () {
            if (divDk.style.display === 'flex') {

                divDk.style.transform = 'rotateY(180deg)';
                divDk.style.transition = 'all 1.8s';
                setTimeout(() => {
                    divDangNhap.style.display = 'flex';
                    divDk.style.display = 'none';
                    divDk.style.transform = 'rotateY(360deg)';
                }, 1200);
            }
            else {
                divDangNhap.style.transform = 'rotateY(180deg)';
                divDangNhap.style.transition = 'all 1.8s';
                setTimeout(() => {
                    divDangNhap.style.display = 'none';
                    divDk.style.display = 'flex';
                    divDangNhap.style.transform = 'rotateY(360deg)';

                }, 1200);
            }

        })
    }
}