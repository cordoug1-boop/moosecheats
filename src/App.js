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
          <button style={{
            padding: "10px 20px",
            background: "red",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
