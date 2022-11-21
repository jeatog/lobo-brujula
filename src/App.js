import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Model from "./Queso2";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

/*Hola mundo */

function App() {

   const [estado, setEstado] = useState({name: "Default"});
   
   const handleClick = (sector) => {
      console.log('You clicked submit.', sector);
      setEstado({name: sector});
   }

   const { collapseSidebar } = useProSidebar();

   console.log(estado)
   return (
      <>
         <div className='Contenido'>
            <div style={{ display: 'flex', height: '100%' }}>
               <main>
                  <button onClick={() => collapseSidebar()}>Collapse</button>
               </main>
            </div>

            <div className='Maqueta'>
               <Canvas
                  camera={{ position: [-20, 3, 5.25], fov: 15 }}
                  style={{
                     backgroundColor: '#002222',
                     width: '50vw',
                  }}
               >
                  <ambientLight intensity={2.25} />
                  <directionalLight intensity={2} position={[-1, 1, 0]} />
                  <Suspense fallback={null}>
                     <Model name={estado.name} position={[0.025, -0.9, 0]} >
                     </Model>
                  </Suspense>
                  <OrbitControls />
               </Canvas>
            </div>

            <div className='Botones'>
               <h1>CCO3</h1>

               <h2>Cubiculos</h2>
               <button className='ButtonsCamaras' onClick={() => handleClick("Cubiculos1")}>Cubiculos 1 </button>
               <button className='ButtonsCamaras' onClick={() => handleClick("Cubiculos2")}>Cubiculos 2</button>
               <button className='ButtonsCamaras' onClick={() => handleClick("Cubiculos3")}>Cubiculos 3</button>
               <br />

               <h2>Sitios de interes</h2>
               <button className='ButtonsCamaras' onClick={() => handleClick("Biblioteca")}>Biblioteca </button>
               <br />

               <h2>Laboratorios</h2>
               <button className='ButtonsCamaras' onClick={() => handleClick("Laboratorio1")}>Laboratorio1 </button>
               <button className='ButtonsCamaras' onClick={() => handleClick("Laboratorio2")}>Laboratorio2 </button>
               <button className='ButtonsCamaras' onClick={() => handleClick("LaboratorioRH")}>Laboratorios de Redes y Hardware </button>
               <br />

            </div>

         </div>
      </>
   );
}

export default App;

