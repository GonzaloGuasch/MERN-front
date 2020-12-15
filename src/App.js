import {Fragment, useState, useEffect} from 'react';
import Draggable from 'react-draggable';
import Navbar from './Navbar.js';
import axios from 'axios';
import './App.css';

function App(props) {
  const [movie, setMovie] = useState({})
  const [votes, setVotes] = useState(0)

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/426426?api_key=b364c5199fdbafb18d6cad1cff37bcbb')
    .then(res => setMovie(res.data))
    .catch(e => console.log(e))
  }, [])

  return (
    <Fragment>
      <Navbar history={props.history}/>
    <Draggable>
     <div>
        <div>{movie.original_title}</div>
        <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} alt = ""/>
        <div>
          {votes}
          <button onClick={() => setVotes(votes => votes + 1)}>+</button>
          <button onClick={()=> votes > 0 ? setVotes(votes => votes - 1): null}>-</button>
        </div>
      </div>
      </Draggable>
      </Fragment>
  );
}

export default App;
