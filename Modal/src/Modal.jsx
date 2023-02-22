import React from 'react'
import peakpx from '../src/assets/peakpx.jpg'

const Modal=({open,onClose})=> {
   if(!open) return null;
  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(e)=>{e.stopPropagation()}} className="modalContainer">
            <img src={peakpx} alt='img'/>
            <div className="modalRight">
                <p className='closeBtn' onClick={onClose}>X</p>
                <div className="content">
                    <p>Power From Chainsaw Man</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Modal