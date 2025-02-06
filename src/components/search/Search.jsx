import { useState } from "react"
import { useDebounce } from "../../../hooks/useDebounce/useDubounce"

const Search = () => {
    const [value, setValue] =useState("")
    const debounceValue = useDebounce(value, 1500) 
  return (
    <div className="w-[80%] m-auto ">
        <input type="text"
        value={value}
        onChange={(e)=>setValue(e.targer.value)}
        placeholder="Search..."
        className="w-[300px] outline-none border p-2"
        />

        <div>
            Value Input : {debounceValue}
        </div>
    </div>
  )
}

export default Search