
const contentContainer = document.getElementsByClassName('content-container');
for (i = 0; i < contentContainer.length; i++) {
    contentContainer[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
};

// Modal
const openBtn = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-wrapper');
openBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
})
window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})




