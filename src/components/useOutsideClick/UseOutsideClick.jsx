import { useEffect } from "react"


const UseOutsideClick = (ref, cb) => {
  const handleClick = (e)=>{
    if(ref.current && !ref.current.contains(e.target)){
        cb()
    }
  }

  useEffect(()=>{
    window.addEventListener("click",handleClick)


    return()=>{
        window.addEventListener("click",handleClick)
    }
  })
  
    return (
    <div>UseOutsideClick</div>
  )
}

export default UseOutsideClick