import { createPortal } from 'react-dom';
import Backdrop from "../Backdrop/Backdrop";

const SuccessModal = (props) => {
  return(
    <>
      {createPortal(
        <Backdrop data={props.data} type='success' />, 
        document.getElementById('backdrop-root')
      )}
    </>
  );
};

export default SuccessModal;