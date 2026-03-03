import React from 'react';

function App() {
  return (
    <div style={{ 
      backgroundColor: "#111",
      color: "white",
      minHeight: "100vh",
      textAlign: "center",
      paddingTop: "50px"
    }}>
      <h1 style={{ fontSize: "48px" }}>Moose Cheats</h1>
      <p>Premium Digital Products</p>

      <div style={{ marginTop: "40px" }}>
        <div style={{
          background: "#222",
          padding: "20px",
          margin: "20px auto",
          width: "300px",
          borderRadius: "10px"
        }}>
          <h2>Product Name</h2>
          <p>$29.99</p>
          <a
            href="https://pay.skrill.com?pay_to_email=GOOSECHEATS@GMAIL.COM&amount=10&currency=USD&detail1_description=Product&detail1_text=Moose+Cheats+Package&return_url=https://moosecheats-3.onrender.com/success"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              background: "red",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "inline-block",
              textDecoration: "none",
              borderRadius: "4px"
            }}
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
