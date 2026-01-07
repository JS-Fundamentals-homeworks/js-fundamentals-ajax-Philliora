// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
const input = document.querySelector('#userNameInput');
const resultSpan = document.querySelector('#userCity');
const button = document.querySelector('#getUserButton');

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            const foundUser = users.find(user => {
                return user.name === input.value;
            });

            if (foundUser) {
                resultSpan.textContent = foundUser.address.city;
            }
        });
});
 