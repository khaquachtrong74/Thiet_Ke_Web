// function click_now() {
//     let a = document.getElementsByName("Timkiem");
//     if (a == 'yes') {
//         document.getElementById("test").innerHTML = "haha hoạt động rồi";

//     }
//     else {

//         document.getElementById("test").innerHTML = "huhu không hoạt động rồi";
//     }
// }

function math() {
    let sum = 5 + 2;
    let a = document.getElementById("test");
    a.innerHTML = "Tổng của 5 và 2 là " + sum;
    let b = document.createElement("div");
    b.innerHTML = "<button type='submit' onclick='hello()'>click here to continue</button>";
    a.append(b);
}
function hello() {
    let a = document.getElementById("test");
    a.innerHTML = "<p id='ne'>Hello cậu nhé, cậu có bất ngờ không<br></p>";
    a.innerHTML = "<p>Nếu có cậu hãy ấn nút Y, không thì thui ấn N đi ghét rồi</p>";
    alert("Nhấn nút tiếp tục để biết tớ sẽ nói gì")
    let b = document.createElement('div')
    b.innerHTML = "<button color='red' onclick='yes()'>Y</button>";
    let c = document.createElement('div');
    c.innerHTML = "<button color='red' onclick='no()'>N</button>";
    a.append(b);
    a.appendChild(c);
}
function yes() {
    alert("Chờ 5 giây, rồi hãy nhấn OK!")
    let a = document.getElementById("test");
    a.innerHTML = "<p id='sn'>Thật ra tớ thích cậu lâu lắm rồi, cậu làm người yêu tớ nhá</p>";
}
function no() {
    alert("Vậy hả, thôi thì để lần sau tớ sẽ nói nhá")
}