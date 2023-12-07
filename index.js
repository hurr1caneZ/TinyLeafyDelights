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