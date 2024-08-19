window.onload = function () {
    let search = document.getElementsByTagName('input')[0];
    let btn = document.getElementsByClassName('btn')[0];
    let k = document.getElementsByClassName('content')[0]
    // btn.onclick = function () {
    //     // Tạo một phần tử <p> mới
    //     let p = document.createElement('p');
    //     p.textContent = search.value; // Đặt nội dung cho phần tử <p>
    //     // alert(search.value)
    //     let ps = document.querySelectorAll('.content>p');
    //     let exists = false;
    //     for (let i of ps) {
    //         if (i.textContent === p.textContent) {
    //             exists = true;
    //             break;
    //         }
    //     }
    //     if (exists === false) {
    //         k.appendChild(p);
    //     }
    //     p.onclick = function () {

    //         search.value = this.textContent
    //     }
    // }
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
            k.appendChild(p);
        }
        p.onclick = function () {

            search.value = this.textContent
        }
    }
    btn.onclick = Compl_text;

    search.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            Compl_text();
        }
    });
}