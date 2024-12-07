
 // TITTLE CHANGE
 const tittle = document.getElementById("tittle");
 tittle.innerText = "LIBROS DE STEPHEN KING";

 //CONTENT

 let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

 function addToFav(book) {
     const btn = document.getElementById("btn" + book.id);
     if (favorites.some(el => el.id === book.id)) {
         let newFavorites = favorites.filter(el => el.id !== book.id);
         favorites = newFavorites;
         Swal.fire("Has eliminado " + book.name + " de tus Favoritos");
         btn.innerText = "AÑADIR";
     } else {
         favorites.push(book);
         Swal.fire("Has agregado " + book.name + " a tus Favoritos");
         btn.innerText = "REMOVER";
     };
     localStorage.setItem(("favorites"), JSON.stringify(favorites));
 };

let books = document.getElementsByClassName("books");

fetch('books.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            const card = document.createElement("div");
            const name = document.createElement("h3");
            const genre = document.createElement("p");

            const favButton = document.createElement("button");
            favButton.id = "btn" + el.id
            if (favorites.some(book => book.id === el.id)) {
                favButton.innerText = "REMOVER";
            } else {
                favButton.innerText = "AÑADIR";
            };
            favButton.addEventListener("click", () => addToFav(el));

            card.className = "book-card";
            name.innerText = el.name;
            genre.innerText = `Género: ${el.genre}`;

            card.appendChild(name);
            card.appendChild(genre);

            containerCard.appendChild(card);

            card.appendChild(favButton);
        });
    })
    .catch(err => console.error(err))

// ADD "SEE FAVOURITES BUTTON"

//function showFavorites(){
    //favorites.forEach(el=>{
  //  };
//};

