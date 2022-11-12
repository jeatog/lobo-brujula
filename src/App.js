import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Model from "./Queso2";

/*Hola mundo */

class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {name: "Default"}
      }

handleClick(sector) {
         console.log('You clicked submit.');
         this.setState({name: sector});
}

render(){
   return(
      <>
      <div class='Contenido'>

         <div class ='Maqueta'>
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
                  <Model name={this.state.name} position={[0.025, -0.9, 0]} >
                     </Model>
               </Suspense>
               <OrbitControls />
            </Canvas>
      </div>

      <div class='Botones'>
         <h1>CCO3</h1>

         <h2>Cubiculos</h2>
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"Cubiculos1")}>Cubiculos 1 </button>
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"Cubiculos2")}>Cubiculos 2</button>
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"Cubiculos3")}>Cubiculos 3</button>
         <br/>
         
         <h2>Sitios de interes</h2>
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"Biblioteca")}>Biblioteca </button>
         <br/>

         <h2>Laboratorios</h2>
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"Laboratorio1")}>Laboratorio1 </button>     
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"Laboratorio2")}>Laboratorio2 </button>
         <button class = 'ButtonsCamaras' onClick={this.handleClick.bind(this,"LaboratorioRH")}>Laboratorios de Redes y Hardware </button>
         <br/>

      </div>

   </div>
   </>
   )
}


}


/*function ShowModel(props){
   return(
      <>
      <Canvas
           camera={{ position: [2, 0, 12.25], fov: 15 }}
           style={{
              backgroundColor: '#002222',
              width: '50vw',
              height: '50vh',
           }}
        >
   
           <ambientLight intensity={2.25} />
           <directionalLight intensity={2} position={[-1, 1, 0]} />
           <Suspense fallback={null}>
              <Model name={props.name} position={[0.025, -0.9, 0]} >
               </Model>
           </Suspense>
           <OrbitControls />
        </Canvas>
        </>
   )
}

function App(props) {
   
  return (
      <>
         <ShowModel name={props.name} /> 
      </>   
      //Esto coloca la camara en la posicion proporcionada y el fov
   //Tambien declara que tanto ocupa la escena y el color de fondo en la parte de Style
   //Despues de declaran las luces y se desactiva lo que yo creo es la gravedad xd
   //Finalmente se carga el modelo 
    
 );
}
*/
export default App;
