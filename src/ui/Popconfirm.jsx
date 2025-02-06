import { useModal } from "../hooks/use-modal/UseModal";

const Popconfirm = ({ children, type = "primary" }) => {
  const { open, toggle } = useModal();

  const baseStyle = " cursor-pointer px-8 py-1 rounded-lg";
  const types = {
    primary: `${baseStyle} text-white bg-[dodgerblue]`,
    delete: ` border-red-400 border-2 text-red-400  ${baseStyle}`,
    dashed: `${baseStyle} border-dashed border-gray-400 border-2 text-gray-400`,
    dotted: `${baseStyle} border-dotted border-gray-400 border-2 text-gray-400`,
    default: `${baseStyle} bg-gray-300 text-white  border-gray-400 !cursor-not-allowed  border-2 text-gray-400`
  };
  return (
    <div>
      <button
        onClick={toggle}
        className={`${types[type]} active:scale-90 transition-all`}
      >
        {children}
      </button>
      {open && (
        <div className="bg-white border border-gray-400 rounded-lg text-black p-4">
          <h3>Delete the task</h3>
          <p>Are you sure to delete this task?</p>
        </div>
      )}
    </div>
  );
};

export default Popconfirm;
