function measurePageLoadTime() {
    const loadTime = performance.now();
    const loadingInfo = document.getElementById("loading-info");

    if (loadingInfo) {
        loadingInfo.textContent = `Страница загружена за ${loadTime.toFixed(2)} миллисекунд`;
    } else {
        console.error("Элемент с id 'loading-info' не найден");
    }
}
window.addEventListener("load", measurePageLoadTime);

function mockFetch(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    console.log(`получен пользователь с email: ${email.value} и паролем: ${password.value}`);
}

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('fullscreen-video');
    const fullscreenButton = document.getElementById('submit');

    fullscreenButton.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }

        video.play();
        video.style.display = 'block';
    });
});