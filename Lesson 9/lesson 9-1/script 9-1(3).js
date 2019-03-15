let age = document.getElementById('age'),
    surname = prompt("Введите фамилию:", 'Иванов'),
    name = prompt("Введите имя:", 'Петя');

age.addEventListener('change', function () {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
});