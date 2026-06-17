import { useState } from "react";
import { matches } from "../data/Team";
import MatchCard from "../components/MatchCard";

function Matches() {
  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const filteredMatches =
    selectedStatus === "All"
      ? matches
      : matches.filter(
          (match) =>
            match.status === selectedStatus
        );

  return (
    <section className="page-section">
      <h1>Match Schedule</h1>

      <div className="filter-buttons">
        <button
          onClick={() =>
            setSelectedStatus("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setSelectedStatus("Upcoming")
          }
        >
          Upcoming
        </button>

        <button
          onClick={() =>
            setSelectedStatus("Practice")
          }
        >
          Practice
        </button>
      </div>

      <div className="grid">
        {filteredMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
          />
        ))}
      </div>
    </section>
  );
}

export default Matches;