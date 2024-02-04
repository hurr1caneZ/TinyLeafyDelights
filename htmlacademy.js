var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');

openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
});
