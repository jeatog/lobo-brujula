import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Model from "./Queso2";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from './assets/logo.png';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

/*Hola mundo */

function App() {
   document.body.style.backgroundColor = "#00395E";
   document.body.style.backgroundImage = "radial-gradient(#86a9bf, #00395E)";

   const [estado, setEstado] = useState({ name: "Default" });
   const [anchoPantalla, setAnchoPantalla] = useState('245px');
   const [cargando, setCargando] = useState();

   const [modal, setModal] = useState(false);
   const toggle = () => { setModal(!modal); }

   const [edificios, setEdificios] = useState([]);
   const [banos, setBanos] = useState([]);
   const [cubiculos, setCubiculos] = useState([]);
   const [exteriores, setExteriores] = useState([]);
   const [laboratorios, setLaboratorios] = useState([]);
   const [puntosI, setPuntosI] = useState([]);
   const [salones, setSalones] = useState([]);

   const urlBase = "https://pruebavideoappweb.000webhostapp.com/back-funciones/funciones.php?X=";

   const handleClick = (sector) => {
      console.log('You clicked submit.', sector);
      setEstado({ name: sector });
   }

   const { collapseSidebar, collapsed } = useProSidebar();

   const colapsar = () => {
      collapseSidebar();
      collapsed ? setAnchoPantalla('245px') : setAnchoPantalla('0px');
   }

   const bajarTablas = async () => {
      setCargando(true);
      await fetch(urlBase + "1")
         .then(res => res.json())
         .then((data) => {
            console.log("Baños", data)
            setBanos(data);
         })
         .catch((error) => console.log(error))

      await fetch(urlBase + "2")
         .then(res => res.json())
         .then((data) => {
            console.log("Cubículos", data)
            setCubiculos(data);
         })
         .catch((error) => console.log(error))

      await fetch(urlBase + "3")
         .then(res => res.json())
         .then((data) => {
            console.log("Edificios", data)
            setEdificios(data);
         })
         .catch((error) => console.log(error))

      await fetch(urlBase + "4")
         .then(res => res.json())
         .then((data) => {
            console.log("Exteriores", data)
            setExteriores(data);
         })
         .catch((error) => console.log(error))

      await fetch(urlBase + "5")
         .then(res => res.json())
         .then((data) => {
            console.log("Laboratorios", data)
            setLaboratorios(data);
         })
         .catch((error) => console.log(error))

      await fetch(urlBase + "6")
         .then(res => res.json())
         .then((data) => {
            console.log("Puntos de interés", data)
            setPuntosI(data);
         })
         .catch((error) => console.log(error))

      await fetch(urlBase + "7")
         .then(res => res.json())
         .then((data) => {
            console.log("Salones", data)
            setSalones(data);
         })
         .catch((error) => console.log(error))

      setCargando(false);
   }

   let [acceso9, setAcceso9] = useState();
   let [acceso12, setAcceso12] = useState();

   let [cco1, setCco1] = useState();
   let [sal1, setSal1] = useState();
   let [sal2, setSal2] = useState();
   let [sal3, setSal3] = useState();
   let [sal4, setSal4] = useState();
   let [sal5, setSal5] = useState();
   let [sal6, setSal6] = useState();
   let [cubo1, setCubo1] = useState();
   let [cubo2, setCubo2] = useState();
   let [cubo3, setCubo3] = useState();
   let [cubo4, setCubo4] = useState();
   let [cubo5, setCubo5] = useState();
   let [cubo6, setCubo6] = useState();
   let [cubo7, setCubo7] = useState();
   let [cubo8, setCubo8] = useState();
   let [cubo9, setCubo9] = useState();
   let [cubo10, setCubo10] = useState();
   let [cubo11, setCubo11] = useState();
   let [cubo12, setCubo12] = useState();
   let [cubo13, setCubo13] = useState();
   let [cubo14, setCubo14] = useState();
   let [cubo15, setCubo15] = useState();
   let [cubo16, setCubo16] = useState();
   let [cubo17, setCubo17] = useState();
   let [cubo18, setCubo18] = useState();
   let [cubo19, setCubo19] = useState();
   let [cubo20, setCubo20] = useState();
   let [cubo21, setCubo21] = useState();
   let [cubo22, setCubo22] = useState();
   let [cubo23, setCubo23] = useState();
   let [punto1, setPunto1] = useState();
   let [punto2, setPunto2] = useState();

   let [cco2, setCco2] = useState();
   let [salCco2_1, setSalCco2_1] = useState();
   let [cuboCco2_1, setCuboCco2_1] = useState();
   let [cuboCco2_2, setCuboCco2_2] = useState();
   let [cuboCco2_3, setCuboCco2_3] = useState();
   let [cuboCco2_4, setCuboCco2_4] = useState();
   let [cuboCco2_5, setCuboCco2_5] = useState();
   let [cuboCco2_6, setCuboCco2_6] = useState();
   let [cuboCco2_7, setCuboCco2_7] = useState();
   let [cuboCco2_8, setCuboCco2_8] = useState();
   let [cuboCco2_9, setCuboCco2_9] = useState();
   let [cuboCco2_10, setCuboCco2_10] = useState();
   let [cuboCco2_11, setCuboCco2_11] = useState();
   let [cuboCco2_12, setCuboCco2_12] = useState();
   let [cuboCco2_13, setCuboCco2_13] = useState();
   let [cuboCco2_14, setCuboCco2_14] = useState();
   let [cuboCco2_15, setCuboCco2_15] = useState();
   let [cuboCco2_16, setCuboCco2_16] = useState();
   let [cuboCco2_17, setCuboCco2_17] = useState();
   let [cuboCco2_18, setCuboCco2_18] = useState();
   let [cuboCco2_19, setCuboCco2_19] = useState();
   let [cuboCco2_20, setCuboCco2_20] = useState();
   let [cuboCco2_21, setCuboCco2_21] = useState();
   let [cco2Punto1, setCco2Punto1] = useState();
   let [cco2Punto2, setCco2Punto2] = useState();
   let [cco2Lab1, setCco2Lab1] = useState();
   let [cco2Lab2, setCco2Lab2] = useState();
   let [cco2Lab3, setCco2Lab3] = useState();
   let [cco2Lab4, setCco2Lab4] = useState();
   let [cco2Lab5, setCco2Lab5] = useState();
   let [cco2Lab6, setCco2Lab6] = useState();
   let [cco2Lab7, setCco2Lab7] = useState();
   let [cco2Lab8, setCco2Lab8] = useState();
   let [cco2Lab9, setCco2Lab9] = useState();
   let [cco2Lab10, setCco2Lab10] = useState();
   let [cco2Lab11, setCco2Lab11] = useState();

   let [cco3, setCco3] = useState();
   let [cco3Sal1, setCco3Sal1] = useState();
   let [cco3Sal2, setCco3Sal2] = useState();
   let [cco3Sal3, setCco3Sal3] = useState();
   let [cuboCco3_1, setCuboCco3_1] = useState();
   let [cuboCco3_2, setCuboCco3_2] = useState();
   let [cuboCco3_3, setCuboCco3_3] = useState();
   let [cuboCco3_4, setCuboCco3_4] = useState();
   let [cuboCco3_5, setCuboCco3_5] = useState();
   let [cuboCco3_6, setCuboCco3_6] = useState();
   let [cuboCco3_7, setCuboCco3_7] = useState();
   let [cuboCco3_8, setCuboCco3_8] = useState();
   let [cuboCco3_9, setCuboCco3_9] = useState();
   let [cuboCco3_10, setCuboCco3_10] = useState();
   let [cuboCco3_11, setCuboCco3_11] = useState();
   let [cuboCco3_12, setCuboCco3_12] = useState();
   let [cuboCco3_13, setCuboCco3_13] = useState();
   let [cuboCco3_14, setCuboCco3_14] = useState();
   let [cuboCco3_15, setCuboCco3_15] = useState();
   let [cuboCco3_16, setCuboCco3_16] = useState();
   let [cuboCco3_17, setCuboCco3_17] = useState();
   let [cuboCco3_18, setCuboCco3_18] = useState();
   let [cuboCco3_19, setCuboCco3_19] = useState();
   let [cuboCco3_20, setCuboCco3_20] = useState();
   let [cuboCco3_21, setCuboCco3_21] = useState();
   let [cuboCco3_22, setCuboCco3_22] = useState();
   let [cco3Punto1, setCco3Punto1] = useState();

   let [cco4, setCco4] = useState();


   let [cco5, setCco5] = useState();

   const marcadorAcceso9 = event => {
      if (event.target.checked) {
         console.log("entra true")
         setAcceso9(
            <Marker position={[19.0050014, -98.2057115]}>
               <Popup>
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Acceso 9</p>
                  <p style={{ textAlign: 'center' }}>Categoría: Accesos</p>
                  <a style={{ textAlign: 'center' }} href='https://www.google.com/maps/dir/?api=1&destination=19.0050014,-98.2057115' target='_blank' rel='noreferrer'>Cómo llegar</a>
               </Popup>
            </Marker>
         );
      } else {
         setAcceso9();
      }
   }

   const marcadorAcceso12 = event => {
      if (event.target.checked) {
         console.log("entra true")
         setAcceso12(
            <Marker position={[19.0052791, -98.2041894]}>
               <Popup>
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Acceso 12</p>
                  <p style={{ textAlign: 'center' }}>Categoría: Accesos</p>
                  <a style={{ textAlign: 'center' }} href='https://www.google.com/maps/dir/?api=1&destination=19.0052791,-98.2041894' target='_blank' rel='noreferrer'>Cómo llegar</a>
               </Popup>
            </Marker>
         );
      } else {
         setAcceso12();
      }
   }

   const marcadorCCO1 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[0].lat + ',' + edificios[0].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco1();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               setSal1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal1();
            }
            break;
         case "sal2":
            if (event.target.checked) {
               setSal2(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal2();
            }
            break;
         case "sal3":
            if (event.target.checked) {
               setSal3(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal3();
            }
            break;
         case "sal4":
            if (event.target.checked) {
               setSal4(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal4();
            }
            break;
         case "sal5":
            if (event.target.checked) {
               setSal5(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal5();
            }
            break;
         case "sal6":
            if (event.target.checked) {
               setSal6(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal6();
            }
            break;
         case "cubo103":
            if (event.target.checked) {
               setCubo1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo1();
            }
            break;
         case "cubo104":
            if (event.target.checked) {
               setCubo2(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo2();
            }
            break;
         case "cubo105":
            if (event.target.checked) {
               setCubo3(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo3();
            }
            break;
         case "cubo106":
            if (event.target.checked) {
               setCubo4(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo4();
            }
            break;
         case "cubo107":
            if (event.target.checked) {
               setCubo5(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo5();
            }
            break;
         case "cubo108":
            if (event.target.checked) {
               setCubo6(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo6();
            }
            break;
         case "cubo109":
            if (event.target.checked) {
               setCubo7(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo7();
            }
            break;
         case "cubo110":
            if (event.target.checked) {
               setCubo8(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo8();
            }
            break;
         case "cubo111":
            if (event.target.checked) {
               setCubo9(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo9();
            }
            break;
         case "cubo112":
            if (event.target.checked) {
               setCubo10(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo10();
            }
            break;
         case "cubo113":
            if (event.target.checked) {
               setCubo11(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo11();
            }
            break;
         case "cubo114":
            if (event.target.checked) {
               setCubo12(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo12();
            }
            break;
         case "cubo115":
            if (event.target.checked) {
               setCubo13(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo13();
            }
            break;
         case "cubo116":
            if (event.target.checked) {
               setCubo14(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo14();
            }
            break;
         case "cubo117":
            if (event.target.checked) {
               setCubo15(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo15();
            }
            break;
         case "cubo118":
            if (event.target.checked) {
               setCubo16(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo16();
            }
            break;
         case "cubo119":
            if (event.target.checked) {
               setCubo17(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo17();
            }
            break;
         case "cubo120":
            if (event.target.checked) {
               setCubo18(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo18();
            }
            break;
         case "cubo121":
            if (event.target.checked) {
               setCubo19(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo19();
            }
            break;
         case "cubo122":
            if (event.target.checked) {
               setCubo20(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo20();
            }
            break;
         case "cubo123":
            if (event.target.checked) {
               setCubo21(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo21();
            }
            break;
         case "cubo124":
            if (event.target.checked) {
               setCubo22(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo22();
            }
            break;
         case "cubo125":
            if (event.target.checked) {
               setCubo23(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo23();
            }
            break;
         case "puntomed":
            if (event.target.checked) {
               setPunto1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setPunto1();
            }
            break;
         case "puntoauto":
            if (event.target.checked) {
               setPunto2(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setPunto2();
            }
            break;
      }
   }

   const marcadorCCO2 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[1].lat + ',' + edificios[1].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               setSalCco2_1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSalCco2_1();
            }
            break;
         case "cubo1":
            if (event.target.checked) {
               setCuboCco2_1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_1();
            }
            break;
         case "cubo2":
            if (event.target.checked) {
               setCuboCco2_2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_2();
            }
            break;
         case "cubo3":
            if (event.target.checked) {
               setCuboCco2_3(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_3();
            }
            break;
         case "cubo4":
            if (event.target.checked) {
               setCuboCco2_4(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_4();
            }
            break;
         case "cubo5":
            if (event.target.checked) {
               setCuboCco2_5(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_5();
            }
            break;
         case "cubo6":
            if (event.target.checked) {
               setCuboCco2_6(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_6();
            }
            break;
         case "cubo7":
            if (event.target.checked) {
               setCuboCco2_7(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_7();
            }
            break;
         case "cubo8":
            if (event.target.checked) {
               setCuboCco2_8(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_8();
            }
            break;
         case "cubo9":
            if (event.target.checked) {
               setCuboCco2_9(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_9();
            }
            break;
         case "cubo10":
            if (event.target.checked) {
               setCuboCco2_10(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_10();
            }
            break;
         case "cubo11":
            if (event.target.checked) {
               setCuboCco2_11(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_11();
            }
            break;
         case "cubo12":
            if (event.target.checked) {
               setCuboCco2_12(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_12();
            }
            break;
         case "cubo13":
            if (event.target.checked) {
               setCuboCco2_13(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_13();
            }
            break;
         case "cubo14":
            if (event.target.checked) {
               setCuboCco2_14(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_14();
            }
            break;
         case "cubo15":
            if (event.target.checked) {
               setCuboCco2_15(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_15();
            }
            break;
         case "cubo16":
            if (event.target.checked) {
               setCuboCco2_16(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_16();
            }
            break;
         case "cubo17":
            if (event.target.checked) {
               setCuboCco2_17(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_17();
            }
            break;
         case "cubo18":
            if (event.target.checked) {
               setCuboCco2_18(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_18();
            }
            break;
         case "cubo19":
            if (event.target.checked) {
               setCuboCco2_19(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_19();
            }
            break;
         case "cubo20":
            if (event.target.checked) {
               setCuboCco2_20(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_20();
            }
            break;
         case "cubo21":
            if (event.target.checked) {
               setCuboCco2_21(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_21();
            }
            break;
         case "comedor":
            if (event.target.checked) {
               setCco2Punto1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Punto1();
            }
            break;
         case "auditorio":
            if (event.target.checked) {
               setCco2Punto2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Punto2();
            }
            break;
      }
   }

   const marcadorCCO3 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[2].lat + ',' + edificios[2].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               setCco3Sal1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Sal1();
            }
            break;
         case "sal2":
            if (event.target.checked) {
               setCco3Sal2(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Sal2();
            }
            break;
         case "sal3":
            if (event.target.checked) {
               setCco3Sal3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Sal3();
            }
            break;
         case "cubo1":
            if (event.target.checked) {
               setCuboCco3_1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_1();
            }
            break;
         case "cubo2":
            if (event.target.checked) {
               setCuboCco3_2(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_2();
            }
            break;
         case "cubo3":
            if (event.target.checked) {
               setCuboCco3_3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_3();
            }
            break;
         case "cubo4":
            if (event.target.checked) {
               setCuboCco3_4(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_4();
            }
            break;
         case "cubo5":
            if (event.target.checked) {
               setCuboCco3_5(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_5();
            }
            break;
         case "cubo6":
            if (event.target.checked) {
               setCuboCco3_6(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_6();
            }
            break;
         case "cubo7":
            if (event.target.checked) {
               setCuboCco3_7(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_7();
            }
            break;
         case "cubo8":
            if (event.target.checked) {
               setCuboCco3_8(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_8();
            }
            break;
         case "cubo9":
            if (event.target.checked) {
               setCuboCco3_9(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_9();
            }
            break;
         case "cubo10":
            if (event.target.checked) {
               setCuboCco3_10(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_10();
            }
            break;
         case "cubo11":
            if (event.target.checked) {
               setCuboCco3_11(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_11();
            }
            break;
         case "cubo12":
            if (event.target.checked) {
               setCuboCco3_12(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_12();
            }
            break;
         case "cubo13":
            if (event.target.checked) {
               setCuboCco3_13(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_13();
            }
            break;
         case "cubo14":
            if (event.target.checked) {
               setCuboCco3_14(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_14();
            }
            break;
         case "cubo15":
            if (event.target.checked) {
               setCuboCco3_15(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_15();
            }
            break;
         case "cubo16":
            if (event.target.checked) {
               setCuboCco3_16(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_16();
            }
            break;
         case "cubo17":
            if (event.target.checked) {
               setCuboCco3_17(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_17();
            }
            break;
         case "cubo18":
            if (event.target.checked) {
               setCuboCco3_18(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_18();
            }
            break;
         case "cubo19":
            if (event.target.checked) {
               setCuboCco3_19(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_19();
            }
            break;
         case "cubo20":
            if (event.target.checked) {
               setCuboCco3_20(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_20();
            }
            break;
         case "cubo21":
            if (event.target.checked) {
               setCuboCco3_21(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_21();
            }
            break;
         case "cubo22":
            if (event.target.checked) {
               setCuboCco3_22(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_22();
            }
            break;
         case "biblioteca":
            if (event.target.checked) {
               setCco3Punto1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Punto1();
            }
            break;
      }
   }

   const marcadorCCO4 = (event, nombre, categoria, ubicacion) => {
      if (event.target.checked) {
         let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[3].lat + ',' + edificios[3].lon;
         setCco4(
            <Marker position={[edificios[3].lat, edificios[3].lon]}>
               <Popup>
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                  <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                  <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                  <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
               </Popup>
            </Marker>
         );
      } else {
         setCco4();
      }
   }

   const marcadorCCO5 = (event, nombre, categoria, ubicacion) => {
      if (event.target.checked) {
         let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[4].lat + ',' + edificios[4].lon;
         setCco5(
            <Marker position={[edificios[4].lat, edificios[4].lon]}>
               <Popup>
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                  <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                  <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                  <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
               </Popup>
            </Marker>
         );
      } else {
         setCco5();
      }
   }

   useEffect(() => {
      bajarTablas();
   }, []);

   if (cargando) {
      return (
         <div className="text-center my-50">
            <p className="fs-3 fw-bolder user-select-none" style={{ color: 'white' }}>Obteniendo tablas...</p>
            <div className="spinner-border m-5 text-white" role="status">
               <span className="visually-hidden">Cargando...</span>
            </div>
         </div>
      );
   }

   const mapaEstatico = {
      zoomControl: false,
      doubleClickZoom: false,
      dragging: false,
      zoomSnap: false,
      zoomDelta: false,
      trackResize: false,
      touchZoom: false,
      scrollWheelZoom: false
   }

   return (
      <>
         <div className='Contenido mb-3' style={{ height: '100vh' }}>
            <div className='d-flex align-items-center' width='100%' style={{ overflowY: 'scroll', position: 'fixed', height: '100vh', backgroundColor: '#b2c0cb' }}>
               <Sidebar className='d-flex' collapsedWidth='0px'>
                  <Menu >
                     <div className='d-flex justify-content-center'>
                        <img src={Logo} alt='Logo' style={{ height: '150px', position: 'relative' }} />
                     </div>
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
                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={marcadorAcceso9} />
                                 <Label check>Acceso 9</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={marcadorAcceso12} />
                                 <Label check>Acceso 12</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Edificios" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem style={{ height: 'auto' }}>
                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'CCO1', 'Edificio', 'CCO1', 'edif')} />
                                 <Label check>CCO1</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'CCO2', 'Edificio', 'CCO2', 'edif')} />
                                 <Label check>CCO2</Label>
                              </FormGroup>
                           </Form>

                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'CCO3', 'Edificio', 'CCO3', 'edif')} />
                                 <Label check>CCO3</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'CCO4', 'Edificio', 'CCO4')} />
                                 <Label check>CCO4</Label>
                              </FormGroup>
                           </Form>

                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO5(event, 'CCO5', 'Edificio', 'CCO5')} />
                                 <Label check>CCO5</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Salones" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO1" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 1', 'Salón de Clases', 'CCO1 - Sótano', 'sal1')} />
                                    <Label check>1</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 2', 'Salón de Clases', 'CCO1 - Sótano', 'sal2')} />
                                    <Label check>2</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 3', 'Salón de Clases', 'CCO1 - Sótano', 'sal3')} />
                                    <Label check>3</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 4', 'Salón de Clases', 'CCO1 - Sótano', 'sal4')} />
                                    <Label check>4</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 5', 'Salón de Clases', 'CCO1 - Sótano', 'sal5')} />
                                    <Label check>5</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 6', 'Salón de Clases', 'CCO1 - Sótano', 'sal6')} />
                                    <Label check>6</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Salón 305', 'Salón de Clases', 'CCO2 - Segunda Planta', 'sal1')} />
                                    <Label check>305</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Salón 208', 'Salón de Clases', 'CCO3 - Primera Planta', 'sal1')} />
                                    <Label check>208</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Salón 002', 'Salón de Clases', 'CCO3 - Primera Planta', 'sal2')} />
                                    <Label check>002</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Salón 003', 'Salón de Clases', 'CCO3 - Primera Planta', 'sal3')} />
                                    <Label check>003</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>102</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>102</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>202</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>203</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>204</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>301</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>303</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>304</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>305</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>307</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>308</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>401</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>402</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>403</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>404</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO5" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>202</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>203</Label>
                                 </FormGroup>
                              </Form>
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Laboratorios" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>202</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>203</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>204</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>205</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>206</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>207</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>208</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>302</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>303</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>304</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>101</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>109</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>114</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>204</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>205</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>301</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>302</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>303</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>309</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>310</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>310A</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>206</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>306</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO5" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>207</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Cubículos" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO1" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '103', 'Cubículo', 'CCO1 - Planta Baja', 'cubo103')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '104', 'Cubículo', 'CCO1 - Planta Baja', 'cubo104')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '105', 'Cubículo', 'CCO1 - Planta Baja', 'cubo105')} />
                                    <Label check>105</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '106', 'Cubículo', 'CCO1 - Planta Baja', 'cubo106')} />
                                    <Label check>106</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '107', 'Cubículo', 'CCO1 - Planta Baja', 'cubo107')} />
                                    <Label check>107</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '108', 'Cubículo', 'CCO1 - Planta Baja', 'cubo108')} />
                                    <Label check>108</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '109', 'Cubículo', 'CCO1 - Planta Baja', 'cubo109')} />
                                    <Label check>109</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '110', 'Cubículo', 'CCO1 - Planta Baja', 'cubo110')} />
                                    <Label check>110</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '111', 'Cubículo', 'CCO1 - Planta Baja', 'cubo111')} />
                                    <Label check>111</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '112', 'Cubículo', 'CCO1 - Planta Baja', 'cubo112')} />
                                    <Label check>112</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '113', 'Cubículo', 'CCO1 - Planta Baja', 'cubo113')} />
                                    <Label check>113</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '114', 'Cubículo', 'CCO1 - Planta Baja', 'cubo114')} />
                                    <Label check>114</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '115', 'Cubículo', 'CCO1 - Planta Baja', 'cubo115')} />
                                    <Label check>115</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '116', 'Cubículo', 'CCO1 - Planta Baja', 'cubo116')} />
                                    <Label check>116</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '117', 'Cubículo', 'CCO1 - Planta Baja', 'cubo117')} />
                                    <Label check>117</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '118', 'Cubículo', 'CCO1 - Planta Baja', 'cubo118')} />
                                    <Label check>118</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '119', 'Cubículo', 'CCO1 - Planta Baja', 'cubo119')} />
                                    <Label check>119</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '120', 'Cubículo', 'CCO1 - Planta Baja', 'cubo120')} />
                                    <Label check>120</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '121', 'Cubículo', 'CCO1 - Planta Baja', 'cubo121')} />
                                    <Label check>121</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '122', 'Cubículo', 'CCO1 - Planta Baja', 'cubo122')} />
                                    <Label check>122</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '123', 'Cubículo', 'CCO1 - Planta Baja', 'cubo123')} />
                                    <Label check>123</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '124', 'Cubículo', 'CCO1 - Planta Baja', 'cubo124')} />
                                    <Label check>124</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '125', 'Cubículo', 'CCO1 - Planta Baja', 'cubo125')} />
                                    <Label check>125</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '103', 'Cubículos', 'CCO2 - Planta Baja', 'cubo1')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '104', 'Cubículos', 'CCO2 - Planta Baja', 'cubo2')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '106', 'Cubículos', 'CCO2 - Planta Baja', 'cubo3')} />
                                    <Label check>106</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '107', 'Cubículos', 'CCO2 - Planta Baja', 'cubo4')} />
                                    <Label check>107</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '108', 'Cubículos', 'CCO2 - Planta Baja', 'cubo5')} />
                                    <Label check>108</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '109', 'Cubículos', 'CCO2 - Planta Baja', 'cubo6')} />
                                    <Label check>109</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '110', 'Cubículos', 'CCO2 - Planta Baja', 'cubo7')} />
                                    <Label check>110</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '111', 'Cubículos', 'CCO2 - Planta Baja', 'cubo8')} />
                                    <Label check>111</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '112', 'Cubículos', 'CCO2 - Planta Baja', 'cubo9')} />
                                    <Label check>112</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '113', 'Cubículos', 'CCO2 - Planta Baja', 'cubo10')} />
                                    <Label check>113</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '114', 'Cubículos', 'CCO2 - Planta Baja', 'cubo11')} />
                                    <Label check>114</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '209', 'Cubículos', 'CCO2 - Primera Planta', 'cubo12')} />
                                    <Label check>209</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '301', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo13')} />
                                    <Label check>301</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '305-A', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo14')} />
                                    <Label check>305A</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '305-B', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo15')} />
                                    <Label check>305B</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '306', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo16')} />
                                    <Label check>306</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '307', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo17')} />
                                    <Label check>307</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '308', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo18')} />
                                    <Label check>308</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '309', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo19')} />
                                    <Label check>309</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '310', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo20')} />
                                    <Label check>310</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '311', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo21')} />
                                    <Label check>311</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>6</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>7</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>8</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>9</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>10</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>11</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>105</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>106</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>107</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>108</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>102</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>103</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>110</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>111</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>112</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>113</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>203</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>206</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>206B</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>207</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>304</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>308</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>108</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>109</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>110</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>302</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>302A</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO5" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>101</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>102</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>106</Label>
                                 </FormGroup>
                              </Form>
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Puntos de interés" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO1" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Unidad Médica</Label>
                                 </FormGroup>
                              </Form>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Autoacceso</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Comedor</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Auditorio</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Biblioteca</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Servicio Social y Prácticas</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Área Secretarial</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Archivo</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Dirección</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="Exteriores" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Cancha Deportiva</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Cafetería</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Estación de Lobobicis</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>Parada de Lobobús</Label>
                                 </FormGroup>
                              </Form>
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Baños" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                        </MenuItem>
                     </SubMenu>
                  </Menu>
               </Sidebar>
            </div>

            <div className='Maqueta form-check-inline' style={{ marginRight: '0px', marginLeft: anchoPantalla, display: 'inline-block', overflowX: 'hidden', width: '100%' }}>
               <div className='d-flex'>
                  <Button style={{ backgroundColor: '#b2c0cb', color: '#212529', height: '44px' }} onClick={() => colapsar()}><i className='bi bi-list'></i></Button>
                  <h1 className='d-flex align-items-center justify-content-center' style={{ color: '#eee', width: '100%', height: '70px', fontWeight: 'bolder', fontFamily: 'Paytone One, sans-serif', textShadow: '#00395E 10px 0 20px' }}>Lobo Brújula</h1>

               </div>

               <div className='d-flex justify-content-center align-items-center' style={{ display: 'inline-flex', width: '100%', marginLeft: '5px', height: '90%' }}>
                  <div className='d-flex justify-content-center shadow p-3 mb-5 bg-body rounded' id="mapa" >
                     <MapContainer center={[19.004989, -98.205]} zoom={300} scrollWheelZoom={false} {...mapaEstatico}>
                        <TileLayer
                           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {acceso9}
                        {acceso12}
                        {cco1}
                        {cco2}
                        {cco3}
                        {cco4}
                        {cco5}
                        {sal1}
                        {sal2}
                        {sal3}
                        {sal4}
                        {sal5}
                        {sal6}
                        {cubo1}
                        {cubo2}
                        {cubo3}
                        {cubo4}
                        {cubo5}
                        {cubo6}
                        {cubo7}
                        {cubo8}
                        {cubo9}
                        {cubo10}
                        {cubo11}
                        {cubo12}
                        {cubo13}
                        {cubo14}
                        {cubo15}
                        {cubo16}
                        {cubo17}
                        {cubo18}
                        {cubo19}
                        {cubo20}
                        {cubo21}
                        {cubo22}
                        {cubo23}
                        {punto1}
                        {punto2}
                        {salCco2_1}
                        {cuboCco2_1}
                        {cuboCco2_2}
                        {cuboCco2_3}
                        {cuboCco2_4}
                        {cuboCco2_5}
                        {cuboCco2_6}
                        {cuboCco2_7}
                        {cuboCco2_8}
                        {cuboCco2_9}
                        {cuboCco2_10}
                        {cuboCco2_11}
                        {cuboCco2_12}
                        {cuboCco2_13}
                        {cuboCco2_14}
                        {cuboCco2_15}
                        {cuboCco2_16}
                        {cuboCco2_17}
                        {cuboCco2_18}
                        {cuboCco2_19}
                        {cuboCco2_20}
                        {cuboCco2_21}
                        {cco2Punto1}
                        {cco2Punto2}
                        {cco3Sal1}
                        {cco3Sal2}
                        {cco3Sal3}
                        {cuboCco3_1}
                        {cuboCco3_2}
                        {cuboCco3_3}
                        {cuboCco3_4}
                        {cuboCco3_5}
                        {cuboCco3_6}
                        {cuboCco3_7}
                        {cuboCco3_8}
                        {cuboCco3_9}
                        {cuboCco3_10}
                        {cuboCco3_11}
                        {cuboCco3_12}
                        {cuboCco3_13}
                        {cuboCco3_14}
                        {cuboCco3_15}
                        {cuboCco3_16}
                        {cuboCco3_17}
                        {cuboCco3_18}
                        {cuboCco3_19}
                        {cuboCco3_20}
                        {cuboCco3_21}
                        {cuboCco3_22}
                        {cco3Punto1}
                     </MapContainer>
                  </div>
                  {/* <Canvas
                     camera={{ position: [-20, 3, 5.25], fov: 15 }}
                     style={{
                        width: '100vh !important',
                        height: '100vh !important',
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

                  </div> */}
               </div>
            </div>




         </div>
         <div className="container" style={{ maxWidth: '100%' }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 fixed-bottom" style={{ marginLeft: anchoPantalla }}>
               <p className="col-md-4 mb-0 text-muted" />

               <div className="d-flex align-items-center justify-content-center flex-column bd-highlight text-decoration-none">
                  <div className="mb-2">
                     <p onClick={toggle} className="mb-0" style={{ fontSize: '17px', color: 'white', fontWeight: 'bolder', textShadow: '1px 1px 1px black,', cursor: 'pointer' }}>Créditos</p>
                  </div>
               </div>

               <p className="col-md-4 mb-0 text-muted" />

            </footer>
         </div>
         <Modal isOpen={modal} toggle={toggle} className="clase_modal" centered>
            <ModalHeader>
               Desarrollado por
            </ModalHeader>
            <ModalBody>
               <li>Díaz Aguilar Raymundo</li>
               <li>Frías Álvarez Juan Antonio</li>
               <li>Jiménez Morales Angelina</li>
               <li>Pérez González Luis Enrique</li>
               <li>Toledo García Jesús Alejandro</li>
            </ModalBody>
            <ModalFooter>
               <Button onClick={toggle} style={{ backgroundColor: '#00395E', borderColor: 'white' }}>Aceptar</Button>
            </ModalFooter>
         </Modal>
      </>
   );
}

export default App;

