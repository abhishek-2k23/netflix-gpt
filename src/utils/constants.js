export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
  },
}

export function getMatchingMovies(movies, moviesNameArray) {
  // Flatten the array of arrays into a single array of movie objects
  const allMovies = movies.flat()

  // Normalize the moviesNameArray for case-insensitive matching
  const normalizedMoviesNameArray = moviesNameArray.map((name) =>
    name.trim().toLowerCase()
  )

  // Filter movies where the title or original_title matches the normalized name
  const matchingMovies = allMovies.filter((movie) => {
    const normalizedOriginalTitle = movie.original_title.trim().toLowerCase()
    const normalizedTitle = movie.title.trim().toLowerCase()

    // Check if either original_title or title matches any name in moviesNameArray
    // only consider english movies
    return (
      normalizedMoviesNameArray.includes(normalizedOriginalTitle) ||
      (movie.original_language === "en" &&
        normalizedMoviesNameArray.includes(normalizedTitle))
    )
  })

  return matchingMovies
}
