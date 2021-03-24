import React from 'react'
import { Button, Card, CardBody, CardTitle, Col, CustomInput, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import { useHistory } from "react-router-dom";

import Swal from 'sweetalert2'


export function CrearUsuario() {
    let history = useHistory();

    const RegistraUsuario = () => {
        Swal.fire({
            icon: 'success',
            title: 'Usuario Creado',
            text: '¿Deseas asignarle roles?',
            showDenyButton: true,
            showCancelButton: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Selecciona un Rol para el usuario',
                    input: 'select',
                    inputOptions: {
                        'Gerente': 'Gerente',
                        'Administrador': 'Administrador',
                        'Previas': 'Previas'
                    },
                    inputPlaceholder: 'Escoje un Rol',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        return new Promise((resolve) => {
                            console.log(value)
                            console.log((value !== ''))
                            if ((value !== undefined) && (value !== '')) {
                                resolve()
                            } else {
                                resolve('Selecciona una opción')
                            }
                        })
                    }
                }).then(() => {
                    Swal.fire('Rol asignado!', '', 'success')
                    history.push("/usuarios");
                })
            } else if (result.isDenied) {
                Swal.fire('Usuario Guardado sin un rol', '', 'info')
                history.push("/usuarios");
            }
        })

    }
    return (<>
        <Col md="12">
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>
                        Registrar Usuario
                    </CardTitle>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="Usuario">Usuario</Label>
                            <Input type="text" name="nombre" id="Usuario" placeholder="Escribe un nombre de usuario..." />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Dirección de correo electrónico</Label>
                            <Input type="email" name="email" id="email" placeholder="Escriba una dirección de correo electrónico..." />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="Password">Contraseña</Label>
                            <Input type="password" name="password" id="Password" placeholder="Escriba una contraseña..." />
                        </FormGroup>
                        <Button color="primary" onClick={() => RegistraUsuario()}>Registrar</Button>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </>)
}