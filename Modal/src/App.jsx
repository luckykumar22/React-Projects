import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [openModal, setOpenModal]= useState(false);

  return (
    <div className="App">
      <button className='modalBtn' onClick={()=>setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
    </ div>
  )
}

export default App
