import React from 'react'
import './ModalLogin.css'


export default function ModalLogin({isOpen, open, close}) {
  
  return (
    <div className='modal-container'>
        <button onClick={() => close}>X</button>
        <h2>MODAL</h2>
    </div>
  )
}
