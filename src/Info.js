import React from 'react';
import './Info.css';
import uno from '../src/images/1.png';
import tres from '../src/images/3.png';
import cuatro from '../src/images/4.png';

export default function Info(props) {
    return(
        <div className={"info-container"}>
            <button onClick={() => props.history.push("/")}>BACK</button>
            <p className={"text"}>
                Para subír una peli, tenes que entrar en <a href={"https://www.themoviedb.org/"}>The movie database</a>
            </p>
            <img className={"img-size"} src={uno} alt={"1"} />
            <p className={"text"}>
                Una vez en la página tenes que buscar la peli que quieras agregar, yo busque una que me gusta
            </p>
            <img className={"img-size"} src={tres} alt={"3"} />
            <p className={"text"}>
                Ahora solo tenes que copiar de la URL el id que aparece entre el nombre y el path(solamente los numeros)
            </p>
            <img className={"img-size"} src={cuatro} alt={"4"} />
            <button onClick={() => props.history.push("/")}>BACK</button>
        </div>
    )
}