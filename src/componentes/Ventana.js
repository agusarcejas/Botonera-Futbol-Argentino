import React from 'react';
import '../hojas-de-estilo/Ventana.css'

const Ventana = ({ show, onClose, playing, video }) => {

  if (!show) return null;

  return (
    show && (
      <div className={`modal-overlay ${show ? 'show' : ''}`}>
        <div className="modal-content">
          <video
            autoPlay={playing}
            controls
            type='video/mp4'
            src={require(`../videos/${video}`)}
            alt={`Video de ${video}`} />
          <div onClick={onClose}></div>
        </div>
      </div>
    )
  );
};

export default Ventana;