import {useState} from "react"

export const useModal = ()=>{
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    const openModal = () => setOpen(true)
    const toggle = () => setOpen(!open)
    return {closeModal ,openModal, toggle, open}
}