import { Link } from "react-router-dom";

function TeamCard({ player }) {
  return (
    <article className="card">
      <img
        src={player.image}
        alt={player.name}
      />

      <div className="card-body">
        <h3>{player.name}</h3>

        <p>{player.role}</p>

        <p>{player.team}</p>

        <strong>
          {player.strength}
        </strong>

        <br />

        <Link
          to={`/player/${player.id}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default TeamCard;