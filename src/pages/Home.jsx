function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Women IPL Dashboard</h1>

          <p>
            Explore Women IPL Teams, Players,
            Match Schedules, Gallery and Admin Dashboard.
          </p>
        </div>
      </section>

      {/* Paste About Section Here */}
      <section className="info-section">
        <h2>About Women IPL</h2>

        <p>
          Women's Premier League (WPL) is India's professional
          women's T20 cricket league featuring top players
          from around the world.
        </p>
      </section>

      {/* Upcoming Match Section */}
      <section className="info-section">
        <h2>Upcoming Match</h2>

        <div className="match-preview">
          <h3>RCB Women vs Mumbai Indians Women</h3>
          <p>Date: 12 March 2026</p>
          <p>Venue: Bangalore</p>
        </div>
      </section>
    </>
  );
}

export default Home;