import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import mock data collections
import { players, matches } from "./data/Team";

// Import state context provider
import { TeamProvider } from "./context/TeamContext";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Matches from "./pages/Matches";
import Gallery from "./pages/Gallery";
import PlayerDetails from "./pages/PlayerDetails";
import AuthPortal from "./pages/AuthPortal";
import Admin from "./pages/Admin";

// Layout Elements
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <TeamProvider>
      <BrowserRouter>
        {/* Header navigation renders across all views */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home matches={matches} />} />
          
          <Route path="/team" element={<Team players={players} />}>
            <Route
              path="players"
              element={
                <div style={{ marginTop: "20px", padding: "15px", borderLeft: "4px solid var(--accent)" }}>
                  <h2>Nested Route Working ✅</h2>
                  <p style={{ color: "var(--text-muted)" }}>This area demonstrates child routing mechanics.</p>
                </div>
              }
            />
          </Route>

          <Route path="/matches" element={<Matches matches={matches} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/player/:id" element={<PlayerDetails players={players} />} />
          
          {/* Public Auth Portal (Registration + Login) */}
          <Route path="/portal" element={<AuthPortal />} />

          {/* Secure Protected Admin Panel */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin players={players} matches={matches} />
              </ProtectedRoute>
            }
          />

          {/* Fallback 404 Layout */}
          <Route
            path="*"
            element={
              <section className="page-section" style={{ textAlign: "center", padding: "80px 20px" }}>
                <h2>404 - Dashboard View Missing</h2>
                <p style={{ color: "var(--text-muted)", marginTop: "10px" }}>The view layer you requested cannot be located.</p>
              </section>
            }
          />
        </Routes>
      </BrowserRouter>
    </TeamProvider>
  );
}

export default App;