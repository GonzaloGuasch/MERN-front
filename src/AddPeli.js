import React, {useState} from 'react';
import axios from 'axios';

function AddPeli() {
    const [new_movie_id, set_new_movie_id] = useState('');

    function save_movie(movie_info){
        axios({
            method: 'POST',
            url: 'http://localhost:8888/peli',
            data: {
                title: movie_info.original_title,
                poster_path: movie_info.poster_path
            }
        }).then(() => alert("UPLOAD BRO"))
          .catch(() => alert("Something went wrong :c"))
    }

    function addMovie() {
        axios.get('https://api.themoviedb.org/3/movie/' + new_movie_id + '?api_key=b364c5199fdbafb18d6cad1cff37bcbb')
        .then(res => save_movie(res.data))
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
        </div>
    );
}



export default AddPeli;