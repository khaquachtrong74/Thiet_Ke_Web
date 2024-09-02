function filterImages(category) {
    let lists = document.querySelectorAll('.image-list');
    lists.forEach(list => {
        if (category === 'all' || list.classList.contains(category)) {
            list.style.display = 'flex';
        } else {
            list.style.display = 'none';
        }
    });

    // Cập nhật trạng thái nút lọc
    document.querySelectorAll('.filter-buttons button').forEach(button => {
        if (button.id === `${category}-button` || (category === 'all' && button.id === 'all-button')) {
            button.classList.add('active');
            button.classList.remove('inactive');
        } else {
            button.classList.remove('active');
            button.classList.add('inactive');
        }
    });

    // Gọi hàm shuffleList nếu nhấn vào nút "Tất cả"
    if (category === 'all') {
        shuffleList();
    }
}

function shuffleList() {
    let container = document.getElementById('image-container');
    let lists = Array.from(container.querySelectorAll('.image-list'));
    // Xáo trộn danh sách
    for (let i = lists.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lists[i], lists[j]] = [lists[j], lists[i]]; // Hoán đổi các phần tử
    }
    // Thêm lại các danh sách đã xáo trộn vào container
    lists.forEach(list => container.appendChild(list));
}

// Đảm bảo mã JavaScript được chạy sau khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    filterImages('all'); // Khởi tạo trạng thái ban đầu
});
