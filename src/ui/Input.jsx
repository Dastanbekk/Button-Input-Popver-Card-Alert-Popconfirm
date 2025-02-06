
const Input = ({type,placeholder}) => {

    const inputStyle = "w-full  border-2 rounded-md px-2 py-1 "
    const types = {
        secondary:`${inputStyle}border-gray-400 outline-none text-gray-400`,
        outlined:`${inputStyle} border-gray-400 outline-[dodgerblue] text-gray-400`,
        filed:`${inputStyle} border-gray-300 focus:border-2 outline-none  focus:border-gray-400 bg-gray-300  text-gray-700 focus:bg-white`,
    }
  return (
    <input className= {types[type]} placeholder={placeholder}  />
  )
}

export default Input