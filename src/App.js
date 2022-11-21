import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Model from "./Queso2";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from './assets/logo.png';

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
                        <MenuItem style={{ height: 'auto' }}>
                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO1</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO2</Label>
                              </FormGroup>
                           </Form>

                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO3</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
                                 <Label check>CCO4</Label>
                              </FormGroup>
                           </Form>

                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' />
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
                                    <Input type='checkbox' />
                                    <Label check>1</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>2</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>3</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>4</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>5</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>6</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>305</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>208</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>002</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
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
                                    <Label check>109</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>110</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>111</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>112</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>113</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>114</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>115</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>116</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>117</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>118</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>119</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>120</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>121</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>122</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>123</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>124</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>125</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
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
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>107</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
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
                                    <Label check>114</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>209</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>301</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>305A</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>305B</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>306</Label>
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
                                    <Label check>107</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
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

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>311</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>312</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' />
                                    <Label check>313</Label>
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

            <div className='Maqueta form-check-inline' style={{ marginLeft: anchoPantalla, display: 'inline-block' }}>
               <div className='d-flex mb-3'>
                  <Button onClick={() => colapsar()}><i className='bi bi-list'></i></Button>
                  <h1 style={{ color: '#eee', textAlign: 'center', width: '100%' }}>Lobo Brújula</h1>
               </div>

               <div style={{ display: 'inline-flex' }}>
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

