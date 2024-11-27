import React from 'react';
import './rhsLanding.css';

export default function RhsLanding() {
  return (
    <div className="bcg">
      {/* Decorative Leaf */}
      <div className="leaf-container">
        <img src="/leaf.png" alt="Neerob" className="leaf-image" />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="opening-hours">
          <span className="openCntr">
            Friday <span className="open-status">Open</span> . 7:30 am - 11:30 pm
          </span>
        </div>
        <div className="title">
          <h2>Restaurant</h2>
          <h2 className="subtitle">of desi cuisines</h2>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati libero molestias possimus incidunt
          eius modi eveniet eum ducimus repellat animi quo maxime quod provident numquam, quae facere porro,
          atque cum.
        </p>
        <button className="reservation-btn">Reservation</button>
        <img src="/leaf2.png" alt="Neerob" style={{marginLeft:'20%'}}/>
        <div>
        </div>
      </div>
    </div>
  );
}
