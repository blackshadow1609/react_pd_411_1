// import React from 'react';
import './Footer.css'; 

function Footer() {
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{backgroundColor: "#9fbdcd", padding: "10px 0", fontWeight: "bold"}}>
      PD_411 Copyright &#169; - {currentYear}
    </footer>
  );
}

export default Footer;