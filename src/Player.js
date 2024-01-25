import React from "react";
// import Players from "./players";
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/Player.css"
// FI NI on a creer un composant qui va prendre toutes les valeurs de mes joeurs de mon equipe
//  c'est comme si on a creer un objet bus avec plusieurs sieges  mais les sieges sont vide tant qu'on les associe pas
//  au joeux present dans le composant contenant le tableau des joeurs 
const Player = ({ id, name="locked unknow", position="sur le banc", team="clandestine", age="NAN" , imageUrl="https://pbs.twimg.com/media/Fkf6tR9aEAInSmD?format=jpg&name=large" }) => {
    // const Player = (props)=>{
return (
        <div className="card">
            {/* <img src={props.imageUrl} class="card-img-top" alt="profile" /> */}
            <img src={imageUrl} class="card-img-top" alt="profile" />
            <div className="card-body" >
                <h5 className="card-title">{name}</h5>
                <div className="div">
                    <h6 className="card-title h6">age: {age}<sub>ans</sub></h6>
                    <h6 className="card-title">Numero: {id} </h6>
                </div>
                <p className="card-text"> Equipe :{team}</p>
                <a href="/" className="btn btn-primary">Collectioner</a>
            </div>
        </div>
    );
};

// props.DefaultValue = {

// }

export default Player;
