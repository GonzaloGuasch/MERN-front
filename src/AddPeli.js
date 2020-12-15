import React, {useState} from 'react';
import axios from 'axios';

function AddPeli(props) {
    const [new_movie_id, set_new_movie_id] = useState('');
    const [movie_name, set_movie_name] = useState('');

    function addMovie() {
        axios.get('https://api.themoviedb.org/3/movie/' + new_movie_id + '?api_key=b364c5199fdbafb18d6cad1cff37bcbb')
        .then(res => set_movie_name(res.data.original_title))
        .catch(e => console.log(e))
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            addMovie();
        }
    }

    return(
        <div>
            <input  type="text"
                    placeholder={"Movie id"}
                    value={new_movie_id}
                    onKeyDown={handleEnter}
                    onChange={(e) => set_new_movie_id(e.target.value)}/>
            <button onClick={() => addMovie()}>Add</button>
            <button onClick={() => set_new_movie_id(new_movie_id => '')}>cancel</button>
            <div>{movie_name}</div>
        </div>
    );
}



export default AddPeli;