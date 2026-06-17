import React from "react";
import { useTeamAuth } from "../context/TeamContext";

function Admin({ players = [], matches = [] }) {
  const { logout } = useTeamAuth();

  // Dynamic metrics computations derived from array lengths
  const totalPlayers = players.length;
  const totalMatches = matches.length;
  const upcomingCount = matches.filter((m) => m.status === "Upcoming").length;

  return (
    <section className="page-section">
      <div className="section-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", textAlign: "left" }}>
        <div>
          <p className="tag" style={{ color: "var(--accent)" }}>Secure Environment</p>
          <h1>Admin Dashboard</h1>
          <p style={{ color: "var(--text-muted)" }}>Core platform configurations and dynamic operational stats summary.</p>
        </div>
        <button 
          onClick={logout} 
          className="btn" 
          style={{ background: "var(--primary)", color: "white", border: "none", cursor: "pointer", padding: "12px 24px", borderRadius: "12px" }}
        >
          Terminate Session 🚪
        </button>
      </div>

      {/* Grid Dashboard Array Widgets */}
      <div className="grid">
        <div className="card admin-card">
          <div className="card-body">
            <h2>👥 Registered Pool</h2>
            <h1>{totalPlayers}</h1>
            <p style={{ color: "var(--text-muted)" }}>Total profiles on file</p>
          </div>
        </div>

        <div className="card admin-card">
          <div className="card-body">
            <h2>🏏 Match Fixtures</h2>
            <h1>{totalMatches}</h1>
            <p style={{ color: "var(--text-muted)" }}>Scheduled calendar entries</p>
          </div>
        </div>

        <div className="card admin-card">
          <div className="card-body">
            <h2>🖼 Media Server</h2>
            <h1>3</h1>
            <p style={{ color: "var(--text-muted)" }}>Active storage objects</p>
          </div>
        </div>

        <div className="card admin-card">
          <div className="card-body">
            <h2>🔐 Security Status</h2>
            <h1 style={{ color: "var(--accent)", fontSize: "2.5rem" }}>Verified</h1>
            <p style={{ color: "var(--text-muted)" }}>System clearance active</p>
          </div>
        </div>
      </div>

      {/* Overview Analytics Sheet Wrapper */}
      <div className="card admin-info" style={{ backgroundColor: "var(--bg-card)", marginTop: "40px" }}>
        <div className="card-body">
          <h2 style={{ marginBottom: "15px", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
            Women IPL Tournament Metrics Overview
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              🏁 <strong>Total Registered Franchises:</strong> 5 Active Teams
            </li>
            <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              👥 <strong>Total Listed Athletes:</strong> {totalPlayers} Players Validated
            </li>
            <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              📅 <strong>Upcoming Live Fixtures:</strong> {upcomingCount} Matches Pending
            </li>
            <li style={{ padding: "10px 0" }}>
              🏆 <strong>Current Campaign Season:</strong> Women IPL 2026 Tournament Edition
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Admin;