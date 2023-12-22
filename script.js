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

    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("click", function (event) {
            event.preventDefault();

            // Убираем подчеркивание у всех элементов
            for (let j = 0; j < navButtons.length; j++) {
                navButtons[j].classList.remove("clicked");
            }

            // Добавляем подчеркивание только для текущего элемента
            this.classList.add("clicked");

            // Получаем ссылку из атрибута href
            const targetPage = this.getAttribute("href");

            // Проверяем, находимся ли мы уже на этой странице
            if (targetPage && document.location.pathname === targetPage) {
                this.classList.add("clicked");
            } else {
                // Иначе переходим на новую страницу
                document.location.href = targetPage;
            }
        });
    }
});