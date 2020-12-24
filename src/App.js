import {useState, useEffect} from 'react';
import Navbar from './Navbar.js';
import axios from 'axios';
import './App.css';

function App(props) {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8888/pelis/')
    .then(res => setMovies(res.data))
    .catch(e => console.log(e))
  }, [])

  const movies_to_show = movies.map((aMovie, i) => <Movie data={aMovie} key={i} />)

  return (
    <div className={"app-container"}>
      <Navbar history={props.history}/>
        <div className={"movie-poster-container"}>
        {movies_to_show}
        </div>
      </div>
  );
}

export default App;


function Movie(props) {
    const [votes, setVotes] = useState(props.data.votes)

    function send_votes(){
        axios({
            method: 'POST',
            url: 'http://localhost:8888/vote',
            data: {
                title: props.data.title,
                votes: votes
            }
        }).then(res => console.log(res.data)).catch(e => console.log(e))
    }
    return(
        <div>
            <img src={"https://image.tmdb.org/t/p/w200/" + props.data.poster_path} alt = ""/>
            <div className={"movie-title-votes"}>
                <div>{props.data.title}</div>
                <div>
                    {votes}
                        <br/>
                        <div className={"suma-resta-container"}>
                            <button className={"add-button"} onClick={() =>votes < 11 ? setVotes(votes => votes + 1): null}>+</button>
                            <button className={"subtraction-button"} onClick={()=> votes > 0 ? setVotes(votes => votes - 1): null}>-</button>
                        </div>
                            <button className={"send-votes-button"}
                                    onClick={()=> send_votes()}>send votes</button>
                    </div>
                </div>
        </div>
    )
}