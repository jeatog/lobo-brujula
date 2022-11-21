import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Model from "./Queso2";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

/*Hola mundo */

function App() {
   document.body.style.backgroundColor = "#00395E";
   const [estado, setEstado] = useState({ name: "Default" });
   const [anchoPantalla, setAnchoPantalla] = useState('249px');

   const handleClick = (sector) => {
      console.log('You clicked submit.', sector);
      setEstado({ name: sector });
   }

   const { collapseSidebar, collapsed } = useProSidebar();

   const colapsar = () => {
      collapseSidebar();
      collapsed ? setAnchoPantalla('249px') : setAnchoPantalla('0px');
   }

   console.log(estado)
   return (
      <>
         <div className='Contenido' style={{ height: '100vh' }}>
            <div className='d-flex' width='100%' style={{ overflowY: 'scroll', position: 'fixed', height: '100vh' }}>
               <Sidebar className='d-flex' collapsedWidth='0px'>
                  <Menu >
                     <Label className='d-flex justify-content-center' size='lg' style={{ fontWeight: 'bold' }}>Menú</Label>
                     <div className='d-flex justify-content-center'>
                        <InputGroup style={{ width: '80%' }}>
                           <InputGroupText><i className='bi bi-search' /></InputGroupText>
                           <Input style={{ textAlign: 'center' }} placeholder="Buscar..." />
                        </InputGroup>
                     </div>
                     <hr />
                     <SubMenu label="Accesos" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>Acceso 9</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>Acceso 12</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Edificios" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem style={{ height: '86px' }}>
                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO1</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO2</Label>
                              </FormGroup>
                           </Form>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO3</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO4</Label>
                              </FormGroup>
                           </Form>
                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO5</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Salones" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Laboratorios" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem style={{ height: '110px' }}>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>Lab. Redes</Label>
                              </FormGroup>
                           </Form>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>Lab. Hardware</Label>
                              </FormGroup>
                           </Form>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>Lab. Queso 1</Label>
                              </FormGroup>
                           </Form>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>Lab. Queso 2</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Cubículos" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem style={{ height: '100px' }}>
                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO1</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO2</Label>
                              </FormGroup>
                           </Form>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO3</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO4</Label>
                              </FormGroup>
                           </Form>

                           <Form>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO5</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Puntos de interés" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Exteriores" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Baños" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                        </MenuItem>
                     </SubMenu>
                  </Menu>
               </Sidebar>
            </div>

            <div className='Maqueta form-check-inline' style={{ marginLeft: anchoPantalla, display: 'inline-block' }}>
               <div className='d-flex mb-3'>
                  <Button onClick={() => colapsar()}><i className='bi bi-list'></i></Button>
                  <h1 style={{ color: '#eee', textAlign: 'center', width: '100%' }}>Lobo Brújula</h1>
               </div>

               <div style={{display: 'inline-flex'}}>
                  <Canvas
                     camera={{ position: [-20, 3, 5.25], fov: 15 }}
                     style={{
                        width: '50vw',
                        height: '94vh'
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

                  <div className='Botones'>
                     <h1>CCO3</h1>

                     <h2>Cubiculos</h2>
                     <Button onClick={() => handleClick("Cubiculos1")}>Cubiculos 1 </Button>
                     <Button onClick={() => handleClick("Cubiculos2")}>Cubiculos 2</Button>
                     <Button onClick={() => handleClick("Cubiculos3")}>Cubiculos 3</Button>
                     <br />

                     <h2>Sitios de interes</h2>
                     <Button onClick={() => handleClick("Biblioteca")}>Biblioteca </Button>
                     <br />

                     <h2>Laboratorios</h2>
                     <Button onClick={() => handleClick("Laboratorio1")}>Laboratorio1 </Button>
                     <Button onClick={() => handleClick("Laboratorio2")}>Laboratorio2 </Button>
                     <Button onClick={() => handleClick("LaboratorioRH")}>Laboratorios de Redes y Hardware </Button>
                     <br />

                  </div>
               </div>
            </div>




         </div>
      </>
   );
}

export default App;

