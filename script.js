// my movies, array with object

const movies = [
  { title: "Interstellar", category: "Sci-fi", year: 2014 },
  { title: "Gladiator", category: "Action", year: 2000 },
  { title: "The Matrix", category: "Sci-fi", year: 1999 },
  { title: "Forrest Gump", category: "Drama", year: 1994 },
  { title: "Titanic", category: "Drama", year: 1997 },
];

//get div from html
const catalog = document.getElementById("catalog");

//function 1
function createCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");
  //element 1
  const title = document.createElement("h3");
  title.textContent = movie.title;
  //element 2
  const info = document.createElement("p");
  info.textContent = movie.category + " - " + movie.year;

  //buttons for each card

  const button = document.createElement("button");
  button.textContent = "Add to favorites";

  //// clicks
  button.addEventListener("click", () => {
    card.classList.toggle("favorites");

    if (card.classList.contains("favorites")) {
      button.textContent = "Remove favorites";
    } else {
      button.textContent = "Add to favorites";
    }
  });

  // --------------DELETE--------------//
    // delete button for each card
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    card.remove();
  });


  //put title and info in the card
  card.appendChild(title);
  card.appendChild(info);
  card.appendChild(button);
  card.appendChild(deleteButton);

  //put card on the page
  catalog.append(card);

  return card;
}

// createCard(movies[0]);
// createCard(movies[1]);
// createCard(movies[2]);
// createCard(movies[3]);
// createCard(movies[4]);

// loop for create card - not usable for filter, add, delete
// movies.forEach((movie) => {
//   createCard(movie);
// });


//////////////// prep for filter, add , delete ////////////

// making new function for wipe and draw cards again
function showMovies(list) {
  catalog.innerHTML = "";

  list.forEach((movie) => {
    createCard(movie);
  });
} 
showMovies(movies);



//get hamburger and nav from html
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

//  function 2
//  open and close menu on mobile

function toggleMenu() {
  nav.classList.toggle("active");
}
//click
hamburger.addEventListener("click", toggleMenu);

//------------------------------------------//

//get the drop down from html
const filter = document.querySelector("#filter");

//user picks a category
filter.addEventListener("change", () => {
  const choice = filter.value;

  if (choice === "all") {
    showMovies(movies);
  } else {
    const filtered = movies.filter((movie) => movie.category === choice);
    showMovies(filtered);
  }
});

//------------------------------------- add-------------------------------//

// get the form and its inputs
const movieForm = document.querySelector("#movieForm");
const titleInput = document.querySelector("#titleInput");
const categoryInput = document.querySelector("#categoryInput");
const yearInput = document.querySelector("#yearInput");

// function for new movie 

movieForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newMovie = {
    title: titleInput.value,
    category: categoryInput.value,
    year: Number(yearInput.value),
  };

  movies.push(newMovie);

  filter.value = "all";
  showMovies(movies);

  movieForm.reset();
});



