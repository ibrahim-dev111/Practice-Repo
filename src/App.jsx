import { useState } from "react"
import Accordian from "../Components/Accordian"
import Modal from "../Components/Modal"
import "../Components/Modal.css"

const App = () => {

      const [isShow,setisShow]=useState(false)
      const [isOfferAccepted, setIsOfferAccepted]= useState(false)


    const handleOpenModal = ()=>{
      setisShow((prev)=>!prev)
    }

    const handleClose = ()=>{
      setisShow(false)
    }

    const handleOffer= ()=>{
      setIsOfferAccepted(true)
      setisShow(false)
    }

  return (
    <>
      {/* <Accordian /> */}

      <div className="Show-Offer">
        <h1>Hey there i am updated one</h1>
        <button className="ofr-btn" onClick={handleOpenModal}>{isOfferAccepted?<p>Offer Accepted</p> : <p>Show Offer</p>} </button>
      </div>
      {

        isShow&& <Modal handleOffer={handleOffer} handleClose={handleClose}/>
        
      }

     
    </>
  )
}

export default App