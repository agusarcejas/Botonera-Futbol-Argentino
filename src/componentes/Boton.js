import React, { useState } from 'react';
import '../hojas-de-estilo/Boton.css';
import '../hojas-de-estilo/BotonMovil.css';

function Boton(props) {

  const [audioPlaying, setAudioPlaying] = useState(null);


  function playAudio(audio) {
    /* Caso en donde aprieto el mismo boton, si detecta que esta reproduciendo audio al volver a apretar lo que hara es
    pausar el anterior audio y reproducir el nuevo audio (como es el mismo boton va a ser el mismo audio) */
    
    if (audioPlaying) {
      setAudioPlaying(null);
      audioPlaying.pause(); //Va a reiniciar el audio cada vez que se aprieta el mismo boton
    }
    var newAudio = new Audio(require(`../audios/${audio}`)); //Le paso a la variable newAudio el audio que se va a escuchar

    newAudio.play(); //Se reproduce el audio
    setAudioPlaying(newAudio);

    /* Si el boton esta apretado la clase va a hacer 'boton-contenedor boton-con-click', 
    cuando termine el audio va a pasar a la clase 'boton-contenedor boton-sin-click'*/
    
    newAudio.addEventListener('ended', function () {
      document.getElementById(props.id).className = 'boton-contenedor boton-sin-click'; //Cambia la clase a 'boton-sin-click al terminar el audio'
      props.manejarClick(props.estaApretado, false); //Pongo el Props.estaApretado en estado falso al terminar el audio
      setAudioPlaying(null); // Estado del hook en null al terminar el audio
    });
  }

  return (
    <button
      id={props.id}
      className={`boton-contenedor ${props.estaApretado ? 'boton-con-click' : 'boton-sin-click'}`}
      onClick= {() => {
        props.manejarClick(props.id)
        playAudio(props.audio)
      }
      }>
      <img
        src={require(`../imagenes/${props.imagen}`)}
        alt={`Foto de ${props.imagen}`} />
    </button>
    // if esBotonDeClic = true toma la clase 'boton-sin-click sino toma 'boton-con-click'
  );
}

export default Boton;