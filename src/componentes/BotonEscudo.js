import React, { useState} from 'react';
import Ventana from './Ventana.js';
import escudo from '../imagenes/escudo-afa.png';

const BotonEscudo = () => {

  const [showModal, setShowModal] = useState(false); //Hook para ver si el modal esta en estado abierto o hay que asignarselo
  const [playing, setPlaying] = useState(false); //Hook para ver si la reproduccion del video esta en estado 'reproduciendo' o hay que asignarselo

  const abrirModal = () => {
    setShowModal(true); //Abro el modal
    setPlaying(true); // Se empieza a reproducir automaticamente el video
  };

  const cerrarModal = (e) => {
    if (e.target.className === 'modal-overlay show') {
      setShowModal(false); // Si se hace click fuera del modal del video se cerrara
      setPlaying(false); // Cuando se cierra el modal tambien se deja de reproducir el video
    }
  };

  return (
    <div onClick={cerrarModal}>
      <div onClick={abrirModal}>
        <div className='contenedor-logo-afa'>
          <img
            src={escudo}
            alt='Escudo AFA'
          />
        </div>
      </div>
      <Ventana 
      show={showModal} 
      onClose={cerrarModal} 
      playing={playing}
      video = 'penal-montiel.mp4' />
    </div>
  );
};

export default BotonEscudo;