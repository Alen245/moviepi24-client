// Import the useState hook from the React library
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

// Define a new component called MainView
export const MainView = () => {

    // Declare a new state variable called "movies" using the useState hook
    // The initial value is an array of movie objects with "id" and "title" properties
    const [movies, setMovies] = useState([
        { id: 1, title: "The Godfather" },
        { id: 2, title: "The Shawshank Redemption" },
        { id: 3, title: "The Dark Knight" },
        { id: 4, title: "Pulp Fiction" },
        { id: 5, title: "The Lord of the Rings: The Return of the King" }
    ]);

    // If the movies array is empty, return a div with "The list is empty!" text
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    // If the movies array is not empty, map over the movies and return a div with the movie title for each movie
    return (
        <div>
            {movies.map((movie) => {
                <MovieCard movie={movie} />
            })}
        </div>
    );
};
