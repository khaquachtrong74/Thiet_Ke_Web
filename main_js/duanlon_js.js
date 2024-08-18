window.onload = function () {
    let search = document.getElementsByTagName('input')[0];
    let btn = document.getElementsByClassName('btn')[0];
    let k = document.getElementsByClassName('content')[0]
    btn.onclick = function () {
        // Tạo một phần tử <p> mới
        let p = document.createElement('p');
        p.textContent = search.value; // Đặt nội dung cho phần tử <p>
        // alert(search.value)
        k.appendChild(p);

    }
}