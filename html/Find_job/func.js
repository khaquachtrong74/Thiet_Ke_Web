window.onload = function() {
    let broadcast = document.getElementById('broadcast');
    let i = 1;

    setInterval(() => {
        broadcast.style.backgroundImage = `url("../../images/b${i}.jpg")`;
        i = (i % 3) + 1;
        if (broadcast.children[1]) {
            broadcast.children[1].addEventListener('click', function() {
                broadcast.style.backgroundImage = `url("../../images/b1.jpg")`;
            });
        }
    
        if (broadcast.children[2]) {
            broadcast.children[2].addEventListener('click', function() {
                broadcast.style.backgroundImage = `url("../../images/b2.jpg")`;
            });
        }
    
        if (broadcast.children[3]) {
            broadcast.children[3].addEventListener('click', function() {
                broadcast.style.backgroundImage = `url("../../images/b3.jpg")`;
            });
        }
    }, 4000);
    
    
}