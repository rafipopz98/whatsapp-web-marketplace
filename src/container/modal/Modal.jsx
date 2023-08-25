import React, { useState } from 'react'

const Modal = () => {
    const [modal,setModal]=useState(false)
    const modalopen=()=>{
        setModal(!modal)
    }
  return (
    <div>
        <button onClick={modalopen}>
            open
        </button>
        {
            modal&&(
                <div>
        <h2> hihi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt commodi quo accusantium mollitia optio velit ipsam, ipsa corporis magni illum maiores sit.</p>
        <button onClick={modalopen}>close</button>
        </div>
            )
        }
       
    </div>
  )
}

export default Modal