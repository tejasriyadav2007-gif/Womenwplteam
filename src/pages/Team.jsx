import { Outlet } from "react-router-dom";
import { players } from "../data/Team";
import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <section className="page-section">
      <div className="section-title">
        <p className="tag" style={{ color: "var(--accent)" }}>Squad Profiles</p>
        <h1>Women IPL Team Players</h1>
      </div>

      <div className="grid">
        {players.map((player) => (
          <TeamCard
            key={player.id}
            player={player}
          />
        ))}
      </div>

      {/* Renders nested sub-views dynamically when visiting matching sub-paths */}
      <Outlet />
    </section>
  );
}

export default Team;