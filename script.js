/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

const start = function () {
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
	}
};

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {}, 
	actors: {},
	genres: [],
	privat: false
};



const rememberMyFilms = function () {
	for (let i = 0; i < 2; i++) {
		const movie = prompt('Один из последних просмотренных фильмов?', '');
		const movieRating = +prompt('На сколько оцените его?', '');

		if (movie != null && movieRating != null && movie != '' && movie.length < 50) {
			personalMovieDB.movies[movie] = movieRating;
			console.log('done');
		} else {
			console.log('erroe');
			i--;
		}
	}
};
// rememberMyFilms();



const detectPersonalLevel = function () {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
};
// detectPersonalLevel();

const showMyDB = function (hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
};
showMyDB(personalMovieDB.privat);

const writeYourGenres = function () {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
};
writeYourGenres();

