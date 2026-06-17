import { useState } from "react";
import { useTeamAuth } from "../context/TeamContext";
import { useNavigate } from "react-router-dom";

function AuthPortal() {
  const [activeTab, setActiveTab] = useState("login");
  const { login } = useTeamAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Batter",
    team: "RCB Women",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === "register") {
      alert(`🏆 WPL Application Submitted for ${formData.name}! Head over to Sign In.`);
      setActiveTab("login");
    } else {
      alert("🔐 Credentials verified successfully!");
      login();             // Set global context loggedIn state to true
      navigate("/admin");  // Redirect directly past route guard
    }
  };

  return (
    <section className="page-section" style={{ textAlign: "center" }}>
      <div className="section-title">
        <p className="tag" style={{ color: "var(--accent)" }}>Official Hub</p>
        <h1>WPL Registration Portal</h1>
        <p style={{ color: "var(--text-muted)" }}>Submit application profiles or authenticate administration sessions.</p>
      </div>

      <div className="auth-container">
        <div className="auth-tabs">
          <button 
            className={`auth-tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Sign In
          </button>
          <button 
            className={`auth-tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Player Registration
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === "register" && (
            <div className="form-group">
              <label>Full Name (as per ID documentation)</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="form-control" 
                placeholder="e.g., Smriti Mandhana"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="form-group">
            <label>Registered Email Address</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="form-control" 
              placeholder="name@domain.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Security Password</label>
            <input 
              type="password" 
              name="password" 
              required 
              className="form-control" 
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          {activeTab === "register" && (
            <>
              <div className="form-group">
                <label>Playing Core Specialization</label>
                <select name="role" className="form-control" value={formData.role} onChange={handleInputChange}>
                  <option>Batter</option>
                  <option>Bowler</option>
                  <option>All Rounder</option>
                  <option>Wicket Keeper</option>
                </select>
              </div>

              <div className="form-group">
                <label>Target Franchise Draft</label>
                <select name="team" className="form-control" value={formData.team} onChange={handleInputChange}>
                  <option>RCB Women</option>
                  <option>Mumbai Indians</option>
                  <option>Delhi Capitals</option>
                  <option>UP Warriorz</option>
                  <option>Gujarat Giants</option>
                </select>
              </div>
            </>
          )}

          <button type="submit" className="auth-submit-btn">
            {activeTab === "login" ? "Secure Dashboard Authentication 🔐" : "Submit Player Entry File 🏏"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AuthPortal;