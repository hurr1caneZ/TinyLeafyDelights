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
document.addEventListener("DOMContentLoaded", function() {console.log(1)
    let navbar = document.querySelector('.nav-bar').children;
    for (let i = 0; i < navbar.length; i++) {
        if (document.location["href"] === navbar[i].children[0].href) {
           navbar[i].children[0].classList.add('active-state');
        }
    }
});
