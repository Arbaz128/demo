import React from 'react';
import './centerPic.css'; 
import { Button } from 'react-bootstrap'; 

export default function centerPic() {
  return (
    <div style={{backgroundColor:'#f8f9fc'}}>
      <div className="centeredContainer2">
        <div><h2>Come say hello</h2></div>
        <div style={{marginTop:'2%'}}>NOV 27, 2024</div>
        <div style={{marginTop:'2%'}}>Golden Gate Park</div>
        <div>4976 Fulton Street</div>
        <div>San Francisco, CA 94121</div>
        <Button style={{backgroundColor:'white',color:'#007bff',marginTop:'2%'}} variant="primary">2:00 pm - 9:00 pm</Button>
      </div>
    </div>
  );
}