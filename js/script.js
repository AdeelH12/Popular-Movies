var url = "https://api.themoviedb.org/3/movie/popular?api_key=f1d314280284e94ff7d1feeed7d44fdf&language=en-US&page=1";
var img  = "https://image.tmdb.org/t/p/w500/"


var request = new XMLHttpRequest();     // New instance of XMLHttpRequest
request.open('GET', url, true);         // Open the connection using the 'GET' Method
request.onload = function(){          // Create an onload function this is where the data is displayed on the webpage

    var data = JSON.parse(this.response);    // Creating a data variable where our JSON is parsed and stored.

    if(request.status >= 200 && request.status < 400){      // Check the request status.

        
        data.results.forEach(results => {                   //Looping through the JSON Array

            const row = document.getElementById('row');     //Refering back to the row which was created in HTML

            const posterImg = document.createElement('img');    // Creating an image element to store the poster of the movie
            posterImg.setAttribute('id', 'movie-poster');       // Setting an 'id' to the posterImg 
            posterImg.src= img + results.poster_path;           // Setting the image to the posterImg
            row.appendChild(posterImg);                         // Appending the posterImg to the row so we can see it in the web page

            const movieTitle = document.createElement('h2');
            movieTitle.setAttribute('id', 'movieTitle');
            movieTitle.textContent = results.title;
            row.appendChild(movieTitle);

            const movieRating = document.createElement('p');
            movieRating.setAttribute('id', 'movieRating');
            movieRating.textContent = 'Rating' + ' - ' + results.vote_average;
            row.appendChild(movieRating);

            const movieDesc = document.createElement('p');
            movieDesc.setAttribute('id', 'movieDesc');
            movieDesc.textContent = results.overview;
            row.appendChild(movieDesc);
        
        });
    }

}

request.send();