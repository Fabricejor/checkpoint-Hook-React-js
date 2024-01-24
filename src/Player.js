import React from "react";
// import Players from "./players";
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// FI NI on a creer un composant qui va prendre toutes les valeurs de mes joeurs de mon equipe
//  c'est comme si on a creer un objet bus avec plusieurs sieges  mais les sieges sont vide tant qu'on les associe pas
//  au joeux present dans le composant contenant le tableau des joeurs 
const Player = ({ id, name="locked unknow", position="sur le banc", team="clandestine", age="NAN" , imageUrl="https://pbs.twimg.com/media/Fkf6tR9aEAInSmD?format=jpg&name=large" }) => {
    return (
        <div class="card" style={{ width: "18rem" , margin:10}}>
            <img src={imageUrl} class="card-img-top" alt="profile" />
            <div class="card-body" style={{backgroundColor:"#B4D4FF"}}>
                <h5 class="card-title">{name}</h5>
                <div style={{display:"flex"}}>
                    <h6 style={{paddingRight:"35%"}} class="card-title">age: {age}<sub>ans</sub></h6>
                    <h6 class="card-title">Numero: {id} </h6>
                </div>
                <p class="card-text"> Equipe :{team}</p>
                <a href="/" class="btn btn-primary">Collectioner</a>
            </div>
        </div>
    );
};

export default Player;
