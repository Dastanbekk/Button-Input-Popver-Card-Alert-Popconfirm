import { useModal } from "../hooks/use-modal/UseModal";

const Alert = ({ children, type }) => {
  const { open, closeModal } = useModal();
  const defaultStyle = "py-3 px-3 rounded-xl";
  const alertTypes = {
    success: `${defaultStyle} bg-green-300 border-2 border-green-500 text-green-500`,
    error: `${defaultStyle} bg-red-300 border-2 border-red-500 text-red-500`,
    warning: `${defaultStyle} bg-amber-300 border-2 border-yellow-500 text-amber-500`,
    info: `${defaultStyle} bg-blue-300 border-2 border-blue-500 text-blue-500`
  };

  return (
    <div>
      {open && (
        <div className={`${alertTypes[type]} flex justify-between`}>
          <p>{children}</p>
          <button onClick={closeModal} className="text-black cursor-pointer">
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Alert;
