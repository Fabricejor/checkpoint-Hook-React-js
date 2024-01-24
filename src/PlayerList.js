import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
import Players from "./players";

// LISTE OFFFICIEL DES TITULAIRES DU MATCH DE LA CHAMPIONS FOOT DE RUE LEAGUE
function PlayerList() {
    return (
        <div>
            <h1 className="text-center text-primary" style={{ marginBottom: 50 }}>
                {" "}
                Fifa Card :Liste de mes joeurs{" "}
            </h1>
            {/* ON va faire en sorte d'appeler le composant Players en lui passant en parametres tous les elements de player */}
            {/* pour appliquer une operation a chaque element du tableau on applique la fonction ES6 map */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {Players.map((player) => (
                    <Player key={player.id} {...player} />
                ))}
            </div>
        </div>
    );
}
export default PlayerList;
