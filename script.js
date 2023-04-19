const quotesOfTheDay = [
  /*
  {
    date: "April , 2023",
    quote: "",
    id: ,
    src: "",
  },
  */ 

  {
    date: "April 23, 2023",
    quote: "Put your confidence in myself and J.T. Marlin... and I'm telling you, you will never have to ask for it again",
    id: 14181,
    src: "https://www.youtube.com/embed/FP28lB0I0pE?start=17&end=25",
  },
  {
    date: "April 22, 2023",
    quote: "Human sacrifice, dogs and cats living together... MASS HYSTERIA!",
    id: 620,
    src: "https://www.youtube.com/embed/qx73vTi5aFo?start=22&end=36",
  }, 
  {
    date: "April 21, 2023",
    quote: "If peeing your pants is cool, consider me Miles Davis.",
    id: 11017,
    src: "https://www.youtube.com/embed/siCNdfH9U40?",
  },
  {
    date: "April 20, 2023",
    quote: "We have a pool and a pond.  A pond would be good for you.",
    id: 11977,
    src: "https://www.youtube.com/embed/9tFNbncymjY?end=11",
  },
  {
    date: "April 19, 2023",
    quote: "The most valuable commodity I know of is information. Wouldn't you agree?",
    id: 10673,
    src: "https://www.youtube.com/embed/7tZBkOtIYkU?start=13&end=20",
  },
  {
    date: "April 18, 2023",
    quote: "Stop chasing me!",
    id: 640,
    src: "https://www.youtube.com/embed/pRi-o9-utSE?start=58&end=65",
  },
  {
    date: "April 17, 2023",
    quote: "What, I thought we were in the trust tree in the nest, were we not?",
    id: 11635,
    src: "https://www.youtube.com/embed/umkovqvw714?start=81&end=86",
  },    
  {
    date: "April 16, 2023",
    quote: "Who would steal thirty bagged lunches?",
    id: 11017,
    src: "https://www.youtube.com/embed/x5bVrHiPSzw?end=13",
  },
];


// Get today's date in the format of "Month day, year"
const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });


  const todaysQuote = quotesOfTheDay.find((quote) => quote.date === today);
  
  let id;

  
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
  const apiKey = 'fe02516c84b34aff3bd02db47d61ec88';
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

  //SUGGESTIONS ENGINE
  const searchInput = document.getElementById('guess');
  const suggestionsList = document.getElementById('suggestions');
  const container = document.getElementById('guess-form');

  let addedTitles = []; // keep track of the titles that have already been added to the list

  searchInput.addEventListener('input', () => {
    const query = searchInput.value;

    // Clear any previous suggestions and the addedTitles array
    suggestionsList.innerHTML = '';
    addedTitles = [];

    // Make a request to the Movie Database API to get movie suggestions based on the user input
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const results = data.results.slice(0, 3); // Get the top 3 results

        // Create a list item for each suggestion and append it to the suggestions list if its title has not already been added
        results.forEach(movie => {
          if (!addedTitles.includes(movie.title) && addedTitles.length < 3) {
            const listItem = document.createElement('li');
            listItem.textContent = movie.title;
            suggestionsList.appendChild(listItem);
            addedTitles.push(movie.title);
          }
        });

        // Display the suggestions list if there are suggestions, hide it otherwise
        if (addedTitles.length > 0) {
          suggestionsList.style.display = 'block';
        } else {
          suggestionsList.style.display = 'none';
        }
      })
      .catch(error => {
        console.error(error);
      });
  });

  // When a suggestion is clicked, populate the search input with the movie title and hide the suggestions list
  suggestionsList.addEventListener('click', event => {
    const clickedItem = event.target;
    const selectedTitle = clickedItem.textContent;
    searchInput.value = selectedTitle;
    suggestionsList.style.display = 'none';
  });
  
  // Hide the suggestions box when the user clicks outside of it
  document.addEventListener('click', event => {
    if (!container.contains(event.target)) {
      suggestionsList.style.display = 'none';
    }
  });

  //DAILY DATA STUFF
  fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const title = data.title;
        const tagline = data.tagline;
        const release_date = data.release_date;
        const runtime = data.runtime;
        const overview = data.overview;
        const posterPath = data.poster_path;
        const posterUrl = 'https://image.tmdb.org/t/p/w500' + posterPath;
    

        var elements = document.getElementsByClassName('title');
        for(var i=0; i<elements.length; i++) {
            elements[i].textContent = title;
        }
        var elements = document.getElementsByClassName('overview');
        for(var i=0; i<elements.length; i++) {
            elements[i].textContent = overview;
        }
        document.getElementById('poster').setAttribute('src', posterUrl);

    
        //DISPLAY TODAY'S DATE AND QUOTE
        document.getElementById('quote').textContent = '\"' + todaysQuote.quote + '\"';
        document.getElementById('date').textContent = todaysQuote.date;

        //YOUTUBE
        document.getElementById("youTube").src = todaysQuote.src;


        

        const form = document.getElementById('guess-form');
        form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
 
        // Get the user's answer from the input box
        const userAnswer = document.getElementById('guess').value;
        if (success == false){
          numberOfGuesses = numberOfGuesses + 1;
        }
        console.log('Number of Guesses:' + numberOfGuesses.toString());
        document.getElementById('guess-count').textContent = numberOfGuesses.toString();

        // Check if the user's answer matches the movie title
        if (userAnswer.toLowerCase().trim() === title.toLowerCase().trim()) {
            // If the answer is correct, show the "answer" element
            success = true;
            document.getElementById('answer').style.height = 'auto';
            document.getElementById('answer').style.opacity = '1';
            document.getElementById('answer').style.transition = 'opacity .3s';
            const modal = document.getElementById('answerModal');
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();

            document.getElementById('guess-count').textcontent = 'numberOfGuesses';


            // Get the og:title meta tag
            var ogTitle = document.querySelector('meta[property="og:title"]');
            // Set the new title value
            var newTitle = "Guesses: " + numberOfGuesses.toString() + ", Hints: " + numberOfHints.toString();
            // Set the content attribute of the og:title meta tag to the new title value
            ogTitle.setAttribute("content", newTitle);

            
            

            // If the answer is incorrect, show an error message
            document.getElementById('error-message').style.display = 'none';
            document.getElementById('error-message').textContent = '';
            console.log ('foo');
        } else {
            // If the answer is incorrect, show an error message
            console.log ('nope');
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-message').textContent = 'Sorry, that answer is incorrect. Click above for a hint.';
            // If the answer is correct, show the "answer" element
            document.getElementById('answer').style.height = '0';
            document.getElementById('answer').style.opacity = '0';
        }
        });

        const hints = [release_date, runtime, tagline, overview]; // Array of hints
        const hintsCount = hints.length;
        var success = false;
        let currentHint = 0; // Current hint index
        const closeButton = '<span aria-hidden="true"><i class="bi bi-x-circle close hint-exit" aria-label="Close" onclick="hideHint()""></i></span>';

        const hintButton = document.getElementById('hint-button');

        hintButton.addEventListener('click', function() {
            // Your code here
            console.log('Hint clicked!');

            if (numberOfHints < hintsCount){
              numberOfHints = numberOfHints + 1;
            }
            console.log('Number of Hints:' + numberOfHints.toString());
            document.getElementById('hint-count').textContent = numberOfHints.toString();

            const hintElement = document.getElementById('hint');
            hintElement.style.display = 'block'; 

            // Set the hint text to the current hint and increment the counter
            const hintLabels = ['Release Date:', 'Runtime:', 'Tagline:', 'Overview:']; // Array of hint labels
            hintElement.innerHTML = closeButton + '<strong>' + hintLabels[currentHint] + '</strong> ' + hints[currentHint];

            currentHint = (currentHint + 1) % hints.length; // Wrap around to the beginning of the array if necessary

          
        });
        

    })
    .catch(error => {
      console.log(error);
    });

    function hideHint() {
        const hintElement = document.getElementById('hint');
        hintElement.style.display = 'none';
      }


var numberOfHints = 0;
var numberOfGuesses = 0;

//STOP YOUTUBE VIDEO WHEN MODAL CLOSES
var myModal = document.getElementById('answerModal');
myModal.addEventListener('hide.bs.modal', function (event){
  document.getElementById("youTube").src = todaysQuote.src;
})

//WEB SHARE API
const shareButton = document.querySelector('#share-button');
const imgElement = document.querySelector('#image');

if (navigator.share) {
  shareButton.addEventListener('click', async () => {
    try {
      // Fetch the image file and convert it to a Blob
      if (numberOfGuesses == 1 && numberOfHints == 0){
        var response = await fetch('img/results/G1H0.png');
      } else if(numberOfGuesses == 1 && numberOfHints == 1){
        var response = await fetch('img/results/G1H1.png');
      } else if(numberOfGuesses == 1 && numberOfHints == 2){
        var response = await fetch('img/results/G1H2.png');
      } else if(numberOfGuesses == 1 && numberOfHints == 3){
        var response = await fetch('img/results/G1H3.png');
      } else if(numberOfGuesses == 1 && numberOfHints == 4){
        var response = await fetch('img/results/G1H4.png');
      } else if(numberOfGuesses == 1 && numberOfHints == 5){
        var response = await fetch('img/results/G1H5.png');
      } else if(numberOfGuesses == 1 && numberOfHints > 5){
        var response = await fetch('img/results/G1H5+.png');
      } else{
        var response = await fetch('img/results/G5+H5+.png');
      }
      const blob = await response.blob();

      // Create a new File object from the Blob
      const file = new File([blob], 'results.png', { type: 'image/png' });

      // Share the data including the file
      await navigator.share({
        //title: 'MQOTD',
        //text: 'MQOTD: Guesses: ' + numberOfGuesses.toString() + ', Hints: ' + numberOfHints.toString(),
        //url: 'https://example.com/web-share-api',
        files: [file],
      });

      console.log('Successful share');
    } catch (error) {
      console.log('Error sharing:', error);
    }
  });
} else {
  // Web Share API is not supported, provide a fallback option
  document.getElementById('share-button').addEventListener('click', function() {
    const textToCopy = 'MQOTD: Guesses: ' + numberOfGuesses.toString() + ', Hints: ' + numberOfHints.toString();
    navigator.clipboard.writeText(textToCopy)
    .then(() => alert('Copied stats to clipboard!'))
    .catch((error) => console.log('Error copying text:', error));
  });
}