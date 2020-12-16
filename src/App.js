import {Fragment, useState, useEffect} from 'react';
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
    <Fragment>
      <Navbar history={props.history}/>
        {movies_to_show}
      </Fragment>
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
            <div>{props.data.title}</div>
            <img src={""} alt = ""/>
            <div>
                {votes}
                <button onClick={() =>votes < 11 ? setVotes(votes => votes + 1): null}>+</button>
                <button onClick={()=> votes > 0 ? setVotes(votes => votes - 1): null}>-</button>
                <button onClick={()=> send_votes()}>send votes</button>
            </div>
        </div>
    )
}