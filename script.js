const quoteOfTheDay = [
  {
    date: "April 3, 2023",
    quote: "The most valuable commodity I know of is information. Wouldn't you agree?",
    movie: "Wall Street",
    id: 551,
    src: "https://www.youtube.com/embed/7tZBkOtIYkU?start=13&end=20",
  },
  {
    date: "April 6, 2023",
    quote: "Stop chasing me!",
    movie: "Catch Me If You Can",
    id: 550,
    src: "https://www.youtube.com/embed/pRi-o9-utSE?start=58&end=60",
  },
];

const today = new Date();

// Format the date as "Month Day, Year"
const formattedDate = today.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

// Find the quote for today
const todaysQuote = quoteOfTheDay.find((quote) => quote.date === formattedDate);

// Display the quote of the day on the console
if (todaysQuote) {
  document.getElementById("quote").innerHTML = `"${todaysQuote.quote}"`;
  document.getElementById("date").innerHTML = formattedDate;
  document.getElementById("exampleModalLabel").innerHTML = todaysQuote.movie;
  document.getElementById("youTube").src = todaysQuote.src;
} else {
  console.log("Sorry, there is no quote for today.");
}

// Get the date from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const date = urlParams.get("date");

// Find the quote for the given date
const quote = quoteOfTheDay.find((q) => q.date === date);

// Display the quote on the webpage
if (quote) {
  document.getElementById("date").innerHTML = date;
  const quoteText = document.querySelector("#quote");
  const movieText = document.querySelector("#exampleModalLabel");
  const srcText = document.querySelector("#youTube");

  quoteText.textContent = `"${quote.quote}"`;
  movieText.textContent = `${quote.movie}`;
  srcText.src = `${quote.src}`;

} else {
  //console.log("Sorry, there is no quote for the given date.");
}


//Trivia Logic

const correctMovieTitle = "Catch Me If You Can";
const form = document.querySelector('form');
const input = document.querySelector('input');
const modal = document.querySelector('#exampleModal');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value === correctMovieTitle) {
    console.log('You are correct, sir!');
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }
});



//The Movie Database
const apiKey = 'fe02516c84b34aff3bd02db47d61ec88';
const movieId = todaysQuote.id; //550; // ID for "Fight Club" movie

const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;
//const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {

    //const title = data.title;
    //console.log(`The title of the movie is ${title}`);

    console.log(data);

    // Extract the backdrop path from the data
    const backdropPath = data.backdrops[0].file_path;
    // Construct the image URL
    const imageUrl = `https://image.tmdb.org/t/p/w1280${backdropPath}`;
    // Display the image
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'img-fluid text-center';
    document.body.appendChild(img);

  })
  .catch(error => console.error(error));

