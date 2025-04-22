"use strict"


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');
const lastMovie = prompt('Один из последних просмотренных фильмов?', ' '),
      review = prompt('Она сколько оцените его?', ' '),
      lastMovie2 = prompt('Один из последних просмотренных фильмов?', ' '),
      review2 = prompt('Она сколько оцените его?', ' ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastMovie] = review;
personalMovieDB.movies[lastMovie2] = review2;
console.log(personalMovieDB)
