import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import mvfences from "../assets/websites/mvfences.png";

function Portfolio() {
  const projects = [
    { id: 1, title: "Figma Design 1", category: "Figma", image:mvfences },
    { id: 2, title: "WordPress Blog", category: "WordPress", image:"" },
    { id: 3, title: "Shopify Store", category: "Shopify", image:"" },
    { id: 4, title: "React Dashboard", category: "React", image:"" },
    { id: 5, title: "HTML/CSS Site", category: "HTML/CSS", image:"" },
    { id: 6, title: "Figma Design 2", category: "Figma", image:"" },
    { id: 7, title: "WordPress Portfolio", category: "WordPress", image:"" },
    { id: 8, title: "WordPress Portfolio", category: "WordPress", image:"" },
    { id: 9, title: "WordPress Portfolio", category: "WordPress", image:"" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <main className="portfolio" id="portfolio">
      <section>
        <div className="container">
          <p className="section-subtitle">working process</p>
          <h2>Latest Projects</h2>

          {/* FILTER BUTTONS */}
          <div className="filter-buttons" style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["All", "Figma", "WordPress", "Shopify", "React", "HTML/CSS"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: filter === cat ? "var(--accent-color)" : "var(--secondary-bg)",
                    color: filter === cat ? "var(--primary-color)" : "var(--primary-color-rev)",
                    // color: "var(--primary-color-rev)",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* SWIPER */}
          <Swiper
            key={filter} // 🔥 important: re-init swiper on filter change
            modules={[Navigation,Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
            loop={filteredProjects.length > 3}
            breakpoints={{
              0: {
                slidesPerView: 1, // 📱 mobile → 1 slide
              },
              600: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="slide">
                    <div className="image-box">
    <img src={project.image} alt={project.title} />
  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
