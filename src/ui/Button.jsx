
const Button = ({children,type='primary'}) => {
  
    const baseStyle = ' cursor-pointer px-8 py-1 rounded-lg';
    const types = {
        primary: `${baseStyle} text-white bg-[dodgerblue]`,
        secondary:` border-gray-400 border-2 text-gray-400 hover:border-[dodgerblue] hover:text-[dodgerblue] ${baseStyle}`,
        dashed:`${baseStyle} border-dashed border-gray-400 border-2 text-gray-400`,
        dotted:`${baseStyle} border-dotted border-gray-400 border-2 text-gray-400`,
        default:`${baseStyle} bg-gray-300 text-white  border-gray-400 !cursor-not-allowed  border-2 text-gray-400`
    }
    return (
    <button className={`${types[type]}`}>
        {children}
    </button>
  )
}

export default Button