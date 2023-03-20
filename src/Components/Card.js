import React from 'react'
// import katie from "../img/katie.png"
import './myStyle.css'
function Card(props) {

  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
    <div className="card">
    {badgeText && <div className="card--badge">{badgeText}</div>}
    <img src={props.item.coverImg} className="card--image" />
    <div className="card--stats">
        <img src="Star.png" className='star'/>
        <span>{props.item.stats.rating}</span>
        <span >({props.item.stats.reviewCount}) • </span>
        <span >{props.item.location}</span>
    </div>
    <p>{props.item.title}</p>
    <p><span><b>From ${props.item.price}</b></span> / person</p>
</div>

  )
}

export default Card
