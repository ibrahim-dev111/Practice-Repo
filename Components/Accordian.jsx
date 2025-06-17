import { useState } from "react"
import "./Accordian.css"
import data from "./data.js"
const Accordian = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelect, setenableMultiSelect] = useState(false)
  const [multiple, setMultiple] = useState([])
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  const handleMultipleSelection = (getCurrentId) => {
    let cpyMulti = [...multiple]
    let findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId)
    console.log(findIndexOfCurrentId)

    if (findIndexOfCurrentId === -1) cpyMulti.push(getCurrentId)

    else cpyMulti.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMulti)
  }
  console.log(selected, multiple);

  return (
    <div className="wrapper" >
      <button onClick={() => setenableMultiSelect(!enableMultiSelect)} style={{ fontSize: '20px', cursor: 'pointer' }}>Enable Multiple Selection</button>
      <div className="accordian">
        {data && data.length > 0 ?
          data.map((dataitem) =>
            <div className="item" onClick={enableMultiSelect ?
              () => handleMultipleSelection(dataitem.id) :
              () => handleSingleSelection(dataitem.id)}>
              <h3 className="title">{dataitem.question}</h3>
              <span >+</span>
              {
                enableMultiSelect ?
                  multiple.indexOf(dataitem.id) !== -1 &&
                  <p>{dataitem.answer}</p> :
                  selected === dataitem.id && <h3>{dataitem.answer}</h3>

              }
            </div>
          )
          : <div>No data found</div>}
      </div>

    </div>
  )
}

export default Accordian