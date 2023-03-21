import React, { useState } from 'react'

const Input = (props,ref) => {

  const [takeInput, isTakeInput] = useState("")

  const handleInput =(e)=>{
      isTakeInput(e.target.value)
      console.log(e.target.value);
  }

  return (
    <div>
        
        <input value={takeInput} onChange={handleInput} className="form-control mt-3"  {...props.input} />
    </div>
  )
}

export default Input