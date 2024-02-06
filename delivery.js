let button = document.querySelector('.submit-button');
let preloader = document.querySelector('.spinner');
let fetchData = document.querySelector('.fetch-data');

button.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    preloader.style.display = 'flex';
    setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/?_start=1&_limit=${randomNumber}`)
            .then(response => response.json())
            .then(user => {
                preloader.style.display = 'none';
                if (user) {
                    for (let i = 0; i < user.length; i++) {
                        let template = document.getElementById('user-template');
                        let clone= template.content.cloneNode(true);
                        clone.children[0].textContent = 'Имя пользователя: ' + user[i].name +
                            ', Город: ' + user[i].address.city +
                            ', Адрес: ' + user[i].address.street +
                            ', ZIP: ' + user[i].address.zipcode;
                        fetchData.appendChild(clone);
                    }
                } else {
                    console.error('Пользователь не найден');
                }
            })
            .catch(error => {
                let warning = document.createElement('p');
                warning.textContent = 'fetch не получился';
                warning.style.color = 'solid black';
                fetchData.appendChild(warning);
                preloader.style.display = 'none';
            });
    }, 1000);
});
