import { useState } from 'react';
import './App.css';
import './AppMovil.css';
import Boton from './componentes/Boton.js';
import BotonCopa from './componentes/BotonCopa';
import BotonEscudo from './componentes/BotonEscudo';


function App() {

  const [selectedButton, setSelectedButton] = useState('');
  


  function manejarClick(buttonId) {
    setSelectedButton(buttonId); //Asigna al hook el el boton seleccionado
  }

  return (
    <div className="App">
      <h1> BOTONERA DEL FUTBOL ARGENTINO </h1>
      <div className='contenedor-copa-botonera-escudo'>

        <div className='contenedor-copa-no-movil'>
          <BotonCopa />
        </div>

        <div className='contenedor-botonera'>

          <div className='fila'>
            <Boton
              id={'boton1'}
              imagen='anda-para-alla-bobo.jpg'
              audio='anda-para-alla-bobo-audio.mp3'
              estaApretado={selectedButton === 'boton1'}
              manejarClick={manejarClick}
               />
            <Boton
              id={'boton2'}
              imagen='its-very-difficult.jpg'
              audio='very-difficult-audio.mp3'
              estaApretado={selectedButton === 'boton2'}
              manejarClick={manejarClick}
               />
            <Boton
              id={'boton3'}
              imagen='me-cortaron-las-piernas.jpg'
              audio='me-cortaron-las-piernas-audio.mp3'
              estaApretado={selectedButton === 'boton3'}
              manejarClick={manejarClick}
               />
            <Boton
              id={'boton4'}
              imagen='passman-la-tenes-adentro.jpg'
              audio='passman-la-tenes-adentro.mp3'
              estaApretado={selectedButton === 'boton4'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton5'}
              imagen='es-gatorade-señorita.jpg'
              audio='es-gatorade-señorita.mp3'
              estaApretado={selectedButton === 'boton5'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton6'}
              imagen='gol-maradona-inglaterra.jpg'
              audio='gol-maradona-inglaterra.mp3'
              estaApretado={selectedButton === 'boton6'}
              manejarClick={manejarClick} />
          </div>

          <div className='fila-2'>

            <Boton
              id={'boton7'}
              imagen='mira-que-te-como-hermano.jpg'
              audio='mira-que-te-como-hermano.mp3'
              estaApretado={selectedButton === 'boton7'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton8'}
              imagen='la-pelota-no-se-mancha.jpg'
              audio='la-pelota-no-se-mancha.mp3'
              estaApretado={selectedButton === 'boton8'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton9'}
              imagen='que-la-gente-crea.jpg'
              audio='que-la-gente-crea.mp3'
              estaApretado={selectedButton === 'boton9'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton10'}
              imagen='podes-ser-tan-pelotudo-viejo.jpg'
              audio='podes-ser-tan-pelotudo-viejo.mp3'
              estaApretado={selectedButton === 'boton10'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton11'}
              imagen='inventaron-el-var.jpg'
              audio='inventaron-el-var.mp3'
              estaApretado={selectedButton === 'boton11'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton12'}
              imagen='y-va-el-tercero.jpg'
              audio='y-va-el-tercero.mp3'
              estaApretado={selectedButton === 'boton12'}
              manejarClick={manejarClick} />

          </div>


          <div className='fila-3'>
            <Boton
              id={'boton13'}
              imagen='soy-una-bestia.jpg'
              audio='soy-una-bestia.mp3'
              estaApretado={selectedButton === 'boton13'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton14'}
              imagen='le-pongo-un-10.jpg'
              audio='le-pongo-un-10.mp3'
              estaApretado={selectedButton === 'boton14'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton15'}
              imagen='no-me-midas.jpg'
              audio='no-me-midas.mp3'
              estaApretado={selectedButton === 'boton15'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton16'}
              imagen='boca-la-concha-de-tu-madre.jpg'
              audio='boca-la-concha-de-tu-madre.mp3'
              estaApretado={selectedButton === 'boton16'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton17'}
              imagen='estamos-en-la-B.jpg'
              audio='estamos-en-la-B.mp3'
              estaApretado={selectedButton === 'boton17'}
              manejarClick={manejarClick} />
            <Boton
              id={'boton18'}
              imagen='cancion-b-hinchas-belgrano.jpg'
              audio='cancion-b-hinchas-belgrano.mp3'
              estaApretado={selectedButton === 'boton18'}
              manejarClick={manejarClick} />

          </div>
        </div>
        <div className='contenedor-logo-no-movil'>
          <BotonEscudo />
        </div>
      </div>

      {/* Contenedor unicamente para movil */}

      <div className='contenedor-copa-logo'>
        <div className='contenedor-copa-movil'>
          <BotonCopa />
        </div>
        <div className='contenedor-logo-movil'>
          <BotonEscudo />
        </div>

      </div>

      <footer>© 2023 AGUSTIN CEJAS</footer>
    </div >
  );
}

export default App;
