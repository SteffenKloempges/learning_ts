import movieData from "./movieData";
const moviesWrapper = document.getElementById("movies__wrapper") as HTMLElement;
const searchBtn = document.querySelector('#search__btn') as HTMLInputElement;
const ascBtn = document.querySelector('#asc__btn') as HTMLInputElement;
const descBtn = document.querySelector('#desc__btn') as HTMLInputElement;
const rateBtn = document.querySelector('#rate__btn') as HTMLInputElement;

type Movie = [string, string, string, string, string[], string];

//warum hier nochmal extra die array literale angeben ?
const renderMovies = (data: Movie[]) => {
    //check for data
    if (data) {
        //first loop of complete movie data
        data.forEach((movie: Movie) => {
            //create all needed elements
            const movieCard = document.createElement("div");
            const movieTitle = document.createElement("h2");
            const yearText = document.createElement("p");
            const author = document.createElement("p");
            const duration = document.createElement("p");
            const rate = document.createElement('p');

            //fill elements with text from array
            movieTitle.textContent = movie[0];
            yearText.textContent = movie[1];
            author.textContent = movie[2];
            duration.textContent = movie[3];
            rate.textContent = movie[5];

            //give elements in the right order to wrapper div
            movieCard.append(movieTitle, yearText, author, duration);

            //second loop to get all genres
            movie[4].forEach((genre) => {
                const genreText = document.createElement('p');
                genreText.textContent = genre

                movieCard.appendChild(genreText);
            })

            //add movie rate to card
            movieCard.appendChild(rate);

            //add classes for tailwind
            movieCard.setAttribute("class", "text-center my-3 bg-lime-400 p-4 rounded-lg");
            movieTitle.setAttribute("class", "font-bold text-2xl mb-2");
            author.setAttribute("class", "font-bold");

            moviesWrapper.appendChild(movieCard);
        })
    } else {
        console.log("Keine Daten vorhanden");
    }
}

renderMovies(movieData);


const searchMovie = (): void => {
    console.log("search")
    const inputMovie = document.querySelector("#inputSearch") as HTMLInputElement;
    moviesWrapper.innerHTML = "";
    const filteredMovie = movieData.filter((movies) => {
        if (movies[0].toLowerCase().includes(inputMovie.value.toLowerCase())) {
            return movies;
        }
    })
    //=======================================================
    //hier noch fall bauen wenn kein film gefunden wurde
    //=======================================================


    renderMovies(filteredMovie);
}

const sortMovies = (sortParam: string) => {
    const copyMovieData = [...movieData];
    moviesWrapper.innerHTML = "";
    switch (sortParam) {
        case "asc":
            copyMovieData.sort((a: Movie, b: Movie) => Number(a[1]) - Number(b[1]));
            break;
        case "desc":
            copyMovieData.sort((a: Movie, b: Movie) => Number(b[1]) - Number(a[1]));
            break;
        case "rate":
            copyMovieData.sort((a: Movie, b: Movie) => Number(b[5]) - Number(a[5]));
            break;
    }
    renderMovies(copyMovieData);
}


searchBtn?.addEventListener("click", searchMovie);
ascBtn?.addEventListener("click", () => sortMovies("asc"));
descBtn?.addEventListener("click", () => sortMovies("desc"));
rateBtn?.addEventListener("click", () => sortMovies("rate"));