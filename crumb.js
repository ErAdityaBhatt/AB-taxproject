import React from 'react'
import './nav.css'
import Arrow2 from './images/crumb-arrow.png'
function crumb() {
  
    return (
        
        <div className="shad-crumb">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item arrow text-dark">Home  </li>
                    <li className=" arrow text-dark" aria-current="page"><img className="crumb-arrow " src={Arrow2}/>   My Self</li>
                    <li className="breadcrumb-item active text-danger arrow" aria-current="page"><img className="crumb-arrow" src={Arrow2}/>  Tax Statments</li>
                </ol>
            </nav>
        </div>
    )
}

export default crumb;
