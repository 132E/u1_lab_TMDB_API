const API_KEY = "19233f7856a875ed08a1ad19d6045200";
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";

const button = document.querySelector("button");
const searchInput = document.querySelector("#search-input");
const body = document.querySelector("body");

button.addEventListener("click", async () => {
  const userInput = searchInput.value;
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=19233f7856a875ed08a1ad19d6045200`
  );
  //   console.log(response);
  const movieList = movie.data.result;
});

const renderList = (movies) => {
  movies.forEach((movies) => {
    const movieID = movies.movieID;
    console.log(movieID);
    const title = movies.title;
    console.log(title);
  });
};
