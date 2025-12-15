import React, { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedProduct) return;

    setLoading(true);
    setError("");

    axios
      .post("http://127.0.0.1:8000/api/ranking/", {
        category: selectedProduct,
      })
      .then((res) => {
        setRankings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch ranking data");
        setLoading(false);
      });
  }, [selectedProduct]);

  const bestPlatform =
    rankings.length > 0
      ? [...rankings].sort(
          (a, b) => b.weighted_score - a.weighted_score
        )[0]
      : null;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>E-Shop Advisor — Platform Ranking</h1>
      <div style={styles.searchBox}>
        <select
          name="category"
          style={styles.select}
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">-- Choose Category --</option>
          <option value="electronic">Electronic</option>
        </select>
      </div>
      {loading && <p style={styles.center}>Loading ranking data...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {!loading &&
        !error &&
        rankings.map((item) => (
          <div
            key={item.eshop}
            style={{
              ...styles.card,
              border:
                item.eshop === bestPlatform?.eshop
                  ? "3px solid green"
                  : "1px solid #ccc",
            }}
          >
            <h2>{item.eshop}</h2>

            <p>
              <strong>Average Score:</strong>{" "}
              {Number(item.average_score).toFixed(3)}
            </p>

            <p>
              <strong>Total Reviews:</strong>{" "}
              {Number(item.review_count).toLocaleString()}
            </p>

            <p>
              <strong>Weighted Score:</strong>{" "}
              {Number(item.weighted_score).toFixed(3)}
            </p>

            {item.eshop === bestPlatform?.eshop && (
              <p style={styles.badge}>🏆 Best Platform</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default Service;

/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "80vh",
    padding: "40px",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  searchBox: {
    maxWidth: "500px",
    margin: "0 auto 30px",
  },
  select: {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  card: {
    padding: "20px",
    margin: "20px auto",
    maxWidth: "500px",
    borderRadius: "12px",
    background: "#f8f9fa",
  },
  badge: {
    marginTop: "10px",
    color: "green",
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};