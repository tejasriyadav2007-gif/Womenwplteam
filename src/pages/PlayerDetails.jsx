import { useParams } from "react-router-dom";
import { players } from "../data/Team";

function PlayerDetails() {
  const { id } = useParams();

  const player =
    players.find(
      (p) => p.id === Number(id)
    );

  if (!player) {
    return <h2>Player not found</h2>;
  }

  return (
    <>
      <h2>{player.name}</h2>
      <p>{player.team}</p>
      <p>{player.role}</p>
    </>
  );
}

export default PlayerDetails;