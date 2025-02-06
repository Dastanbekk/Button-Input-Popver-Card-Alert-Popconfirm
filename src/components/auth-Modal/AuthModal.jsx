import React from 'react'

const AuthModal = ({open, closeModal}) => {
    if(!open){
        return null;
    }
  return (
    <div className='w-full h-screen bg-[#0000006d] absolute   top-0 left-0'>
        <button onClick={closeModal} className='absolute text-3xl text-white right-10 top-10'>X</button>
        <div className='flex justify-center items-center h-full'>
        <div className='bg-white w-[400px] flex flex-col p-5 py-8 gap-3 rounded-xl' >
            <input type="text"  className='bg-black text-white rounded-lg p-1  outline-none'/>
            <input type="text"  className='bg-black text-white rounded-lg p-1  outline-none'/>
            <button className='bg-[crimson] p-1 rounded-lg text-white'>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default AuthModal