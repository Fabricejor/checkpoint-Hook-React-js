import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
import Players from "./players";
import "./assets/style/PlayerList.css"

// LISTE OFFFICIEL DES TITULAIRES DU MATCH DE LA CHAMPIONS FOOT DE RUE LEAGUE
function PlayerList() {
    return (
        <div>
            <h1 className="text-center text-primary" >
                {" "}
                Fifa Card :Liste de mes joeurs{" "}
            </h1>
            {/* ON va faire en sorte d'appeler le composant Players en lui passant en parametres tous les elements de player */}
            {/* pour appliquer une operation a chaque element du tableau on applique la fonction ES6 map */}
            <div className="div" >
                {Players.map((ply) => (
                    // <Player key={player.id} {...player} />// spread pour appliquer a tous les objects du tableau
                    <Player key={ply.id} name={ply.name}  position={ply.position} team = {ply.team} age = {ply.age} imageUrl={ply.imageUrl}/>
                ))}
            </div>
        </div>
    );
}
export default PlayerList;
