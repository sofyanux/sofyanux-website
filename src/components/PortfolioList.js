import React from "react";
import { Link } from "react-router-dom";

const PortfolioList = () => {
  // Data portofolio (ganti dengan data aktual atau ambil dari backend)
  const portfolioData = [
    { id: 1, title: "Portofolio 1", thumbnail: "url_ke_thumbnail_1" },
    { id: 2, title: "Portofolio 2", thumbnail: "url_ke_thumbnail_2" },
    // Tambahkan portofolio lainnya
  ];

  return (
    <div>
      <h2>Portofolio Saya</h2>
      <ul>
        {portfolioData.map((portfolio) => (
          <li key={portfolio.id}>
            <img
              src={portfolio.thumbnail}
              alt={`Thumbnail ${portfolio.title}`}
            />
            <h3>{portfolio.title}</h3>
            <Link to={`/portfolio/${portfolio.id}`}>Lihat Detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
