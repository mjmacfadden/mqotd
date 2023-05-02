const quotesOfTheDay = [
  /*
  {
    date: "0502023",
    quote: "",
    id: ,
    src: "",
  },
  */
  {
    date: "05112023",
    quote: "Once again, things that could have been brought to my attention YESTERDAY!",
    id: 11003,
    src: "https://www.youtube.com/embed/gqQ99s4Ywnw",
  },
  {
    //Blues Brothers
    date: "05102023",
    quote:
      "It's 106 miles to Chicago we got a full tank of gas, half a pack of cigarettes, its dark and we're wearing sunglasses.",
    id: 525,
    src: "https://www.youtube.com/embed/gvKs2VLmVnY",
  },
  {
    //The Departed
    date: "05092023",
    quote:
      "I'm the guy that tells you there are guys you can hit and there's guys you can't. Now, that's not quite a guy you can't hit, but it's almost a guy you can't hit.",
    id: 1422,
    src: "https://www.youtube.com/embed/yicP7ZEEz1k?start=51&end=68",
  },
  {
    //Tommy Boy
    date: "05082023",
    quote: "My shoulder doesn't hurt very much, but my face does.",
    id: 11381,
    src: "https://www.youtube.com/embed/jvBjBjRF0js?start=11&end=33",
  },
  {
    //Kingpin
    date: "05072023",
    quote:
      "Ok, Ok. Keep your shirt on. I mean I can figue some things out for myself.",
    id: 11543,
    src: "https://www.youtube.com/embed/28vEFPAmGwU?start=16&end=40",
  },
  {
    //Big Daddy
    date: "05062023",
    quote: "Fish... Pony... Hip... Hip hop... Hip hop anonymous?",
    id: 9032,
    src: "https://www.youtube.com/embed/vvWxsckzPws?start=11",
  },
  {
    //Step Brothers
    date: "05052023",
    quote:
      "Then I'm gonna try to get a job at Enterprise Rent-A-Car, because they got an excellent corporate structure and they... they give you the tools to be your own boss.",
    id: 12133,
    src: "https://www.youtube.com/embed/D9ByiElOjLY",
  },
  {
    //Black Sheep
    date: "05042023",
    quote: "Whoa, what happened to you? You fall into some mud or something?",
    id: 13997,
    src: "https://www.youtube.com/embed/LYN8BXmb6h4",
  },
  {
    //Good Will Hunting
    date: "05032023",
    quote: "I swallowed a bug.",
    id: 489,
    src: "https://www.youtube.com/embed/CuYWp05KHOQ?start=2",
  },
  {
    //The Usual Suspects
    date: "05022023",
    quote:
      "The greatest trick the Devil ever pulled was convincing the world he didn't exist.",
    id: 629,
    src: "https://www.youtube.com/embed/cgVdLKw1o0E?start=119&end=127",
  },
  {
    //Gone In Sixty Seconds
    date: "05012023",
    quote:
      "I just stole fifty cars in one night! I'm a little tired, little wired, and I think I deserve a little appreciation!",
    id: 9679,
    src: "https://www.youtube.com/embed/eZS2fPUsbhs?start=5&end=14",
  },
  {
    //Airplane!
    date: "04302023",
    quote: "Surely you can't be serious?",
    id: 813,
    src: "https://www.youtube.com/embed/Qo7qoonzTCE?start=7&end=15",
  },
  {
    //Glengarry Glen Ross
    date: "04292023",
    quote:
      "You're such a hero, you're so rich, how come you're coming down here wasting your time with such a bunch of bums?",
    id: 9504,
    src: "https://www.youtube.com/embed/RmhG3Z2Pv40?start=37&end=42",
  },
  {
    //Top Gun
    date: "04282023",
    quote: "I feel the need, the need for speed (weak high five).",
    id: 744,
    src: "https://www.youtube.com/embed/BbMxNjI2J4U?start=94&end=101",
  },
  {
    //Super Troopers
    date: "04272023",
    quote: "Liter-a-cola, do we make liter-a-cola?",
    id: 39939,
    src: "https://www.youtube.com/embed/0zgTcrZ5030?start=37&end=49",
  },
  {
    //The Nutty Professor
    date: "04262023",
    quote: "Spandex! All Spandex! Where's the Spandex section?",
    id: 9327,
    src: "https://www.youtube.com/embed/_Q4KExGwf9g?start=52&end=60",
  },
  {
    //Ferris Bueller's Day Off
    date: "04252023",
    quote:
      "A: You can never go too far. B: If I'm gonna get busted, it is not gonna be by a guy like that.",
    id: 9377,
    src: "https://www.youtube.com/embed/zYq2aXmqBJs?start=24&end=30",
  },
  {
    //DodgeBall: A True Underdog Story
    date: "04242023",
    quote: "It's a bold strategy Cotton, let's see if it pays off for 'em.",
    id: 9472,
    src: "https://www.youtube.com/embed/9HVejEB5uVk",
  },
  {
    //Boiler Room
    date: "04232023",
    quote:
      "Put your confidence in myself and J.T. Marlin... and I'm telling you, you will never have to ask for it again.",
    id: 14181,
    src: "https://www.youtube.com/embed/FP28lB0I0pE?start=17&end=25",
  },
  {
    //Ghost Busters
    date: "04222023",
    quote: "Human sacrifice, dogs and cats living together... MASS HYSTERIA!",
    id: 620,
    src: "https://www.youtube.com/embed/qx73vTi5aFo?start=22&end=36",
  },
  {
    //Billy Madison
    date: "04212023",
    quote: "If peeing your pants is cool, consider me Miles Davis.",
    id: 11017,
    src: "https://www.youtube.com/embed/siCNdfH9U40?",
  },
  {
    //Caddyshack
    date: "04202023",
    quote: "We have a pool and a pond.  A pond would be good for you.",
    id: 11977,
    src: "https://www.youtube.com/embed/9tFNbncymjY?end=11",
  },
  {
    //Wall Street
    date: "04192023",
    quote:
      "The most valuable commodity I know of is information. Wouldn't you agree?",
    id: 10673,
    src: "https://www.youtube.com/embed/7tZBkOtIYkU?start=13&end=20",
  },
  {
    //Catch Me If You Can
    date: "04182023",
    quote: "Stop chasing me!",
    id: 640,
    src: "https://www.youtube.com/embed/pRi-o9-utSE?start=58&end=65",
  },
  {
    //Old School
    date: "04172023",
    quote:
      "What, I thought we were in the trust tree in the nest, were we not?",
    id: 11635,
    src: "https://www.youtube.com/embed/umkovqvw714?start=81&end=86",
  },
  {
    //Billy Madison
    date: "04162023",
    quote: "Who would steal thirty bagged lunches?",
    id: 11017,
    src: "https://www.youtube.com/embed/x5bVrHiPSzw?end=13",
  },
  {
    //The Usual Suspects
    date: "04152023",
    quote: "Do your friend a favor. Tell him to keep quiet.",
    id: 629,
    src: "https://www.youtube.com/embed/cgVdLKw1o0E?start=17&end=22",
  },
  {
    //Dirty Work
    date: "04142023",
    quote: "You look like a bucket of lard on a bad day.",
    id: 14577,
    src: "https://www.youtube.com/embed/H05_PEKO7H4?start=50&end=60",
  },
  {
    //Good Will Hunting
    date: "04132023",
    quote:
      "Sean, if the Professor calls about that job, just tell him, sorry, I have to go see about a girl.",
    id: 489,
    src: "https://www.youtube.com/embed/7TeQgzN6OlA?start=41&end=49",
  },
];

// Get today's date in the format of "Month day, year"
const todayIs = new Date();
const month = todayIs.getMonth() + 1; // add 1 because getMonth() returns 0-based index
const day = todayIs.getDate();
const year = todayIs.getFullYear();
var today = `${month.toString().padStart(2, "0")}${day
  .toString()
  .padStart(2, "0")}${year}`.toString();

var todaysQuote = quotesOfTheDay.find((quote) => quote.date === today);
const urlParams = new URLSearchParams(window.location.search);
const date = urlParams.get("date"); // Assumes the URL is in the format .com?date=04202023

const quote = quotesOfTheDay.find((q) => q.date === date);

if (quote) {
  console.log("success");
  // Replace with your display code
  today = date;
  todaysQuote = quotesOfTheDay.find((quote) => quote.date === today);
} else {
  console.log("No quote found for that date");
}

let id;

// START TRY ANOTHER BUTTON
let previousDate = null; // Initialize previous date to null

function setRandomDate() {
  // Generate a random date within a range (April 1, 2023 to April 30, 2023)
  const startDate = new Date(2023, 3, 12); // Note: month is 0-based index
  const endDate = new Date();
  let randomDate = null;

  // Loop until a different date is generated
  do {
    randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
  } while (
    previousDate !== null &&
    randomDate.getTime() === previousDate.getTime()
  );

  // Update previous date to the new date
  previousDate = randomDate;

  // Format the date as a string in the format "MMddyyyy"
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");
  const year = String(randomDate.getFullYear());
  const dateString = `${month}${day}${year}`;

  // Set the URL parameter
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set("date", dateString);
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${queryParams}`
  );

  location.reload();
}
//END TRY ANOTHER BUTTON

// Loop through the quotesOfTheDay array
for (let i = 0; i < quotesOfTheDay.length; i++) {
  // Check if the date property matches today's date
  if (quotesOfTheDay[i].date === today) {
    id = quotesOfTheDay[i].id;
    // Do something with the ID, e.g. fetch movie data and display it
    break; // exit the loop since we found a match
  }
}

//THE MOVIE DATABASE MAGIC
const apiKey = "fe02516c84b34aff3bd02db47d61ec88";
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

//SUGGESTIONS ENGINE
const searchInput = document.getElementById("guess");
const suggestionsList = document.getElementById("suggestions");
const container = document.getElementById("guess-form");

let addedTitles = []; // keep track of the titles that have already been added to the list
let selectedSuggestion = -1; // keep track of the currently selected suggestion

searchInput.addEventListener("input", () => {
  const query = searchInput.value;

  // Clear any previous suggestions and the addedTitles array
  suggestionsList.innerHTML = "";
  addedTitles = [];
  selectedSuggestion = -1;

  // Make a request to the Movie Database API to get movie suggestions based on the user input
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = data.results.slice(0, 3); // Get the top 3 results

      // Create a list item for each suggestion and append it to the suggestions list if its title has not already been added
      results.forEach((movie) => {
        if (!addedTitles.includes(movie.title) && addedTitles.length < 3) {
          const listItem = document.createElement("li");
          listItem.textContent = movie.title;
          suggestionsList.appendChild(listItem);
          addedTitles.push(movie.title);
        }
      });

      // Display the suggestions list if there are suggestions, hide it otherwise
      if (addedTitles.length > 0) {
        suggestionsList.style.display = "block";
      } else {
        suggestionsList.style.display = "none";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// When a suggestion is clicked, populate the search input with the movie title and hide the suggestions list
suggestionsList.addEventListener("click", (event) => {
  const clickedItem = event.target;
  const selectedTitle = clickedItem.textContent;
  searchInput.value = selectedTitle;
  suggestionsList.style.display = "none";
});


// Handle arrow key selection
searchInput.addEventListener("keydown", (event) => {
  if (addedTitles.length > 0) {
    if (event.key === "ArrowDown") {
      // Move selection down if possible
      if (selectedSuggestion < addedTitles.length - 1) {
        selectedSuggestion++;
        highlightSuggestion();
      }
    } else if (event.key === "ArrowUp") {
      // Move selection up if possible
      if (selectedSuggestion > 0) {
        selectedSuggestion--;
        highlightSuggestion();
      }
    } else if (event.key === "Enter") {
      // Check if input value matches any suggestion, otherwise use the input value
      const inputValue = searchInput.value;
      const matchingSuggestion = addedTitles.find((suggestion) => suggestion === inputValue);
      const selectedTitle = matchingSuggestion || inputValue;
    
      // Populate the search input with the selected title and hide the suggestions
      searchInput.value = selectedTitle;
      suggestionsList.style.display = "none";
    }
    
  }
});

// Highlight the currently selected suggestion
function highlightSuggestion() {
  const suggestionItems = suggestionsList.getElementsByTagName("li");
  for (let i = 0; i < suggestionItems.length; i++) {
    if (i === selectedSuggestion) {
      suggestionItems[i].classList.add("selected");
      searchInput.value = suggestionItems[i].textContent;
    } else {
      suggestionItems[i].classList.remove("selected");
    }
  }
}


// Hide the suggestions box when the user clicks outside of it
document.addEventListener("click", (event) => {
  if (!container.contains(event.target)) {
    suggestionsList.style.display = "none";
  }
});

let cast = [];

//DAILY DATA STUFF
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const title = data.title;
    const tagline = data.tagline;
    const release_date = data.release_date;
    const genre = data.genres.map((genre) => genre.name).join(", ");
    const runtime = data.runtime;
    const overview = data.overview;
    const posterPath = data.poster_path;
    const posterUrl = "https://image.tmdb.org/t/p/w500" + posterPath;

    // Cast
    fetch(
      `https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((credits) => {
        console.log(credits);
        cast = credits.cast
          .slice(0, 1)
          .map((cast) => cast.name)
          .join(", ");

        //HINTS START HERE
        const hints = [release_date, genre, cast, tagline, overview]; // Array of hints
        const hintsCount = hints.length;

        let currentHint = 0; // Current hint index
        const closeButton =
          '<span aria-hidden="true"><i class="bi bi-x-circle close hint-exit" aria-label="Close" onclick="hideHint()""></i></span>';

        const hintButton = document.getElementById("hint-button");

        hintButton.addEventListener("click", function () {
          // Your code here

          if (numberOfHints < hintsCount && success == false) {
            numberOfHints = numberOfHints + 1;
          }
          document.getElementById("hint-count").textContent =
            numberOfHints.toString();

          const hintElement = document.getElementById("hint");
          hintElement.style.display = "block";

          // Set the hint text to the current hint and increment the counter
          const hintLabels = [
            "Release Date:",
            "Genre(s):",
            "Starring:",
            "Tagline:",
            "Overview:",
          ]; // Array of hint labels
          hintElement.innerHTML =
            closeButton +
            "<strong>" +
            hintLabels[currentHint] +
            "</strong> " +
            hints[currentHint];

          currentHint = (currentHint + 1) % hints.length; // Wrap around to the beginning of the array if necessary
        });
      })
      .catch((error) => {
        console.log(error);
      });

    var elements = document.getElementsByClassName("title");
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = title;
    }
    var elements = document.getElementsByClassName("overview");
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = overview;
    }
    document.getElementById("poster").setAttribute("src", posterUrl);

    //DISPLAY TODAY'S DATE AND QUOTE
    document.getElementById("quote").textContent =
      '"' + todaysQuote.quote + '"';

    const dateString = todaysQuote.date;
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[parseInt(dateString.substr(0, 2), 10) - 1];
    const day = parseInt(dateString.substr(2, 2), 10);
    const year = parseInt(dateString.substr(4, 4), 10);

    const formattedDate = `${month} ${day}, ${year}`;

    document.getElementById("date").textContent = formattedDate;

    //YOUTUBE
    document.getElementById("youTube").src = todaysQuote.src;

    var success = false;
    const form = document.getElementById("guess-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the user's answer from the input box
      const userAnswer = document.getElementById("guess").value;

      // Check if the user's answer matches the movie title
      if (userAnswer.toLowerCase().trim() === title.toLowerCase().trim()) {
        // If the answer is correct, show the "answer" element
        success = true;
        console.log("succes");
        document.getElementById("fail").style.display = "none";
        document.getElementById("answer").style.height = "auto";
        document.getElementById("answer").style.opacity = "1";
        document.getElementById("answer").style.transition = "opacity .3s";
        const modal = document.getElementById("answerModal");
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();

        document.getElementById("guess-count").textcontent = "numberOfGuesses";

        // Get the og:title meta tag
        var ogTitle = document.querySelector('meta[property="og:title"]');
        // Set the new title value
        var newTitle =
          "Guesses: " +
          numberOfGuesses.toString() +
          ", Hints: " +
          numberOfHints.toString();
        // Set the content attribute of the og:title meta tag to the new title value
        ogTitle.setAttribute("content", newTitle);

        // If the answer is incorrect, show an error message
        document.getElementById("error-message").style.display = "none";
        document.getElementById("error-message").textContent = "";
      } else {
        // If the answer is incorrect, show an error message
        document.getElementById("error-message").style.display = "block";
        document.getElementById("error-message").textContent =
          "Sorry, that answer is incorrect. Click above for a hint.";
        // Hide error message after 2 seconds
        setTimeout(function() {
          document.getElementById("error-message").style.display = "none";
        }, 3000);
        // If the answer is correct, show the "answer" element
        document.getElementById("answer").style.height = "0";
        document.getElementById("answer").style.opacity = "0";
      }

      if (success == false) {
        numberOfGuesses = numberOfGuesses + 1;
      }
      document.getElementById("guess-count").textContent =
        numberOfGuesses.toString();
    });
  })
  .catch((error) => {
    console.log(error);
  });

function hideHint() {
  const hintElement = document.getElementById("hint");
  hintElement.style.display = "none";
}

//HIDE STATS WHEN USER GIVES UP
document.getElementById("fail").addEventListener("click", function() {
  const statsElements = document.getElementsByClassName("fail");
  for (let i = 0; i < statsElements.length; i++) {
    statsElements[i].style.display = "none";
  }
});


var numberOfHints = 0;
var numberOfGuesses = 1;

//STOP YOUTUBE VIDEO WHEN MODAL CLOSES
var myModal = document.getElementById("answerModal");
myModal.addEventListener("hide.bs.modal", function (event) {
  document.getElementById("youTube").src = todaysQuote.src;
});

//WEB SHARE API
const shareButton = document.querySelector("#share-button");
const imgElement = document.querySelector("#image");

if (navigator.share) {
  shareButton.addEventListener("click", async () => {
    try {
      // Fetch the image file and convert it to a Blob
      if (numberOfGuesses == 1 && numberOfHints == 0) {
        var response = await fetch("img/results/G1H0.png");
      } else if (numberOfGuesses == 1 && numberOfHints == 1) {
        var response = await fetch("img/results/G1H1.png");
      } else if (numberOfGuesses == 1 && numberOfHints == 2) {
        var response = await fetch("img/results/G1H2.png");
      } else if (numberOfGuesses == 1 && numberOfHints == 3) {
        var response = await fetch("img/results/G1H3.png");
      } else if (numberOfGuesses == 1 && numberOfHints == 4) {
        var response = await fetch("img/results/G1H4.png");
      } else if (numberOfGuesses == 1 && numberOfHints == 5) {
        var response = await fetch("img/results/G1H5.png");
      } else if (numberOfGuesses == 1 && numberOfHints > 5) {
        var response = await fetch("img/results/G1H5+.png");
      } else if (numberOfGuesses == 2 && numberOfHints == 0) {
        var response = await fetch("img/results/G2H0.png");
      } else if (numberOfGuesses == 2 && numberOfHints == 1) {
        var response = await fetch("img/results/G2H1.png");
      } else if (numberOfGuesses == 2 && numberOfHints == 2) {
        var response = await fetch("img/results/G2H2.png");
      } else if (numberOfGuesses == 2 && numberOfHints == 3) {
        var response = await fetch("img/results/G2H3.png");
      } else if (numberOfGuesses == 2 && numberOfHints == 4) {
        var response = await fetch("img/results/G2H4.png");
      } else if (numberOfGuesses == 2 && numberOfHints == 5) {
        var response = await fetch("img/results/G2H5.png");
      } else if (numberOfGuesses == 2 && numberOfHints > 5) {
        var response = await fetch("img/results/G2H5+.png");
      } else if (numberOfGuesses == 3 && numberOfHints == 0) {
        var response = await fetch("img/results/G3H0.png");
      } else if (numberOfGuesses == 3 && numberOfHints == 1) {
        var response = await fetch("img/results/G3H1.png");
      } else if (numberOfGuesses == 3 && numberOfHints == 2) {
        var response = await fetch("img/results/G3H2.png");
      } else if (numberOfGuesses == 3 && numberOfHints == 3) {
        var response = await fetch("img/results/G3H3.png");
      } else if (numberOfGuesses == 3 && numberOfHints == 4) {
        var response = await fetch("img/results/G3H4.png");
      } else if (numberOfGuesses == 3 && numberOfHints == 5) {
        var response = await fetch("img/results/G3H5.png");
      } else if (numberOfGuesses == 3 && numberOfHints > 5) {
        var response = await fetch("img/results/G3H5+.png");
      } else if (numberOfGuesses == 4 && numberOfHints == 0) {
        var response = await fetch("img/results/G4H0.png");
      } else if (numberOfGuesses == 4 && numberOfHints == 1) {
        var response = await fetch("img/results/G4H1.png");
      } else if (numberOfGuesses == 4 && numberOfHints == 2) {
        var response = await fetch("img/results/G4H2.png");
      } else if (numberOfGuesses == 4 && numberOfHints == 3) {
        var response = await fetch("img/results/G4H3.png");
      } else if (numberOfGuesses == 4 && numberOfHints == 4) {
        var response = await fetch("img/results/G4H4.png");
      } else if (numberOfGuesses == 4 && numberOfHints == 5) {
        var response = await fetch("img/results/G4H5.png");
      } else if (numberOfGuesses == 4 && numberOfHints > 5) {
        var response = await fetch("img/results/G4H5+.png");
      } else if (numberOfGuesses == 5 && numberOfHints == 0) {
        var response = await fetch("img/results/G5H0.png");
      } else if (numberOfGuesses == 5 && numberOfHints == 1) {
        var response = await fetch("img/results/G5H1.png");
      } else if (numberOfGuesses == 5 && numberOfHints == 2) {
        var response = await fetch("img/results/G5H2.png");
      } else if (numberOfGuesses == 5 && numberOfHints == 3) {
        var response = await fetch("img/results/G5H3.png");
      } else if (numberOfGuesses == 5 && numberOfHints == 4) {
        var response = await fetch("img/results/G5H4.png");
      } else if (numberOfGuesses == 5 && numberOfHints == 5) {
        var response = await fetch("img/results/G5H5.png");
      } else if (numberOfGuesses == 5 && numberOfHints > 5) {
        var response = await fetch("img/results/G5H5+.png");
      } else if (numberOfGuesses > 5 && numberOfHints == 0) {
        var response = await fetch("img/results/G5+H0.png");
      } else if (numberOfGuesses > 5 && numberOfHints == 1) {
        var response = await fetch("img/results/G5+H1.png");
      } else if (numberOfGuesses > 5 && numberOfHints == 2) {
        var response = await fetch("img/results/G5+H2.png");
      } else if (numberOfGuesses > 5 && numberOfHints == 3) {
        var response = await fetch("img/results/G5+H3.png");
      } else if (numberOfGuesses > 5 && numberOfHints == 4) {
        var response = await fetch("img/results/G5+H4.png");
      } else if (numberOfGuesses > 5 && numberOfHints == 5) {
        var response = await fetch("img/results/G5+H5.png");
      } else if (numberOfGuesses > 5 && numberOfHints > 5) {
        var response = await fetch("img/results/G5+H5+.png");
      } else {
        var response = await fetch("img/results/G5+H5+.png");
      }
      const blob = await response.blob();

      // Create a new File object from the Blob
      const file = new File([blob], "MQOTD.png", { type: "image/png" });

      // Share the data including the file
      await navigator.share({
        text: '"The greatest trick the Devil ever pulled was convincing the world he didn\'t exist."\r\n\r\nG: ❌✅⬜️⬜️⬜️\r\n\r\nH: ☑️☑️⬜️⬜️⬜️\r\n\r\nmqotd.com/?date=05022023'
        //title: 'MQOTD',
        //text: 'MQOTD: Guesses: ' + numberOfGuesses.toString() + ', Hints: ' + numberOfHints.toString(),
        //url: 'https://moviequoteoftheday.com/',
        //files: [file],
      });

      console.log("Successful share");
    } catch (error) {
      console.log("Error sharing:", error);
    }
  });
} else {
  // Web Share API is not supported, provide a fallback option
  document
    .getElementById("share-button")
    .addEventListener("click", function () {
      const textToCopy =
        "MQOTD: Guesses: " +
        numberOfGuesses.toString() +
        ", Hints: " +
        numberOfHints.toString();
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => alert("Copied stats to clipboard!"))
        .catch((error) => console.log("Error copying text:", error));
    });
}
