import ReactDOM from 'react-dom';

const PortalModal = ({ children }) => {
  const portal = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portal);
};

export default PortalModal;
