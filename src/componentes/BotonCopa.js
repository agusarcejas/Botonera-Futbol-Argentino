import React, { useState } from 'react';
import Ventana from './Ventana.js';
import copa from '../imagenes/copa-del-mundo.png';

const BotonCopa = () => {

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
        <div className='contenedor-copa-del-mundo'>
          <img
            src={copa}
            alt='Copa del mundo'
          />
        </div>
      </div>
      <Ventana
        show={showModal}
        onClose={cerrarModal}
        playing={playing}
        video ='levantamiento-de-copa.mp4' />
    </div>
  );
};

export default BotonCopa;