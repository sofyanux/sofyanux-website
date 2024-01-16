// components/PortfolioDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Mengambil data portofolio dari backend atau sumber data lainnya berdasarkan id
    // Misalnya, dapat menggunakan fetch, axios, atau metode lainnya.
    // Contoh: fetch(`/api/portfolio/${id}`).then(response => response.json())
    // Gantilah dengan metode sesuai kebutuhan Anda.

    // Contoh data portofolio hardcoded (sebagai contoh)
    const hardcodedData = {
      id: id,
      title: `Portofolio ${id}`,
      description: `Deskripsi portofolio ${id}`,
      thumbnail: `url_ke_thumbnail_${id}`,
      whatIs: "Apa itu portofolio ini?",
      role: "Peran Saya",
      schedule: "Jadwal Proyek",
      projectObjective: "Tujuan Proyek",
      projectChallenge: "Tantangan Proyek",
      research: "Penelitian Proyek",
      keyFindings: "Temuan Kunci",
      designApproach: "Pendekatan Desain",
      outcome: "Hasil Proyek",
      // Tambahkan properti lain sesuai kebutuhan
    };

    setPortfolio(hardcodedData);
  }, [id]);

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Detail Portofolio {portfolio.id}</h2>
      <img src={portfolio.thumbnail} alt={`Thumbnail ${portfolio.title}`} />
      <h3>{portfolio.title}</h3>
      <p>{portfolio.description}</p>

      <div>
        <h4>Detail</h4>
        <ul>
          <li>
            <strong>What is:</strong> {portfolio.whatIs}
          </li>
          <li>
            <strong>Role:</strong> {portfolio.role}
          </li>
          <li>
            <strong>Schedule:</strong> {portfolio.schedule}
          </li>
          <li>
            <strong>Project Objective:</strong> {portfolio.projectObjective}
          </li>
          <li>
            <strong>Project Challenge:</strong> {portfolio.projectChallenge}
          </li>
          <li>
            <strong>Research:</strong> {portfolio.research}
          </li>
          <li>
            <strong>Key Findings:</strong> {portfolio.keyFindings}
          </li>
          <li>
            <strong>Design Approach:</strong> {portfolio.designApproach}
          </li>
          <li>
            <strong>Outcome:</strong> {portfolio.outcome}
          </li>
        </ul>
      </div>
      {/* Tampilkan informasi detail portofolio sesuai kebutuhan */}
    </div>
  );
};

export default PortfolioDetail;
