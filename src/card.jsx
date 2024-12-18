import React from 'react'
import './middleLanding.css';
export default function card({name,pic}) {
  return (
    <div>
        <div>
        <img src={pic} alt="Daily" width={250}/>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div className='name'>{name}</div>
            <div><img src='/menuArrow.png' width={35} height={25} style={{marginTop:'32%'}}/></div>
        </div>
    </div>
  )
}
