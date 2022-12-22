import './App.css';
import Cards from './components/cards';
import {datas} from './data';

function App() {
  const movielist= datas.movies;
  return (
    <div className="container">
      <div className='card-container'>
      {
        movielist && movielist.map((movies)=>
        ( <Cards key={movies.id} movieName={movies.title} casts={movies.actors} director={movies.director} image={movies.posterUrl}/>)   
        )
      }
      </div>
    </div>
  );
}

export default App;
