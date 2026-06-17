function MatchCard({ match }) {
  return (
    <article className="card">
      <span className="status">
        {match.status}
      </span>

      <h3>
        vs {match.opponent}
      </h3>

      <p>{match.date}</p>

      <p>{match.venue}</p>
    </article>
  );
}

export default MatchCard;