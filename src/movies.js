// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  let res = arr
    .map(movie => movie.director);
  return res;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr
    .filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    .length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  return Number((arr
    .filter(movie => movie.rate)
    .reduce((acc, val) => {
    return acc + val.rate / arr.length
  },0))
  .toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let dramaMovies = arr
    .filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let orderedArr = JSON.parse(JSON.stringify(arr))
  return orderedArr
    .sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let orderedArr = JSON.parse(JSON.stringify(arr))
  return orderedArr
    .map(movie => movie.title)
    .sort()
    .slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {

}