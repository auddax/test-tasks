import { createPortal } from 'react-dom';
import Backdrop from "../Backdrop/Backdrop";

const ReminderModal = (props) => {
  return(
    <>
      {createPortal(
        <Backdrop data={props.data} type='reminder' />, 
        document.getElementById('backdrop-root')
      )}
    </>
  );
};

export default ReminderModal;