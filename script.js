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

document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-buttons");

    navButtons.forEach(function (navButton) {
        navButton.addEventListener("click", function (event) {
            event.preventDefault();

            // Убираем подчеркивание у всех элементов
            navButtons.forEach(function (button) {
                button.classList.remove("clicked");
            });

            // Добавляем подчеркивание только для текущего элемента
            this.classList.add("clicked");

            // Получаем ссылку из атрибута href и переходим на страницу
            const targetPage = this.getAttribute("href");
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});