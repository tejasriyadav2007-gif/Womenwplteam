function Gallery() {
  const galleryItems = [
    {
      title: "Training Session",
      image:
        "https://st3.cricketcountry.com/wp-content/uploads/2023/01/Collage-Maker-25-Jan-2023-04.37-PM.jpg",
    },
    {
      title: "Match Day",
      image:
        "https://staticimg.amarujala.com/assets/images/2025/03/10/wpl_e76761e58ada6642bb70af9ae6fdf9cd.jpeg",
    },
    {
      title: "Celebration",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/377900/377904.6.jpg",
    },
  ];

  return (
    <section className="page-section">
      <h1>Gallery</h1>

      <div className="grid">
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="card"
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;