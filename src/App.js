import "./App.css";
import Cards from "./components/Movies/movieCard";
import movieList from "./data";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        {movieList &&
          movieList.map((movies) => (
            <Cards
              key={movies.id}
              movieName={movies.title}
              casts={movies.actors}
              directors={movies.director}
              image={movies.posterUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
