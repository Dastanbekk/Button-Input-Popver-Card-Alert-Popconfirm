import Alert from "../../ui/Alert";
import Button from "../../ui/Button";
// import Card from '../../ui/Card'
import Input from "../../ui/Input";
import Popconfirm from "../../ui/Popconfirm";

const HomeComponent = () => {
  // const {open, closeModal ,openModal } = useModal()
  // const {open:open2, toggle} = useModal()
  // const ref = useRef(null)
  // UseOutsideClick(ref,()=>{
  //     toggle
  // })
  return (
    // <div>

    //     <button onClick={openModal}>Open</button>
    //     <AuthModal open={open} closeModal={closeModal} />

    //     <div ref={ref}>
    //         {
    //             open2 && (
    //                 <div>
    //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis blanditiis, quis delectus ipsa inventore ducimus temporibus similique adipisci saepe quas quaerat non iusto a veniam minima optio distinctio consectetur? Aperiam.
    //                 </div>
    //         )
    //         }

    //         <button onClick={toggle}>Toggle</button>
    //     </div>
    // </div>

    <div className="w-[90%] max-w-[1440px] flex gap-4 mx-auto my-2">
      <div className="flex gap-2.5 flex-col">
        <Button>Submit</Button>
        <Button type="secondary">Submit</Button>
        <Button type="dashed">Submit</Button>
        <Button type="dotted">Submit</Button>
        <Button type="default">Submit</Button>
      </div>
      <div className="w-[20%] flex flex-col gap-2.5 ">
        <Input type="secondary" placeholder="Secondary" className="w-full" />
        <Input type="outlined" placeholder="Outlined" className="w-full" />
        <Input type="filed" placeholder="Filed" className="w-full" />
      </div>
      <div className="w-[20%] flex flex-col gap-4">
        {/* <Card type='default'/> */}
        <Alert type="success">Success</Alert>
        <Alert type="error">Error</Alert>
        <Alert type="warning">Warning</Alert>
        <Alert type="info">Info</Alert>
      </div>
      <div className="flex gap-2.5 flex-col">
        <Popconfirm type="delete">delete</Popconfirm>
        <Popconfirm type="primary">Open Popconfirm with async logic</Popconfirm>
      </div>
    </div>
  );
};

export default HomeComponent;
