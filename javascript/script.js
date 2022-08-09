// 
const contentContainer = document.getElementsByClassName('content-container');
for (i = 0; i < contentContainer.length; i++){
    contentContainer[i].addEventListener('click',function () {
        this.classList.toggle('active');
    })
};
