import React from "react";
import image1 from '../assets/1016124_OJ91D60.jpg';
import image2 from '../assets/3126566_450079-PEZQXQ-805.jpg';
import image3 from '../assets/13596957_5299507.jpg';
// import img_1 from "../assets/";
const Services = () => {
  // Inline styles
  const styles = {
    container: {
      backgroundColor: "#E0F4F0",
      fontFamily: "Arial, sans-serif",
      padding: "5rem 0",
      textAlign: "center",
    },
    title: {
      marginBottom: "2rem",
    },
    card: {
      border: "none",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
    },
    cardImg: {
      marginBottom: "1rem",
    },
    cardTitle: {
      fontWeight: "bold",
    },
    cardText: {
      marginBottom: "1rem",
    },
    btnCustom: {
      backgroundColor: "#4CAF50",
      color: "white",
      borderRadius: "20px",
      padding: "5px 20px",
      border: "none",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Features & Services</h2>
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div style={styles.card}>
            <img
              src={image1}
              alt="Communications"
              className="card-img-top"
              style={styles.cardImg}
            />
            <div className="card-body">
              <h5 style={styles.cardTitle}>Communications</h5>
              <p style={styles.cardText}>
                Pretium lectus quam id leo in vitae turpis. Mattis pellentesque
                id nibh tortor id.
              </p>
              <a href="#" style={styles.btnCustom}>
                More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div style={styles.card}>
            <img
              src={image2}
              alt="Inspired Design"
              className="card-img-top"
              style={styles.cardImg}
            />
            <div className="card-body">
              <h5 style={styles.cardTitle}>Inspired Design</h5>
              <p style={styles.cardText}>
                Nunc consequat interdum varius sit amet mattis vulputate enim
                nulla. Risus feugiat.
              </p>
              <a href="#" style={styles.btnCustom}>
                More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div style={styles.card}>
            <img
              src={image3}
              alt="Happy Customers"
              className="card-img-top"
              style={styles.cardImg}
            />
            <div className="card-body">
              <h5 style={styles.cardTitle}>Happy Customers</h5>
              <p style={styles.cardText}>
                Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit
                scelerisque mauris.
              </p>
              <a href="#" style={styles.btnCustom}>
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
