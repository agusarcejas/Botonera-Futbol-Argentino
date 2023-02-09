import  React, { useState } from 'react';
import '../hojas-de-estilo/Boton.css';
import '../hojas-de-estilo/BotonMovil.css';

//Recibo 3 props
function Boton(props) {

  const [audioPlaying, setAudioPlaying] = useState(null);

  function playAudio(audio) {
    if (audioPlaying) {
      audioPlaying.pause();
    }
    var newAudio = new Audio(require(`../audios/${audio}`));
    newAudio.play();
    setAudioPlaying(newAudio);
  }

  return (
    <button
      id={props.id}
      className={`boton-contenedor ${props.estaApretado ? 'boton-con-click' : 'boton-sin-click'}`}
      onClick={() => {
        props.manejarClick(props.id)
        playAudio(props.audio);
      }}>
      <img
        src={require(`../imagenes/${props.imagen}`)}
        alt={`Foto de ${props.imagen}`} />
      {props.children}
      <div className='contenedor-texto-boton'>
        <p className='nombre-boton'>
          <strong>{props.nombre}</strong>
        </p>
      </div>
    </button>
    // if esBotonDeClic = true toma la clase 'boton-sin-click sino toma 'boton-con-click'
  );
}

export default Boton;