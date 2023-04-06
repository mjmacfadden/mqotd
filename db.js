// Get today's date in the format of "Month day, year"
const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const quoteOfTheDay = [
    {
      date: "April 7, 2023",
      quote: "Stop chasing me!",
      movie: "Catch Me If You Can",
      id: 640,
      src: "https://www.youtube.com/embed/pRi-o9-utSE?start=58&end=60",
    },
    {
      date: "April 6, 2023",
      quote: "The most valuable commodity I know of is information. Wouldn't you agree?",
      movie: "Wall Street",
      id: 10673,
      src: "https://www.youtube.com/embed/7tZBkOtIYkU?start=13&end=20",
    },
  ];
  
  let id;
  
  // Loop through the quoteOfTheDay array
  for (let i = 0; i < quoteOfTheDay.length; i++) {
    // Check if the date property matches today's date
    if (quoteOfTheDay[i].date === today) {
      id = quoteOfTheDay[i].id;
      // Do something with the ID, e.g. fetch movie data and display it
      break; // exit the loop since we found a match
    }
  }
  
  const apiKey = 'fe02516c84b34aff3bd02db47d61ec88';
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const title = data.title;
      const tagline = data.tagline;
      const runtime = data.runtime;
      const posterPath = data.poster_path;
      const posterUrl = 'https://image.tmdb.org/t/p/w500' + posterPath;
  
      document.getElementById('title').textContent = title;
      document.getElementById('tagline').textContent = tagline;
      document.getElementById('poster').setAttribute('src', posterUrl);
    })
    .catch(error => {
      console.log(error);
    });
  