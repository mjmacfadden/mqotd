const quoteOfTheDay = [
  {
    date: "March 20, 2023",
    quote:
      "The most valuable commodity I know of is information. Wouldn't you agree?",
    movie: "Wall Street",
    src: "https://www.youtube.com/embed/7tZBkOtIYkU?start=13&end=20",
  },
  {
    date: "March 21, 2023",
    quote: "Stop chasing me!",
    movie: "Catch Me If You Can",
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
