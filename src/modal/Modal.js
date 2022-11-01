import './Modal.css';
import {VscChromeClose} from 'react-icons/vsc'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <VscChromeClose style={{'padding':'10px', 'float':'right','fontSize':'35px' ,'color':'white'}} onClick={handleClose}/>
      <section className="modal-main">
        {children}
        {/* <button type="button" onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
  );
};

export default Modal